#!/usr/bin/env python3
"""Read-only pixel/provenance/crop intake. It cannot approve or activate artwork."""
import argparse,hashlib,json,sys
from pathlib import Path
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]

def inspect(source,receipt=None):
 source=Path(source)
 data=source.read_bytes()
 digest=hashlib.sha256(data).hexdigest()
 with Image.open(source) as im:
  im.load(); width,height=im.size; fmt=im.format; mode=im.mode
  opaque='A' not in mode or im.getchannel('A').getextrema()==(255,255)
 refs=json.loads((ROOT/'narrative/assets.v1.json').read_text())['assets']
 problems=[]
 if fmt not in ['PNG','WEBP','JPEG']:problems.append('Unsupported source format')
 if width*9!=height*16:problems.append('Original source is not exactly 16:9; no letterbox or reframing exception')
 if width<1280 or height<720:problems.append('Source below minimum 1280x720')
 if not opaque:problems.append('Master contains transparency')
 if any(a['sha256']==digest for a in refs):problems.append('Existing provisional reference bytes cannot be submitted as a new OPEN/FORK master')
 report={'source':{'path':str(source),'sha256':digest,'width':width,'height':height,'format':fmt,'mode':mode},'technicalProblems':problems,'cropResults':[],'manualReview':'NOT PERFORMED: software cannot identify a storyboard, correct likeness/seat, copied text, road geometry or intended emotion','ownerArtApproval':None,'activationAllowed':False}
 if receipt is None:
  report['status']='technical-failure' if problems else 'pixels-inspected-review-pending'
  return report
 evidence=receipt
 plan=json.loads((ROOT/'production/m6-open-fork/pilot.json').read_text())
 master=next((m for m in plan['masters'] if m['id']==evidence.get('illustrationId')),None)
 if not master:problems.append('Only OPEN and FORK are permitted')
 claimed=evidence.get('source',{})
 for key in ['sha256','width','height','format']:
  if claimed.get(key)!=report['source'][key]:problems.append('Receipt does not match actual source '+key)
 provenance=evidence.get('provenance',{})
 if provenance.get('incrementalCost')!=0 or isinstance(provenance.get('incrementalCost'),bool):problems.append('Incremental cost is not verified as numeric zero')
 for key in ['method','toolOrCreator','exactPromptFile','costEvidence','sourceAndOutputTerms','dataUseEvidence']:
  if not isinstance(provenance.get(key),str) or not provenance[key].strip():problems.append('Missing provenance evidence: '+key)
 # Model/job/seed can honestly remain null when a creator/tool does not expose them.
 review=evidence.get('review',{})
 required=['singleSceneOriginal','notCompositeBoard','allFourIdentitiesMatch','crewSeatsCorrect','sameVehiclesAsOtherMaster','momentAndRoadGeometryCorrect','noBakedTextOrUI','cropPixelReviewComplete','captionContrastReviewComplete']
 missing=[key for key in required if review.get(key) is not True]
 variants=evidence.get('variants',[])
 if not isinstance(variants,list):variants=[];problems.append('variants must be an array')
 required_variants={v['id'] for v in master['variants']} if master else set()
 if {v.get('id') for v in variants}!=required_variants or len(variants)!=len(required_variants):problems.append('Actual reviewed variants must match the two named crop requirements')
 for v in variants:
  errors=[];rect=v.get('rect');pixels=None
  if not isinstance(rect,list) or len(rect)!=4 or any(not isinstance(n,(int,float)) or isinstance(n,bool) for n in rect):errors.append('Actual normalized rectangle missing/invalid')
  else:
   x,y,w,h=rect
   import math
   if not all(math.isfinite(n) for n in rect) or x<0 or y<0 or w<=0 or h<=0 or x+w>1 or y+h>1 or abs(w-h)>1e-9:errors.append('Out-of-bounds or non-16:9 crop')
   else:
    pixels=[int(width*w),int(height*h)]
    cap=v.get('maxDisplayWidth')
    if not isinstance(cap,int) or isinstance(cap,bool) or cap<1 or cap>pixels[0]:errors.append('Display width exceeds native subset or lacks an explicit cap')
  if not isinstance(v.get('alt'),dict) or not all(isinstance(v['alt'].get(k),str) and v['alt'][k].strip() for k in ['en','zh']):errors.append('Actual-image EN/zh alt missing')
  if v.get('identityAndContextReviewed') is not True:errors.append('Actual crop identities/context not reviewed')
  report['cropResults'].append({'id':v.get('id'),'nativeSubsetPixels':pixels,'problems':errors})
  problems.extend(v.get('id','unknown')+': '+s for s in errors)
 report['manualReview']={'pendingGates':missing,'reviewer':review.get('reviewer'),'notes':review.get('notes',[]),'limitation':'Values are human assertions, not computer vision verification. Owner artwork approval is still separate.'}
 report['ownerArtApproval']=evidence.get('ownerArtApproval')
 if evidence.get('activationAllowed') is not False:problems.append('Intake must stay inactive; this utility cannot authorize live bindings')
 report['status']='intake-incomplete' if problems or missing or not review.get('reviewer') else 'ready-for-owner-review'
 return report

def main():
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('source',type=Path);parser.add_argument('--receipt',type=Path);args=parser.parse_args()
 try:
  result=inspect(args.source,json.loads(args.receipt.read_text()) if args.receipt else None)
  print(json.dumps(result,ensure_ascii=False,indent=2))
  return 0 if result['status'] in ['pixels-inspected-review-pending','ready-for-owner-review'] else 2
 except (OSError,ValueError,TypeError,KeyError) as error:
  print(json.dumps({'status':'invalid-input','error':str(error),'activationAllowed':False}));return 2
if __name__=='__main__':sys.exit(main())
