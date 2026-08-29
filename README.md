# IPTRADE Landing

Marketing site and docs for **[IPTRADE](https://jometa9.github.io/IPTRADE)** — the free, open-source trade copier for MetaTrader 4/5 and cTrader.

- Desktop app source: [jometa9/IPTRADE-APP](https://github.com/jometa9/IPTRADE-APP)
- MetaTrader EAs + bridge DLL source: [jometa9/IPTRADE-BOTS](https://github.com/jometa9/IPTRADE-BOTS)

## Stack

Next.js 15 (App Router) + React 19 + Tailwind 4. Fully static — no backend, no database, no analytics, no environment variables.

## Pages

| Route | What |
| --- | --- |
| `/` | Landing: hero, embedded app demo, features, download, comparison, FAQ |
| `/prop-firms` | Prop-firm focused landing |
| `/documentation` | Renders `public/docs.md` |
| `/legal` | Terms, privacy, cookies, disclaimer, complaints (`public/*.md`) |
| `/auth/local/callback` | cTrader OAuth relay: forwards the `code` into the desktop app via the `iptrade://` deep link |

Download buttons point at the latest [GitHub Release](https://github.com/jometa9/IPTRADE-APP/releases/latest) of the app; the displayed version number is fetched client-side from the GitHub API.

## Hosting

Served as a static site on **GitHub Pages** at `https://jometa9.github.io/IPTRADE/`. Because it lives under the `/IPTRADE` project path, `next.config.mjs` sets `output: "export"` and `basePath: "/IPTRADE"` (kept in sync with `BASE_PATH` in `lib/asset.ts`). Raw `/public` references use the `asset()` helper so they resolve under the base path — `next/image` and `next/link` apply it automatically.

The cTrader OAuth redirect URL is therefore `https://jometa9.github.io/IPTRADE/auth/local/callback` — register exactly this in your cTrader Open API application.

## Development

```bash
npm ci
npm run dev   # http://localhost:3001/IPTRADE
```

## Deploy

Pushing to `main` runs [.github/workflows/pages.yml](.github/workflows/pages.yml): `next build` produces a static `out/`, which is published to GitHub Pages. No env vars, no server.

## License

[MIT](LICENSE)
