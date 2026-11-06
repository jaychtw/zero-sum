# Zero Sum M4 — bilingual screenplay owner preview

2026-11-06 · `dev/graphic-novel-foundation` · [draft PR #1](https://github.com/jaychtw/zero-sum/pull/1)

**M4 is implemented and ready for owner preview; pause here before merge/deployment.** The entire owner-approved EN/zh-TW screenplay v0.2 is now active in the graphic novel. Language approval does not constitute acceptance of this new panel composition, final illustrations, accessibility certification or public release.

## What changed and what stayed

- **70 paired panels**, 19 original runtime scenes, eight decisions and all nine endings. Each panel retains exact source wording, paragraph line ranges and dialogue attribution. Approved source files are unchanged and SHA-256 locked. Earlier compact prose and v0.1 are not used as editorial authority.
- The first fork explicitly establishes **two cars and the transfer bay**. Alex/Pete exchange vehicles only on the Karl route; Alex remains with Misaki on the other route. All later participant assignments follow v0.2.
- **Reader-paced Next/Previous** throughout; cross-scene back restores a prior decision's last panel, enabling a different choice without corrupting history. Live language switching preserves the paired panel and focus. Replay/restart, keyboard/touch and optional language storage remain.
- Ending C preserves **three phases across five screens**: three approach/confrontation panels, activation, then boundary. New approved Karl dialogue replaces the compact M2 wording; no duplicate old C prose or rejected sphere art.
- Accepted title, ink/ivory/coral/cyan palette, typography vocabulary and equal choice treatment remain. Dialogue is explicitly attributed; panel progress is included in focused heading descriptions. No new artwork, video, runtime dependency, service, paid tool or backend.
- Original eight illustrations, compact `story.js`/`ending-c.js`, prior manuscripts and all M1/M2/readiness evidence remain unchanged. The old app is recoverable at `4ed8b9c`; no existing runtime/scene/branch identifiers were renamed.

[Source-to-runtime mapping and composition annotations](M4_INTEGRATION_MAPPING.md) · [panel plan](../narrative/panel-plan.v1.json) · [source hash lock](../narrative/screenplay-lock.v02.json) · [approval ledger](BILINGUAL_SCREENPLAY_REVIEW_V02.md).

The one English transfer paragraph corresponds to two Chinese paragraphs; both remain on the same paired panel. The source's isolated C activation sentence is staged after its BEAT ONE direction and beside BEAT TWO. All words remain; this one order adjustment is explicitly annotated. Markdown emphasis becomes presentation formatting/plain text; source END/navigation markers become final state/controls. Source stage/HOLD/CUT/BEAT wording is retained as readable direction/action cues rather than silently edited away.

## Reading length and pacing tradeoff

Routes now have **18–25 reader-paced panels** versus **5–9** in the compact prototype. Panels are manually grouped around exchanges, reveals, silence and location changes, not mechanically one paragraph per screen. Maximum panel body: **100 English words / 219 zh-TW text characters (including punctuation)**. Longer phone panels may require vertical scrolling; controls remain reachable. Counts below include displayed action/direction/dialogue body (not choice labels or speaker headings); zh-TW character counts include punctuation; these are counts, not measured reading times.

| Ending | Compact panels | M4 panels | Compact EN words | M4 EN words | M4 zh characters |
| --- | ---: | ---: | ---: | ---: | ---: |
| A | 6 | 22 | 192 | 1149 | 2261 |
| B | 7 | 23 | 223 | 1148 | 2315 |
| C | 9 | 25 | 269 | 1284 | 2577 |
| D | 5 | 18 | 163 | 1006 | 1996 |
| E | 5 | 18 | 152 | 871 | 1733 |
| F | 5 | 18 | 145 | 886 | 1769 |
| G | 5 | 19 | 161 | 985 | 1908 |
| H | 5 | 22 | 155 | 1071 | 2076 |
| I | 5 | 20 | 171 | 1085 | 2144 |

[Machine-readable length comparison](../experiences/graphic-novel/docs/m4-evidence/reading-lengths.json). Before examples: [compact opening](../experiences/graphic-novel/docs/evidence/390-en-narrative.jpg), [compact first fork](../experiences/graphic-novel/docs/evidence/390-en-decision.jpg), [accepted interim C](../experiences/graphic-novel/docs/m2-evidence/after-390-en-beat3.jpg). M4 examples are below. This is a deliberate content expansion authorized for the full screenplay, not a claim that its new pacing is already owner-accepted.

## Verification executed

Source/code checkpoints: `b0a0d13` initial mapping; `a0a3d76` complete integration; `7cd8124` final scoped title-specificity correction; `80be7ac` bounded verification/freshness tooling; subsequent evidence/handoff commit contains this report. Runtime base: `4ed8b9c`. Browser tooling: Node **24.22.1**, Playwright **1.62.1**, Chromium **155.0.8059.79**, axe-core **4.11.0**, Linux.

| Command / check | Result |
| --- | --- |
| `node scripts/build-screenplay.mjs --check` (root) | PASS — committed dataset matches both approved sources and explicit plan |
| `node scripts/screenplay.test.mjs` / `npm test` (experience) | PASS — locked source hashes; 70 paired panels; **459 source paragraphs** accounted for exactly once; source order except recorded C adjustment; exact destinations/branch IDs; all nine full panel-navigation paths; early-choice rejection, within/cross-scene back, alternate choice, reset/replay |
| `node scripts/narrative.test.mjs` (root) | PASS — retained stable-ID coverage, original graph, asset integrity and eight negative guard cases |
| Eight `TEST_WIDTHS=W TEST_LANGUAGES=L REPORT_NAME=browser-W-L.json M4_RUN_GROUP=m4-final-7cd8124 AXE_PATH=… npm run test:browser` cases, then `node scripts/m4-evidence.mjs m4-final-7cd8124` | PASS — **72 complete routes** (9 × 4 widths × 2 languages), **560 unique panel/viewport/language checks**, **288 axe audits**, **72 screenshots**, no reported violations, browser errors or failed normal assets |
| `AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:resilience` | PASS — **12 full-manuscript C/D/G fault playthroughs**, **12 audits**; seven active illustration files deliberately return 404; source prose/progress survives and fallback is localized |
| Independent reconstruction | PASS — `git archive` export of final code checkpoint, source/graph tests without app installation, actual `/zero-sum/experiences/graphic-novel/` HTTP path, complete 25-panel C route, live zh-TW at matching boundary, replay; no external runtime request or compact-prose module loaded |

Exact bounded-run example (from the experience directory, with its fresh loopback server on 8023):

```sh
BASE_URL=http://127.0.0.1:8023 TEST_WIDTHS=1440 TEST_LANGUAGES=zh \
REPORT_NAME=browser-1440-zh.json M4_RUN_GROUP=m4-final-7cd8124 \
AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:browser
```

The eight completed width/language combinations are listed in the merged report. From root: `node scripts/m4-evidence.mjs m4-final-7cd8124` validates and aggregates them. Standard startup and tool installation are in the experience README; loopback port selection is local test setup, not deployment.

[Browser results](../experiences/graphic-novel/docs/m4-evidence/browser-results.json) · [fault results](../experiences/graphic-novel/docs/m4-evidence/resilience-results.json) · [reconstruction](../experiences/graphic-novel/docs/m4-evidence/reconstruction-results.json).

Normal coverage: **320×844, 390×844, 768×1000, 1440×1000**, English and Traditional Chinese; phone contexts use touch emulation. Every unique panel is checked against approved visible text and speaker attribution, then switched to the other language and back at the same position (**560 switch-roundtrip checks**). All major decisions and ending distinctions are exercised; within-scene back, cross-choice restoration, alternate first-branch revisit, replay/reset/confirmation/cancel/Escape, keyboard-only complete C, skip/focus, storage denied, reduced-motion static boundary, 44px controls, image loading and horizontal overflow are checked. Fault coverage uses both languages at 320/1440px. Expected injected 404s are separate from normal failures.

Three bounded review passes: initial integration/source/navigation/full-suite review; a scoped card-title specificity correction and rendered review; final per-viewport/language verification with complete reports. A long-lived test/server session ended without a fresh final report, which freshness checks detected. Short runs start their own loopback server; transient parallel locator timeouts were addressed by serial execution and explicitly waiting for language restoration before the next action. All source/navigation assertions remain enabled. No application logic changed during this test-driver refinement. Completed phone cases with matching runtime hashes were retained; interrupted or failed cases were not counted. Keyboard-only C/storage-denied/static-boundary checks run in 1440/en; each report’s width/language metrics describe its selected case. Final aggregation requires eight passed reports with matching runtime hashes, 9 routes and 70 panels each; incomplete/stale reports cannot count as success. Final reconstruction also confirms the intended 22px phone card title.

## Representative current renders

All screenshots are actual current browser captures; old QA directories remain intact. Ending C phase 3 is the ending-C final render in the all-endings table.

| State | Desktop EN | Mobile EN | Desktop 繁中 | Mobile 繁中 |
| --- | --- | --- | --- | --- |
| Title | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-title.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-title.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-title.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-title.jpg) |
| Opening | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-opening.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-opening.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-opening.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-opening.jpg) |
| Two-car staging | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-two-vehicles.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-two-vehicles.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-two-vehicles.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-two-vehicles.jpg) |
| Character dialogue | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-dialogue.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-dialogue.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-dialogue.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-dialogue.jpg) |
| First fork / transfer bay | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-first-fork-transfer.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-first-fork-transfer.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-first-fork-transfer.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-first-fork-transfer.jpg) |
| C phase 1 / conviction | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-C-phase1.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-C-phase1.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-C-phase1.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-C-phase1.jpg) |
| C phase 2 / activation | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-C-phase2.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-C-phase2.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-C-phase2.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-C-phase2.jpg) |
| H inquiry | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-H-inquiry.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-H-inquiry.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-H-inquiry.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-H-inquiry.jpg) |
| I rehabilitation | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-I-rehabilitation.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-I-rehabilitation.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-I-rehabilitation.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-I-rehabilitation.jpg) |

All nine ending final panels (G/H/I show their distinct aftermaths):

| Ending | Desktop EN | Mobile EN | Desktop 繁中 | Mobile 繁中 |
| --- | --- | --- | --- | --- |
| A | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-A.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-A.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-A.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-A.jpg) |
| B | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-B.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-B.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-B.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-B.jpg) |
| C | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-C.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-C.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-C.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-C.jpg) |
| D | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-D.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-D.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-D.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-D.jpg) |
| E | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-E.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-E.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-E.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-E.jpg) |
| F | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-F.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-F.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-F.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-F.jpg) |
| G | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-G.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-G.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-G.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-G.jpg) |
| H | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-H.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-H.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-H.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-H.jpg) |
| I | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-en-ending-I.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-en-ending-I.jpg) | [1440px](../experiences/graphic-novel/docs/m4-evidence/1440-zh-ending-I.jpg) | [390px](../experiences/graphic-novel/docs/m4-evidence/390-zh-ending-I.jpg) |

Fault-injected recovery: [320px EN](../experiences/graphic-novel/docs/m4-evidence/320-en-missing-art.jpg), [320px 繁中](../experiences/graphic-novel/docs/m4-evidence/320-zh-missing-art.jpg), [desktop EN](../experiences/graphic-novel/docs/m4-evidence/1440-en-missing-art.jpg), [desktop 繁中](../experiences/graphic-novel/docs/m4-evidence/1440-zh-missing-art.jpg).

## Visual/content assessment and remaining limits

Agent review of composed opening, first fork/transfer, dialogue, three C phases and G/H/I material at desktop/mobile in both languages found the retained interface consistent and readable. Dialogue attribution and silence/actions are visible; the nine ending fates/relationships remain distinct and choices are not morally scored. Automated success is not owner aesthetic acceptance.

**14 illustrated panels / 56 text-led panels.** Existing art is selected for relevant bridge, rifle, injury, capture, hospital and cropped ascent beats. It is still reference art, not a newly commissioned literal shot list. The cover remains conceptual identity, not evidence of the approved two-car blocking. No new/corrected city panorama, sphere diagram or portal/ring experiment was created. Missing funeral, inquiry, rehabilitation, evacuation, skyline-erasure and vigilante illustrations are explicit production-art gaps; typography/placeholders are not claimed as final art.

Image provenance/production rights remain **NOT DOCUMENTED** in the original archive; see [asset manifest](../narrative/assets.v1.json) and [source notes](../experiences/graphic-novel/docs/SOURCE_ARCHIVE.md). Approved screenplay adaptation does not confer image licenses. Original verbatim historical screenplay remains unrecovered, but both approved authored v0.2 sources are present and fully integrated; no screenplay recovery request blocks this milestone.

Axe still reports **`color-contrast` incomplete** over the inherited title image/pseudo-element overlay. Incomplete is not pass; the [earlier manual/palette assessment](../experiences/graphic-novel/docs/QA.md) remains limited. No complete accessibility certification. Physical-device touch, screen-reader usability, independent first-time-player reading, other browser engines, low-end hardware performance and actual public-host behavior remain **NOT VERIFIED**. Static-subdirectory testing is local, not deployment. No CI/live-production success is claimed.

## Owner preview / recovery

Please assess the **new reading pace and text-led/dialogue presentation** against the approved v0.2 screenplay; language approval is already recorded. This review does not request new art production or authorize release. Work pauses here for owner preview.

[Run/authoring/QA instructions](../experiences/graphic-novel/README.md) · [recovery handoff](CODEX_HANDOFF.md). The committed static app needs no build/install. Source edits require explicit approval; authorized panel-plan edits can regenerate the dataset with built-in Node tools. Keep stable IDs and previous evidence, retain the rejected sphere status, and do not restore condensed prose over approved v0.2. No merge, deployment, paid service, new artwork or Possibility change.
