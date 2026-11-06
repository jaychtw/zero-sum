#!/usr/bin/env python3
"""Export the inactive OPEN/FORK packet and exact existing references; no new art."""
import hashlib,json,zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
base=ROOT/'production/m6-open-fork'
files=list(base.rglob('*'))
files=[p for p in files if p.is_file()]
refs=json.loads((base/'references.json').read_text())['assets']
files += [ROOT/a['path'] for a in refs]
files += [ROOT/p for p in ['docs/M6_OPEN_FORK_PILOT_BRIEF.md','docs/M5_ILLUSTRATION_SPECS.md','docs/M5_INTEGRATION.md','docs/VISUAL_IDENTITY.md','docs/ZERO_SUM_CANON.md','screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md','screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md','narrative/assets.v1.json','narrative/screenplay-lock.v02.json','scripts/m6-inspect-source.py','docs/m6-evidence/capability-check.json']]
entries={str(p.relative_to(ROOT)):p.read_bytes() for p in files}
entries['PACKET_README.txt']=b'''ZERO SUM M6: OPEN/FORK production-input packet, not artwork.\nStart with production/m6-open-fork/README.md and pilot.json.\nNo generated source, numeric actual ROI, accepted master or live binding is included.\nExisting images retain their original paths and are labeled provisional references.\nRejected creative boards are not included. No license is inferred from this archive.\nApproved screenplay files retain historical draft warnings; owner authorization is recorded in the M6 brief and current repository. Source words are unchanged.\nThe two-image instructions and nine bilingual panel excerpts are self-contained.\nHistorical/repository QA links in source documents refer to the full repository and may not be included here. The M5 specification is included as an unchanged reference, not permission for its other 19 masters.\nThe read-only Python inspector requires the existing Pillow library; run from this archive root. No credentials, runtime app, production artwork or paid provider invocation is included.\nMANIFEST.json records every payload digest. Preserve generation/cost/terms receipts and get owner art approval before activation.\n'''
manifest={name:{'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data)} for name,data in sorted(entries.items())}
entries['MANIFEST.json']=(json.dumps({'schemaVersion':1,'baseline':'5dc0143','newMasterCount':0,'activationAllowed':False,'files':manifest},indent=2)+'\n').encode()
dest=ROOT/'docs/m6-evidence/zero-sum-m6-production-packet.zip'
with zipfile.ZipFile(dest,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for name,data in sorted(entries.items()):
  info=zipfile.ZipInfo(name,date_time=(1980,1,1,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,data)
with zipfile.ZipFile(dest) as z:
 assert z.testzip() is None
 for name,m in manifest.items():assert hashlib.sha256(z.read(name)).hexdigest()==m['sha256']
report={'status':'passed','archive':str(dest.relative_to(ROOT)),'sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'bytes':dest.stat().st_size,'payloadFiles':len(manifest),'referenceImages':len(refs),'newMasterCount':0,'activationAllowed':False,'checks':'All ZIP entries CRC checked and payload SHA-256 verified; stable timestamps/order; exact original reference bytes; no source master or numeric actual ROI.'}
(ROOT/'docs/m6-evidence/packet-integrity.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
