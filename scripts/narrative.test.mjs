import assert from 'node:assert/strict';
import {checkNarrative,registry,assets} from './check-narrative.mjs';
console.log(`PASS: ${checkNarrative()}`);
const cases=[
 ['duplicate scene ID',r=>r.scenes[1].id=r.scenes[0].id],
 ['missing runtime coverage',r=>r.scenes.pop()],
 ['wrong branch target',r=>r.branches[0].to=r.scenes[0].id],
 ['invalid ending path',r=>r.routes[0].scenes.splice(1,1)],
 ['false screenplay recovery',r=>r.screenplayStatus='RECOVERED'],
 ['missing source',r=>r.scenes[0].beats[0].source='invented'],
 ['renumbered beat',r=>r.scenes[0].beats[0].id='ZS-T999']
];
for(const [name,mutate] of cases) {const r=structuredClone(registry);mutate(r);assert.throws(()=>checkNarrative(r),undefined,name);}
const damaged=structuredClone(assets);damaged.assets[0].sha256='0'.repeat(64);assert.throws(()=>checkNarrative(registry,damaged));
console.log('PASS: 8 negative coverage/integrity/identity/recovery cases rejected');
