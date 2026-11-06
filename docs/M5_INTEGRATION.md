# M5 — Lightweight illustration integration

The static reader now resolves art by stable panel ID, independently of approved screenplay content. No dependency, server, routing or language change was introduced. All 14 active narrative images, their alt/captions and the accepted 170% ascent crop match M4. The conceptual title remains unchanged. The other 56 panels stay text-led. Proposed crop and production records do not activate files.

## Sources and authoring

- `narrative/illustration-plan.v1.json`: all 70 recommended treatments and 21 planning-only new-master specifications. `file: null` is deliberate. This is production planning, never loaded by the reader.
- `narrative/illustrations.v1.json`: eight existing source assets (local path, dimensions, SHA, provisional rights, bilingual alt), named normalized crop variants and 14 explicit live bindings. Candidates have `status: candidate-only` and cannot resolve. Original `assets.v1.json` remains the historical integrity/rights inventory.
- `node scripts/build-illustrations.mjs`: generates the browser-native `illustrations.js`; no browser JSON fetch or build service needed.
- `node scripts/build-illustration-docs.mjs`: regenerates the audit/spec package from the plan and unchanged manuscript. `--check` on both commands detects stale output.
- `illustration.js`: a small resolver rejects unknown sources/variants, non-local paths, non-square normalized rectangles for the 16:9 source/frame, unavailable bilingual metadata, unapproved candidates and out-of-bounds crops. The original wmd source is restricted to the accepted ascent-left variant, excluding the ring. A planned asset never becomes a broken URL.

A rect `[x,y,w,h]` is a normalized subset of the source, with `w == h` for the current 1280×720 sources and 16:9 frame. Image width becomes `100/w%`, left `-100*x/w%`, top `-100*y/h%`. Full is `[0,0,1,1]`; ascent-left is `[0,0,1/1.7,1/1.7]`, preserving M4 exactly. Future portrait/flexible formats would need a separately reviewed layout change; this preparation deliberately supports the existing landscape format only.

Cropped variants require their own EN/zh alt. Small detail crops can specify `maxDisplayWidth` (integer CSS pixels, no larger than native source subset); the frame is then capped and centered. Candidate rectangles do not have final crop alt and stay disabled. Merely flipping their status is insufficient. Inspect actual source and composition first. The historic `panel.art` fields remain unchanged as compatibility/baseline metadata; the live manifest now controls rendering. Source-to-runtime generation must not derive live image activation from production recommendations.

## Later activation checklist

After the owner chooses a production method and authorizes artwork: review art against the specific linked paragraphs and constraints; preserve the original master and rights receipt; add local WebP source, SHA, dimensions and bilingual actual-image alt; declare reviewed crop rectangles and crop-specific alt; add only approved panel bindings; regenerate; run `npm test`, `npm run test:narrative`, `npm run test:illustrations` and browser/missing-art checks from the experience directory. Update the M4-equivalence assertion in illustration tests deliberately if a future approved binding changes; keep the approved narrative/source tests intact. A source with a new aspect ratio needs explicit code/QA work, not silent distortion.

Unknown bindings/metadata render the existing localized text-led card. A failed image request invokes the existing localized status fallback; all narrative text and navigation remain available. Localized caption remains HTML. Bilingual alt, source rights and final compositional approval are required before production use; historical references have no newly inferred license.

## Verification commands

From repository root:

```
node scripts/build-screenplay.mjs --check
npm test --prefix experiences/graphic-novel
npm run test:narrative --prefix experiences/graphic-novel
npm run test:illustrations --prefix experiences/graphic-novel
```

Browser tests accept `EVIDENCE_DIR=../docs/m5-evidence/`; resilience tests now accept the same override. Earlier M1/M2/M4 evidence must not be overwritten. The browser source hash includes both new runtime illustration modules. M5 case reports merge with `node scripts/m4-evidence.mjs <run-group> m5-evidence` (the script name is historical).
