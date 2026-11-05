# Zero Sum — Project State
Updated: 2026-11-05

## Current phase
M1 Interactive Graphic Novel **accepted by owner as a working prototype** on `dev/graphic-novel-foundation`. No merge, public release, deployment, or portal changes. Owner reports no issues in the M1 experience. This is prototype acceptance, not final artwork, screenplay, accessibility certification, or release acceptance.

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
- [M2 verification and before/after screenshots](../experiences/graphic-novel/docs/M2_QA.md). M2 functional checks are distinct from the unresolved sphere-art criterion.
- Prior checkpoint: `c8420a7`; source preserved at `8dc6b03`. Accepted M1 implementation/evidence: `9b01058`; owner M2 brief: `fc18b9a`; M2 interim implementation: `7d18d9f`. The subsequent M2 evidence/handoff checkpoint on this branch is the continuation point; verify its full SHA with Git before continuing.

## Remaining limits and next action
- Owner accepted the M1 prototype on 2026-11-05; final production visual and narrative acceptance remain outstanding.
- Art and condensed prose remain provisional. Full authoritative screenplay and asset-generation/license provenance were not in the ZIP. The original tower reference resembles a ring rather than the canonical sphere; Ending C now excludes it with a crop and labeled temporary cards. Other M1 endings remain unchanged. See source notes for other mismatches.
- Physical-device touch, screen-reader usability and independent first-time player review remain unverified.
- M2 is owner-authorized and implemented as a three-beat Ending C presentation, pending review. See [beat sheet, rejected sphere study and precise alternative](M2_ENDING_C_BEATS.md). Integrated sphere artwork remains unresolved; the shipped activation/boundary cards explicitly say illustration pending. The accepted M1 foundation and complete story graph remain unchanged.
- Keep authorized continuation on the existing development branch with safe checkpoints; no merge, deployment, paid services, or Possibility changes.
