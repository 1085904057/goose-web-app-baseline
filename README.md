# Goose Web App Baseline

React and Vite baseline for AppBuilder Brand Form Design applications.

The visual Form Design is fixed by this repository. A Brand is applied without
changing source files by setting:

- `VITE_BRAND_ID`
- `VITE_BRAND_NAME`
- `VITE_FORM_TITLE`
- `VITE_FORM_DESCRIPTION`

## Commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm test
pnpm build
```

The Vite development server binds to `0.0.0.0:5173` with `strictPort` enabled
so it can be exposed through a remote Sandbox Port URL.
