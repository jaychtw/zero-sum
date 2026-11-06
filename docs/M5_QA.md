# M5 — Verification and visual evidence

2026-11-06 · baseline `4c9ee3a` · implementation `708decb` · Chromium 155.0.8059.79 / Playwright 1.62.1 / axe-core 4.11.0 / Node 24.22.1.

**M5 checks passed; this is engineering/continuity evidence, not final illustration or aesthetic approval.** The approved text, nine-ending graph and current composed presentation remain intact. No new production artwork was created. Earlier M1/M2/readiness/M4 evidence and reports remain unchanged.

## Recorded results

| Verification | Result | Evidence |
|---|---|---|
| Approved bilingual source and generation | 70 paired panels / 459 paragraphs; source hashes locked; exact text, attribution, destinations and source coverage | [Source checks](../experiences/graphic-novel/docs/m5-evidence/source-checks.json) |
| Narrative identity and original assets | 19 scenes, 16 directed choice edges, nine endings, eight unchanged asset hashes; eight negative integrity/identity cases rejected | Same source checks; `scripts/narrative.test.mjs` |
| Illustration plan/live separation | All 70 unique panel IDs classified; 21 planning-only masters; 14 live frames match M4; normalized rectangles, bilingual metadata and 13 safe resolver failures | Same source checks; `scripts/illustrations.test.mjs` |
| Complete browser matrix | 320, 390, 768 and 1440px × EN/zh-TW: 72 ending-route runs, 560 distinct-panel checks, 560 live language switches | [Merged report](../experiences/graphic-novel/docs/m5-evidence/browser-results.json), eight case reports in the same directory |
| Browser accessibility/layout | 288 axe audits with no reported violations; 44px controls, no horizontal overflow, focus, dialogue speakers, backtracking, alternate-branch revisit, replay/reset and modal behavior | Same merged report; **color-contrast remains incomplete** over the title image/overlay |
| Keyboard/storage/motion | Keyboard-only full C, denied localStorage and static boundary comparison with reduced motion | Completed 1440/en case; aggregate conditional-coverage field |
| Missing-image requests | All seven files actually requested by the app deliberately return 404 (unused junction is not requested); 12 complete C/D/G route runs across 320/1440 × EN/zh-TW; 12 audits; four captures | [Resilience report](../experiences/graphic-novel/docs/m5-evidence/resilience-results.json) |
| M4/M5 rendered equivalence | Eight paired captures are byte-identical in the same browser: title, opening text-led card, full Jacque art, accepted ascent crop; 390 EN and 1440 zh-TW | [Paired report](../experiences/graphic-novel/docs/m5-evidence/equivalence-results.json) and table below |

All current browser/resilience/equivalence reports identify the same runtime SHA-256: `75491201eb07419d905b4a807a45f72040aa083bfdb2ea6e3d8a9250bc4652d6`. The merge rejects incomplete, failed, wrong-group or stale-source case reports. Eight successful case reports, not an abandoned long run, make up the result. An initial 320/zh run timed out during a Playwright tap; it was repeated in a fresh browser/server and fully passed. The failed partial attempt is not counted. The eight paired screenshots demonstrate representative appearance preservation, not pixel comparison of every panel.

## Representative current screenshots

| State | Phone EN | Desktop EN | Phone 繁中 | Desktop 繁中 |
|---|---|---|---|---|
| Title / current conceptual cover | [390](../experiences/graphic-novel/docs/m5-evidence/390-en-title.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-en-title.jpg) | [390](../experiences/graphic-novel/docs/m5-evidence/390-zh-title.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-zh-title.jpg) |
| Opening / no assigned illustration | [390](../experiences/graphic-novel/docs/m5-evidence/390-en-opening.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-en-opening.jpg) | [390](../experiences/graphic-novel/docs/m5-evidence/390-zh-opening.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-zh-opening.jpg) |
| Two-car transfer decision | [390](../experiences/graphic-novel/docs/m5-evidence/390-en-first-fork-transfer.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-en-first-fork-transfer.jpg) | [390](../experiences/graphic-novel/docs/m5-evidence/390-zh-first-fork-transfer.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-zh-first-fork-transfer.jpg) |
| Ending C boundary / interim text-led | [390](../experiences/graphic-novel/docs/m5-evidence/390-en-ending-C.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-en-ending-C.jpg) | [390](../experiences/graphic-novel/docs/m5-evidence/390-zh-ending-C.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-zh-ending-C.jpg) |
| Deliberately missing image / localized recovery at D.P01 | [320](../experiences/graphic-novel/docs/m5-evidence/320-en-missing-art.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-en-missing-art.jpg) | [320](../experiences/graphic-novel/docs/m5-evidence/320-zh-missing-art.jpg) | [1440](../experiences/graphic-novel/docs/m5-evidence/1440-zh-missing-art.jpg) |

Normal screenshot set: **72 captures**, including the final panel of every ending in both languages at phone/desktop sizes and intermediate C activation/inquiry/rehabilitation states. Missing-art set: **four captures**. All captions, fallback messages and narrative are real app states. A deliberately failed illustration and an unassigned text-led panel are distinct conditions; neither hides the story or controls.

## Before/after image-present evidence

| State | Before M4 | After M5 |
|---|---|---|
| Phone EN, existing full narrative art (S003.P04) | [Before](../experiences/graphic-novel/docs/m5-evidence/equivalence-390-en-full-art-before.jpg) | [After](../experiences/graphic-novel/docs/m5-evidence/equivalence-390-en-full-art-after.jpg) |
| Desktop 繁中, existing full narrative art (S003.P04) | [Before](../experiences/graphic-novel/docs/m5-evidence/equivalence-1440-zh-full-art-before.jpg) | [After](../experiences/graphic-novel/docs/m5-evidence/equivalence-1440-zh-full-art-after.jpg) |
| Phone EN, accepted ascent crop (S013.P01) | [Before](../experiences/graphic-novel/docs/m5-evidence/equivalence-390-en-ascent-crop-before.jpg) | [After](../experiences/graphic-novel/docs/m5-evidence/equivalence-390-en-ascent-crop-after.jpg) |
| Desktop 繁中, accepted ascent crop (S013.P01) | [Before](../experiences/graphic-novel/docs/m5-evidence/equivalence-1440-zh-ascent-crop-before.jpg) | [After](../experiences/graphic-novel/docs/m5-evidence/equivalence-1440-zh-ascent-crop-after.jpg) |

The paired report also links the four title/text-led pairs (16 total before/after files). All eight pairs have identical JPEG bytes with fonts/images settled, reduced motion and pointer away. The [candidate crop inspection sheet](../experiences/graphic-novel/docs/m5-evidence/candidate-crop-review.png) separately reviews proposed spatial subsets at or below native scale; it does not activate them or establish final art quality.

## Manual composed review and limits

Agent inspection covered phone EN decision/activation/ending, desktop zh-TW title/decision/boundary, image-present full/crop and localized missing-image recovery. The title retains cinematic anime imagery, ink/ivory/coral/cyan controls and restrained typography. Decisions retain clear equal choices; fallback and ending cards stay within the same interface identity. Text remains readable and the small interface supports the narrative. Appearance equivalence confirms M5 did not redesign the accepted prototype. The many unillustrated scene/aftermath cards remain an obvious coverage limitation; M5 prepares their replacement rather than claiming the experience is now fully illustrated.

Candidate crop inspection removed companion fragments from Alex-only framing and later intimacy from the clinical detail. Native resolution is a genuine limit: nurse/IV and Alex-alone details need inset presentation, looser crops or continued interim text on desktop. New-master crop feasibility and character likeness are requirements for later review, not already demonstrated by specifications. Accurate white-sphere/city illustrations remain deferred; no rejected composite was reused or new sphere experiment attempted.

Axe `color-contrast` incomplete is not counted as a pass; title image-overlay contrast requires manual assessment. No physical-device, screen-reader, independent first-time-reader, extra browser-engine, low-end-hardware or deployed-site result is claimed. Original asset rights remain undocumented. Final aesthetic/artwork and release approval remain with the owner.

## Reproduce

Use the static-server and external QA-tool setup in the [experience README](../experiences/graphic-novel/README.md); no runtime dependencies were added. Commands are in [M5 integration](M5_INTEGRATION.md). Run browser cases serially with a fresh local server as needed. Set `BASE_URL`, `TEST_WIDTHS`, `TEST_LANGUAGES`, `REPORT_NAME=browser-<width>-<en|zh>.json`, `M4_RUN_GROUP=m5-20261106`, `EVIDENCE_DIR=../docs/m5-evidence/` and `AXE_PATH` to the installed axe script. Merge with `node scripts/m4-evidence.mjs m5-20261106 m5-evidence`. Resilience uses the same evidence directory override. Use a new directory/group if preserving this snapshot.

For the paired comparison, extract `git archive 4c9ee3a experiences/graphic-novel` into a temporary directory. Serve its experience at port 8036 and the current experience at 8037, then run `node scripts/m5-equivalence.mjs`. `BEFORE_URL`/`BASE_URL` override those origins. `node scripts/m5-crops.mjs` recreates the inspection sheet from original bytes using only browser CSS clipping. These QA scripts require the existing local Playwright/Chromium tools and write only M5 evidence.

No merge, deployment, paid service or artwork production is part of verification. Pause for the [owner’s production-method decision](M5_OWNER_REVIEW.md).
