# Curated Environment

Artist site. Live: https://curatedenvironment-web.github.io/curated-environment/
Contact: curatedenvironment@gmail.com

## Structure
- `index.html` – video home, then Built | Inspiration spreads
- `style.css`, `site.js` – styling and behavior
- `img/` – built photos and `img/inspiration/`
- `video/` – home video

## Editing / adding a landing page
- Edit `index.html` and push to `main`; the GitHub Action redeploys in ~1 min.
- To add a separate landing page, create `landing.html` (or a folder like `landing/index.html`) and link to it. Use relative paths (`img/...`, not `/img/...`) so it works under `/curated-environment/`.
