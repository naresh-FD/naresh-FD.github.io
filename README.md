# Naresh Kumar R — Portfolio

Personal portfolio for [Naresh Kumar R](https://github.com/naresh-FD), an Associate Architect focused on frontend architecture, secure enterprise platforms, and local-first developer tooling.

Live site: [naresh-fd.github.io](https://naresh-fd.github.io/)

## What is featured

- React Intelligent Test Generator
- Argus Security Validation
- RepoScribe
- Conduit Architecture
- Mileage Tracker
- React TestGen Coverage
- ListSync
- Banking Data Assessment

The site also links to the complete public [GitHub repository archive](https://github.com/naresh-FD?tab=repositories).

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Static export for GitHub Pages
- GitHub Actions deployment

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build:pages
npm test
```

`build:pages` creates the static site in `out/` using the same mode as the GitHub Pages workflow.

## Deployment

Every push to `main` runs [the Pages workflow](.github/workflows/pages.yml), builds the static export, and deploys it to GitHub Pages. The workflow can also be started manually from GitHub Actions.
