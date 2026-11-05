# Zero Sum — recovery handoff

Read [project state](PROJECT_STATE.md), [owner M1 brief](M1_BRIEF.md), [visual identity](VISUAL_IDENTITY.md), [canon](ZERO_SUM_CANON.md), and the pinned UGDS/AICP references in project state before continuing.

## Recover and reproduce

Use the existing checkout on `dev/graphic-novel-foundation`; do not create a worktree unless the owner requests one. Verify local/remote HEAD and preserve any user changes. Starting checkpoint was `c8420a7`; source import is preserved at `8dc6b03`, followed by the M1 implementation/evidence checkpoint. Inspect actual files and [current QA](../experiences/graphic-novel/docs/QA.md) before trusting status claims.

The ZIP has now been recovered and imported under `experiences/graphic-novel/`. [Source provenance](../experiences/graphic-novel/docs/SOURCE_ARCHIVE.md) records the archive hash, reused content and art limitations. Original `story.js` prose and all graph edges are unchanged. Do not replace the canon with condensed prototype text.

From `experiences/graphic-novel/`, run `npm test`, then `python3 -m http.server 8000 --bind 127.0.0.1`. Services must be started again after workspace restoration. No dependency install/build is required for the application. See the experience README for pinned external QA tools and browser commands; no browser runtime dependency is bundled with the application.

## Current accepted baseline and boundary

The owner accepted M1 as a working prototype and, on 2026-11-05, accepted M2’s three-beat, text-led Ending C as the interim presentation. Keep both; this is not final artwork, complete screenplay, accessibility certification, or release approval. Preserve all nine endings, bilingual live switching, accessibility, reduced motion, and current playable behavior.

Read [M2 beat sheet](M2_ENDING_C_BEATS.md) and [M2 QA / owner acceptance addendum](../experiences/graphic-novel/docs/M2_QA.md). The rejected sphere study remains rejected and evidence-only. The accurate city illustration is deferred production art, not an immediate blocker. Do not start another sphere experiment or broaden visual production. The old art brief is retained for future reference only.

M2 implementation: `7d18d9f`; preserved QA and before/after evidence: `9a1a154`; the following documentation-only checkpoint records owner interim acceptance. The original story graph, artwork bytes, and accepted playable code are unchanged by that record. `npm test` runs graph/session/localization checks; browser QA commands in the experience README write `docs/m2-evidence/`. Historical QA claims are not new test runs.

## Autonomous continuation recovery

The subsequent [autonomous mandate](AUTONOMOUS_CONTINUATION.md) at `dd1f133` authorized M3-through-pre-release preparation without milestone signoffs. Feasible work is now completed: [single review package](PRE_RELEASE_REVIEW.md), [known-canon consolidation](NARRATIVE_CONSOLIDATION.md), and [registry compatibility policy](../narrative/README.md). The original complete screenplay remains NOT RECOVERED; do not fabricate it or treat the accepted condensed adaptation as the full source.

Checkpoints: `f4bbae0` narrative/identity inventory; `88117dc` localized image-failure recovery and verification tools; subsequent consolidated evidence/handoff commit. Verify remote HEAD and current package before continuing. Restore using the existing checkout; run `node scripts/narrative.test.mjs` from root and the experience README's application/browser commands. Startup processes and temporary external QA tools must not be assumed to survive a fresh environment. Independent source reconstruction was verified; see evidence.

Three bounded passes were used: inventory; targeted recovery fix/review; final verification. No cosmetic or art iteration remains active. The owner-facing next input is an accessible original approved screenplay for final narrative consolidation. M1 and M2 interim acceptance stand. Preserve all screenshot/QA directories, rejected-study status, runtime IDs and art deferral. Never merge, deploy, change Possibility, spend money or declare production acceptance under this mandate.
