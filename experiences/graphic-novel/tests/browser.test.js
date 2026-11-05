import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import { scenes } from '../story.js';
const require = createRequire(import.meta.url);
let chromium;
try { ({chromium} = require('playwright')); } catch { ({chromium} = require('playwright-core')); }
const axePath = process.env.AXE_PATH || require.resolve('axe-core/axe.min.js');
const base = process.env.BASE_URL || 'http://127.0.0.1:8000';
const out = new URL('../docs/m2-evidence/',import.meta.url);
await mkdir(out,{recursive:true});
const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const report = {browser:browser.version(),viewports:[320,390,768,1440],languages:['en','zh-Hant'],routes:0,audits:0,screenshots:[],errors:[],incompleteAuditRules:[],checks:[]};
const paths=[];
function walk(id,path=[]) {
 const s=scenes[id];
 if(s.ending) {paths.push([...path,id]);return;}
 for(const next of s.choices?.map(c=>c[2]) ?? [s.next]) walk(next,[...path,id]);
}
walk('opening');
async function current(p,id) {assert.equal(await p.locator('main').getAttribute('data-scene'),id);}
async function layout(p) {
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth) <= p.viewportSize().width,'horizontal overflow / expanded mobile viewport');
 for(const b of await p.locator('button:visible').all()) {
  const box=await b.boundingBox(); assert.ok(box.height>=44 && box.width>=44,'44px target');
  assert.ok(box.x>=0 && box.x+box.width <= p.viewportSize().width+1,`clipped button: ${await b.textContent()} ${JSON.stringify(box)}`);
 }
 for(const img of await p.locator('img').all()) assert.ok(await img.evaluate(i=>i.complete && i.naturalWidth>0),'loaded image');
}
async function audit(p) {
 await p.addScriptTag({path:axePath});
 const result=await p.evaluate(async()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
 assert.deepEqual(result.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),[],'axe violations'); report.audits++; for(const item of result.incomplete) if(!report.incompleteAuditRules.includes(item.id)) report.incompleteAuditRules.push(item.id);
}
async function capture(p,name) {
 await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400);
 await p.screenshot({path:new URL(`${name}.jpg`,out).pathname,fullPage:true,type:'jpeg',quality:90}); report.screenshots.push(`${name}.jpg`);
}
try {
 for(const width of report.viewports) for(const language of ['en','zh']) {
  const touch=width<768;
  const context=await browser.newContext({viewport:{width,height:width<768?844:1000},hasTouch:touch,isMobile:touch,reducedMotion:width===320?'reduce':'no-preference'});
  const p=await context.newPage();
  p.on('pageerror',e=>report.errors.push(e.message));
  p.on('response',r=>{if(r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`);});
  await p.goto(base);
  if(language==='zh') await p.locator('#lang').click();
  const audited=new Set();
  const click=async locator=>touch?locator.tap():locator.click();
  const check=async id=>{
   await current(p,id); await layout(p);
   const key = id + (id === 'endingC' ? await p.locator('main').getAttribute('data-beat') : '');
   if((width===390 || width===1440) && !audited.has(key)) {await audit(p);audited.add(key);}
   if(width===320) assert.equal(await p.locator('.scene-art').evaluateAll(nodes=>nodes.every(n=>getComputedStyle(n).animationName==='none')),true);
  };
  await check('title');

  // Every original route, using rendered controls and emulated touch on phones.
  for(const path of paths) {
   if(await p.locator('main').getAttribute('data-scene')!=='title') {
    await click(p.locator('#restart')); await click(p.locator('#confirm-reset'));
    await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');
   }
   await click(p.locator('.primary')); await check('opening');
   for(const [index,id] of path.slice(1).entries()) {
    const previous=scenes[path[index]];
    const action=previous.choices?previous.choices.findIndex(c=>c[2]===id):0;
    await click(p.locator('#actions button').nth(action)); await check(id);
    assert.equal(await p.evaluate(()=>document.activeElement.tagName),'H1','scene focus');
   }
   while(await p.locator('.m2-next').count()) {await click(p.locator('.m2-next'));await check('endingC');}
   assert.ok(await p.locator('.closing').isVisible()); report.routes++;
   await click(p.locator('.primary')); await current(p,'opening');
  }
  // Selected C route: screenshots at narrative, sniper decision, ending; switch language in place.
  await click(p.locator('#restart')); await click(p.locator('#confirm-reset')); await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');
  await click(p.locator('.primary'));

  await click(p.locator('#actions button')); // junction
  await click(p.locator('#actions button').nth(0)); // jacque
  await click(p.locator('#actions button').nth(0)); // abandon
  await click(p.locator('#actions button').nth(0)); // sniper
  await current(p,'sniper');
  const before=await p.locator('.prose').textContent();
  await click(p.locator('#lang')); await current(p,'sniper'); assert.notEqual(await p.locator('.prose').textContent(),before);
  assert.equal(await p.evaluate(()=>document.activeElement.id),'lang');
  await click(p.locator('#lang')); assert.equal(await p.locator('.prose').textContent(),before);

  await click(p.locator('#actions button').nth(1)); await current(p,'tower');
  assert.equal(await p.locator('.scene-art').count(),0,'no premature ending illustration');
  await click(p.locator('#actions button').nth(1)); await current(p,'endingC');
  for(let beat=0;beat<3;beat++) {
   assert.equal(await p.locator('main').getAttribute('data-beat'),String(beat));
   const text=await p.locator('.prose').textContent();
   await click(p.locator('#lang'));
   assert.equal(await p.locator('main').getAttribute('data-beat'),String(beat),'live switch preserves beat');
   assert.notEqual(await p.locator('.prose').textContent(),text);
   await click(p.locator('#lang'));
   if(width===390 || width===1440) await capture(p,`after-${width}-${language}-beat${beat+1}`);
   if(beat<2) await click(p.locator('.m2-next'));
  }
  const frame=await p.locator('.frame').screenshot({animations:'disabled'});
  await p.emulateMedia({reducedMotion:'reduce'});
  assert.ok(frame.equals(await p.locator('.frame').screenshot({animations:'disabled'})),'final panel is identical with reduced motion');
  await click(p.locator('.back')); assert.equal(await p.locator('main').getAttribute('data-beat'),'1');
  await click(p.locator('.back')); assert.equal(await p.locator('main').getAttribute('data-beat'),'0');
  await click(p.locator('.back')); await current(p,'tower');
  await click(p.locator('#restart')); if(width===390) await audit(p);
  await click(p.locator('#cancel-reset')); await current(p,'tower');
  await click(p.locator('#restart')); await p.keyboard.press('Escape'); await current(p,'tower');
  await click(p.locator('#restart')); await click(p.locator('#confirm-reset')); await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');await current(p,'title');
  // Live preference persists; progress deliberately starts at title on reload.
  await p.reload(); assert.equal(await p.locator('html').getAttribute('lang'),language==='zh'?'zh-Hant':'en');
  await layout(p); console.log(`PASS viewport ${width} / ${language}`); await context.close();
 }
 // Keyboard-only complete Ending C route, skip link and optional storage denied.
 const c=await browser.newContext({viewport:{width:1440,height:1000}}), p=await c.newPage();
 await p.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('storage blocked');}});});
 await p.goto(base);await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'skip');
 await p.keyboard.press('Enter');await p.keyboard.press('Tab');assert.ok(await p.locator('.primary').evaluate(n=>n===document.activeElement));
 await p.keyboard.press('Enter');await current(p,'opening');
 for(const [key,id] of [['1','junction'],['1','jacque'],['1','abandon'],['1','sniper'],['2','tower'],['2','endingC']]) {await p.keyboard.press(key);await current(p,id);}
 await p.keyboard.press('1');assert.equal(await p.locator('main').getAttribute('data-beat'),'1');
 await p.keyboard.press('1');assert.equal(await p.locator('main').getAttribute('data-beat'),'2');
 await p.keyboard.press('1');await current(p,'opening'); await c.close();
 report.checks.push('All nine routes at four widths in both languages; replay; live switch; focus; restart confirm/cancel/Escape; back; optional storage; keyboard-only Ending C; Ending C beat back/advance, live beat switching and reduced-motion pixel parity; image load; overflow; target size.');
 assert.deepEqual(report.errors,[]);
 console.log(`PASS: ${report.routes} browser routes, ${report.audits} axe audits, ${report.screenshots.length} screenshots; no browser or asset errors`);
} finally {
 await writeFile(new URL('browser-results.json',out),JSON.stringify(report,null,2)+'\n'); await browser.close();
}
