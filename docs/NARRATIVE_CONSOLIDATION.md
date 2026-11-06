# M3 known-canon consolidation and screenplay gap register

**M4 update (2026-11-06):** The inventory below records the evidence-first M3 state. Both newly authored screenplay v0.2 languages are now approved and integrated, with source traces and stable scene mapping in [M4 mapping](M4_INTEGRATION_MAPPING.md). The historical original verbatim screenplay is still not recovered; the approved authored adaptation is no longer a missing runtime input. Preserve this earlier gap record as history, not authority over v0.2.

Scope: Phase A of the [autonomous mandate](AUTONOMOUS_CONTINUATION.md), baseline `dd1f133`. This inventories recovered evidence; **the complete original screenplay is NOT RECOVERED**. No dialogue, shot sequence, character motivation or new outcome has been invented. The accepted runtime prose, graph and M2 presentation are not rewritten.

## Sources, authority and confidence

- `canon-summary`: [owner-approved compact canon](ZERO_SUM_CANON.md). **Confirmed-summary** means supported by that record; it does not mean the precise screenplay was recovered.
- `condensed-runtime`: [original prototype story data](../experiences/graphic-novel/story.js). **Provisional-runtime** labels details evidenced only by the condensed adaptation. In particular Pete taking injured Misaki to hospital in the Karl-pursuit branch is runtime evidence, not precise recovered screenplay.
- `ending-c-interim`: [accepted M2 panels](../experiences/graphic-novel/ending-c.js), accepted for interim presentation, not final canonical wording.
- Full original screenplay, precise bilingual dialogue, shot breakdown, timing, and authoritative translation decisions: **NOT RECOVERED**. Existing quotes are retained only in their accepted adaptation, not promoted to verified verbatim source.

The [versioned registry](../narrative/registry.v1.json) is the machine-readable source for the mapping below. Technical identifiers are assigned under the mandate; no new canon is approved by assigning an identifier. The application does not load the registry. Existing runtime IDs stay unchanged; there are no persisted story saves to migrate, and current in-memory history remains keyed as before.

## Identity policy

Scenes `ZS-S001`–`ZS-S019`, beats `ZS-T001`–`ZS-T032`, directed choices `ZS-B001`–`ZS-B016`, and ending paths `ZS-R-A`–`ZS-R-I` have distinct namespaces. This avoids confusing the old high-level pursuit branch A/B terminology with endings A/B. Never renumber or reuse an ID; append new assignments and keep aliases/migrations for future schema changes. [Identity snapshot](../narrative/identities.v1.json) catches accidental assignment drift. Labels/order do not define identity. No general story engine or future adaptation is implemented.

## Scenes, known beats and precise-script gaps

All 19 rows have exact dialogue and shot sequence marked **NOT RECOVERED**. Registry summaries describe causal facts, not replacement screenplay prose.

| Stable scene | Existing runtime key | Beat IDs | Known causal summary | Confidence |
| --- | --- | --- | --- | --- |
| ZS-S001 | `opening` | ZS-T001 | Alex leads a four-person squad pursuing Karl and his portable annihilation device. | confirmed-summary |
| ZS-S002 | `junction` | ZS-T002, ZS-T003 | Karl heads for Galaxical Tower in Uptown; the assault team heads toward the Downtown CBD. Alex chooses Jacque against Karl or Misaki against the assault team. | confirmed-summary |
| ZS-S003 | `jacque` | ZS-T004 | Karl uses shoulder-mounted mini-rockets; Jacque falls and clings to the bridge. | confirmed-summary |
| ZS-S004 | `abandon` | ZS-T005, ZS-T006 | Alex leaves Jacque and continues after Karl. Pete survives this pursuit branch and takes injured Misaki to the Downtown hospital. | confirmed-summary/provisional-runtime |
| ZS-S005 | `sniper` | ZS-T007 | Alex can kill Karl by firing through civilians or wait for a clean shot. | confirmed-summary |
| ZS-S006 | `tower` | ZS-T008, ZS-T009 | Waiting spares the civilians from Alex’s shot, but Karl escapes into the tower. Alex chooses stairs or exterior jetpack ascent. | confirmed-summary |
| ZS-S007 | `rescue` | ZS-T010, ZS-T011 | Alex rescues Jacque; Karl escapes. Alex chooses stairs or exterior jetpack ascent. | confirmed-summary |
| ZS-S008 | `misaki` | ZS-T012, ZS-T013 | Alex pursues the CBD assault team with Misaki; Pete dies pursuing Karl. Misaki is injured and urges Alex to continue; leaving her also causes emotional hurt. | confirmed-summary |
| ZS-S009 | `hospital` | ZS-T014, ZS-T015 | The hospital is Downtown, outside the annihilation field. Alex can stay in the ward or go to the rooftop to contact Jacque. | confirmed-summary |
| ZS-S010 | `cbd` | ZS-T016 | Alex arranges backup for Misaki and continues to stop the CBD attackers. | confirmed-summary |
| ZS-S011 | `endingA` | ZS-T017, ZS-T018 | Karl and two civilians die; the city is saved and Jacque is dead. Public honors and protest coexist; Alex leaves his medal at Jacque’s grave. | confirmed-summary |
| ZS-S012 | `endingB` | ZS-T019, ZS-T020 | Alex takes the stairs after leaving Jacque; Alex dies in the Uptown annihilation. The sharply bounded field stops before Downtown. | confirmed-summary |
| ZS-S013 | `endingC` | ZS-T021, ZS-T022, ZS-T023 | Alex ascends the exterior after leaving Jacque and waiting for a clean shot. Karl activates the device; his cause, not bodily survival, is his commitment. The sharply bounded white sphere erases Alex, Karl and much of Uptown; Downtown survives. | confirmed-summary |
| ZS-S014 | `endingD` | ZS-T024, ZS-T025 | Karl is captured by the vehicle tackle and the city survives; Jacque is dead. Pete and Misaki become lovers; Alex leaves his medal on Jacque’s grave. | confirmed-summary |
| ZS-S015 | `endingE` | ZS-T026 | Jacque was rescued; Alex takes the stairs and dies in the Uptown annihilation. | confirmed-summary |
| ZS-S016 | `endingF` | ZS-T027 | Jacque was rescued; Alex ascends outside and dies in the Uptown annihilation. | confirmed-summary |
| ZS-S017 | `endingG` | ZS-T028 | Alex and Misaki survive in the Downtown hospital and later find love amid guilt. | confirmed-summary |
| ZS-S018 | `endingH` | ZS-T029, ZS-T030 | Alex contacts Jacque from the hospital rooftop and hears his apology. Alex survives, witnesses the annihilation, loses his career; the relationship remains uncertain. | confirmed-summary |
| ZS-S019 | `endingI` | ZS-T031, ZS-T032 | Alex stops the CBD attackers and watches Uptown erased. He later becomes an unnamed vigilante against surviving cultists; Misaki remains emotionally distant. | confirmed-summary |

## Complete path coverage and gap register

Every ending has a confirmed summary and tested branching route, condensed bilingual runtime prose, and **NOT RECOVERED** precise original dialogue/shot information. This is nine-path structural coverage, not full-screenplay completion.

| Path ID | Ending | Existing runtime route | Confirmed outcome | Precise dialogue / shots |
| --- | --- | --- | --- | --- |
| ZS-R-A | A | opening → junction → jacque → abandon → sniper → endingA | Karl and two civilians die; the city is saved and Jacque is dead. Public honors and protest coexist; Alex leaves his medal at Jacque’s grave. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-B | B | opening → junction → jacque → abandon → sniper → tower → endingB | Alex takes the stairs after leaving Jacque; Alex dies in the Uptown annihilation. The sharply bounded field stops before Downtown. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-C | C | opening → junction → jacque → abandon → sniper → tower → endingC | Alex ascends the exterior after leaving Jacque and waiting for a clean shot. Karl activates the device; his cause, not bodily survival, is his commitment. The sharply bounded white sphere erases Alex, Karl and much of Uptown; Downtown survives. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-D | D | opening → junction → jacque → abandon → endingD | Karl is captured by the vehicle tackle and the city survives; Jacque is dead. Pete and Misaki become lovers; Alex leaves his medal on Jacque’s grave. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-E | E | opening → junction → jacque → rescue → endingE | Jacque was rescued; Alex takes the stairs and dies in the Uptown annihilation. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-F | F | opening → junction → jacque → rescue → endingF | Jacque was rescued; Alex ascends outside and dies in the Uptown annihilation. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-G | G | opening → junction → misaki → hospital → endingG | Alex and Misaki survive in the Downtown hospital and later find love amid guilt. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-H | H | opening → junction → misaki → hospital → endingH | Alex contacts Jacque from the hospital rooftop and hears his apology. Alex survives, witnesses the annihilation, loses his career; the relationship remains uncertain. | NOT RECOVERED / NOT RECOVERED |
| ZS-R-I | I | opening → junction → misaki → cbd → endingI | Alex stops the CBD attackers and watches Uptown erased. He later becomes an unnamed vigilante against surviving cultists; Misaki remains emotionally distant. | NOT RECOVERED / NOT RECOVERED |

## Characters, geography and moral constraints

Character anchors remain in [canon](ZERO_SUM_CANON.md#character-anchors): Alex is a capable commander with moral restraint and finite reach; Misaki has independent tactical judgement and genuine hurt; Jacque is loyal and courageous; Pete is caring and loves Misaki; Karl is a fanatic who expects his cause to outlive his body. `ZS-CH-*` identifiers name these five existing characters, not new biographies. Exact performance/voice direction is not recovered.

`ZS-LOC-UPTOWN` contains Galaxical Tower; `ZS-LOC-DOWNTOWN` contains the CBD and hospital, outside the field. `ZS-LOC-MIDTOWN` records the prototype junction label only, not a newly confirmed map coordinate. No distance, radius or city map is invented. Karl's device produces a sharply bounded white matter-erasure sphere, with no portal, ring, conventional explosion or Downtown destruction.

No best-life ranking or moral score; each choice sacrifices possibilities; Alex cannot know alternate timelines; sound decisions do not guarantee good outcomes. The route review and tests verify destinations and coverage, not philosophical quality or exact screenplay fidelity. The owner-accepted M1/M2 behavior remains the preview baseline.

## Manuscript-to-art mapping and unresolved inputs

[Asset manifest](../narrative/assets.v1.json) links every scene to the original illustration and records the tower placeholder and accepted Ending C crop/text-card overrides. Eight original image byte hashes and sizes are checked. Art generation/source references, licenses and production clearance remain **NOT DOCUMENTED**. An owner upload is not inferred public-production clearance. The accurate city plate stays deferred; the rejected sphere composite is excluded from the manifest/runtime.

The next source input for final manuscript work is the owner-approved full screenplay or a verifiable repository copy. When available, compare it scene by scene, resolve wording/translation differences explicitly, and attach it to these stable IDs. Do not fill missing script by expanding prototype text and calling it recovered canon. This input is a deferred content limitation and does not block independent static-app readiness work.

## Validation

From the repository root: `node scripts/narrative.test.mjs`. Validates runtime coverage, exact choice edges, complete ending routes, stable identities, source/locale mappings and asset integrity; negative cases reject fabricated recovery status, missing source/coverage, drifted identifiers, wrong edges/routes and damaged asset hashes. No original-script fidelity claim is implied by passing.
