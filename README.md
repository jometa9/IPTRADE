# IPTRADE Landing

Marketing site and docs for **[IPTRADE](https://iptradecopier.com)** — the free, open-source trade copier for MetaTrader 4/5 and cTrader.

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
| `/version` | Legacy JSON endpoint for app ≤ 4.1.x update checks (new versions use the GitHub Releases API) |

Download buttons point at the latest [GitHub Release](https://github.com/jometa9/IPTRADE-APP/releases/latest) of the app; the displayed version number is fetched client-side from the GitHub API.

## Development

```bash
npm ci
npm run dev
```

## Deploy

`Dockerfile` builds a standalone Next.js server (used on Railway; any Docker host works). No env vars needed.

## License

[MIT](LICENSE)
