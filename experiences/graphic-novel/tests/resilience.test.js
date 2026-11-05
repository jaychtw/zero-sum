import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url);
let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=require('playwright-core'));}
const axe=process.env.AXE_PATH || require.resolve('axe-core/axe.min.js');
const base=process.env.BASE_URL || 'http://127.0.0.1:8000';
const out=new URL('../docs/readiness-evidence/',import.meta.url);await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',args:['--no-sandbox']});
const report={status:'failed',routes:0,audits:0,expected404Assets:[],errors:[],checks:[]};
const cases={C:['1','1','1','1','2','2','1','1'],D:['1','1','1','2'],G:['1','2','1','1']};
try{
 for(const width of [320,1440]) for(const language of ['en','zh']) {
  const context=await browser.newContext({viewport:{width,height:width===320?844:1000},hasTouch:width===320,reducedMotion:'reduce'});
  const p=await context.newPage();p.on('pageerror',e=>report.errors.push(e.message));
  await p.route('**/assets/*.webp',route=>{
   const name=route.request().url().split('/').at(-1);
   if(!report.expected404Assets.includes(name))report.expected404Assets.push(name);
   return route.fulfill({status:404,contentType:'text/plain',body:'Deliberately missing test asset'});
  });
  const click=async n=>width===320?n.tap():n.click();
  await p.goto(base);if(language==='zh')await click(p.locator('#lang'));
  await p.locator('.cover[data-art-fallback]').waitFor();
  assert.equal(await p.locator('.cover-art').count(),0);
  for(const [ending,keys] of Object.entries(cases)) {
   if(await p.locator('main').getAttribute('data-scene')!=='title') {
    await click(p.locator('#restart'));await click(p.locator('#confirm-reset'));
    await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');
   }
   await click(p.locator('.primary'));
   for(const key of keys) {
    const image=p.locator('.frame img');
    if(await image.count())await p.locator('.frame[data-art-fallback]').waitFor();
    await click(p.locator('#actions button').nth(Number(key)-1));
   }
   assert.equal(await p.locator('main').getAttribute('data-scene'),'ending'+ending);
   if(await p.locator('.frame img').count())await p.locator('.frame[data-art-fallback]').waitFor();
   assert.ok(await p.locator('.closing').isVisible());
   assert.equal(await p.locator('img').count(),0,'broken image removed, no fallback retry loop');
   if(ending!=='C')assert.ok((await p.locator('.frame').innerText()).includes(language==='en'?'ILLUSTRATION UNAVAILABLE':'插畫暫時無法顯示'));
   await p.addScriptTag({path:axe});
   const audit=await p.evaluate(async()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
   assert.deepEqual(audit.violations.map(v=>v.id),[]);report.audits++;report.routes++;
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth)<=width);
   if(ending==='D')await p.screenshot({path:new URL(`missing-art-${width}-${language}.jpg`,out).pathname,fullPage:true,type:'jpeg',quality:90});
  }
  await context.close();
 }
 assert.deepEqual(report.expected404Assets.sort(),['chase','hospital','jacque','junction','misaki','sniper','tackle','wmd'].map(n=>n+'.webp').sort());
 assert.deepEqual(report.errors,[]);report.status='passed';
 report.checks.push('All 8 illustration failures injected; title/scene/cropped-art fallback; C/D/G complete; both languages at 320/1440px; emulated touch; no retry loops; accessibility; no overflow.');
 console.log(`PASS: ${report.routes} missing-art routes; ${report.audits} audits; all 8 image failures handled`);
}finally{await writeFile(new URL('resilience-results.json',out),JSON.stringify(report,null,2)+'\n');await browser.close();}
