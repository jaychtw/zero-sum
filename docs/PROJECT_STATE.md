# Zero Sum — Project State
Updated: 2026-11-06

## Current phase
**2026-11-06 M4 authorized:** Owner approved EN and zh-TW full branching screenplay v0.2, and authorized [bounded autonomous integration into the interactive graphic novel](M4_BILINGUAL_SCREENPLAY_INTEGRATION.md). **Integration has not begun.** Existing runtime remains the accepted M1/M2 prototype. Next: Codex content integration, all-route QA and owner preview; no merge/deploy. Approval recorded in [bilingual ledger](BILINGUAL_SCREENPLAY_REVIEW_V02.md).

**2026-11-06 bilingual screenplay stage:** Owner approved English screenplay v0.2. [Traditional Chinese dramatic adaptation v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md) has been committed and **approved by owner**. [Structural bilingual verification and editorial ledger](BILINGUAL_SCREENPLAY_REVIEW_V02.md) confirms corresponding 10 non-ending scene sections, eight decision points and nine endings. Neither version has been integrated into the existing playable experience; no deployment or merge.

**2026-11-06 screenplay revision:** [Complete English screenplay v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md) now exists, responding to [Round 1 review](EDITORIAL_REVIEW_ROUND_1.md); [editorial change record](EDITORIAL_REVISION_V02.md). All nine endings and eight choice points remain; v0.1 retained. English v0.2 dialogue and transfer staging were approved by owner on 2026-11-06; Traditional Chinese v0.2 was approved by owner on 2026-11-06. No runtime/code/asset changes.

**2026-11-06 editorial review:** [Round 1 findings](EDITORIAL_REVIEW_ROUND_1.md) are recorded. Screenplay v0.1 is structurally faithful but needs a targeted v0.2 revision (two-vehicle opening, distinguish catastrophic endings, character depth and implicit moral delivery). Draft v0.1 and accepted runtime remain unchanged; dialogue is not yet owner-approved.

**2026-11-06 transition:** The bounded engineering-preparation workstream is closed for planning purposes; the owner authorized a creative screenplay-adaptation phase. See [engineering closure and creative handoff](ENGINEERING_PREPARATION_CLOSURE.md). [Nine-ending English screenplay draft v0.1](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.1.md) has been authored and is **pending owner editorial review**; new dialogue is not final canon or integrated into the playable experience. No merge/release.

M1 is **accepted as a working prototype**. M2’s **three-beat, text-led Ending C is accepted by the owner as the interim presentation** on 2026-11-05, on `dev/graphic-novel-foundation`. This accepts the current playable presentation, not final artwork, the complete canonical screenplay, accessibility certification, or release. No merge, public release, deployment, or portal changes.

## Approved intent and sources
- [M1 brief](M1_BRIEF.md), [visual identity](VISUAL_IDENTITY.md), [canon](ZERO_SUM_CANON.md).
- One story/world; graphic novel first, other adaptations and portal deferred.
- Nine endings, no prescribed best life. Alex cannot know other timelines. A principled decision may have a catastrophic outcome.
- Classic cel-anime characters, painterly cinematic environments, restrained retro-futuristic interface; no generic dashboard theme.
- English/Traditional Chinese, accessibility, mobile/desktop, $0 incremental development cost, no video-generation pipeline.
- Standards pinned for M1: [UGDS 1.0.0](https://github.com/jaychtw/game-development-standards/blob/a0f91837f170da97b98afe979afb473f169edf58/UGDS.md) and [AICP 1.5.0](https://github.com/jaychtw/game-development-standards/blob/a0f91837f170da97b98afe979afb473f169edf58/AI-COLLABORATION-PROTOCOL.md).

## Implementation and evidence
- [Run/test instructions](../experiences/graphic-novel/README.md).
- [Source import and asset provenance](../experiences/graphic-novel/docs/SOURCE_ARCHIVE.md). The original ZIP is recovered; its 19-node graph, all eight decisions, nine endings, condensed prose, and eight illustrations are retained. Graph and image bytes are unchanged.
- Title, narrative, decisions, endings, replay and language controls share a cinematic identity. Narrative and UI data remain separate.
- [M1 QA results and desktop/mobile screenshots](../experiences/graphic-novel/docs/QA.md). See the current report for exact counts and limitations, rather than treating archive-era QA as current evidence.
- [M2 verification and before/after screenshots](../experiences/graphic-novel/docs/M2_QA.md). QA results and screenshots are preserved; the dated owner acceptance addendum distinguishes interim acceptance from final artwork approval. The accurate city illustration is deferred production art, not an immediate blocker.
- Prior checkpoint: `c8420a7`; source preserved at `8dc6b03`. Accepted M1 implementation/evidence: `9b01058`; owner M2 brief: `fc18b9a`; M2 interim implementation: `7d18d9f`. M2 QA/evidence checkpoint: `9a1a154`. The subsequent documentation-only owner-acceptance checkpoint records the current decision; verify its full SHA with Git before continuing.

## Acceptance boundaries and deferred work
- Keep the accepted M1 foundation and M2 three-beat, text-led Ending C. Do not rebuild the accepted experience without a specific reason.
- The rejected sphere composite remains rejected and absent from the runtime. Preserve the [M2 QA evidence](../experiences/graphic-novel/docs/M2_QA.md), including its rejected-study record. Do not initiate another sphere experiment or expand visual production.
- The accurate city illustration remains a **deferred production-art requirement**, not a blocker for the accepted interim presentation or the next proposed narrative cycle. The [existing art brief](M2_ENDING_C_BEATS.md) is retained for later reference, not immediate execution authority.
- Art and condensed prose remain provisional production inputs. The full authoritative screenplay and asset-generation/license provenance were not in the archive. Interim presentation acceptance does not promote the condensed adaptation to the complete canonical screenplay.
- Physical-device touch, screen-reader usability, independent first-time player review, and the documented image-overlay contrast manual assessment remain unverified or incomplete as recorded in QA.

## Autonomous workstream — feasible preparation completed

Authorized scope: [project-local mandate](AUTONOMOUS_CONTINUATION.md), starting at `dd1f133`. Known-canon consolidation is complete for recovered sources: [inventory and screenplay gap register](NARRATIVE_CONSOLIDATION.md), [stable versioned IDs](../narrative/README.md), and manuscript-to-asset integrity/rights mapping. **The full canonical screenplay is NOT RECOVERED**, not silently completed. All nine routes retain their accepted prose and runtime keys.

Targeted hardening adds localized missing-illustration recovery; no normal-path appearance, moral framing, graph, accepted Ending C, original asset bytes or runtime dependencies were changed. Checkpoints: `f4bbae0` (narrative inventory/IDs), `88117dc` (art-failure recovery and tests), followed by the consolidated evidence/handoff checkpoint on this branch.

The [single owner-review package](PRE_RELEASE_REVIEW.md) is the current entry point for exact test results, desktop/mobile evidence, reproduction and remaining limitations. Historical M1/M2 QA remains preserved. The package recommends owner preview only; missing full screenplay, art rights/provenance and deferred final art still limit production readiness.

Additional source recovered on 2026-11-06: [detailed conversation-derived narrative treatment](DETAILED_NARRATIVE_TREATMENT.md) preserves all nine branches with character motivation, staging, and story-world distinctions beyond the condensed runtime. This is **not** the original verbatim dialogue or timed shooting screenplay; those remain NOT RECOVERED. Keep the runtime unchanged pending a separate editorial adaptation/reconciliation.

Next owner input for final narrative consolidation: an accessible copy of the original approved full screenplay. Do not invent missing content, restart sphere experiments, or expand visual production while waiting. All independent authorized tasks are completed or explicitly limited in the package. No merge, deployment, paid services or Possibility changes.

## Creative phase source-of-truth note (2026-11-06)
The [detailed narrative treatment](DETAILED_NARRATIVE_TREATMENT.md) and [English screenplay adaptation v0.1](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.1.md) are now available. Existing statements that the *original verbatim* screenplay is NOT RECOVERED remain accurate; the new draft is newly written and not yet owner-approved. Avoid reverting or overwriting the runtime until a separate content integration is approved.
