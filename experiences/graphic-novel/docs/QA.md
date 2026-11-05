# M1 verification — 2026-11-05

Scope: local static M1 build on `dev/graphic-novel-foundation`, from owner source archive; no merge, deployment, or portal changes. [Reproduction commands](../README.md). [Machine-readable final browser results](evidence/browser-results.json).

## Executed results

- `npm test`: **PASS**. Original graph plus expanded assertions cover 19 bilingual nodes, eight exact decision mappings, all nine reachable endings A–I, no missing/cyclic/dead-end links, expected rejection of invalid graphs/transitions, local image presence, UI locale key parity, session back/replay/reset. Original scene text and edges are unchanged.
- `node --check app.js`, `session.js`, `presentation.js`, `tests/browser.test.js`: **PASS**.
- `AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:browser`: **PASS**, exit 0. Chromium **155.0.8059.79**, Playwright **1.62.1**, axe-core **4.11.0**, Linux. **72 complete browser ending routes** = 9 endings × 4 viewport widths × 2 languages. No browser script errors or failed asset requests.
- Viewports: **320×844**, **390×844**, **768×1000**, **1440×1000** CSS pixels. Phone contexts use emulated mobile and touch input. English and Traditional Chinese covered at each width. No physical-device claims.
- **82 axe audits**, zero reported violations in WCAG 2 A/AA and 2.1 AA rules. All 19 story nodes plus title audited in both languages at 390px and 1440px; restart dialog audited in both languages at 390px.
- Additional browser assertions: Ending C complete route; live language switching keeps scene/history and focus on the language button; replay; previous panel; restart confirm/cancel/Escape; keyboard-only Ending C using Tab/Enter/1/2; skip link; scene heading focus after navigation; optional storage denied without failure; language retained on reload; loaded images; reduced-motion animations absent; visible buttons at least 44×44px; horizontal overflow checked against configured viewport width.
- Sixteen current-run full-page JPEG screenshots: four required states × desktop/mobile × both languages. These are actual browser renders, not mockups. Evidence is about 2.9 MB.

During review, a 320px previous-panel alignment issue and a single-line mobile title expanding the viewport were corrected. The layout assertion was strengthened to compare against the emulated viewport, and the entire browser suite and evidence capture were rerun after the fixes.

## Screenshots

| State | Desktop EN | Mobile EN | Desktop 繁中 | Mobile 繁中 |
| --- | --- | --- | --- | --- |
| Title | [1440px](evidence/1440-en-title.jpg) | [390px](evidence/390-en-title.jpg) | [1440px](evidence/1440-zh-title.jpg) | [390px](evidence/390-zh-title.jpg) |
| Narrative | [1440px](evidence/1440-en-narrative.jpg) | [390px](evidence/390-en-narrative.jpg) | [1440px](evidence/1440-zh-narrative.jpg) | [390px](evidence/390-zh-narrative.jpg) |
| Decision | [1440px](evidence/1440-en-decision.jpg) | [390px](evidence/390-en-decision.jpg) | [1440px](evidence/1440-zh-decision.jpg) | [390px](evidence/390-zh-decision.jpg) |
| Ending C | [1440px](evidence/1440-en-ending.jpg) | [390px](evidence/390-en-ending.jpg) | [1440px](evidence/1440-zh-ending.jpg) | [390px](evidence/390-zh-ending.jpg) |

## Composed visual evaluation

Agent inspection of desktop/mobile title, narrative, sniper decision, and Ending C renders: the image-led composition, ink/ivory palette with coral and muted cyan accents, large stacked title, serif narrative, monospaced tactical captions, square numbered choices and consistent replay treatment form a coherent retro-anime presentation. The desktop title uses an image-overlay composition; phones stack the full uncropped image and title. Narrative frames preserve the full 16:9 illustrations on both sizes, rather than cropping out narrative information. Decisions have a separate dramatic heading, generous spacing and equally weighted options; neither is presented as the correct moral choice. Normal motion is a short panel fade; reduced motion removes it. Reading and choices may require vertical scrolling, especially on desktop with the full illustration.

**This is an implementation assessment, not owner aesthetic approval.** The experience is a provisional M1 adaptation. Reused artwork is not accepted production art; [source notes](SOURCE_ARCHIVE.md) record the inaccurate ring-like device, missing aftermath panels, asset provenance gap, and condensed-text limitation. The tower approach uses a clearly identified temporary panel rather than prematurely showing the final event. No broad art production or generated replacement was undertaken.

## Accessibility limits

Axe reported `color-contrast` as **incomplete** on the desktop title because it cannot infer the image/pseudo-element overlay background; incomplete checks are not counted as passes. Agent visual inspection found the dark left gradient readable in both languages. Palette calculations give ink/ivory **15.84:1**, muted text/ink **9.31:1**, coral/ink (and primary button ink/coral) **7.28:1**, cyan/ink **10.55:1**. These solid-color ratios do not prove every image-overlay pixel's contrast. Contrast over artwork remains a manual-review item; owner review and assistive-technology testing remain distinct from the zero-violation automated result.

Physical touch hardware, screen-reader announcements/navigation, independent first-time player usability, additional browser engines, long-session performance on low-end devices, and formal production accessibility certification: **NOT VERIFIED**. No known unresolved critical automated accessibility violation; no claim of complete accessibility certification.

## Delivery and next step

Source import checkpoint: `8dc6b03`. The subsequent implementation/evidence checkpoint on the same development branch contains this report and can be identified through its Git history. No CI workflow, GitHub Pages deployment, or live public behavior has been run or claimed. No runtime dependency or paid provider was added.

Next smallest useful improvement: owner reviews the composed screenshots, then approve one accurate Ending C illustration/panel treatment. The full screenplay and asset provenance can be clarified before production promotion. Process lesson: screenshot inspection must accompany layout assertions; mobile viewport expansion can hide overflowing typography from an `innerWidth`-only check. This is recorded locally without changing shared standards.
