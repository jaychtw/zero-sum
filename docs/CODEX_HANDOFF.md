# Zero Sum — M1 recovery handoff

Read [project state](PROJECT_STATE.md), [owner M1 brief](M1_BRIEF.md), [visual identity](VISUAL_IDENTITY.md), [canon](ZERO_SUM_CANON.md), and the pinned UGDS/AICP references in project state before continuing.

## Recover and reproduce

Use the existing checkout on `dev/graphic-novel-foundation`; do not create a worktree unless the owner requests one. Verify local/remote HEAD and preserve any user changes. Starting checkpoint was `c8420a7`; source import is preserved at `8dc6b03`, followed by the M1 implementation/evidence checkpoint. Inspect actual files and [current QA](../experiences/graphic-novel/docs/QA.md) before trusting status claims.

The ZIP has now been recovered and imported under `experiences/graphic-novel/`. [Source provenance](../experiences/graphic-novel/docs/SOURCE_ARCHIVE.md) records the archive hash, reused content and art limitations. Original `story.js` prose and all graph edges are unchanged. Do not replace the canon with condensed prototype text.

From `experiences/graphic-novel/`, run `npm test`, then `python3 -m http.server 8000 --bind 127.0.0.1`. Services must be started again after workspace restoration. No dependency install/build is required for the application. See the experience README for pinned external QA tools and browser commands; no browser runtime dependency is bundled with the application.

## Next authorized boundary

M1 implementation and review evidence are prepared, not aesthetically accepted or publicly released. Ask the owner to judge the composed experience before scaling art production. Preserve all nine endings, bilingual live switching, accessibility and reduced motion. Subsequent implementation should follow the owner's review; do not infer permission for other adaptations, narrative redesign, merge, deployment, paid services, or portal changes. Safely commit/push meaningful authorized development checkpoints; a push does not imply acceptance or deployment.

## M2 continuation (2026-11-05)

M1 was accepted by the owner as a working prototype; do not rebuild it. Read [M2 brief](M2_ENDING_C_BRIEF.md), [beat sheet / rejected study / precise alternative](M2_ENDING_C_BEATS.md), and [M2 QA](../experiences/graphic-novel/docs/M2_QA.md). The owner explicitly authorized bounded M2 execution in chat. Current Ending C stages three bilingual presentation beats within its unchanged graph node. The flat white-disk/city composite was rejected; it is evidence only, not shipped art. Faithful integrated sphere artwork remains pending. The owner-facing decision is whether to keep the text-led three-beat interim treatment before one clean city plate is available. Do not infer approval for a broader production pipeline.

Implementation checkpoint: `7d18d9f`, followed by the M2 evidence/handoff checkpoint. `npm test` runs graph/session/localization checks; the same browser command in the experience README now tests all three Ending C panels and writes `docs/m2-evidence/`, preserving M1 evidence. No runtime dependency or story graph change.
