# Maenam Villa Hotel — website

Live site: https://hokadiw-p14.github.io/maenam-villa-new/

Plain static HTML/CSS/JS, deployed to GitHub Pages via
`.github/workflows/deploy.yml` on every push to `main`. No build step runs
in CI — the files in the repo are served as-is.

## Structure

- `index.html`, `booking.html`, `404.html` — main pages
- `rooms/*.html` — one page per room category, **generated** (see below)
- `src/` — shared `styles.css`, `app.js` (i18n + header), `booking.js`
- `public/` — favicon, manifest, OG image
- `robots.txt`, `sitemap.xml` — at repo root so they resolve at
  `/maenam-villa-new/robots.txt` and `/maenam-villa-new/sitemap.xml`

## Editing room pages

The 6 files under `rooms/` are generated from one template so the markup
can't drift between rooms. To change a room's name or description:

1. Edit `data/rooms.json`
2. Run `npm run build:rooms` (or `node scripts/build-rooms.mjs`)
3. Commit both the JSON change and the regenerated files in `rooms/`

To add a new room category, add an entry to `data/rooms.json`, add its
Thai/English strings to the `dict` in `src/app.js`, then run the build
script and add the new room card to `index.html` and the room `<select>`
in `booking.html`.

## Local preview

```
npm install
npm run dev
```

(`vite` here just serves the static files locally — it isn't part of the
GitHub Pages deploy.)

## Known content gap

Room pages intentionally don't list prices, sizes, or amenities — that
data isn't available from any verified source yet, so nothing is invented.
Real photos are also not hosted here; the homepage gallery embeds the original
site's gallery page directly. Once verified pricing, amenities, and photos
exist, they belong in `data/rooms.json` and `public/`.
