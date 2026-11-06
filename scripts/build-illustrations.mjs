import {readFileSync,writeFileSync} from 'node:fs';
const source=new URL('../narrative/illustrations.v1.json',import.meta.url);
const target=new URL('../experiences/graphic-novel/illustrations.js',import.meta.url);
const output='// Generated from narrative/illustrations.v1.json; node scripts/build-illustrations.mjs\nexport const illustrations = '+JSON.stringify(JSON.parse(readFileSync(source)),null,2)+';\n';
if(process.argv.includes('--check')){if(readFileSync(target,'utf8')!==output)throw Error('Illustration runtime is stale');console.log('PASS: illustration manifest matches runtime');}else writeFileSync(target,output);
