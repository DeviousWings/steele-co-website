# STEELE CO. — Sovereign Data Infrastructure

Vite + React 18 + Tailwind CSS + lucide-react.

## Local development

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Deploy to GitHub Pages

1. Confirm `vite.config.js` `base` matches your repo name exactly (e.g. `/steele-co-website/`).
2. `npm run deploy` (runs `gh-pages -d dist`, builds and pushes `dist/` to the `gh-pages` branch).
3. In GitHub repo Settings → Pages, set source to the `gh-pages` branch, root folder.
4. Site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Structure

```
src/
├── components/   Reusable widgets (nav, footer, modals, terminal, calculators)
├── pages/        One file per site section (Home, Tiers, SDI Act, Exposé, ROI)
├── data/         Static content (pricing tables, simulated logs)
├── App.jsx       Root state + routing
└── main.jsx      React DOM entry
```
