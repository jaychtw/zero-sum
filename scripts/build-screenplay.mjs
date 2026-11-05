import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {scenes as graph} from '../experiences/graphic-novel/story.js';
const root=new URL('../',import.meta.url);
const read=name=>readFileSync(new URL(name,root),'utf8');
const identities=JSON.parse(read('narrative/identities.v1.json'));
export const plan=JSON.parse(read('narrative/panel-plan.v1.json'));
const paths={en:'screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md',zh:'screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md'};
const plain=text=>text.replaceAll('**','');
export function sourceSections(language) {
 const lines=read(paths[language]).split('\n'), sections={};
 for(let i=0;i<lines.length;i++) {
  const heading=lines[i].match(/^## (.*\b(ZS-S\d{3})\b.*)$/);if(!heading)continue;
  let end=i+1;while(end<lines.length&&!lines[end].startsWith('## '))end++;
  const entries=[];let start=i+1;
  while(start<end) {
   while(start<end&&!lines[start].trim())start++;
   if(start>=end)break;
   let stop=start+1;while(stop<end&&lines[stop].trim())stop++;
   const raw=lines.slice(start,stop).join('\n').trim();
   if(raw!=='---'&&!raw.startsWith('# '))entries.push({raw,source:{start:start+1,end:stop}});
   start=stop;
  }
  const choice=entries.find(x=>/^\*\*(CHOICE|選擇) /.test(x.raw));
  const control=entries.filter(x=>/^\*\*(CONTINUE|繼續|END [A-I]\.|結局 [A-I]。)/.test(x.raw));
  const blocks=entries.filter(x=>x!==choice&&!control.includes(x));
  const code=heading[1].split(' / ')[0],title=heading[1].split(' — ').slice(1).join(' — ');
  sections[heading[2]]={code,title,blocks,choice,control};
 }
 return sections;
}
function content(entry) {
 const m=entry.raw.match(/^\*\*([^*]+?)[：:]\*\*\s*([\s\S]*)$/);
 const direction=m && /^(BEAT |第[一二三]拍)/.test(m[1]);
 return {kind:m&&!direction?'dialogue':/^\*\*[^*]+\*\*$/.test(entry.raw)?'stage':direction?'direction':'action',
  ...(m&&!direction?{speaker:m[1],text:plain(m[2])}:{text:plain(entry.raw)}),source:entry.source};
}
export function buildManuscript() {
 const en=sourceSections('en'),zh=sourceSections('zh');
 assert.equal(Object.keys(en).length,19);assert.deepEqual(Object.keys(en),Object.keys(zh));
 const output={schemaVersion:1,screenplayVersion:'0.2',approval:'Owner approved EN and zh-TW v0.2 on 2026-11-06; integration authorized at 4ed8b9c.',sources:Object.fromEntries(Object.entries(paths).map(([lang,path])=>[lang,{path,sha256:createHash('sha256').update(read(path)).digest('hex')}])),scenes:{}};
 for(const [runtime,entry] of Object.entries(plan.scenes)) {
  const a=en[entry.sceneId],b=zh[entry.sceneId];assert.ok(a&&b,runtime);
  // Preserve the two translated transfer paragraphs; pair them with one EN paragraph.
  const pairedZh=b.blocks.map(x=>[x]);
  if(runtime==='junction')pairedZh.splice(7,2,[...pairedZh[7],...pairedZh[8]]);
  assert.equal(a.blocks.length,pairedZh.length,`${runtime} alignment`);
  const used=entry.panels.flatMap(p=>p.blocks);
  assert.deepEqual([...used].sort((x,y)=>x-y),a.blocks.map((_,i)=>i),`${runtime} source coverage/duplicates`);
  const panels=entry.panels.map(p=>({...p,context:Object.fromEntries(['en','zh'].map(lang=>{const rows=lang==='en'?a.blocks.map(x=>[x]):pairedZh;let context='';for(let i=0;i<=Math.min(...p.blocks);i++)for(const row of rows[i])if(content(row).kind==='stage')context=content(row).text;return [lang,context];})),content:p.blocks.map(i=>({en:[content(a.blocks[i])],zh:pairedZh[i].map(content)}))}));
  const choices=graph[runtime].choices?.map((old,index)=>{
   assert.ok(a.choice&&b.choice);
   const get=s=>{
    const line=s.choice.raw.split('\n').filter(x=>x.startsWith('- '))[index];assert.ok(line);
    const [label,target]=plain(line.slice(2)).split(' → ');assert.ok(label&&target);
    const expected=Object.entries(plan.scenes).find(([key,e])=>key===old[2])[1].sceneId;
    const targetSection=en[expected],targetZh=zh[expected];
    assert.ok([targetSection.code,targetZh.code].includes(target),`choice destination ${runtime}: ${target}`);
    return label;
   };
   return {en:get(a),zh:get(b),target:old[2],branchId:identities.branches[`${runtime}:${index}`],source:{en:a.choice.source,zh:b.choice.source}};
  });
  output.scenes[runtime]={stableId:entry.sceneId,title:{en:a.title,zh:b.title},panels,...(choices?{choices}:{}),...(graph[runtime].next?{next:graph[runtime].next}:{}),...(graph[runtime].ending?{ending:graph[runtime].ending}:{})};
 }
 return output;
}
export function generatedSource(data=buildManuscript()) {return '// Generated from owner-approved v0.2 sources and narrative/panel-plan.v1.json.\n// Run node scripts/build-screenplay.mjs; do not edit approved text here.\nexport const manuscript = '+JSON.stringify(data,null,2)+';\n';}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href) {
 const result=generatedSource(),target='experiences/graphic-novel/manuscript.js';
 if(process.argv.includes('--check'))assert.equal(read(target),result,'Generated manuscript is stale');
 else writeFileSync(new URL(target,root),result);
 console.log(`PASS: ${Object.keys(plan.scenes).length} scenes / ${Object.values(plan.scenes).reduce((n,s)=>n+s.panels.length,0)} paired panels; exact bilingual source coverage`);
}
