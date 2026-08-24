# Mohamed Ncib Portfolio

Vite + React + Tailwind portfolio for Mohamed Ncib — product strategist and developer building
business management systems, large-scale digital ecosystems, and AI-powered products.

## Stack

- React 18
- Vite 8
- Tailwind CSS 3
- React Router
- Motion
- Lucide React
- Netlify (static hosting + one serverless function)

## Run Locally

```bash
npm install
npm run dev          # http://localhost:5173
```

`npm run dev` serves the site and also mounts the project-brief endpoint at `/api/notion`
in-process, so the submission flow behaves exactly as it does in production. The Notion
credentials stay in the Node process — they are never exposed to the browser.

### Which local server to use

| Command             | Serves           | `/api/notion` | Use it for                                        |
| ------------------- | ---------------- | ------------- | ------------------------------------------------- |
| `npm run dev`       | source, with HMR | ✅ works      | Day-to-day building                               |
| `npm run dev:netlify` | built output via the real Netlify runtime | ✅ works | Final check before deploying |
| `npm run preview`   | `dist/` statically | ❌ 404       | Bundle/asset checks only                          |

**`npm run preview` does not run the serverless function** — it is Vite's static file server,
so `/api/notion` returns 404 and the project-brief flow appears broken. That is a limitation of
the preview server, not of the site. Use `npm run dev:netlify` when you want to confirm the
deployed behaviour: it applies `netlify.toml` redirects and executes the function exactly as
Netlify will. (`--offline` keeps it on your local `.env` rather than pulling the linked site's
environment variables.)

## Verify

```bash
npm run lint
npm run build
```

The lint command enforces `--max-warnings 0` across `src` and `netlify`.

## Environment

Copy `.env.example` to `.env` and fill it in. **Nothing here is prefixed with `VITE_`, and
nothing here should be** — Vite inlines every `VITE_`-prefixed variable into the public bundle,
so a `VITE_`-prefixed secret is a published secret.

| Variable                                                                                                    | Required | Purpose                                                     |
| ----------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- |
| `NOTION_TOKEN`                                                                                              | yes      | Notion internal integration secret                          |
| `NOTION_DATABASE_ID`                                                                                        | yes      | Target database for incoming project briefs                 |
| `NOTION_PROP_ARCHETYPE`, `NOTION_PROP_OBJECTIVE`, `NOTION_PROP_RESOURCES`, `NOTION_PROP_TIMELINE`, `NOTION_PROP_CONTACT` | no       | Map each answer to a column **by name** (strongly recommended) |

Without the `NOTION_PROP_*` map the function falls back to filling select columns in declared
order. Notion does not guarantee property order, so answers can land in the wrong columns —
set the names.

For the deployed site, add the same variables under **Netlify → Site settings → Environment
variables**.

## Deploy

Netlify, from `netlify.toml`:

- `npm run build` → `dist`
- Functions in `netlify/functions`
- `/api/notion` rewrites to the function. This rule is declared **before** the SPA catch-all;
  Netlify applies the first match, so moving it below `/*` would return `index.html` for API
  calls and silently break submissions.
- `/*` → `/index.html` for client-side routing.

## Architecture

```text
netlify/functions/
  notion.js      server-side Notion proxy — holds the token, handles CORS
src/
  components/    reusable UI primitives and modals
  data/          profile.js (bio, socials, stats), work.js (showcase content)
  lib/           cn helper, useModal (focus trap), notion client
  pages/         Home, NotFound
  sections/      Header, Hero, About, Work, Showcase, Contact, Footer
  styles/        global Tailwind layers and CSS variables
```

### Why the Notion call is server-side

`api.notion.com` sends no CORS headers, so a browser can never call it directly. Routing
through the function fixes that *and* keeps the integration token off the client. The client
half (`src/lib/notion.js`) only knows how to POST to our own origin.

## Content Editing

- Bio, stats, social links, CV: `src/data/profile.js`
- Work showcase categories and projects: `src/data/work.js`
- Journey timeline: the `entries` array in `src/sections/Work.jsx`

## Assets

- `public/Hero.webp` — hero and About portrait (2560px, ~59 KB). The 6.85 MB PNG original is
  archived at `src/assets/originals/Hero.png`, outside the deploy path.
- `public/og-image.png` — 1200×630 social card.
- `src/assets/` still holds project screenshots from an earlier version of the site. Nothing
  imports them, so they add nothing to the bundle — but they do add ~11 MB to a clone. Delete
  them once you are sure they are not needed for future case studies.
