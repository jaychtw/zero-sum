import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const root=new URL('../',import.meta.url);
export function runtimeHash() {
 const files=['index.html','app.js','session.js','manuscript.js','presentation.js','style.css','ending-c.css','manuscript.css','illustration.js','illustrations.js'];
 const hash=createHash('sha256');
 for(const file of files)hash.update(file).update(readFileSync(new URL('experiences/graphic-novel/'+file,root)));
 return hash.digest('hex');
}
export function mergeEvidence(group, directory = 'm4-evidence') {
 assert.ok(/^m[45]-evidence$/.test(directory));
 assert.ok(group,'Specify the completed verification group');
 const reports=[];
 for(const width of [320,390,768,1440])for(const lang of ['en','zh']) {
  const r=JSON.parse(readFileSync(new URL(`experiences/graphic-novel/docs/${directory}/browser-${width}-${lang}.json`,root)));
  assert.equal(r.status,'passed');assert.equal(r.runGroup,group);assert.equal(r.sourceBundleSha256,runtimeHash());
  assert.deepEqual(r.widths,[width]);assert.deepEqual(r.languages,[lang==='zh'?'zh-Hant':'en']);
  assert.equal(r.routes,9);assert.equal(r.panelsChecked,70);assert.equal(r.languageSwitches,70);
  assert.equal(r.audits,width===390||width===1440?72:0);assert.deepEqual(r.errors,[]);reports.push(r);
 }
 const screenshots=reports.flatMap(r=>r.screenshots);assert.equal(screenshots.length,72);assert.equal(new Set(screenshots).size,72);
 const result={status:'passed',verification:'8 completed viewport/language runs',conditionalCoverage:{keyboardOnlyC:'1440/en',storageDenied:'1440/en',staticBoundaryMotionComparison:'1440/en'},caseReports:reports.map(r=>`browser-${r.widths[0]}-${r.languages[0]==='en'?'en':'zh'}.json`),runGroup:group,sourceBundleSha256:runtimeHash(),screenplayVersion:'0.2',browser:reports[0].browser,widths:[320,390,768,1440],languages:['en','zh-Hant'],routes:72,panelsChecked:560,audits:288,languageSwitches:560,screenshots,errors:[],incompleteAuditRules:[...new Set(reports.flatMap(r=>r.incompleteAuditRules))],checks:reports[0].checks};
 writeFileSync(new URL(`experiences/graphic-novel/docs/${directory}/browser-results.json`,root),JSON.stringify(result,null,2)+'\n');
 return result;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const r=mergeEvidence(process.argv[2],process.argv[3]);console.log(`PASS: ${r.routes} routes, ${r.panelsChecked} panel checks, ${r.audits} audits, ${r.screenshots.length} fresh captures; 8 matching completed reports`);}
