# Tamboerswinkel Website

A sample marketing website for **Tamboerswinkel** (coffee shop, deli, and wine shop), built with **Vite** and intended for static hosting on **GitHub Pages**.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- npm (via `package-lock.json`)

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally (dev server)

```bash
npm run dev
```

### 3) Build static files for production

```bash
npm run build
```

### 4) Preview production build locally

```bash
npm run preview
```

## Build Output (`dist/`)

Vite compiles the app into static assets in the `dist/` folder.

```txt
dist/
├── index.html
├── assets/
└── ...
```

This is the folder uploaded and deployed by the GitHub Actions workflow.

## Vite Base Path for GitHub Pages

Because this project is deployed as a **GitHub Pages project site** (not a custom domain), the app is served from:

- `/tamboerswinkel-website/`

So Vite must be configured with:

```ts
export default defineConfig({
  base: '/tamboerswinkel-website/',
  // ...other config
});
```

Without this, built asset URLs can point to the wrong root path and fail to load in production.

## GitHub Pages Deployment

Deployment is automated using GitHub Actions via `.github/workflows/deploy.yml`.

### One-time GitHub setup

1. Push your code to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

### Deploy flow

1. Push to the `main` branch.
2. The workflow builds the Vite app and uploads `dist/`.
3. GitHub Pages deploys automatically.

After deployment, the site should be available at:

- https://therealvincentsordo.github.io/tamboerswinkel-website/

## Repository Structure (high level)

```txt
.
├── .github/workflows/deploy.yml
├── src/
├── vite.config.ts
├── package.json
└── README.md
```

## Troubleshooting

- **Blank page or missing CSS/JS on GitHub Pages**
  - First check `vite.config.ts` has:
    - `base: '/tamboerswinkel-website/'`
- **Workflow fails on install**
  - Ensure `package-lock.json` is committed and valid for `npm ci`.
- **Pages not updating**
  - Confirm Pages source is set to **GitHub Actions** and that your push was to `main`.

## Future Improvements

- Add automated tests (unit/integration) and run them in CI before deploy.
- Add preview deployments for pull requests.
- Add basic performance/accessibility checks in the workflow.
