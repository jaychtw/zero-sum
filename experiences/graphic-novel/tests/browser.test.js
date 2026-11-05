import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import {manuscript} from '../manuscript.js';
const require=createRequire(import.meta.url);
let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=require('playwright-core'));}
const axe=process.env.AXE_PATH||require.resolve('axe-core/axe.min.js');
const base=process.env.BASE_URL||'http://127.0.0.1:8000';
const out=new URL(process.env.EVIDENCE_DIR||'../docs/m4-evidence/',import.meta.url);await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const report={status:'failed',screenplayVersion:manuscript.screenplayVersion,browser:browser.version(),widths:[320,390,768,1440],languages:['en','zh-Hant'],routes:0,panelsChecked:0,audits:0,languageSwitches:0,screenshots:[],errors:[],incompleteAuditRules:[],checks:[]};
const paths=[];function walk(id,path=[]){const s=manuscript.scenes[id];if(s.ending){paths.push([...path,id]);return;}for(const next of s.choices?.map(c=>c.target)??[s.next])walk(next,[...path,id]);}walk('opening');
async function position(p,id,index){assert.equal(await p.locator('main').getAttribute('data-scene'),id);assert.equal(await p.locator('main').getAttribute('data-panel'),String(index));}
async function audit(p){await p.addScriptTag({path:axe});const r=await p.evaluate(async()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));assert.deepEqual(r.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[]);report.audits++;for(const i of r.incomplete)if(!report.incompleteAuditRules.includes(i.id))report.incompleteAuditRules.push(i.id);}
async function capture(p,name){await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:new URL(name+'.jpg',out).pathname,fullPage:true,type:'jpeg',quality:90,animations:'disabled'});report.screenshots.push(name+'.jpg');}
async function layout(p){assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth)<=p.viewportSize().width,'horizontal overflow');for(const n of await p.locator('button:visible').all()){const b=await n.boundingBox();assert.ok(b.height>=44&&b.width>=44,'44px controls');assert.ok(b.x>=0&&b.x+b.width<=p.viewportSize().width+1,'clipped control');}for(const i of await p.locator('img').all()){await i.evaluate(img=>img.complete?Promise.resolve():new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});}));assert.ok(await i.evaluate(img=>img.naturalWidth>0),'normal image failed');}}
try {
 for(const width of report.widths)for(const language of ['en','zh']) {
  const context=await browser.newContext({viewport:{width,height:width<768?844:1000},isMobile:width<768,hasTouch:width<768,reducedMotion:width===320?'reduce':'no-preference'});
  const p=await context.newPage(),seen=new Set(),shots=new Set();
  p.on('pageerror',e=>report.errors.push(e.message));p.on('response',r=>{if(r.status()>=400)report.errors.push(r.status()+' '+r.url());});
  const click=async node=>width<768?node.tap():node.click();
  const shot=async name=>{if((width===390||width===1440)&&!shots.has(name)){await capture(p,`${width}-${language}-${name}`);shots.add(name);}};
  await p.goto(base);if(language==='zh')await click(p.locator('#lang'));
  await layout(p);if(width===390||width===1440)await audit(p);await shot('title');
  const check=async(id,index)=>{
   await position(p,id,index);const key=id+':'+index;if(seen.has(key))return;seen.add(key);
   const scene=manuscript.scenes[id],panel=scene.panels[index],blocks=panel.content.flatMap(u=>u[language]);
   assert.deepEqual(await p.locator('.manuscript-copy .prose,.manuscript-copy .source-stage').allTextContents(),blocks.map(b=>b.text),'exact approved visible text');
   assert.deepEqual(await p.locator('.dialogue-speaker').allTextContents(),blocks.filter(b=>b.kind==='dialogue').map(b=>b.speaker),'dialogue attribution');
   assert.equal(await p.locator('main').getAttribute('data-panel-id'),panel.id);
   const last=index===scene.panels.length-1;
   assert.equal(await p.locator('.choice').count(),last?(scene.choices?.length??0):0);
   assert.equal(await p.locator('.replay').count(),last&&scene.ending?1:0);
   if(last&&scene.choices)assert.deepEqual(await p.locator('.choice-text').allTextContents(),scene.choices.map(c=>c[language]));
   await layout(p);if(width===390||width===1440)await audit(p);report.panelsChecked++;
   if(width===320)assert.equal(await p.locator('.frame').evaluate(f=>f.getAnimations({subtree:true}).length),0,'reduced motion');
   if(id==='opening'&&index===0)await shot('opening');
   if(id==='opening'&&index===1)await shot('two-vehicles');
   if(id==='opening'&&index===2)await shot('dialogue');
   if(id==='junction'&&last)await shot('first-fork-transfer');
   if(id==='endingC'&&index===2)await shot('ending-C-phase1');
   if(id==='endingC'&&index===3)await shot('ending-C-phase2');
   if(id==='endingH'&&index===3)await shot('ending-H-inquiry');
   if(id==='endingI'&&index===2)await shot('ending-I-rehabilitation');
   if(scene.ending&&last)await shot('ending-'+scene.ending);
   // Live switching at every unique panel, not only scene boundaries.
   await click(p.locator('#lang'));await position(p,id,index);
   const other=language==='en'?'zh':'en';
   assert.deepEqual(await p.locator('.manuscript-copy .prose,.manuscript-copy .source-stage').allTextContents(),panel.content.flatMap(u=>u[other]).map(b=>b.text));
   assert.equal(await p.evaluate(()=>document.activeElement.id),'lang');
   await click(p.locator('#lang'));report.languageSwitches++;
  };
  for(const path of paths) {
   if(await p.locator('main').getAttribute('data-scene')!=='title') {
    await click(p.locator('#restart'));await click(p.locator('#confirm-reset'));await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');
   }
   await click(p.locator('.primary'));
   for(let i=0;i<path.length;i++) {
    const id=path[i],scene=manuscript.scenes[id];
    for(let panel=0;panel<scene.panels.length;panel++) {
     await check(id,panel);
     if(panel<scene.panels.length-1){await click(p.locator('.panel-next'));assert.equal(await p.evaluate(()=>document.activeElement.tagName),'H1');}
    }
    // Within-scene reverse/advance, preserving the exact last panel.
    const final=scene.panels.length-1;
    if(final>0){await click(p.locator('.back'));await position(p,id,final-1);await click(p.locator('.panel-next'));await position(p,id,final);}
    if(i<path.length-1) {
     const next=path[i+1],choice=scene.choices?.findIndex(c=>c.target===next)??0;
     await click(p.locator('#actions button').nth(choice));await position(p,next,0);
     await click(p.locator('.back'));await position(p,id,final);
     await click(p.locator('#actions button').nth(choice));await position(p,next,0);
    }
   }
   await click(p.locator('.replay'));await position(p,'opening',0);report.routes++;
  }
  assert.equal(seen.size,70,'all panels reached');
  // Backtrack at the first choice and take its other branch.
  while(await p.locator('.panel-next').count())await click(p.locator('.panel-next'));
  await click(p.locator('.scene-next'));while(await p.locator('.panel-next').count())await click(p.locator('.panel-next'));
  await click(p.locator('.choice').nth(0));await click(p.locator('.back'));await position(p,'junction',2);
  await click(p.locator('.choice').nth(1));await position(p,'misaki',0);
  await click(p.locator('#restart'));if(width===390||width===1440)await audit(p);
  await p.keyboard.press('2');assert.ok(await p.locator('dialog').isVisible(),'shortcuts inert in dialog');
  await click(p.locator('#cancel-reset'));await position(p,'misaki',0);
  await click(p.locator('#restart'));await p.keyboard.press('Escape');await position(p,'misaki',0);
  await click(p.locator('#restart'));await click(p.locator('#confirm-reset'));await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');
  await p.reload();assert.equal(await p.locator('html').getAttribute('lang'),language==='en'?'en':'zh-Hant');
  await context.close();console.log(`PASS ${width}/${language}: all 70 panels, 9 endings, source text, live switching, backtracking`);
 }
 // Keyboard-only Ending C with optional storage denied.
 const c=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),p=await c.newPage();
 await p.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw Error('blocked')}}));await p.goto(base);
 await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'skip');await p.keyboard.press('Enter');await p.keyboard.press('Tab');assert.ok(await p.locator('.primary').evaluate(n=>n===document.activeElement));await p.keyboard.press('Enter');
 const path=paths.find(p=>p.at(-1)==='endingC');
 for(let i=0;i<path.length;i++) {const id=path[i];for(let n=1;n<manuscript.scenes[id].panels.length;n++)await p.keyboard.press('1');if(i<path.length-1){const s=manuscript.scenes[id],index=s.choices?.findIndex(ch=>ch.target===path[i+1])??0;await p.keyboard.press(String(index+1));}}
 await position(p,'endingC',4);const normal=await p.locator('.frame').screenshot({animations:'disabled'});await p.emulateMedia({reducedMotion:'no-preference'});assert.ok(normal.equals(await p.locator('.frame').screenshot({animations:'disabled'})),'static boundary in reduced motion');await p.keyboard.press('1');await position(p,'opening',0);await c.close();
 assert.deepEqual(report.errors,[]);report.status='passed';report.checks.push('All 70 paired panels exact source text/attribution and live switch at every width/language; all choices/routes; within/cross-scene back; alternate branch revisit; replay/reset/dialog; keyboard-only C; storage denied; reduced motion/static C boundary; image loads; 44px controls; no overflow.');
 console.log(`PASS M4: ${report.routes} routes, ${report.panelsChecked} panel checks, ${report.audits} axe audits, ${report.screenshots.length} screenshots`);
}finally{await writeFile(new URL('browser-results.json',out),JSON.stringify(report,null,2)+'\n');await browser.close();}
