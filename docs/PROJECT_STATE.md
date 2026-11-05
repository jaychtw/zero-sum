# Zero Sum — Project State
Updated: 2026-11-05

## Current phase
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

## Next proposed cycle — M3: Narrative Consolidation

**Proposed; not started.** Establish a complete canonical screenplay and consistent branch identifiers that future Zero Sum adaptations can share, without changing the currently accepted playable experience. Recover the owner-approved full screenplay, distinguish approved canon from condensed adaptation, and map stable narrative identifiers to the existing runtime nodes and endings. Do not invent missing screenplay content or rename current runtime identifiers as a side effect. No M3 script consolidation or identifier changes were initiated by this acceptance record.

Keep development lightweight and reversible on the existing development branch. No merge, deployment, paid services, visual-production expansion, or Possibility changes.
