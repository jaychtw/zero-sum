# M6 — production-packet and baseline QA

2026-11-06 (Asia/Taipei) · baseline `5dc0143` · Chromium 155.0.8059.79 / Node 24.22.1 / Python 3.12.14 / Pillow 13.0.0. Existing Playwright/axe QA tooling was reused; no application dependency or generation pipeline was installed.

**Engineering checks pass. No new art source exists, so actual master/crop/likeness acceptance and candidate-art before/after validation are not performed.** The packet is production input, not approved artwork. [M6 consolidated owner review](M6_OWNER_REVIEW.md).

## Evidence and result

| Check | Result | Record |
|---|---|---|
| Approved screenplay/source/graph | Exact 70 paired panels / 459 source paragraphs, all nine endings, source hash lock, preserved IDs/choices, eight original image hashes | [Source checks](m6-evidence/source-checks.json); existing screenplay/narrative/M5 illustration tests passed |
| Protected active bytes | All 17 checked active renderer/content/manifest/script-source files match `5dc0143` byte for byte; all 14 live bindings unchanged | Same source checks, per-file SHA-256 |
| Production packet | Exactly OPEN/FORK; nine exact M5 mappings and exact bilingual source excerpts; four hashed references with limits; no actual source/ROI/owner approval | `node scripts/m6-packet.test.mjs` passed |
| Intake safety | 14 negative conditions: existing-reference substitution, wrong SHA, paid/unknown cost, missing terms, outside scope, missing/out-of-bounds/wrong-aspect ROI, unsafe upscale, missing bilingual alt, activation attempt, composite-review failure, original non-16:9 screenshot | `python3 scripts/m6-intake.test.py` passed; no new art fixture created |
| Portable export | ZIP CRC and every payload SHA verified; 25 payload files, four original reference images; deterministic timestamp/order; no new master | [ZIP](m6-evidence/zero-sum-m6-production-packet.zip), [integrity receipt](m6-evidence/packet-integrity.json) |
| Targeted browser regression | 390px zh-TW and 1440px EN, all 70 panels and nine endings per case: 18 route runs, 140 panel/live-switch checks, 144 axe audits, 36 captures, no reported violations/errors | [Summary](../experiences/graphic-novel/docs/m6-evidence/browser-summary.json), [phone](../experiences/graphic-novel/docs/m6-evidence/browser-390-zh.json), [desktop](../experiences/graphic-novel/docs/m6-evidence/browser-1440-en.json) |
| Keyboard/storage/motion | Desktop EN keyboard-only Ending C, denied localStorage and static boundary reduced-motion comparison passed; focus, backtracking, replay/reset/dialogs and 44px targets included | Desktop case above |
| Missing images | Seven actually requested image files forced to 404; 12 full C/D/G routes at 320/1440 × EN/zh-TW; 12 audits, four captures, story and controls preserved | [Resilience report](../experiences/graphic-novel/docs/m6-evidence/resilience-results.json) |
| Baseline rendered comparison | Four OPEN/FORK page pairs at phone zh-TW / desktop EN are byte-identical against `5dc0143`; eight captures | [Comparison report](../experiences/graphic-novel/docs/m6-evidence/baseline-comparison.json) |

Current runtime SHA-256: `75491201eb07419d905b4a807a45f72040aa083bfdb2ea6e3d8a9250bc4652d6`, identical to M5. All current browser/comparison/fallback records match it. M5’s eight-case matrix remains preserved; M6 ran targeted cases because there is no runtime change. These are 18 normal and 12 fault-injection route runs, not a claimed fresh repeat of the 72-route M5 matrix.

The packet’s native-generation interface is listed, while its cost/account/reference-data eligibility is unverified. [Capability findings](m6-evidence/capability-check.json) distinguish that from tool absence or a failed generation. Zero generation invocations, zero new studies, zero accepted masters, zero active pilot bindings. Original reference rights remain undocumented. No source/crop/rights values were invented to manufacture a pass.

## Rendered owner comparison — baseline preserved

These are screenshots of the accepted reader at two checkpoints. **The M6 column contains no candidate artwork**; it proves that production preparation did not alter the playable experience. An illustration comparison awaits actual source input and owner review.

| State | Accepted baseline `5dc0143` | M6 current, no candidate |
|---|---|---|
| OPEN P01, phone 繁中 | [Before](../experiences/graphic-novel/docs/m6-evidence/390-zh-OPEN-baseline-before.jpg) | [Unchanged](../experiences/graphic-novel/docs/m6-evidence/390-zh-OPEN-baseline-after.jpg) |
| FORK decision, phone 繁中 | [Before](../experiences/graphic-novel/docs/m6-evidence/390-zh-FORK-baseline-before.jpg) | [Unchanged](../experiences/graphic-novel/docs/m6-evidence/390-zh-FORK-baseline-after.jpg) |
| OPEN P01, desktop EN | [Before](../experiences/graphic-novel/docs/m6-evidence/1440-en-OPEN-baseline-before.jpg) | [Unchanged](../experiences/graphic-novel/docs/m6-evidence/1440-en-OPEN-baseline-after.jpg) |
| FORK decision, desktop EN | [Before](../experiences/graphic-novel/docs/m6-evidence/1440-en-FORK-baseline-before.jpg) | [Unchanged](../experiences/graphic-novel/docs/m6-evidence/1440-en-FORK-baseline-after.jpg) |

Additional composed screenshots:

| State | Phone | Desktop |
|---|---|---|
| Title | [390 繁中](../experiences/graphic-novel/docs/m6-evidence/390-zh-title.jpg) | [1440 EN](../experiences/graphic-novel/docs/m6-evidence/1440-en-title.jpg) |
| Opening dialogue | [390 繁中](../experiences/graphic-novel/docs/m6-evidence/390-zh-dialogue.jpg) | [1440 EN](../experiences/graphic-novel/docs/m6-evidence/1440-en-dialogue.jpg) |
| Deliberate missing art | [320 EN](../experiences/graphic-novel/docs/m6-evidence/320-en-missing-art.jpg) | [1440 繁中](../experiences/graphic-novel/docs/m6-evidence/1440-zh-missing-art.jpg) |
| Ending C interim boundary | [390 繁中](../experiences/graphic-novel/docs/m6-evidence/390-zh-ending-C.jpg) | [1440 EN](../experiences/graphic-novel/docs/m6-evidence/1440-en-ending-C.jpg) |

Agent inspection of existing source references, current composed screenshots and localized failure recovery supports the documented baseline preservation. It is not inspection of new character likeness/crop pixels. The accepted palette, typography, equal decisions and text-led C presentation remain; insufficient illustration coverage remains visible. No illustrative quality improvement is claimed from passing regression tests.

## Limitations / owner gates

- Native-generation $0 inclusion, reference handling and applicable source/output terms are not evidenced by the tool interface. No alternative provider or model was silently substituted.
- No actual OPEN/FORK bytes, original dimensions/SHA, four actual crop regions or actual-image bilingual alt can be reviewed yet. All four proposed detail rectangles remain null. A mathematical crop check cannot judge a face, board or road geometry; the human gates remain explicit.
- No accepted lossless source, optimized delivery WebP, new live metadata, candidate review composition or owner artwork approval exists. A production packet cannot substitute for these stages. Master quality and reproducible generation remain blocked, rather than marked as automated successes.
- Axe reports `color-contrast` incomplete over the existing title image/overlay; manual contrast assessment remains necessary. No physical-device, screen-reader, independent reader, extra browser-engine, low-end-hardware, aesthetic certification or deployed-site check is claimed.
- M1/M2/M4/M5/readiness evidence and original references remain unchanged; rejected creative boards were not imported. No paid service, remaining-master production, sphere experiment, Possibility, Larch, merge or deployment occurred.

## Reproduce

From repository root:

```
node scripts/build-screenplay.mjs --check
npm test --prefix experiences/graphic-novel
npm run test:narrative --prefix experiences/graphic-novel
npm run test:illustrations --prefix experiences/graphic-novel
node scripts/m6-packet.test.mjs
python3 scripts/m6-intake.test.py
python3 scripts/m6-export-packet.py
```

Export overwrites only the named generated M6 ZIP and its integrity receipt; sources/live bindings are not touched. Stable input bytes produce the same archive. The current archive’s exact SHA and payload count are in the integrity receipt, avoiding a stale duplicated digest here.

Use the existing static-server and external QA tools described in the [experience README](../experiences/graphic-novel/README.md). Set `EVIDENCE_DIR=../docs/m6-evidence/`, `BASE_URL`, `AXE_PATH` and per-case `TEST_WIDTHS`, `TEST_LANGUAGES`, `REPORT_NAME`; this snapshot used `M4_RUN_GROUP=m6-5dc0143` (script variable name is historical). Run browser cases serially, then `npm run test:resilience` with the same output override. Use another directory/group to preserve these captures.

For baseline comparison, extract `git archive 5dc0143 experiences/graphic-novel` into a temporary directory, serve that experience at 8061 and current at 8062, then `node scripts/m6-baseline-compare.mjs`. `BEFORE_URL`/`BASE_URL` override these origins. This script compares only the original OPEN/FORK pages, never injects images and never edits a live manifest.

Pause at the method/input blocker and owner art gate in the [consolidated review](M6_OWNER_REVIEW.md).
