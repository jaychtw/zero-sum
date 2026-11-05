# Zero Sum — M1 Interactive Graphic Novel

A static bilingual adaptation with 19 narrative nodes, eight decisions, and nine endings. No runtime dependencies, build, backend, external fonts, account, telemetry, paid service, or AI-video pipeline. Relative asset URLs support a GitHub Pages subdirectory; deployment is not part of M1.

## Run and test

From the repository root:

```sh
cd experiences/graphic-novel
npm test
python3 -m http.server 8000 --bind 127.0.0.1
```

Use the local server in your browser. ES modules require HTTP rather than `file://`. The entry screen leads to the opening narrative, then the original decisions. Use mouse, touch, Tab/Enter/Space, or keys 1/2. English/Traditional Chinese switching preserves the current scene and history. Previous panel revisits the last scene; Restart and the wordmark ask before clearing the current route. Replay begins at the opening. Only the language preference is retained across reloads; story progress stays in memory. Unavailable storage does not block play.

### Browser QA (development tools only)

The application needs no installation. To reproduce the optional browser/audit tooling, install pinned tools outside the checkout:

```sh
npm install --prefix /tmp/zero-sum-qa --no-audit --no-fund playwright-core@1.62.1 axe-core@4.11.0
NODE_PATH=/tmp/zero-sum-qa/node_modules \
AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js \
CHROMIUM_PATH=/usr/bin/chromium npm run test:browser
```

Run with the static server above active. `BASE_URL` can override its address. The suite uses installed Chromium, exercises all ending routes at 320/390/768/1440px in both languages, checks keyboard and emulated touch, audits all rendered nodes at desktop/mobile widths, and writes current M2 results to `docs/m2-evidence/` while preserving the accepted M1 evidence in `docs/evidence/`. Browser/OS versions can affect font rendering; see the recorded evidence. In managed cloud environments the server and browser may require the supported execution permission beyond the restricted command sandbox.

## Structure and provisional status

- `story.js`: original archive's unchanged reusable bilingual graph and prose.
- `session.js`: small navigation state machine, independent of rendering.
- `presentation.js`: centralized interface localization and illustration metadata.
- `app.js`, `style.css`: graphic-novel presentation, with native accessible controls and reduced-motion support.
- `assets/`: eight original compressed illustrations, about 1 MB total.
- `tests/`: graph/session and actual-browser verification.

No shared engine or other adaptation was introduced. Source and artwork provenance/limitations: [SOURCE_ARCHIVE.md](docs/SOURCE_ARCHIVE.md). Results, screenshots, visual assessment and unverified acceptance: [QA.md](docs/QA.md). Approved intent remains in the root `docs/` directory.

## M2 Ending C (accepted interim presentation)

Ending C has three reader-paced presentation panels inside its existing story node. The original graph and story data are unchanged. The ascent reuses a close crop of the existing illustration; activation and the Downtown limit are explicitly labeled illustration-pending cards. The attempted sphere composite was rejected for composition and removed from the runtime. See [beat sheet and exact art alternative](../../docs/M2_ENDING_C_BEATS.md) and [M2 QA / before-after screenshots](docs/M2_QA.md). The owner accepted this three-beat, text-led interim presentation on 2026-11-05. This does not reopen M1 acceptance or constitute final artwork or complete screenplay approval. The accurate city illustration is deferred production art, not an immediate blocker; no further sphere experiment or visual-production expansion is authorized. M3 — Narrative Consolidation is proposed without changing the accepted playable experience.
