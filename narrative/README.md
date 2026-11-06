# Zero Sum narrative registry v1

**M4 update (2026-11-06):** This v1 known-canon inventory remains a historical index and stable identity baseline. The active approved dialogue/action source is now bilingual screenplay v0.2, compiled through `panel-plan.v1.json` and `screenplay-lock.v02.json` into the graphic novel. See [M4 mapping](../docs/M4_INTEGRATION_MAPPING.md). Original verbatim-source recovery gaps do not override the approved authored adaptation. Runtime keys and branch IDs are unchanged; new `.Pxx` panel IDs do not renumber canonical beat identities.

This is a presentation-neutral index of **known canon**, not a recovered complete screenplay. It is not loaded by the playable application. The original scene keys, prose, choices, history and Ending C interim presentation are unchanged.

- `registry.v1.json`: stable technical scene (`ZS-S…`), beat (`ZS-T…`), branch-edge (`ZS-B…`), route (`ZS-R-A`–`I`), character and location identifiers. Sources and confidence are explicit. The source summary is authoritative for known plot; runtime prose remains a provisional adaptation.
- `assets.v1.json`: asset integrity, provenance/rights gaps and accepted temporary treatments. No rights are inferred from an upload or a successful test.
- [Known-canon inventory and screenplay gaps](../docs/NARRATIVE_CONSOLIDATION.md).

Append new IDs; never renumber/recycle assignments. Labels and display order may change independently. Schema-breaking changes require a new version; keep a migration/alias mapping rather than rewriting identities. The existing runtime keys remain the compatibility boundary. Branch IDs represent directed choices, not judgements or names for alternate universes. Scene/beat identifiers can be consumed by later adaptations without importing a renderer or accepting the prototype wording as final.

Run `node scripts/check-narrative.mjs` from the repository root. This checks full runtime coverage, exact edges and routes, source/locale/asset mappings, and stable assignments against a committed identity snapshot. It does not certify screenplay fidelity where source material is missing.

## M5 illustration planning and live metadata

[Coverage audit / composition families](../docs/M5_VISUAL_COVERAGE.md), [21 provider-neutral production specifications](../docs/M5_ILLUSTRATION_SPECS.md) and [integration guide](../docs/M5_INTEGRATION.md) prepare illustrated completion without changing approved content. `illustration-plan.v1.json` is planning-only. `illustrations.v1.json` is the separate live asset/crop/binding source; its generated browser module preserves M4's 14 active frames. Planned masters and candidate detail crops cannot activate themselves. `assets.v1.json` remains the historical source integrity/rights record.
