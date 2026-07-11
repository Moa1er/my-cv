# Aghilès Gasselin — interactive CV

A fast, responsive portfolio built from the source CV in `my-cv-as-tex.tex`. The site is intentionally framework-light: TypeScript, CSS, Canvas, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. Push to `main`; the workflow will publish the `dist` output automatically. The Vite base path is relative, so both user sites and project sites work without changing configuration.

## Content

Résumé data lives in `src/data.ts`. Page structure and interactions live in `src/main.ts`; the visual system is in `src/styles.css`.
