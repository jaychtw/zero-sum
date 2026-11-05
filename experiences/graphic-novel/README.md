# Zero Sum — bilingual Interactive Graphic Novel

The active experience presents the owner-approved English and Traditional Chinese screenplay **v0.2** in **70 paired, reader-paced panels**, across 19 scenes, eight decisions and nine endings. It retains the accepted retro-anime interface and local artwork. No runtime dependencies, backend, account, remote font/API, video pipeline or paid service.

## Run

From the repository root:

```sh
cd experiences/graphic-novel
npm test
python3 -m http.server 8000 --bind 127.0.0.1
```

The committed application needs no install/build. Use HTTP; ES modules do not reliably load from `file://`. Relative paths support a repository subdirectory on a static host; nothing has been deployed.

Use mouse/touch or Tab/Enter/Space. Key **1** advances a panel or selects the first choice; **2** selects the second choice when available. Choices appear after a scene's final panel, and replay after an ending's final panel. Previous panel reverses within a scene, then restores the preceding scene's final choice panel; another choice can then be taken. Live EN/zh-TW switching retains the corresponding panel and focus. Restart/the wordmark ask before clearing progress. Story progress stays in memory; only language preference is retained. Blocked storage and unavailable illustration files do not prevent play.

## Source and authoring

- `manuscript.js`: committed bilingual dataset generated from the **approved v0.2** screenplay and `narrative/panel-plan.v1.json`. Each paragraph retains source line ranges, dialogue attribution and exact wording. It is the active story source.
- `session.js`: panel/scene progress, validated choices and reversible history. No scoring or persistent-save migration.
- `app.js`, `manuscript.css`: renderer, dialogue lettering and text-led panels; existing base styles and title remain.
- `story.js`, `ending-c.js`: preserved compact-prototype references, **not player-facing editorial sources and not loaded by the current app**. Accepted old application code is recoverable at `4ed8b9c`.
- `assets/`: eight original illustrations with unchanged bytes; only matching art is used. Seven files are active (including the cover), with source mapping in the panel plan. Missing/mismatched art uses localized text-led panels; no new art or sphere experiment.

From root, authoring checks are:

```sh
node scripts/build-screenplay.mjs --check
node scripts/screenplay.test.mjs
node scripts/narrative.test.mjs
```

After an authorized panel-plan change, regenerate with `node scripts/build-screenplay.mjs` (or `npm run build:screenplay` from this directory). Approved manuscripts and their hashes in `narrative/screenplay-lock.v02.json` must not be silently changed. [Mapping/composition record](../../docs/M4_INTEGRATION_MAPPING.md) documents the single transfer-paragraph alignment and C phase-order adjustment. Stable runtime/scene/branch identities remain unchanged; presentation panel IDs are separate.

## Browser QA — optional development tools

Install pinned tools outside the checkout; the application itself has no dependency installation:

```sh
npm install --prefix /tmp/zero-sum-qa --no-audit --no-fund playwright-core@1.62.1 axe-core@4.11.0
NODE_PATH=/tmp/zero-sum-qa/node_modules \
AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js \
CHROMIUM_PATH=/usr/bin/chromium npm run test:browser
NODE_PATH=/tmp/zero-sum-qa/node_modules \
AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:resilience
```

Run with the static server active. `BASE_URL`, `CHROMIUM_PATH` and full-suite `EVIDENCE_DIR` may override defaults. M4 results go to `docs/m4-evidence/`; previous M1/M2/readiness evidence is preserved. The full suite traverses every ending at four widths in both languages, checking visible source text, all 70 panels, switching, navigation, focus, touch emulation, motion and accessibility. Fault tests inject expected 404s rather than deleting files. Fonts/browser versions can affect rendering. A managed sandbox may require supported execution permission for the local server/browser.

## Review and limitations

[Consolidated M4 owner-preview package](../../docs/M4_OWNER_PREVIEW.md) is the current review entry point, including screenshots, exact verification and reading-length comparisons. The approved screenplay has been integrated; new panelization still awaits owner preview. Final art/provenance, manual title-overlay contrast, physical-device/screen-reader and production release acceptance remain separate. No merge, deployment or Possibility change.

For bounded cloud verification, the same suite supports a single viewport/language per invocation; start a fresh loopback server for each short run (or a small sequential batch):

```sh
TEST_WIDTHS=390 TEST_LANGUAGES=zh REPORT_NAME=browser-390-zh.json \
M4_RUN_GROUP=m4-final-7cd8124 AXE_PATH=/tmp/zero-sum-qa/node_modules/axe-core/axe.min.js npm run test:browser
```

Use widths 320/390/768/1440 and languages en/zh, choosing a fresh unique group name for a new verification run and keeping it consistent across all eight reports. Only 1440/en also runs the keyboard-only C route and static-boundary comparison. From repository root, `node scripts/m4-evidence.mjs m4-final-7cd8124` checks report completeness and matching application hashes before producing the consolidated browser result. Source/text, attribution, focus and navigation assertions remain enabled in every selected case. Run browser cases serially; historical reports/captures must not substitute for an interrupted run.
