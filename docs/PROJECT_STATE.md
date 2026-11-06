# Zero Sum — Project State
Updated: 2026-11-06

## Current phase

**M6 OPEN/FORK feasible production preparation complete; generation eligibility blocked, no activation.** Starting at `5dc0143`, Codex prepared a portable two-master/nine-panel production-input packet, identity/vehicle continuity locks, separate single-scene instructions, provenance and actual-pixel intake, and baseline QA. [Consolidated M6 review](M6_OWNER_REVIEW.md), [downloadable packet](m6-evidence/zero-sum-m6-production-packet.zip), [M6 QA](M6_QA.md). Checkpoint `c2e1671` saves the packet/tools; the subsequent evidence/handoff checkpoint records final verification. **Zero new studies/masters or accepted/activated images.**

Native image generation is listed, but the exposed interface does not verify incremental charge or reference-data/source terms. Checked local generator CLI/modules are absent. [Evidence and exact missing facts](m6-evidence/capability-check.json). No generation was invoked, paid alternative substituted, account terms accepted or reference bytes transmitted to a new provider. Resolve that eligibility input (or supply eligible original sources) before production; explicit owner art approval remains mandatory before activation. Do not describe this as a failed image generation or claim that no image tool exists.

**M5 direction accepted by owner; M4 remains the accepted working narrative prototype.** The unchanged reader has 70 bilingual paired panels, 19 runtime scenes, eight decisions, nine endings, currently 14 illustrated / 56 text-led. M6 prepares OPEN/FORK only; no fully illustrated result or final artwork approval is claimed. The other 19 new masters are outside this pilot.

Current authorization: [M6 brief](M6_OPEN_FORK_PILOT_BRIEF.md), starting at `5dc0143`. Prior [M5 mandate](M5_ILLUSTRATION_COVERAGE_BRIEF.md), [M5 owner package](M5_OWNER_REVIEW.md), [M4 integration](M4_BILINGUAL_SCREENPLAY_INTEGRATION.md) and [bilingual approval ledger](BILINGUAL_SCREENPLAY_REVIEW_V02.md) remain historical sources. Stale warnings inside approved screenplay files do not supersede explicit owner approval; those files are unchanged.

## Current source of truth

- [M6 OPEN/FORK production packet](../production/m6-open-fork/README.md), `production/m6-open-fork/pilot.json`: inactive production-only metadata for two individual 16:9 scenes, nine exact M5 mappings, reference/cast/vehicle gates, null actual-source ROIs and pending provenance/art approval. Nothing is imported by the reader. [Intake review](../production/m6-open-fork/REVIEW.md) and `scripts/m6-inspect-source.py` require actual bytes; technical inspection cannot approve art.

- [M5 illustration authoring/integration](M5_INTEGRATION.md), `narrative/illustrations.v1.json`: separate live asset/crop/binding source, generated into `illustrations.js`, preserving all 14 active M4 frames. `narrative/illustration-plan.v1.json` is planning-only: 21 unique anchors, 22 reuse, 19 crop, eight intentional text-led panels. Only 16 reuse/crop panels use currently existing sources; 25 shared follow-ups depend on planned masters. No candidate detail or planned file is active.

- [English v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md), [Traditional Chinese v0.2](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md): approved dramatic adaptation, not recovered verbatim original dialogue. Their source hashes are locked in `narrative/screenplay-lock.v02.json`.
- [Canon summary](ZERO_SUM_CANON.md), [detailed treatment](DETAILED_NARRATIVE_TREATMENT.md), [visual identity](VISUAL_IDENTITY.md). No moral ranking, no character knowledge of other timelines; canonical bounded white sphere and Downtown limit retained.
- [Panel mapping and composition record](M4_INTEGRATION_MAPPING.md), `narrative/panel-plan.v1.json`, generated `experiences/graphic-novel/manuscript.js`: active ordered, bilingual panel source with line-level provenance. Two-vehicle transfer is explicit. C retains three phases across five screens; old condensed C text is not mixed in.
- [Stable identifiers](../narrative/README.md): original scene/branch/runtime IDs remain stable; panel IDs are presentation metadata. The historical v1 inventory's original-script recovery gaps do not override the newly approved adaptation.
- Standards remain pinned: [UGDS 1.0.0](https://github.com/jaychtw/game-development-standards/blob/a0f91837f170da97b98afe979afb473f169edf58/UGDS.md), [AICP 1.5.0](https://github.com/jaychtw/game-development-standards/blob/a0f91837f170da97b98afe979afb473f169edf58/AI-COLLABORATION-PROTOCOL.md). No shared-standard amendment.

## Preserved baseline and recovery

M1 remains accepted as a working prototype; M2's three-beat text-led Ending C remains the accepted interim structure/art policy, with dialogue now superseded by approved v0.2. Faithful city art is deferred, not an immediate blocker. The rejected sphere experiment stays rejected. No new artwork or visual-production pipeline was created.

Prior work: `9b01058` M1, `9a1a154` M2 evidence, `5e32018` interim acceptance, `896228a` engineering-preparation package. Earlier screenplay/editorial history is retained in [v0.1](../screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.1.md), [Round 1 review](EDITORIAL_REVIEW_ROUND_1.md), [v0.2 revision record](EDITORIAL_REVISION_V02.md) and Git. Compact prototype `story.js`/`ending-c.js`, illustrations and all earlier evidence folders remain unchanged; the old renderer/session is recoverable at `4ed8b9c`.

M5 checkpoint: `708decb` coverage/specifications and reversible live-manifest implementation; the subsequent QA/handoff checkpoint contains new M5 evidence and source-equivalence captures. The proposed 21 new masters could support 46 panel slots; together with 16 existing-art candidates the future target is 62 illustrated / eight intentional text-led. This is a plan, not completed coverage or final art approval.

M4 checkpoints: `b0a0d13` source-to-runtime plan; `a0a3d76` complete integrated dataset/renderer/navigation/tests; `7cd8124` scoped card-title typography fix; subsequent evidence/handoff checkpoint contains the consolidated package. Verify the full remote SHA before continuing. [Run, authoring and QA commands](../experiences/graphic-novel/README.md).

## Remaining limits and pause point

- M4 is accepted overall as a narrative prototype; it is not a fully illustrated graphic novel. M5 direction is accepted; M6 method eligibility, original artwork and actual crops remain unresolved. No final artwork, accessibility certification or release approval is implied.
- 14 illustrated panels and 56 text-led panels reflect genuine asset limits. Existing opening/fork reference wides contradict two-car staging; later aftermaths also lack matching art. Original asset source/rights remain undocumented. Art is still provisional.
- Title image-overlay contrast requires manual assessment; physical-device, screen-reader, independent first-time-player, other browser-engine and low-end-hardware checks remain outside verified results as documented in M4 QA.
- Original verbatim historical screenplay remains unrecovered; **the approved authored v0.2 adaptation is present and integrated**. It is no longer a missing input for this workstream.
- M6’s feasible preparation is complete. **Pause for method eligibility/source input and owner art review before any activation.** No paid provider, bulk art, remaining-master work, sphere experiment, merge, deployment, Possibility or Larch change. Historical M4/M5/M2 QA and rejected-study records remain preserved; this state and the M6 package supersede their earlier pause/status text.
