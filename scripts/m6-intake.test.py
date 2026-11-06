#!/usr/bin/env python3
"""Negative intake checks use existing reference/QA bytes, never pretend new art."""
import copy,hashlib,importlib.util,json,sys
sys.dont_write_bytecode=True
from pathlib import Path
root=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('m6_intake',root/'scripts/m6-inspect-source.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
source=root/'experiences/graphic-novel/assets/chase.webp'
r=mod.inspect(source)
assert any('reference bytes' in s for s in r['technicalProblems'])
assert r['activationAllowed'] is False and r['status']=='technical-failure'
receipt=json.loads((root/'production/m6-open-fork/intake.template.json').read_text())
receipt['illustrationId']='OPEN';receipt['source']=r['source'];receipt['provenance'].update(method='TEST ONLY, NOT A MASTER',toolOrCreator='unit test',exactPromptFile='unit test',incrementalCost=0,costEvidence='TEST',sourceAndOutputTerms='TEST',dataUseEvidence='TEST')
receipt['variants']=[{'id':name,'rect':[0,0,.5,.5],'maxDisplayWidth':640,'alt':{'en':'TEST','zh':'測試'},'identityAndContextReviewed':True} for name in ['following-cabin','lead-cabin']]
for k in list(receipt['review']):
 if receipt['review'][k] is None:receipt['review'][k]=True
receipt['review']['reviewer']='TEST ONLY'
cases=[('wrong hash',lambda x:x['source'].update(sha256='bad'),'does not match actual source sha256'),('paid cost',lambda x:x['provenance'].update(incrementalCost=1),'numeric zero'),('unknown cost',lambda x:x['provenance'].update(incrementalCost=None),'numeric zero'),('missing terms',lambda x:x['provenance'].update(sourceAndOutputTerms=None),'sourceAndOutputTerms'),('outside scope',lambda x:x.update(illustrationId='CITY'),'Only OPEN and FORK'),('missing crop',lambda x:x['variants'][0].update(rect=None),'rectangle missing'),('out of bounds',lambda x:x['variants'][0].update(rect=[.8,0,.5,.5]),'Out-of-bounds'),('wrong aspect',lambda x:x['variants'][0].update(rect=[0,0,.5,.4]),'non-16:9'),('unsafe upscale',lambda x:x['variants'][0].update(maxDisplayWidth=900),'exceeds native'),('missing alt',lambda x:x['variants'][0].update(alt={'en':'TEST'}),'EN/zh alt'),('activation attempt',lambda x:x.update(activationAllowed=True),'must stay inactive')]
for name,mutate,expected in cases:
 c=copy.deepcopy(receipt);mutate(c);result=mod.inspect(source,c);assert any(expected in s for s in result['technicalProblems']),name;assert result['activationAllowed'] is False
c=copy.deepcopy(receipt);c['review']['notCompositeBoard']=False;result=mod.inspect(source,c);assert 'notCompositeBoard' in result['manualReview']['pendingGates'];assert result['status']!='ready-for-owner-review'
screenshot=root/'experiences/graphic-novel/docs/m5-evidence/390-en-title.jpg'
result=mod.inspect(screenshot);assert any('not exactly 16:9' in s for s in result['technicalProblems'])
print('PASS: 14 negative intake conditions: legacy-source substitution, provenance/cost, scope, actual ROI, native limits, bilingual alt, activation, composite review and original aspect; no new art fixture generated')
