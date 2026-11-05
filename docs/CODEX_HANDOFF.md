# Zero Sum — M1 recovery handoff

Read [project state](PROJECT_STATE.md), [owner M1 brief](M1_BRIEF.md), [visual identity](VISUAL_IDENTITY.md), [canon](ZERO_SUM_CANON.md), and the pinned UGDS/AICP references in project state before continuing.

## Recover and reproduce

Use the existing checkout on `dev/graphic-novel-foundation`; do not create a worktree unless the owner requests one. Verify local/remote HEAD and preserve any user changes. Starting checkpoint was `c8420a7`; source import is preserved at `8dc6b03`, followed by the M1 implementation/evidence checkpoint. Inspect actual files and [current QA](../experiences/graphic-novel/docs/QA.md) before trusting status claims.

The ZIP has now been recovered and imported under `experiences/graphic-novel/`. [Source provenance](../experiences/graphic-novel/docs/SOURCE_ARCHIVE.md) records the archive hash, reused content and art limitations. Original `story.js` prose and all graph edges are unchanged. Do not replace the canon with condensed prototype text.

From `experiences/graphic-novel/`, run `npm test`, then `python3 -m http.server 8000 --bind 127.0.0.1`. Services must be started again after workspace restoration. No dependency install/build is required for the application. See the experience README for pinned external QA tools and browser commands; no browser runtime dependency is bundled with the application.

## Next authorized boundary

M1 implementation and review evidence are prepared, not aesthetically accepted or publicly released. Ask the owner to judge the composed experience before scaling art production. Preserve all nine endings, bilingual live switching, accessibility and reduced motion. Subsequent implementation should follow the owner's review; do not infer permission for other adaptations, narrative redesign, merge, deployment, paid services, or portal changes. Safely commit/push meaningful authorized development checkpoints; a push does not imply acceptance or deployment.
