// Detached QA only: compare accepted baseline and unchanged M6 reader, not absent art.
import assert from'node:assert/strict';import{createRequire}from'node:module';import{writeFile}from'node:fs/promises';import{createHash}from'node:crypto';import{runtimeHash}from'./m4-evidence.mjs';
const require=createRequire(import.meta.url),{chromium}=require('playwright');
const out=new URL('../experiences/graphic-novel/docs/m6-evidence/',import.meta.url);
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const report={status:'running',baseline:'5dc0143',sourceBundleSha256:runtimeHash(),browser:browser.version(),newMasters:0,activationAllowed:false,cases:[]};
await writeFile(new URL('baseline-comparison.json',out),JSON.stringify(report,null,2)+'\n');
try{
 for(const[width,lang]of[[390,'zh'],[1440,'en']]){
  let before;
  for(const[version,base]of[['before',process.env.BEFORE_URL||'http://127.0.0.1:8061'],['after',process.env.BASE_URL||'http://127.0.0.1:8062']]){
   const context=await browser.newContext({viewport:{width,height:width===390?844:1000},reducedMotion:'reduce'}),p=await context.newPage(),shots=[];
   await p.goto(base);if(lang==='zh')await p.locator('#lang').click();await p.locator('.primary').click();
   const capture=async state=>{
    await p.evaluate(()=>document.fonts.ready);await p.mouse.move(0,0);
    const file=`${width}-${lang}-${state}-${version}.jpg`,bytes=await p.screenshot({path:new URL(file,out).pathname,fullPage:true,type:'jpeg',quality:90,animations:'disabled'});
    shots.push({state,file,sha256:createHash('sha256').update(bytes).digest('hex')});
   };
   assert.equal(await p.locator('main').getAttribute('data-panel-id'),'ZS-S001.P01');await capture('OPEN-baseline');
   while(await p.locator('.panel-next').count())await p.locator('.panel-next').click();
   await p.locator('.scene-next').click();while(await p.locator('.panel-next').count())await p.locator('.panel-next').click();
   assert.equal(await p.locator('main').getAttribute('data-panel-id'),'ZS-S002.P03');await capture('FORK-baseline');
   if(version==='before')before=shots;else for(let i=0;i<shots.length;i++){
    assert.equal(shots[i].sha256,before[i].sha256,'M6 runtime presentation changed');
    report.cases.push({width,language:lang,state:shots[i].state,before:before[i].file,after:shots[i].file,sha256:shots[i].sha256,equal:true});
   }
   await context.close();
  }
 }
 report.status='passed';console.log('PASS: 4 baseline/M6 OPEN/FORK page pairs byte-identical; no absent artwork substituted');
}finally{if(report.status!=='passed')report.status='failed';await writeFile(new URL('baseline-comparison.json',out),JSON.stringify(report,null,2)+'\n');await browser.close();}
