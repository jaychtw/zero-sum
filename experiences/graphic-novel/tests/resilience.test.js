import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import {manuscript} from '../manuscript.js';
import {runtimeHash} from '../../../scripts/m4-evidence.mjs';
const require=createRequire(import.meta.url);let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=require('playwright-core'));}
const axe=process.env.AXE_PATH||require.resolve('axe-core/axe.min.js'),base=process.env.BASE_URL||'http://127.0.0.1:8000',out=new URL(process.env.EVIDENCE_DIR||'../docs/m4-evidence/',import.meta.url);await mkdir(out,{recursive:true});
const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});const report={status:'failed',sourceBundleSha256:runtimeHash(),routes:0,audits:0,expectedMissingAssets:[],errors:[]};
const paths=[['opening','junction','jacque','abandon','sniper','tower','endingC'],['opening','junction','jacque','abandon','endingD'],['opening','junction','misaki','hospital','endingG']];
try {
 for(const width of [320,1440])for(const lang of ['en','zh']) {
  const c=await b.newContext({viewport:{width,height:width===320?844:1000},hasTouch:width===320,reducedMotion:'reduce'}),p=await c.newPage();p.on('pageerror',e=>report.errors.push(e.message));
  await p.route('**/assets/*.webp',route=>{const name=route.request().url().split('/').at(-1);if(!report.expectedMissingAssets.includes(name))report.expectedMissingAssets.push(name);return route.fulfill({status:404,body:'Expected missing-art test'});});
  const click=async n=>width===320?n.tap():n.click();await p.goto(base);if(lang==='zh')await click(p.locator('#lang'));await p.locator('.cover[data-art-fallback]').waitFor();
  for(const path of paths) {
   if(await p.locator('main').getAttribute('data-scene')!=='title'){await click(p.locator('#restart'));await click(p.locator('#confirm-reset'));await p.waitForFunction(()=>document.querySelector('main').dataset.scene==='title');}
   await click(p.locator('.primary'));
   for(let i=0;i<path.length;i++) {
    const scene=manuscript.scenes[path[i]];
    for(let index=0;index<scene.panels.length;index++) {
     const panel=scene.panels[index];if(panel.art){await p.locator('.frame[data-art-fallback]').waitFor();assert.equal(await p.locator('.frame img').count(),0);assert.ok((await p.locator('.frame').innerText()).includes(lang==='en'?'ILLUSTRATION UNAVAILABLE':'插畫暫時無法顯示'));}
     assert.deepEqual(await p.locator('.manuscript-copy .prose,.manuscript-copy .source-stage').allTextContents(),panel.content.flatMap(u=>u[lang]).map(x=>x.text));
     if(path[i]==='endingD'&&index===0)await p.screenshot({path:new URL(`${width}-${lang}-missing-art.jpg`,out).pathname,fullPage:true,type:'jpeg',quality:90});
     if(index<scene.panels.length-1)await click(p.locator('.panel-next'));
    }
    if(i<path.length-1){const choice=scene.choices?.findIndex(ch=>ch.target===path[i+1])??0;await click(p.locator('#actions button').nth(choice));}
   }
   assert.ok(await p.locator('.replay').isVisible());await p.addScriptTag({path:axe});const audit=await p.evaluate(async()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));assert.deepEqual(audit.violations.map(v=>v.id),[]);report.audits++;report.routes++;assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth)<=width);
  }
  await c.close();
 }
 assert.deepEqual(report.expectedMissingAssets.sort(),['chase','hospital','jacque','misaki','sniper','tackle','wmd'].map(n=>n+'.webp').sort());assert.deepEqual(report.errors,[]);report.status='passed';console.log(`PASS: ${report.routes} full-manuscript missing-art routes, ${report.audits} audits, 7 active illustrations failed safely`);
}finally{await writeFile(new URL('resilience-results.json',out),JSON.stringify(report,null,2)+'\n');await b.close();}
