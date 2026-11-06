# Zero Sum — consolidated owner-preview review

2026-11-05 · `dev/graphic-novel-foundation` · [draft PR #1](https://github.com/jaychtw/zero-sum/pull/1)

**Recommendation: ready for an owner preview of the provisional graphic novel. Not ready for final screenplay/art approval or public production release.** All feasible tasks in the [autonomous mandate](AUTONOMOUS_CONTINUATION.md) are completed below. The original full screenplay remains **NOT RECOVERED**; it was not invented or substituted with expanded prototype prose. M1 and the M2 text-led interim presentation remain accepted.

## Delivered and preserved

| Area | Result | Evidence |
| --- | --- | --- |
| Known narrative | 19 scenes, 32 sourced beats, 16 directed choices, nine ending paths, five named characters and geography/moral constraints; confidence and missing exact dialogue/shots recorded for every pathway | [Inventory and gap register](NARRATIVE_CONSOLIDATION.md) |
| Stable identity | Versioned, presentation-neutral scene/beat/branch/route IDs with explicit runtime mapping and drift checks; runtime keys and history unchanged | [Registry and compatibility policy](../narrative/README.md) |
| Manuscript/art mapping | All 19 scenes mapped; eight image hashes/sizes/provenance gaps; accepted tower/C temporary treatments explicit | [Asset manifest](../narrative/assets.v1.json) |
| Targeted hardening | Missing title, scene or cropped illustration now yields a localized, accessible text fallback; play/replay continue; no image-retry loop | [Fault results](../experiences/graphic-novel/docs/readiness-evidence/resilience-results.json) |
| Accepted baseline | Original story prose/graph, M2 three beats, original assets, navigation engine and base styles preserved. No new runtime dependency, backend, engine or art pipeline | [M1 evidence](../experiences/graphic-novel/docs/QA.md), [M2 acceptance/evidence](../experiences/graphic-novel/docs/M2_QA.md) |

Recovery checkpoints: `dd1f133` owner mandate; `f4bbae0` inventory/IDs; `88117dc` fallback/tests; the subsequent review/evidence commit contains this package. Draft PR #1 was observed as Draft via read-only retrieval and left unchanged. No merge, Pages deployment, Possibility change, paid service or public release occurred.

## Verification actually executed

Node **24.22.1**, Playwright **1.62.1**, Chromium **155.0.8059.79**, axe-core **4.11.0**, Linux. Tests completed; no skipped route or zero-test run is counted as a pass.

| Check | Outcome |
| --- | --- |
| `node scripts/narrative.test.mjs` (root) | PASS: source/identity/runtime coverage, exact edges, nine valid ending routes, nested locale keys, eight asset hashes; eight negative cases reject missing coverage/source, false recovery, ID drift, invalid edges/routes and damaged hashes |
| `npm test` (experience directory) | PASS: original 19-node graph, eight decisions, nine endings, bilingual scene/choice strings, graph mutation and session recovery cases, three-beat C localization/order |
| `AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:browser` | PASS: **72** complete ending playthroughs (9 × 4 widths × 2 languages), **90** axe audits, zero reported violations/errors/failed assets, **33** current browser screenshots |
| `AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:resilience` | PASS: **12** fault-injected C/D/G playthroughs and **12** axe audits; all eight images deliberately return 404; no script failure, broken-image residue or blocked progression |
| Accepted composition | PASS: **14** exact decoded story-area pixel comparisons against accepted title/C captures. Interactive toolbar hover state is excluded from image comparison and controls are exercised separately |
| Independent reconstruction | PASS: tests from `git archive` export of `88117dc`, without installed app dependencies or retained setup files; actual HTTP subdirectory Ending C, live zh-TW and replay; all resource requests local to the app, no runtime CDN/API |

[Full browser results](../experiences/graphic-novel/docs/readiness-evidence/browser-results.json) · [fault results](../experiences/graphic-novel/docs/readiness-evidence/resilience-results.json) · [reconstruction results](../experiences/graphic-novel/docs/readiness-evidence/reconstruction-results.json).

Normal routes cover **320×844, 390×844, 768×1000 and 1440×1000**, EN/zh-TW; phone contexts use touch emulation. Checks include keyboard-only Ending C, Tab/Enter/1/2, skip link and heading focus, live scene/beat switching, restart confirmation/cancel/Escape, previous panel, replay, optional storage denied, language preference, image loading, reduced motion and final-panel pixel parity, 44px controls, and no horizontal overflow/clipped controls. Missing-art routes additionally cover both languages at 320/1440px. Normal failures list is empty; injected 404s are expected and listed separately.

Three bounded passes were used: known-source inventory; targeted missing-art fix and review; final verification. One over-strict full-JPEG comparison exposed historical toolbar hover differences, not narrative/layout changes. After diagnosis, exact story-area comparison passed. No further cosmetic or sphere iteration was initiated.

## Current desktop/mobile evidence

All links below show the running current build. Accepted M1/M2 screenshots and rejected-study records remain untouched.

| State | Desktop EN | Mobile EN | Desktop 繁中 | Mobile 繁中 |
| --- | --- | --- | --- | --- |
| Title | [1440px](../experiences/graphic-novel/docs/readiness-evidence/1440-en-title.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/390-en-title.jpg) | [1440px](../experiences/graphic-novel/docs/readiness-evidence/1440-zh-title.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/390-zh-title.jpg) |
| Opening | [1440px](../experiences/graphic-novel/docs/readiness-evidence/1440-en-narrative.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/390-en-narrative.jpg) | [1440px](../experiences/graphic-novel/docs/readiness-evidence/1440-zh-narrative.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/390-zh-narrative.jpg) |
| Decision | [1440px](../experiences/graphic-novel/docs/readiness-evidence/1440-en-decision.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/390-en-decision.jpg) | [1440px](../experiences/graphic-novel/docs/readiness-evidence/1440-zh-decision.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/390-zh-decision.jpg) |
| Ending C final beat | [1440px](../experiences/graphic-novel/docs/readiness-evidence/after-1440-en-beat3.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/after-390-en-beat3.jpg) | [1440px](../experiences/graphic-novel/docs/readiness-evidence/after-1440-zh-beat3.jpg) | [390px](../experiences/graphic-novel/docs/readiness-evidence/after-390-zh-beat3.jpg) |
| Missing-art recovery | [1440px](../experiences/graphic-novel/docs/readiness-evidence/missing-art-1440-en.jpg) | [320px](../experiences/graphic-novel/docs/readiness-evidence/missing-art-320-en.jpg) | [1440px](../experiences/graphic-novel/docs/readiness-evidence/missing-art-1440-zh.jpg) | [320px](../experiences/graphic-novel/docs/readiness-evidence/missing-art-320-zh.jpg) |

All nine ending screenshots (mobile EN): [A](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-A.jpg), [B](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-B.jpg), [C](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-C.jpg), [D](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-D.jpg), [E](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-E.jpg), [F](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-F.jpg), [G](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-G.jpg), [H](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-H.jpg), [I](../experiences/graphic-novel/docs/readiness-evidence/390-en-ending-I.jpg). All C beat captures are listed in the machine-readable results.

Agent review of all path summaries/rendered routes, representative composed desktop/mobile screens, hospital/vigilante endings and missing-art screens found no new moral ranking, changed outcome, foreknowledge for Alex or appearance redesign. Both decisions retain equal treatment. Screenshots/test success do not confer new owner aesthetic or final narrative approval.

## Remaining limitations and one next input

- **Complete original screenplay: NOT RECOVERED.** Precise dialogue, shot sequence/timing and authoritative bilingual translation remain gaps on every route. Known-summary coverage is complete; complete-screenplay consolidation is not claimed.
- **Asset rights/provenance: NOT DOCUMENTED** for all eight uploaded illustrations. Original source/model references and production clearance must be resolved before public production use. No licensing permission is invented.
- **Final art deferred:** accepted C text cards remain; the rejected sphere composite remains rejected. Other provisional illustrations do not literally cover every aftermath. No new sphere experiment is proposed here.
- **Contrast manual limit persists:** axe reports `color-contrast` incomplete over the existing title image/pseudo-element overlay. It is not counted as a pass. Prior manual/palette assessment remains in M1 QA; not a complete accessibility certification.
- Physical devices, screen readers, independent first-time-player review, additional browser engines and low-end-device performance are **NOT VERIFIED**. Small static assets/no runtime services do not prove hardware performance. No CI/deployed/live-production check is claimed.

**Next owner input:** provide an accessible copy of the original owner-approved full screenplay when final narrative consolidation is desired. This is a content limitation for final narrative work, not a blocker for this provisional owner preview. The source can then be reconciled to stable IDs without silently replacing the accepted playable experience. No milestone-by-milestone approval or immediate art work is requested.

## Reproduce and recover

Use the existing checkout and working branch; no worktree is needed. The [experience README](../experiences/graphic-novel/README.md) contains exact static-server commands and pinned external QA-tool installation. The application itself needs no dependency installation or build. Services and temporary QA tools must be restarted/restored in a fresh environment. Run registry tests from root, application tests from `experiences/graphic-novel/`, start the local HTTP server, then run the two browser commands above. Current reports go to `docs/readiness-evidence/`; use `EVIDENCE_DIR` for a separate full-suite output directory if preserving a particular run.

Publication, merge, production acceptance, other adaptations and visual-production expansion remain outside the completed workstream.
