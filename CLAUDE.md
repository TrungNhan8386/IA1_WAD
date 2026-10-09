# CLAUDE.md — cart (IA#1)

Rules for any assistant (or person) working in this repository.

## Stack

- Node.js 22, plain JavaScript, ES modules (`"type": "module"`).
- Tests: the built-in `node:test` runner with `node:assert/strict`.
- Formatting: Prettier 3.3.3 (devDependency only), config in `.prettierrc.json`
  — no semicolons, single quotes.
- CI: GitHub Actions, `.github/workflows/ci.yml`, runs on every push.

## Layout

- `src/cart.js` — `cartTotal(items, options)`, the only production code.
- `test/cart.test.js` — tests for `cartTotal`.
- `README.md` — the specification. When code and README disagree, README wins.
- `brief.md` — the brief given to the assistant. `AI-LOG.md` — log of AI use.

## Commands

```bash
npm ci                # install (only Prettier)
npm test              # run all tests — must be green before every commit
npm run format:check  # check formatting — CI fails if this fails
npm run format        # fix formatting
```

## Before you say "done"

1. `npm run format:check` passes.
2. `npm test` passes.
3. Add an entry to `AI-LOG.md` for the task.

## Never

- Never add a runtime dependency. `dependencies` in `package.json` stays empty;
  only Prettier is allowed, as a devDependency.
- Never edit or delete the test `the example from the slides`, and never change
  a test just to make it pass. If a test looks wrong, check it against README.md.
- Never use `toFixed` for the total: it returns a string. Round with `Math.round`.
- Never commit `node_modules/` or `.env`.
