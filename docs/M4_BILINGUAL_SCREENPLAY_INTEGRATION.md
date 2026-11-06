# Zero Sum — M4 Bilingual Screenplay Integration Mandate

**Owner authorization:** 2026-11-06, after approving both the English and Traditional Chinese v0.2 dramatic screenplays.  
**Status at authorization:** AUTHORIZED for bounded Codex implementation, **not yet executed**.

**Working branch:** `dev/graphic-novel-foundation`; keep draft PR #1 open.  
**Source baseline:** PR HEAD `1679b33` before this mandate; verify current head at task start.

**Execution update (2026-11-06):** Full integration is implemented. See [M4 owner-preview package](M4_OWNER_PREVIEW.md) for the current code/evidence and remaining limits. New panel composition awaits owner preview; no merge/deployment. The mandate below is retained as the authorized scope.

## Purpose
Adapt the **entire approved bilingual branching screenplay** into the existing **interactive graphic novel** as a readable, dramatic, scene-paced experience—without losing nine endings, choices or the accepted interface identity. This is **content integration**, not a demand for a video/anime production pipeline.

## Locked screenplay sources
- [English v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md) — owner-approved 2026-11-06.
- [Traditional Chinese v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md) — owner-approved 2026-11-06.
- [Bilingual approval and alignment record](BILINGUAL_SCREENPLAY_REVIEW_V02.md).
- [Stable identifiers and registry](../narrative/README.md); [known canon](ZERO_SUM_CANON.md).
- M1 accepted build, M2 interim Ending C treatment, and [pre-release QA evidence](PRE_RELEASE_REVIEW.md).

Do not use the old condensed `story.js` prose or earlier screenplay v0.1 as editorial authority over approved v0.2. Keep a recoverable copy of the original app content.

## Mandate (Codex may plan, implement and validate autonomously)

### A. Content design and mapping
1. Map all **10 non-ending screenplay sections, 8 decision points and 9 endings** to the original 19 runtime scene IDs and versioned narrative IDs. The screenplay uses S00/S01/... section titles; those headings are presentation labels, NOT renaming instructions for registry keys.
2. Decompose each screenplay section into *reader-paced panels or dialogue/action beats* retaining significant action, character dialogue, meaningful silence and location context. Avoid a single giant scroll block per ending. Do not convert every paragraph mechanically into a new screen; compose thoughtfully for readable desktop/mobile lengths.
3. Maintain one bilingual, order-aligned panel dataset with reliable EN/zh-TW pairing and editorial source traceability. Treat narration, dialogue, decisions, endings and panel/art metadata separately as appropriate; choose the **simplest static architecture** that preserves the already accepted app.
4. Handle the first-junction **two-vehicle/transfer-bay staging**, as approved; follow consistent participant assignments on both paths.
5. Keep all **nine canonical endings**, including the differences between B/C/E/F, the distinct outcomes A and D, and the emotional trajectories of G/H/I. The player's choices must be unranked and the characters have no knowledge of other timelines.
6. Use existing illustrations only where genuinely relevant; add localized, accessible, visually coherent text-led panels/placeholder treatment where no art matches. **Do not** invent art, distort images, revive the rejected ring/sphere experiment, add video or commission assets. Retain accepted visual style.
7. Existing M2 Ending C has a three-beat text-led interim presentation. Its canonical content is superseded by approved v0.2 bilingual dialogue but its **reader-paced structure and temporary-art policy remain accepted**. Integrate without duplicating beats or accidentally showing contradictory old text.

### B. User experience safeguards
1. Preserve responsive dark retro-anime visual language, title/choice/ending/replay behavior and keyboard/touch interaction.
2. Reader-paced panel traversal and **Previous panel** must work within a scene and across a decision; revisiting a choice should not corrupt history or invent state persistence. Retain live bilingual switching at corresponding beat with preserved progress/focus.
3. Accessible dialogue attribution, headings, visible focus and reduced motion, proper alt/fallback for unavailable image assets. No need to add speech or subtitles yet.
4. Retain static HTML/CSS/JS, local art, $0 incremental cost, no backend or unnecessary build/dependency/service.
5. Preserve source/version identifiers and make narrative provenance auditable; do not silently modify approved wording to fit screens. If line wrapping or panel composition needs adaptation, annotate editorial changes. No unapproved scene, ending, fate or relationship changes.

### C. Evidence and autonomous iterations
1. Commit an initial source-to-runtime mapping and low-risk implementation plan; continue into actual implementation without requiring owner signoff at every checkpoint.
2. Implement all feasible routes, with up to **three** purposeful self-review/fix passes. If repeated failures demand scope/architecture change, document and escalate that subtask rather than endlessly retrying.
3. Test every one of nine endings in both languages across phone/tablet/desktop viewports, every major choice, within-scene Previous/Next, choice backtracking, language switching mid-dialogue, replay/reset, inaccessible image recovery, keyboard/focus, reduced-motion and a11y.
4. Capture representative desktop/mobile, EN/zh-TW screenshots of **opening, first fork, two-vehicle transition, character dialogue, Ending C (three phases), and G/H/I aftermath**, as well as all nine endings if feasible. Report exact counts, actual tooling and incomplete contrast checks honestly; don't treat zero axe violations as full certification.
5. Produce a consolidated owner-preview report comparing the accepted compact prototype to the new integrated manuscript. Summarize reading length/pacing tradeoffs, gaps in artwork and provenance, test results, and any decisions for the owner.
6. Update `PROJECT_STATE.md` and recovery handoff, push safely to the existing branch. Keep previous QA documents intact.

## Authority boundaries
- **Authorized now:** Content integration, existing UI adaptation needed to present it, tests and evidence, low-risk bug fixes, up to three bounded iteration passes, commit/push development branch.
- **NOT authorized:** Renaming approved characters/locations, changing canonical events/fates/choices, reinterpreting screenplay language substantially, replacing visuals with unapproved art, separate anime production, paid services, rewriting AICP, merges, release, GitHub Pages deployment, Possibility changes.
- Existing screenplay approval **does not imply** final acceptance of all new panels, performance, illustration or release.
- If an unresolvable editorial contradiction appears between approved EN and zh-TW, document exact lines and continue on independent tasks; do not fabricate a canonical resolution.
- Do not stall merely because faithful city sphere art, licenses, manual title contrast or physical-device screen-reader tests remain pending; record them as limits unless they block safe use.
- Do not stop after planning. Implement the feasible authorized integration before reporting back.

## Deliverable and pause point
One **new playable bilingual content-integrated graphic novel on the development branch**, with tested all-route mapping and a concise consolidated evidence package. **Stop for owner preview before any merge/deployment.** A GitHub file alone does not awaken Codex; the user must send the continuation prompt to their Codex session.
