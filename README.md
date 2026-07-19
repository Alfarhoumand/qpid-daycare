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

## Deploy to Cloudflare Pages (static)

### Option A — Git integration (dashboard)

1. Push this repo to GitHub/GitLab.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `pnpm install && pnpm build` |
| Build output directory | `dist` |

4. Deploy. Later pushes to the production branch redeploy automatically.

### Option B — Wrangler CLI

```bash
pnpm install
npx wrangler login
pnpm deploy
```

That runs `vite build` and uploads `dist/` using [`wrangler.toml`](wrangler.toml).
