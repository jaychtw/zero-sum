# OPEN / FORK — portable M6 production packet

Baseline `5dc0143`. Scope: **two original single-scene masters**, nine proposed panel slots. This directory contains instructions and an empty intake record, **no new artwork**. The accepted reader, references, prose, routes, 14 active images and M5 recommendations remain unchanged. Nothing here is loaded by the app.

## Start here

1. Read [M6 brief](../../docs/M6_OPEN_FORK_PILOT_BRIEF.md), [M5 OPEN/FORK specifications](../../docs/M5_ILLUSTRATION_SPECS.md#open) and [structured pilot](pilot.json). M6 refines production gates without replacing M5 or the approved screenplay.
2. Inspect [reference inventory](references.json) and original bytes locally. Read the purpose/limits before using an image. In particular, neither the old four-person cabin nor the old fork signage is valid new staging. No rejected creative boards were imported.
3. Use the exact [OPEN](prompts/OPEN.md) and [FORK](prompts/FORK.md) instructions independently. They request one uninterrupted landscape moment each; named crop requirements are parts of those same paintings, never painted close-up insets. The vehicle colors/lights and left-hand-drive convention are proposed reversible pilot continuity locks, not added story canon. Any delivered likeness differences remain visible for owner judgment.
4. Before generation, record a real $0 incremental-cost basis and permitted reference-data handling/source terms. A tool being listed is not a price or rights receipt. No paid API, purchased credits, trial billing, unverified subscription, provider switch or bulk generation. The current native tool has no billing/terms fields; the recorded blocker is **unverified eligibility**, not a failed generation or a claim the tool does not exist. See [capability evidence](../../docs/m6-evidence/capability-check.json).
5. If that gate clears, produce OPEN first, inspect it, then produce the distinct FORK scene using the same validated character/vehicle appearance. Keep the exact prompt, referenced-byte hashes, actual parameters exposed, method/model/job if known and source bytes for every attempt. A missing model ID/seed stays null. Do not promise exact repeatable pixels for a hosted generator; reproducibility means a repeatable documented process and preserved inputs/outputs. A locally run tool would additionally need its real model/license/seed and zero-cost execution evidence; no such installation was found in the checked tools.
6. Save a candidate lossless original as `open-study-001.png` / `fork-study-001.png` under a new review-only `sources/` directory only when it actually exists. Use the real extension/format returned; do not relabel JPEG as lossless. Keep rejected studies separately with reasons. No board is accepted by slicing its attractive panels into two purported originals.
7. Complete a separate copy of [intake.template.json](intake.template.json) for each actual source. Enter original dimensions and SHA-256 from bytes, source/tool/terms evidence and the reviewer’s gate results. Enter numeric crop rectangles only after inspecting those pixels, plus actual-image bilingual alt and native display caps. See [review procedure](REVIEW.md).
8. Stop for explicit **owner artwork approval** before lossless-master archiving as accepted production, WebP optimization/delivery, preview binding or activation. A production plan, technical pass, generated source or engineer review cannot supply that approval. Do not modify live metadata as a shortcut.

## Anticipated mapping (inactive)

| Source | Panel | Future treatment |
|---|---|---|
| OPEN | ZS-S001.P01, ZS-S001.P02 | Full same-scene master |
| OPEN | ZS-S001.P03 | Following cabin, Pete/Jacque |
| OPEN | ZS-S001.P04, ZS-S008.P01 | Lead cabin, Alex/Misaki; later crop excludes following car/tower-only landmarks |
| FORK | ZS-S001.P05 | Ramp-only approach; all stopped cars and their reflections excluded |
| FORK | ZS-S002.P01, ZS-S002.P03 | Full stopped-bay scene |
| FORK | ZS-S002.P02 | Lead-cabin decision detail before a completed transfer |

Actual source paths, crop rectangles and final alt remain **null/absent** until source intake. No temporary master, numeric fictional ROI or future URL has been placed in the live manifest. OPEN and FORK must share the same car/crew identity, while differing in motion, location and dramatic purpose.

## Read-only intake

The existing Pillow installation reads real pixels; no new production dependency or runtime code is needed:

```
python3 scripts/m6-inspect-source.py /path/to/actual/open-study-001.png
python3 scripts/m6-inspect-source.py /path/to/actual/open-study-001.png --receipt /path/to/open-intake.json
node scripts/m6-packet.test.mjs
python3 scripts/m6-intake.test.py
```

Run from repository root. The inspector writes JSON only to stdout and never changes the source, creates a crop, converts a file or activates a binding. Exit 2 reports invalid/incomplete input; exit 0 means either pixels inspected with human review still pending, or a complete candidate ready **for owner review**, as explicitly stated in `status`. It rejects the original reference hashes as new masters. It cannot see whether a picture is a composite board or whether the faces are correct: those are mandatory human gates. Its technical output cannot be used as art acceptance.

## Remaining input

Supply either an eligible native/no-cost generation method with evidenced terms/reference handling, or actual separately created OPEN/FORK originals with the same provenance and cost evidence. The native tool’s billing/data eligibility question remains unresolved at this checkpoint. Until resolved, the reproducible $0 work completed here is **local preparation, integrity checks and QA**; no validated $0 generation method or usable master is claimed. Larch and the remaining 19 illustrations are outside this packet.
