# Zero Sum — Project State
Updated: 2026-11-06

## Current phase

**M4 bilingual screenplay integration implemented; owner preview pending.** Both English and Traditional Chinese screenplay v0.2 were approved by the owner and are now the active graphic-novel content: 70 paired panels, 19 runtime scenes, eight decisions, nine endings. See the [consolidated M4 review package](M4_OWNER_PREVIEW.md) for exact verification, screenshots, reading-length tradeoffs and limits. No merge, deployment, release or Possibility change.

Authorization: [M4 mandate](M4_BILINGUAL_SCREENPLAY_INTEGRATION.md), starting at `4ed8b9c`; [bilingual approval ledger](BILINGUAL_SCREENPLAY_REVIEW_V02.md). Stale draft warnings inside the approved manuscript files are historical; the ledger and explicit owner authorization supersede them. The source files themselves remain unchanged.

## Current source of truth

- [English v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md), [Traditional Chinese v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md): approved dramatic adaptation, not recovered verbatim original dialogue. Their source hashes are locked in `narrative/screenplay-lock.v02.json`.
- [Canon summary](ZERO_SUM_CANON.md), [detailed treatment](DETAILED_NARRATIVE_TREATMENT.md), [visual identity](VISUAL_IDENTITY.md). No moral ranking, no character knowledge of other timelines; canonical bounded white sphere and Downtown limit retained.
- [Panel mapping and composition record](M4_INTEGRATION_MAPPING.md), `narrative/panel-plan.v1.json`, generated `experiences/graphic-novel/manuscript.js`: active ordered, bilingual panel source with line-level provenance. Two-vehicle transfer is explicit. C retains three phases across five screens; old condensed C text is not mixed in.
- [Stable identifiers](../narrative/README.md): original scene/branch/runtime IDs remain stable; panel IDs are presentation metadata. The historical v1 inventory's original-script recovery gaps do not override the newly approved adaptation.
- Standards remain pinned: [UGDS 1.0.0](https://github.com/jaychtw/game-development-standards/blob/a0f91837f170da97b98afe979afb473f169edf58/UGDS.md), [AICP 1.5.0](https://github.com/jaychtw/game-development-standards/blob/a0f91837f170da97b98afe979afb473f169edf58/AI-COLLABORATION-PROTOCOL.md). No shared-standard amendment.

## Preserved baseline and recovery

M1 remains accepted as a working prototype; M2's three-beat text-led Ending C remains the accepted interim structure/art policy, with dialogue now superseded by approved v0.2. Faithful city art is deferred, not an immediate blocker. The rejected sphere experiment stays rejected. No new artwork or visual-production pipeline was created.

Prior work: `9b01058` M1, `9a1a154` M2 evidence, `5e32018` interim acceptance, `896228a` engineering-preparation package. Earlier screenplay/editorial history is retained in [v0.1](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.1.md), [Round 1 review](EDITORIAL_REVIEW_ROUND_1.md), [v0.2 revision record](EDITORIAL_REVISION_V02.md) and Git. Compact prototype `story.js`/`ending-c.js`, illustrations and all earlier evidence folders remain unchanged; the old renderer/session is recoverable at `4ed8b9c`.

M4 checkpoints: `b0a0d13` source-to-runtime plan; `a0a3d76` complete integrated dataset/renderer/navigation/tests; `7cd8124` scoped card-title typography fix; subsequent evidence/handoff checkpoint contains the consolidated package. Verify the full remote SHA before continuing. [Run, authoring and QA commands](../experiences/graphic-novel/README.md).

## Remaining limits and pause point

- Newly integrated panelization/pacing awaits owner preview; screenplay language approval is not final in-app composition, artwork, accessibility certification or release approval.
- 14 illustrated panels and 56 text-led panels reflect genuine asset limits. Opening/fork illustrations would contradict two-car staging; later aftermaths also lack matching art. Original asset source/rights remain undocumented. Art is still provisional.
- Title image-overlay contrast requires manual assessment; physical-device, screen-reader, independent first-time-player, other browser-engine and low-end-hardware checks remain outside verified results as documented in M4 QA.
- Original verbatim historical screenplay remains unrecovered; **the approved authored v0.2 adaptation is present and integrated**. It is no longer a missing input for this workstream.
- M4's feasible authorized integration is complete. **Pause for owner preview.** No merge, deployment, paid services, new artwork, further sphere experiment or Possibility change.
