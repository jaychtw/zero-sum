# M4 source-to-runtime mapping and integration record

Baseline: `4ed8b9c`; owner approved both screenplay v0.2 versions and authorized integration. The approval ledger and M4 mandate supersede stale draft warnings embedded in the source documents; the approved source bytes will remain unchanged.

## Mapping and low-risk implementation plan

1. Preserve `story.js`, the old `ending-c.js`, accepted evidence and original illustrations as recoverable prototype references; original application/session code is recoverable at `4ed8b9c` with Git. Retain all runtime scene IDs, stable scene/branch/beat identities, and exact destination topology.
2. Build one order-aligned bilingual panel dataset from approved v0.2 sources and the explicit [panel composition plan](../narrative/panel-plan.v1.json). Track source hashes and exact paragraph line ranges; classify stage/action/dialogue separately. Choice labels come from v0.2, destinations remain the original graph. No runtime Markdown parser, service, framework or paid/new asset.
3. Extend navigation for reader-paced panels in all scenes. Within-scene back decrements a panel; cross-scene back restores the previous scene's last/decision panel. Language switching preserves that same panel. Decision controls appear only after scene content; replay only after an ending's final panel.
4. Keep the accepted title and visual palette. Reuse illustrations only at matching beats. Opening/fork/transfer need text-led panels because the old illustration places the four operatives in one car. Later funerals, inquiry, rehabilitation, skyline erasure and vigilante aftermath also lack matching art. Keep the rejected ring/sphere study out. Existing ascent crop is appropriate before activation; white-sphere phases remain text-led.
5. Run source/coverage/navigation tests, all nine routes in both languages at four widths, keyboard/touch/focus/motion/art-failure checks, representative and ending screenshots, then a new consolidated M4 owner-preview report. Up to three purposeful review/fix passes; no merge/deployment.

## Panel mapping

The screenplay's S00/S01/S08/S11 labels are editorial labels, not runtime rename instructions. Scene IDs below are the existing versioned registry assignments. `.Pxx` identifies presentation panels without replacing canonical `ZS-T…` beat IDs. Grouping is manually composed around exchanges, reveals, location changes and silence; a paragraph is not automatically a new screen.

| Existing runtime | Stable scene | Panels | Source structure |
| --- | --- | ---: | --- |
| `opening` | ZS-S001 | 5 | Non-ending section |
| `junction` | ZS-S002 | 3 | Non-ending section |
| `jacque` | ZS-S003 | 4 | Non-ending section |
| `abandon` | ZS-S004 | 3 | Non-ending section |
| `sniper` | ZS-S005 | 3 | Non-ending section |
| `tower` | ZS-S006 | 2 | Non-ending section |
| `rescue` | ZS-S007 | 3 | Non-ending section |
| `misaki` | ZS-S008 | 4 | Non-ending section |
| `hospital` | ZS-S009 | 3 | Non-ending section |
| `cbd` | ZS-S010 | 3 | Non-ending section |
| `endingA` | ZS-S011 | 4 | Ending A |
| `endingB` | ZS-S012 | 3 | Ending B |
| `endingC` | ZS-S013 | 5 | Ending C |
| `endingD` | ZS-S014 | 3 | Ending D |
| `endingE` | ZS-S015 | 3 | Ending E |
| `endingF` | ZS-S016 | 3 | Ending F |
| `endingG` | ZS-S017 | 4 | Ending G |
| `endingH` | ZS-S018 | 7 | Ending H |
| `endingI` | ZS-S019 | 5 | Ending I |

## Recorded composition changes (no dialogue rewrite)

- At the first fork one English transfer-bay paragraph corresponds to two Chinese paragraphs; both Chinese paragraphs remain in their original order on the same paired panel. Conditional vehicle assignments remain visible before the fork; the Karl branch confirms Alex/Pete's exchange afterward.
- Ending C keeps three phases but uses three short panels for the approach/confrontation, then one activation panel and one boundary panel. The isolated device-activation sentence is moved after the source's BEAT ONE direction and beside BEAT TWO, avoiding activation before the last approach. No wording is changed and no old M2 dialogue is appended.
- Stage headings and HOLD/CUT/BEAT directions remain readable. Source navigation markers and END labels are implemented as controls/final state rather than duplicate prose. Exact source text is preserved apart from Markdown emphasis delimiters.
- Art is metadata per panel; missing/unmatched art uses a localized text-led frame and ordinary readable scene prose, without claiming a new illustration. Cover art remains provisional visual identity, not literal evidence of the new two-car blocking.

Full source coverage and generated-file freshness will be checked against the locked manuscript files, not against condensed prototype prose. This initial mapping is committed before application integration and does not require a milestone signoff.
