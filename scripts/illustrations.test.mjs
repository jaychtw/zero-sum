import assert from 'node:assert/strict';
import{readFileSync}from'node:fs';import{createHash}from'node:crypto';
import{illustrations as m}from'../experiences/graphic-novel/illustrations.js';
import{resolveIllustration}from'../experiences/graphic-novel/illustration.js';
import{manuscript}from'../experiences/graphic-novel/manuscript.js';
import{ui}from'../experiences/graphic-novel/presentation.js';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(readFileSync(new URL(p,root)));
const plan=read('narrative/illustration-plan.v1.json'),inventory=read('narrative/assets.v1.json');
assert.deepEqual(m,read('narrative/illustrations.v1.json'));
const panels=Object.values(manuscript.scenes).flatMap(s=>s.panels),byId=new Map(panels.map(p=>[p.id,p]));
assert.equal(plan.panels.length,70);assert.equal(new Set(plan.panels.map(p=>p.panelId)).size,70);assert.equal(plan.illustrations.length,21);
assert.deepEqual(Object.fromEntries(Object.keys(plan.categories).map(k=>[k,plan.panels.filter(p=>p.category===k).length])),{unique:21,reuse:22,crop:19,text:8});
assert.equal(Object.keys(m.bindings).length,14);
for(const p of panels)for(const lang of ['en','zh']){const frame=resolveIllustration(p.id,lang);assert.equal(!!frame,!!p.art,p.id);if(frame){assert.equal(frame.src,`assets/${p.art==='ascent'?'wmd':p.art}.webp`);assert.equal(frame.alt,p.art==='ascent'?ui[lang].ascentAlt:ui[lang].alts[p.art]);assert.equal(frame.caption,ui[lang].art);assert.deepEqual(frame.rect,p.art==='ascent'?[0,0,1/1.7,1/1.7]:[0,0,1,1]);}}
for(const[id,asset]of Object.entries(m.assets)){const source=inventory.assets.find(a=>a.path.endsWith('/'+id+'.webp'));assert.ok(source);assert.equal(asset.sha256,source.sha256);assert.equal(asset.sha256,createHash('sha256').update(readFileSync(new URL(source.path,root))).digest('hex'));assert.equal(asset.width,1280);assert.equal(asset.height,720);for(const lang of ['en','zh'])assert.ok(asset.alt[lang]);}
for(const v of Object.values(m.variants)){const[x,y,w,h]=v.rect;assert.ok(v.rect.every(Number.isFinite)&&x>=0&&y>=0&&w>0&&h>0&&x+w<=1&&y+h<=1&&w===h);if(v.status==='candidate-only'){assert.ok(v.maxDisplayWidth<=1280*w);assert.ok(!Object.values(m.bindings).some(b=>m.variants[b.variant]===v));}}
const specs=new Map(plan.illustrations.map(s=>[s.id,s]));assert.equal(specs.size,21);
for(const r of plan.panels){assert.ok(byId.has(r.panelId));assert.ok(plan.categories[r.category]);assert.ok(r.reason.length>30);if(r.category==='text'){assert.equal(r.asset,null);assert.equal(r.variant,null);}else{assert.ok(m.assets[r.asset]||specs.has(r.asset));assert.ok(r.variant);if(m.assets[r.asset]){assert.ok(m.variants[r.variant]);if(m.variants[r.variant].asset)assert.equal(m.variants[r.variant].asset,r.asset);}}}
for(const s of plan.illustrations){assert.equal(s.status,'planning-only');assert.equal(s.file,null);for(const k of ['purpose','characters','environment','mood','critical','bilingualOverlay','cropSupport','orientation'])assert.ok(s[k].length>10);assert.equal(plan.panels.filter(r=>r.asset===s.id&&r.category==='unique').length,1);assert.ok(!m.assets[s.id]);}
assert.equal(plan.panels.filter(r=>r.asset&&m.assets[r.asset]).length,16);
assert.equal(plan.panels.filter(r=>r.asset&&specs.has(r.asset)).length,46);
assert.equal(resolveIllustration('missing','en'),null);
const mutate=fn=>{const copy=structuredClone(m);fn(copy);return copy;};const key='ZS-S013.P01';
for(const manifest of [mutate(x=>x.bindings[key].asset='unknown'),mutate(x=>x.bindings[key].variant='unknown'),mutate(x=>x.assets.wmd.src='https://invalid.example/art.webp'),mutate(x=>x.assets.wmd.src='assets/../wmd.webp'),mutate(x=>x.variants['ascent-left'].rect=[0,0,1.1,1.1]),mutate(x=>x.variants['ascent-left'].rect=[0,0,.5,.4]),mutate(x=>x.variants['ascent-left'].status='candidate-only'),mutate(x=>x.bindings[key].asset='chase'),mutate(x=>x.variants['ascent-left'].alt.zh=''),mutate(x=>x.bindings[key].variant='full'),mutate(x=>x.variants['ascent-left'].maxDisplayWidth=9999),mutate(x=>delete x.variants['ascent-left'].alt)])assert.equal(resolveIllustration(key,'zh',manifest),null);
console.log('PASS: 70 coverage records, 21 planning-only masters, 14 unchanged live bindings; original hashes, bilingual metadata, bounded crops and 13 safe resolver failures');
