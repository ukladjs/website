# Uklad website

The landing page for [Uklad](https://github.com/ukladjs/uklad), agent-first state
management for React and React Native. Deployed to
[uklad.js.org](https://uklad.js.org) via GitHub Pages.

There is no separate documentation site. Reference material lives in the main
repository — the package READMEs and the [`docs/`](https://github.com/ukladjs/uklad/tree/main/docs)
tree — and this site links out to it.

## Project structure

```
uklad-website/
├── src/            # React landing page
│   ├── components/ # Shared UI (brand mark, code block, terminal)
│   └── sections/   # Page sections, top to bottom
├── public/         # Static assets, CNAME, robots.txt
└── dist/           # Build output (generated)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages. The custom domain
is set by `public/CNAME`.

## Keeping content accurate

The code samples in `src/sections/CodeShowcase.jsx` and `src/sections/QuickStart.jsx`
mirror the real API and the [TodoMVC example](https://github.com/ukladjs/uklad/tree/main/examples/todomvc).
When the runtime API changes, update them together — they are the first thing
visitors copy.

## Tech stack

- React 19 + Vite
- Custom CSS, no framework
- GitHub Pages
