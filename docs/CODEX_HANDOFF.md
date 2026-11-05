# Zero Sum — current recovery handoff

Start with [project state](PROJECT_STATE.md), [M4 owner-preview package](M4_OWNER_PREVIEW.md), [M4 mandate](M4_BILINGUAL_SCREENPLAY_INTEGRATION.md) and [bilingual approval ledger](BILINGUAL_SCREENPLAY_REVIEW_V02.md). Both v0.2 languages are approved; do not restore compact prototype text as editorial authority. Manuscript preambles with old draft warnings are superseded by the ledger/owner authorization, not silently rewritten.

## Recover and run

Use the existing checkout on `dev/graphic-novel-foundation`; do not create a worktree unless requested. Preserve user changes, verify local/remote SHA. Baseline `4ed8b9c` preserves the compact app. `b0a0d13` records M4's initial mapping; `a0a3d76` is the integrated code/dataset checkpoint; `7cd8124` applies the final scoped typography correction; `80be7ac` adds bounded case verification and matching-runtime aggregation; the subsequent M4 evidence/handoff commit is the review point.

The committed static app needs no install/build. From `experiences/graphic-novel/`: `npm test`, then `python3 -m http.server 8000 --bind 127.0.0.1`. Services/temporary external QA tools must be restarted in a fresh environment. See the experience README for exact browser commands. Current reports are in `docs/m4-evidence/`; keep previous M1/M2/readiness evidence intact. Independent reconstruction/subdirectory verification is in the M4 package.

## Implementation boundaries

- Active text: generated `manuscript.js` from both locked v0.2 Markdown sources plus `narrative/panel-plan.v1.json`. `node scripts/build-screenplay.mjs --check` verifies freshness; `node scripts/screenplay.test.mjs` verifies source hashes, coverage, choice topology, text and panel navigation. Regenerate only after authorized source/composition edits.
- All 19 runtime IDs and stable scene/branch identities remain unchanged. `session.current`/`depth` remain; `panel`, `advance()` and final-panel transition guards implement reader pacing. Previous panel restores a prior decision's last panel; no story-save persistence was added.
- Compact `story.js` and `ending-c.js` remain historical fixtures, not active renderer text. M4 updates C to v0.2 dialogue in three phases/five panels without reviving the rejected art. Base styles and eight image bytes are unchanged; supplemental manuscript CSS supports attribution and compact text-led frames.
- [Composition record](M4_INTEGRATION_MAPPING.md) documents the split transfer paragraph and single C activation ordering adjustment; no silent wording changes. Do not invent further dialogue or art.

## Pause point

Owner approved screenplay language, not yet the new panel composition. Integration and feasible verification are complete; await owner preview of M4. Final art/provenance, manual overlay contrast and real-device/assistive-technology limits remain documented. M1/M2 acceptance stands as historical baseline; M4 source intentionally supersedes condensed prose. No merge, deployment, paid services, new artwork, other adaptation, sphere experiment or Possibility change.
