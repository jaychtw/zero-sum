# M2 Ending C — verification and before/after evidence

2026-11-05. Baseline: owner-accepted M1 `9b01058`; M2 brief/state received in `fc18b9a`. Interim implementation checkpoint: `7d18d9f`, followed by this evidence/handoff checkpoint. No merge, deployment, paid service, backend, dependency, video pipeline or Possibility changes.

## Outcome and limitation

Ending C now has three reader-paced bilingual presentation beats: ascent/Karl's conviction, explicit activation, and loss plus the Downtown boundary. The original nine-ending narrative graph and scene data are unchanged. The ascent reframes the existing illustration to exclude the inaccurate ring; the other two panels explicitly state that an illustration is pending.

**Faithful sphere artwork is not complete.** A hard white-disk/city composite was tried and rejected after browser inspection: the inherited foreground combat and pasted-on silhouette do not convincingly depict the canonical event. The rejected code is not shipped. Accurate text-led cards are the interim alternative, not a claim of visual completion. The [beat sheet and specific single-city-plate brief](../../../docs/M2_ENDING_C_BEATS.md) explain the exact next art input and why further effects would not repair the existing crop. New connective narration remains proposed adaptation, not final screenplay.

## Verification executed

From `experiences/graphic-novel/`:

- `npm test`: **PASS**. Original graph/session cases and new three-beat locale completeness/order checks. Nineteen bilingual nodes, eight exact choices, nine reachable endings; all original invalid-graph and navigation cases retained.
- `node --check app.js`, `ending-c.js`, `tests/browser.test.js`: **PASS**.
- `AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:browser`: **PASS**, exit 0. **72 complete ending routes**, all nine endings × four widths × two languages. **90 axe audits**, zero reported WCAG 2 A/AA or 2.1 AA violations. No browser errors or failed assets. [Machine-readable results](m2-evidence/browser-results.json).
- Chromium **155.0.8059.79**, Playwright **1.62.1**, axe-core **4.11.0**, Linux; viewports **320×844, 390×844, 768×1000, 1440×1000**. Phone contexts use emulated touch. Desktop/mobile screenshots below are actual browser renders.
- Ending C: all three beats advance, Previous panel reverses through them to the tower choice, replay returns to opening, live language switching retains the current beat, heading focus remains usable, keyboard-only route reaches all three panels, and restart confirm/cancel/Escape work. Completed final-panel pixels match with normal and reduced motion. The parity check completes normal entry animations before comparison, rather than comparing an in-flight fade against its static endpoint.
- Existing regression coverage remains: live scene switching, optional storage denied, language preference retained, focus/skip link, loaded images, reduced motion, no horizontal overflow or clipped buttons, 44px minimum visible buttons. All 19 nodes plus the two extra Ending C presentation beats and title audited in both languages at 390/1440px; restart dialog audited twice.
- Additional focused check: all actual temporary-card text rectangles fit within the frame at 320/390px in both languages, eight panel cases. [Bounds results](m2-evidence/text-bounds.json). The container's padding can extend slightly beyond the smallest frame; the text itself remains fully visible.
- `git diff fc18b9a -- experiences/graphic-novel/story.js experiences/graphic-novel/session.js experiences/graphic-novel/style.css experiences/graphic-novel/assets`: empty. Original narrative, graph, navigation engine, base styles and artwork bytes remain unchanged; only the Ending C renderer branch and isolated metadata/style files extend the accepted UI.

## Before/after screenshots

The two **before** images are preserved byte-for-byte from accepted M1 evidence at `9b01058`, not newly generated or relabeled current output:

| M1 ending | Desktop | Mobile |
| --- | --- | --- |
| Original single panel | [1440px EN](m2-evidence/before-1440-en-ending.jpg) | [390px EN](m2-evidence/before-390-en-ending.jpg) |

All **after** images below come from the successful current M2 browser run. M1 screenshots and QA are preserved in their original directory.

| M2 beat | Desktop EN | Mobile EN | Desktop 繁中 | Mobile 繁中 |
| --- | --- | --- | --- | --- |
| 1 — Ascent / Karl's conviction | [1440px](m2-evidence/after-1440-en-beat1.jpg) | [390px](m2-evidence/after-390-en-beat1.jpg) | [1440px](m2-evidence/after-1440-zh-beat1.jpg) | [390px](m2-evidence/after-390-zh-beat1.jpg) |
| 2 — Activation / illustration pending | [1440px](m2-evidence/after-1440-en-beat2.jpg) | [390px](m2-evidence/after-390-en-beat2.jpg) | [1440px](m2-evidence/after-1440-zh-beat2.jpg) | [390px](m2-evidence/after-390-zh-beat2.jpg) |
| 3 — Boundary / illustration pending | [1440px](m2-evidence/after-1440-en-beat3.jpg) | [390px](m2-evidence/after-390-en-beat3.jpg) | [1440px](m2-evidence/after-1440-zh-beat3.jpg) | [390px](m2-evidence/after-390-zh-beat3.jpg) |

[Rejected sphere experiment — not the shipped treatment](m2-evidence/rejected-sphere-study.jpg).

## Composed assessment and unverified items

Agent inspection of the rendered ascent and two temporary cards at desktop/mobile widths: the existing illustration, ink/ivory/coral/cyan palette, typography and primary/back controls remain consistent with accepted M1. Separating the beats gives Karl's line and the outcome distinct reading intervals. The final text explicitly states matter erasure and Downtown's survival without attributing knowledge of alternate timelines to Alex. The temporary cards avoid a misleading portal image but are visibly unfinished illustration slots, particularly at desktop size. This is **not** faithful finished sphere art or owner acceptance of M2.

The M1 image-overlay contrast manual limit persists: axe reports `color-contrast` incomplete for the title image overlay. Incomplete checks are not counted as passes. Existing palette/visual contrast review is in [M1 QA](QA.md); no new image-text overlay was added for the temporary cards. Physical-device, screen-reader, independent first-time-player, other browser engines, low-end performance and production accessibility certification remain **not verified**. No deployment or live public behavior is claimed.

## Owner review and continuation

Smallest decision: keep this three-beat, text-led interim Ending C while the single faithful city illustration is pending, or defer the pacing change until that plate is available. No broad art production is authorized by this review. M1 remains accepted. Reproduce with the experience README commands; browser results now go to `docs/m2-evidence/`. The bounded experiment demonstrated that geometric correctness alone is insufficient for illustration integration; do not repeat the white-disk overlay or hide its issues with effects.
