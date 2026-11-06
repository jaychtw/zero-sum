import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {buildManuscript,generatedSource,plan,sourceSections} from './build-screenplay.mjs';
import {manuscript} from '../experiences/graphic-novel/manuscript.js';
import {scenes as graph} from '../experiences/graphic-novel/story.js';
import {createSession} from '../experiences/graphic-novel/session.js';
const root=new URL('../',import.meta.url),read=path=>readFileSync(new URL(path,root),'utf8');
const locked=JSON.parse(read('narrative/screenplay-lock.v02.json'));
const identities=JSON.parse(read('narrative/identities.v1.json'));
assert.deepEqual(manuscript,buildManuscript());
assert.equal(read('experiences/graphic-novel/manuscript.js'),generatedSource());
for(const [lang,source] of Object.entries(locked.sources))assert.equal(createHash('sha256').update(read(source.path)).digest('hex'),source.sha256);
assert.deepEqual(manuscript.sources,locked.sources);
assert.equal(Object.keys(manuscript.scenes).length,19);
assert.equal(Object.values(manuscript.scenes).filter(s=>s.choices).length,8);
assert.deepEqual(Object.values(manuscript.scenes).filter(s=>s.ending).map(s=>s.ending).sort(),[...'ABCDEFGHI']);
let panels=0,blocks=0,maxWords=0,maxZh=0;
for(const [runtime,scene] of Object.entries(manuscript.scenes)) {
 assert.equal(scene.stableId,identities.scenes[runtime]);
 assert.equal(scene.next,graph[runtime].next);assert.equal(scene.ending,graph[runtime].ending);
 assert.deepEqual(scene.choices?.map(c=>c.target),graph[runtime].choices?.map(c=>c[2]));
 scene.choices?.forEach((choice,i)=>{assert.equal(choice.branchId,identities.branches[`${runtime}:${i}`]);assert.ok(choice.en&&choice.zh);});
 const sourceOrder=plan.scenes[runtime].panels.flatMap(p=>p.blocks);
 const expectedOrder=sourceOrder.map((_,i)=>i);
 if(runtime==='endingC') [expectedOrder[10],expectedOrder[11]]=[11,10];
 assert.deepEqual(sourceOrder,expectedOrder,`unrecorded source reordering ${runtime}`);
 const seen=new Set();
 for(const panel of scene.panels) {
  panels++;assert.ok(!seen.has(panel.id));seen.add(panel.id);
  assert.ok(panel.content.length && ['en','zh'].every(lang=>panel.content.every(unit=>unit[lang].length)));
  for(const unit of panel.content)for(const lang of ['en','zh'])for(const block of unit[lang]) {
   blocks++;assert.ok(block.text.trim());assert.ok(block.source.start<=block.source.end);
   assert.ok(['stage','action','dialogue','direction'].includes(block.kind));
   if(block.kind==='dialogue')assert.ok(block.speaker);
  }
  const words=panel.content.flatMap(u=>u.en).map(b=>b.text).join(' ').split(/\s+/).length;
  const zh=panel.content.flatMap(u=>u.zh).map(b=>b.text).join('').length;
  maxWords=Math.max(words,maxWords);maxZh=Math.max(zh,maxZh);
  assert.ok(words<=180 && zh<=700,`oversized panel ${panel.id}`);
  assert.ok(panel.art===null || ['jacque','sniper','misaki','tackle','hospital','ascent'].includes(panel.art));
 }
 // Full per-section paragraph coverage, both languages, including the split translation.
 for(const lang of ['en','zh']) {
  const expected=sourceSections(lang)[scene.stableId].blocks.map(b=>`${b.source.start}:${b.source.end}`).sort();
  const actual=scene.panels.flatMap(p=>p.content.flatMap(u=>u[lang].map(b=>`${b.source.start}:${b.source.end}`))).sort();
  assert.deepEqual(actual,expected,`${runtime}/${lang} paragraph coverage`);
 }
}
assert.deepEqual(manuscript.scenes.endingC.panels.map(p=>p.phase),[1,1,1,2,3]);
assert.deepEqual(manuscript.scenes.junction.panels.at(-1).content[0].zh.length,2);
assert.equal(manuscript.scenes.opening.panels.every(p=>p.art===null),true,'do not show contradictory one-car illustration');
const paths=[];function visit(id,path=[]){const s=manuscript.scenes[id];if(s.ending){paths.push([...path,id]);return;}for(const n of s.choices?.map(c=>c.target)??[s.next])visit(n,[...path,id]);}visit('opening');assert.equal(paths.length,9);
for(const path of paths) {
 const s=createSession();s.begin();assert.equal(s.panel,0);assert.throws(()=>s.choose('junction'),'cannot skip initial content');
 for(let i=0;i<path.length;i++) {
  assert.equal(s.current,path[i]);
  for(let n=1;n<manuscript.scenes[s.current].panels.length;n++) {assert.ok(s.advance());assert.equal(s.panel,n);s.back();assert.equal(s.panel,n-1);s.advance();}
  assert.equal(s.advance(),false);assert.throws(()=>s.choose('missing'));
  if(i<path.length-1) {
   const previous=s.current,last=s.panel;s.choose(path[i+1]);assert.equal(s.panel,0);
   s.back();assert.equal(s.current,previous);assert.equal(s.panel,last);s.choose(path[i+1]);
  }
 }
 s.begin();assert.equal(s.panel,0);assert.equal(s.depth,0);s.reset();assert.equal(s.current,null);s.back();assert.equal(s.current,null);
}
const branch=createSession();branch.begin();while(branch.advance()){}branch.choose('junction');while(branch.advance()){}branch.choose('jacque');branch.back();assert.equal(branch.current,'junction');assert.ok(branch.isLastPanel);branch.choose('misaki');assert.equal(branch.current,'misaki');
const damaged=structuredClone(plan);damaged.scenes.opening.panels[0].blocks.push(0);
// Check coverage guard actually rejects duplicate or missing source mapping.
const saved=plan.scenes.opening.panels[0].blocks;plan.scenes.opening.panels[0].blocks=damaged.scenes.opening.panels[0].blocks;
assert.throws(()=>buildManuscript());plan.scenes.opening.panels[0].blocks=saved;
console.log(`PASS: locked v0.2 source hashes, ${panels} paired panels / ${blocks} source paragraphs, exact coverage/text/destinations and all 9 panel navigation routes; max panel ${maxWords} EN words / ${maxZh} zh characters`);
