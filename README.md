# Sultan Muhammad Dhavi — Portfolio

Personal portfolio site for Sultan Muhammad Dhavi, a Back End Developer specializing in Laravel, Go, RESTful API design, and FilamentPHP CMS platforms.

**Live:** [dhavi-portfolio.vercel.app](https://dhavi-portfolio.vercel.app/)

## Features

- **Bilingual (ID/EN)** — every section switches language instantly via a toggle in the navbar, persisted across visits
- **Dark / light theme** — respects your OS preference on first visit, remembered after that
- **Project detail modal** — click any project card for a full write-up (problem, challenges, tech stack, screenshot carousel) instead of just a link out
- **Command palette** — `Cmd+K` / `Ctrl+K` from anywhere for quick navigation, social links, and settings (plus a couple of hidden easter eggs — try typing "party")
- **Client-side contact form** — sends via EmailJS, no backend required
- Fully static, deployable to any static host

## Tech stack

- **React 18** + **Vite** — no router; the site is a single scrolling page
- **Tailwind CSS** — theme colors/fonts driven by CSS custom properties (see `tailwind.config.js` / `src/index.css`) so dark/light mode needs no per-component overrides
- **Framer Motion** (via `LazyMotion`) for scroll/entrance animations
- **cmdk** for the command palette
- **EmailJS** for the contact form
- Hand-rolled i18n (`src/i18n/`) and theme (`src/theme/`) context providers — no external libraries for either

## Getting started

**Prerequisites:** Node 18+ (CI runs on Node 20)

```bash
git clone https://github.com/dhavisiregar/portfolio.git
cd portfolio
npm install
```

Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials (only needed for the contact form to actually send):

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start the dev server with HMR         |
| `npm run build`    | Production build to `dist/`           |
| `npm run preview`  | Serve the production build locally    |
| `npm run lint`     | Run ESLint                            |

## Project structure

```
src/
  components/     UI components (one file per section, plus Navbar/modal/command palette)
  constants/      All content (bio, experience, projects, tech stack) and UI copy, in one place
  i18n/           Language context (ID/EN)
  theme/          Dark/light theme context
  assets/         Images, auto-discovered via Vite's import.meta.glob — no manual imports needed
public/           Static files served as-is (favicon, CV.pdf, robots.txt, sitemap.xml, OG image)
```

Editing content (bio, work experience, project descriptions) almost never requires touching a component — it all lives in `src/constants/index.js`.

## Deployment

Deployed on [Vercel](https://vercel.com/). [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs lint + build on every push/PR to `main`.

## Updating your CV

The "Download CV" button links directly to `public/CV.pdf` — it is a static file, not generated from the site's content. Re-export and replace it manually whenever your experience or projects change.
