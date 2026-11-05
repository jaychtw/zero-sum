import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { scenes, validateStory } from '../story.js';
import { createSession } from '../session.js';
import { endingC } from '../ending-c.js';
import { ui } from '../presentation.js';
const expected = {
 opening:['junction'], junction:['jacque','misaki'], jacque:['abandon','rescue'], abandon:['sniper','endingD'],
 sniper:['endingA','tower'], tower:['endingB','endingC'], rescue:['endingE','endingF'],
 misaki:['hospital','cbd'], hospital:['endingG','endingH'], cbd:['endingI']
};
assert.deepEqual(validateStory(),[]);
assert.deepEqual(Object.values(scenes).filter(s=>s.ending).map(s=>s.ending).sort(),[...'ABCDEFGHI']);
assert.equal(Object.values(scenes).filter(s=>s.choices).length,8);
for (const [id,s] of Object.entries(scenes)) {
 assert.ok(existsSync(new URL(`../assets/${s.image}.webp`,import.meta.url)));
 assert.ok(ui.en.alts[s.image] && ui.zh.alts[s.image]);
 if (!s.ending) assert.deepEqual(s.choices?.map(c=>c[2]) ?? [s.next],expected[id],id);
}
const paths = [];
function walk(id,path=[]) {
 if (scenes[id].ending) { paths.push([...path,id]); return; }
 for (const next of expected[id]) walk(next,[...path,id]);
}
walk('opening'); assert.equal(paths.length,9);
for (const path of paths) {
 const session = createSession(); session.begin();
 assert.throws(()=>session.choose('missing'));
 for (const id of path.slice(1)) { while(session.advance()) {} session.choose(id); }
 assert.equal(session.current,path.at(-1));
 session.back(); assert.equal(session.current,path.at(-2));
 session.begin(); assert.equal(session.depth,0); assert.equal(session.current,'opening');
 session.reset(); assert.equal(session.current,null);
}
for (const [mutate,message] of [
 [d=>d.opening.next='missing','Missing'],
 [d=>d.opening.next='opening','Cycle'],
 [d=>d.opening.zh='','Missing language'],
 [d=>d.junction.choices[0][1]='','Untranslated choice'],
 [d=>delete d.opening.next,'Dead-end']
]) { const data=structuredClone(scenes); mutate(data); assert.ok(validateStory(data).some(e=>e.includes(message))); }
assert.deepEqual(Object.keys(ui.en).sort(),Object.keys(ui.zh).sort());
console.log('PASS: 19 bilingual nodes, 8 exact decisions, all 9 ending routes; assets, invalid graph cases, session navigation/replay/reset');

assert.equal(endingC.en.beats.length,3);
assert.deepEqual(endingC.en.beats.map(b=>b.kind),endingC.zh.beats.map(b=>b.kind));
for(const language of ['en','zh']) for(const beat of endingC[language].beats) for(const field of (beat.kind === 'ascent' ? ['title','text','alt'] : ['title','text','panelTitle','panelNote'])) assert.ok(beat[field]?.trim(),`Missing ${language} ${field}`);
console.log('PASS: preserved legacy Ending C reference localization (superseded in runtime by screenplay v0.2)');
