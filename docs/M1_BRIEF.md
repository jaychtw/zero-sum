# Zero Sum — M1: Interactive Graphic Novel Foundation

## Mission

Continue development of **Zero Sum** at:

https://github.com/jaychtw/zero-sum

The owner has approved the first bounded development cycle: establishing a playable Interactive Graphic Novel prototype.

The objective is to deliver a **functional, visually coherent, bilingual vertical slice** that demonstrates Zero Sum's branching narrative without requiring AI-generated video.

Prioritize a sustainable, low-friction development process. This is a hobby project, not a commercial production deadline.

## 1. Recover project context

Start by reviewing:

- `dev/graphic-novel-foundation`
- `docs/PROJECT_STATE.md`
- `docs/ZERO_SUM_CANON.md`
- `docs/CODEX_HANDOFF.md`
- [UGDS and AICP](https://github.com/jaychtw/game-development-standards)
- [Draft PR #1](https://github.com/jaychtw/zero-sum/pull/1)

Inspect the repository before modifying anything.

The attached `zero-sum-graphic-novel-prototype.zip` is our initial implementation candidate.

Its artwork and narrative are provisional. The approved creative canon and nine-ending story take precedence over condensed prototype wording.

## 2. Implementation scope

### A. Import and evaluate

Inspect the supplied ZIP, including its code, assets, narrative graph, and tests.

Import its usable contents into:

`experiences/graphic-novel/`

Preserve reusable narrative data separately from presentation logic wherever practical.

Do not rebuild working components unnecessarily.

### B. Deliver a playable vertical slice

Prioritize this route:

**Opening → Pursue Karl with Jacque → Abandon Jacque → Use sniper → Wait for a clean shot → Ascend the tower exterior → Ending C.**

This route was deliberately selected because it demonstrates Zero Sum's central philosophical theme: Alex makes defensible, principled decisions yet suffers a catastrophic outcome.

The slice should demonstrate:

- Cinematic illustrated storytelling.
- Clearly presented narrative decisions.
- Meaningful transitions between scenes.
- A complete ending and replay option.
- Responsive desktop and mobile presentation.
- Live English/Traditional Chinese language switching.
- Keyboard, mouse, and touch compatibility.

Use existing illustrations where suitable.

If an appropriate illustration is unavailable, use a restrained, clearly identified temporary presentation rather than introducing generic artwork or pretending an unsuitable image is production-ready.

### C. Preserve the complete narrative graph

Although we are concentrating visual polish on one route, retain all nine endings and their established branching relationships.

Validate that every ending is reachable.

Do not invent additional choices or rewrite the story's philosophical meaning.

### D. Keep future adaptations possible

The Graphic Novel is the first expression of Zero Sum, not its permanent or exclusive form.

Maintain reusable narrative and asset structures suitable for later:

- Cinematic Visual Novel
- Cinematic Motion Comic
- Hybrid Interactive Anime
- Potential Action Game

Do not implement these adaptations during M1.

Avoid premature abstractions or a complex shared engine.

## 3. Technical constraints

- $0 incremental development cost.
- Static, GitHub Pages-compatible architecture.
- Prefer familiar HTML, CSS, and JavaScript.
- No backend, account system, or paid external APIs.
- No new dependencies unless justified.
- No AI video-generation requirement.
- Observe relevant UGDS accessibility, bilingual, testing, and visual-quality requirements.
- Maintain a recoverable Git history.

You may choose routine engineering details autonomously.

Escalate only genuine blockers or changes that materially affect approved creative intent.

## 4. Verification

Run appropriate automated tests and actual browser checks.

Verify:

1. All nine endings are reachable.
2. All decisions lead to the intended destinations.
3. The selected Ending C storyline can be completed.
4. Language switching preserves narrative position.
5. Mobile and desktop layouts remain usable.
6. Keyboard and touch controls work.
7. Replay and restart behave correctly.
8. Accessibility checks identify no unresolved critical issues.

Provide screenshots of representative scenes.

Distinguish verified results from incomplete or unavailable checks.

## 5. Deliverables

Commit and push the completed work to the existing development branch.

Update:

- `PROJECT_STATE.md`
- Relevant implementation documentation
- Test and verification evidence
- Recovery/handoff instructions

Provide a concise report covering:

- What was implemented.
- What was reused from the prototype.
- What remains provisional.
- Test results and evidence.
- Known issues.
- The next smallest useful improvement.

## 6. Authorization boundaries

You are authorized to implement, test, document, commit, and push within this bounded M1 scope.

**Do not:**

- Merge the development branch into `main`.
- Deploy GitHub Pages.
- Modify the Possibility portal.
- Purchase or activate paid services.
- Expand into the other four adaptations.
- Redesign the approved narrative or characters.
- Begin a broad visual-production campaign.

If the ZIP cannot be accessed, inspect the repository and report the specific missing source rather than inventing a replacement.

## 7. Completion criteria

M1 is ready for owner review when:

- A complete Ending C playthrough works.
- The full nine-ending narrative structure is preserved.
- The application is usable in both languages.
- The project remains lightweight and maintainable.
- The verified work is safely pushed to GitHub.
- No deployment or merge has occurred.

**Guiding principle:**

Build the smallest convincing experience that demonstrates Zero Sum's storytelling potential.

Creative quality matters, but technical ambition must remain proportional to demonstrated capability.

Do not turn a hobby project into a production burden.
