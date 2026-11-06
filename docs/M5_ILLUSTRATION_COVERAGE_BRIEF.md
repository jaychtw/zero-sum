# Zero Sum — M5: Illustration Coverage Planning and Integration Preparation

Continue development of **Zero Sum** in:

https://github.com/jaychtw/zero-sum

Branch:
`dev/graphic-novel-foundation`

Latest accepted state:
- M4 is complete and pushed at `4c9ee3a`
- Full bilingual screenplay integration is working
- Owner preview result: overall acceptable, but visual coverage is insufficient because not every panel has its own image

Read first:
- `docs/PROJECT_STATE.md`
- `docs/M4_OWNER_PREVIEW.md`
- `docs/PRE_RELEASE_REVIEW.md`
- `docs/ZERO_SUM_CANON.md`
- `docs/DETAILED_NARRATIVE_TREATMENT.md`
- `screenplay/ZERO_SUM_SCREENPLAY_DRAFT_EN_V0.2.md`
- `screenplay/ZERO_SUM_SCREENPLAY_DRAFT_ZH-TW_V0.2.md`

## Mission

Prepare Zero Sum for a proper illustrated Graphic Novel phase.

The current state is a strong narrative prototype, but not yet a fully illustrated graphic novel. M5 should create a **practical visual-coverage system and production package** so future artwork can be created and integrated efficiently.

This is **not** permission to invent a large amount of new artwork, and **not** a request to rebuild the app.  
The goal is to reduce future art burden while improving the project’s readiness for visual completion.

## Core principle

We do **not** require 70 unique illustrations for 70 panels.

Instead, we want a smart visual strategy:
- some panels deserve unique key art
- some can reuse a scene image
- some can use alternate crop/framing of the same base illustration
- some may remain intentionally text-led if that is dramatically appropriate

M5 should determine the right balance and document it clearly.

## Scope

### A. Visual coverage audit
Audit the current 70-panel bilingual experience and classify every panel into one of these categories:

1. **Unique illustration recommended**
2. **Can reuse an existing illustration**
3. **Can use a derived crop / alternate framing**
4. **Can remain text-led without harming the experience**

Create a clear panel-by-panel coverage table.

For each panel, identify:
- panel ID / narrative ID
- route / ending context
- current art status
- recommended visual treatment
- reason for that recommendation

### B. Scene grouping and art minimization strategy
Group the 70 panels into **visual scenes / composition families**.

The aim is to identify the minimum practical set of illustrations needed to give the work a genuinely illustrated feel.

For example:
- opening pursuit sequence
- junction / transfer bay
- Jacque hanging from bridge
- hangar sniper standoff
- tower interior stairs
- tower exterior ascent
- hospital ward
- hospital rooftop
- CBD square sniper sequence
- endings / aftermath scenes

For each group, specify:
- which panels can share one illustration
- where crop variations are sufficient
- where a new emotional or spatial beat truly requires a new image

### C. Asset specification package
Create an **art-production-ready specification** for the needed images.

For each recommended new illustration, provide:
- illustration ID
- linked scene/panel IDs
- concise dramatic purpose
- characters present
- environment
- emotional tone
- critical visual requirements
- whether bilingual text overlay space is needed
- whether it should support crop variants
- whether it should be portrait / landscape / flexible

This should become a usable package for future art generation or illustration work.

Do not write vague concept-art prompts only. Make the specifications implementation-aware.

### D. Asset integration readiness
Prepare the code/data structure so future images can be integrated cleanly.

Do this with the lightest practical approach.

You may:
- add or improve an illustration manifest
- separate panel content from illustration metadata more clearly
- support reuse / crop-variant declarations in a maintainable way
- improve fallback handling for missing images
- preserve current behavior if an image is absent

Do **not** create unnecessary engine complexity.

### E. Small safe UX improvements
You may make small low-risk improvements that support the illustrated future, for example:
- clearer image placeholders
- improved caption / attribution / alt behavior
- more graceful layout when images are missing
- better handling of text-heavy vs image-heavy panels

Do not materially redesign the accepted interface identity.

## Constraints

- Preserve the approved narrative, bilingual text, and all nine endings.
- Do not change character fates, choices, route logic, or philosophical framing.
- Do not merge or deploy.
- Do not introduce paid services, backend, or unnecessary dependencies.
- Do not generate a large batch of substitute artwork.
- Do not revive rejected sphere art experiments.
- Do not convert the project into another format.
- Keep the app static and GitHub Pages-compatible.

## Authority

You are authorized to:
- audit
- classify
- reorganize content/metadata
- implement lightweight illustration-prep support
- improve fallbacks
- push safe checkpoints
- run tests and produce QA evidence

You are **not** authorized to:
- change the approved screenplay wording except where needed for trivial formatting/fallback
- create a new narrative version
- merge into `main`
- deploy
- alter Possibility
- begin unrelated adaptations

## Deliverables

1. **Panel-by-panel visual coverage audit**
2. **Scene grouping / illustration minimization plan**
3. **Art-production specification package**
4. **Any lightweight implementation changes needed for image integration readiness**
5. **Updated QA / owner preview package**
6. **Updated `PROJECT_STATE.md`**

## Verification

Verify:
- all 70 panels still function
- all 9 endings remain intact
- EN/zh-TW switching still works
- missing-art handling remains safe
- any new metadata or manifest structure is valid
- no branch regression is introduced

Report:
- exact count of panels by visual category
- recommended count of new illustrations
- count of panels that can reuse/crop existing art
- count of panels acceptable as text-led
- screenshots showing representative image-present and image-missing states

## Output expectation

Pause after completing M5 and present one consolidated report for owner review.

The owner’s next decision will likely concern **how the actual illustrations should be produced**, so do not assume the production method in advance.

No merge or deployment.