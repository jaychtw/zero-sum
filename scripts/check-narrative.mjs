import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { scenes, validateStory } from '../experiences/graphic-novel/story.js';
import { endingC } from '../experiences/graphic-novel/ending-c.js';
import { ui } from '../experiences/graphic-novel/presentation.js';
const root = new URL('../',import.meta.url);
const read = name => JSON.parse(readFileSync(new URL(name,root)));
export const registry = read('narrative/registry.v1.json');
export const assets = read('narrative/assets.v1.json');
const identities = read('narrative/identities.v1.json');
export function checkNarrative(r=registry,a=assets) {
 assert.equal(r.schemaVersion,1); assert.equal(r.screenplayStatus,'NOT RECOVERED');
 assert.deepEqual(validateStory(),[]);
 const ids = r.scenes.flatMap(s=>[s.id,...s.beats.map(b=>b.id)]).concat(r.branches.map(b=>b.id),r.routes.map(p=>p.id));
 assert.equal(new Set(ids).size,ids.length,'duplicate identifiers');
 const byID = new Map(r.scenes.map(s=>[s.id,s]));
 assert.deepEqual(r.scenes.map(s=>s.runtimeNode).sort(),Object.keys(scenes).sort(),'runtime coverage');
 const currentIdentities = {
  scenes:Object.fromEntries(r.scenes.map(s=>[s.runtimeNode,s.id])),
  beats:Object.fromEntries(r.scenes.flatMap(s=>s.beats.map((b,i)=>[`${s.runtimeNode}:${i}`,b.id]))),
  branches:Object.fromEntries(r.branches.map(b=>[`${byID.get(b.from)?.runtimeNode}:${b.runtimeChoiceIndex}`,b.id]))
 };
 assert.deepEqual(currentIdentities,identities,'stable assignments changed; explicit versioned migration required');
 for(const scene of r.scenes) {
  assert.equal(scene.ending,scenes[scene.runtimeNode].ending ?? null);
  assert.equal(scene.screenplay.preciseDialogue,'NOT RECOVERED');
  assert.equal(scene.screenplay.shotSequence,'NOT RECOVERED');
  assert.ok(scene.beats.length);
  for(const beat of scene.beats) {
   assert.ok(beat.summary.trim()); assert.ok(r.sources[beat.source]);
   assert.ok(['confirmed-summary','provisional-runtime'].includes(beat.confidence));
   if(beat.source==='condensed-runtime') assert.equal(beat.confidence,'provisional-runtime');
  }
 }
 const edges = r.branches.map(b=>{
  assert.ok(byID.has(b.from) && byID.has(b.to),'unmapped branch');
  const from=byID.get(b.from).runtimeNode,to=byID.get(b.to).runtimeNode;
  const choice=scenes[from].choices?.[b.runtimeChoiceIndex];
  assert.ok(choice && choice[0] && choice[1],'missing bilingual choice'); assert.equal(choice[2],to);
  return `${from}:${b.runtimeChoiceIndex}:${to}`;
 });
 assert.deepEqual(edges.sort(),Object.entries(scenes).flatMap(([id,s])=>(s.choices??[]).map((c,i)=>`${id}:${i}:${c[2]}`)).sort());
 const automatic=r.automaticEdges.map(e=>`${byID.get(e.from)?.runtimeNode}:${byID.get(e.to)?.runtimeNode}`);
 assert.deepEqual(automatic.sort(),Object.entries(scenes).filter(([,s])=>s.next).map(([id,s])=>`${id}:${s.next}`).sort());
 assert.deepEqual(r.routes.map(p=>p.ending).sort(),[...'ABCDEFGHI']);
 for(const path of r.routes) {
  const nodes=path.scenes.map(id=>byID.get(id)?.runtimeNode);
  assert.equal(nodes[0],'opening'); assert.equal(scenes[nodes.at(-1)]?.ending,path.ending);
  assert.equal(path.preciseDialogue,'NOT RECOVERED'); assert.equal(path.shotSequence,'NOT RECOVERED');
  for(let i=1;i<nodes.length;i++) assert.ok((scenes[nodes[i-1]].choices?.map(c=>c[2])??[scenes[nodes[i-1]].next]).includes(nodes[i]),'invalid route edge');
 }
 assert.equal(new Set(a.assets.map(x=>x.id)).size,8);
 for(const asset of a.assets) {
  assert.ok(asset.path.startsWith('experiences/graphic-novel/assets/') && !asset.path.includes('..'));
  const bytes=readFileSync(new URL(asset.path,root));
  assert.equal(bytes.length,asset.bytes); assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);
  assert.ok(asset.rights.startsWith('NOT DOCUMENTED'));
 }
 assert.deepEqual(a.sceneAssets.map(s=>s.runtimeNode).sort(),Object.keys(scenes).sort());
 for(const item of a.sceneAssets) {
  assert.equal(byID.get(item.sceneID)?.runtimeNode,item.runtimeNode);
  assert.equal(a.assets.find(x=>x.id===item.assetID)?.path,`experiences/graphic-novel/assets/${scenes[item.runtimeNode].image}.webp`);
 }
 for(const link of r.presentationLinks) {
  assert.equal(link.runtimeNode,'endingC');
  assert.ok(r.scenes.find(s=>s.runtimeNode==='endingC').beats.some(b=>b.id===link.beatId));
  assert.ok(endingC.en.beats[link.panelIndex] && endingC.zh.beats[link.panelIndex]);
 }
 const localeKeys=(obj,prefix='')=>Object.entries(obj).flatMap(([key,value])=>typeof value==='object'?localeKeys(value,`${prefix}${key}.`):[`${prefix}${key}`]).sort();
 assert.deepEqual(localeKeys(ui.en),localeKeys(ui.zh));
 return `${r.scenes.length} scenes, ${r.scenes.reduce((n,s)=>n+s.beats.length,0)} sourced beats, ${r.branches.length} branches, ${r.routes.length} paths, ${a.assets.length} integrity-checked assets`;
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) console.log(`PASS: ${checkNarrative()}`);
