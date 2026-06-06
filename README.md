# Mohamed Ncib Portfolio

Refactored Vite + React + Tailwind portfolio for Mohamed Ncib, repositioned as a product designer with former web-development experience and a subtle data-science sensibility.

## Stack

- React 18
- Vite 8
- Tailwind CSS 3
- React Router
- Motion
- Lucide React
- GitHub Pages via `gh-pages`

## Run Locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm dedupe
npm run lint
npm run build
npm audit
```

The lint command enforces `--max-warnings 0`.

## Deploy

The repository deploy target is a GitHub project page named `Mohamed-Ncib`.

Important deploy settings:

- Vite `base` is `/Mohamed-Ncib/` in `vite.config.js`.
- `BrowserRouter` uses `basename={import.meta.env.BASE_URL}` in `src/main.jsx`.
- `public/404.html` redirects deep links back into the SPA so refreshes on `/work/:slug` do not dead-end on GitHub Pages.

Deploy command:

```bash
npm run deploy
```

If deploying to Netlify or a custom domain root, change `base` to `/`, update `homepage`, and replace the GitHub Pages 404 strategy with the host's rewrite rule.

## Structure

```text
src/
  components/   reusable UI primitives
  data/         profile, projects, skills, testimonials, posts
  lib/          cn helper and theme hook
  pages/        Home, CaseStudy, NotFound
  sections/     Header, Hero, About, Work, Skills, Testimonials, Journal, Contact, Footer
  styles/       global Tailwind layers and CSS variables
```

## Content Editing

Most content is data-driven:

- Profile and social links: `src/data/profile.js`
- Work and case studies: `src/data/projects.js`
- Skills: `src/data/skills.js`
- Testimonials: `src/data/testimonials.js`
- Journal posts: `src/data/posts.js`

## Contact Form

The chosen lightweight backend is Formspree.

Set a real endpoint before launch:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Until this is set, the form opens a pre-filled email fallback to Mohamed's address and displays a placeholder backend message.

## Owner Placeholder Checklist

- Replace `src/assets/ME.png` with the final approved headshot.
- Replace `src/assets/PDF/Mohamed_Ncib_Resume_English.pdf` with the final CV PDF.
- Replace all `PLACEHOLDER` project copy, metrics, and outcomes in `src/data/projects.js`.
- Replace project screenshots with approved real case-study imagery.
- Replace testimonials in `src/data/testimonials.js` with approved real quotes.
- Replace the Dribbble placeholder URL in `src/data/profile.js` or remove it.
- Confirm LinkedIn, GitHub, email, phone, and WhatsApp URLs.
- Set `VITE_FORMSPREE_ENDPOINT` to a real Formspree endpoint.
- Replace `G-XXXXXXXXXX` in the commented GA4 snippet in `index.html` before enabling analytics.
- Replace `public/og-image.svg` if a custom branded social card is produced.

## Notes

- `REFACTOR-NOTES.md` documents dependency keep/remove decisions and bundle-size changes.
- `STYLE-GUIDE.md` documents tokens, typography, components, motion, accessibility, and theming.
