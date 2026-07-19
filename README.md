# Qpid Family Child Care

Marketing site for Qpid Family Child Care (Oceanside home daycare) — a Vite + React static landing page.

## Local development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build    # output in dist/
pnpm preview  # preview the production build
```

## Deploy to Cloudflare (static Worker assets)

This repo is set up for a **Workers** Git project (not classic Pages). Vite builds to `dist/`, and Wrangler uploads that folder as static assets via [`wrangler.toml`](wrangler.toml).

### Git integration (dashboard)

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Deploy command | `npx wrangler deploy` |

Cloudflare already runs `pnpm install` before your build command. Push to `main` to redeploy.

### Wrangler CLI

```bash
pnpm install
npx wrangler login
pnpm deploy
```
