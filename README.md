# Maenam Villa Hotel — V2

Modern static website for Maenam Villa Hotel, based on verified information from the original website.

## V2
- Six dedicated room detail pages
- Thai / English language switcher
- Real source Gallery embedded from `https://www.maenamvilla.com/gallery.html`
- Google Maps embed using the published hotel address
- Mobile-first responsive UI
- GitHub Pages deployment workflow
- No invented room prices, dimensions or facilities

## Room pages
- /rooms/beach-front-bangalo.html
- /rooms/bangalo.html
- /rooms/sea-view.html
- /rooms/standard.html
- /rooms/balcony.html
- /rooms/single.html

## Source facts
The original site describes Maenam Villa as a small beachfront resort with 14 rooms at the end of Maenam Beach and emphasizes a quiet, private atmosphere. The source site lists the six room categories used here. The source gallery is available at the original Gallery page.

Contact published by the source:
- +66 97 921 1007
- +66 83 083 903 9930
- admin@maenamvilla.com
- LINE: Kijpaituraya
- WhatsApp: +66 97 921 1007

## Local preview
No build step is required.

```bash
python -m http.server 8080
```

Open http://localhost:8080

## GitHub Pages
The repository includes `.github/workflows/pages.yml`. In GitHub, set **Settings → Pages → Source** to **GitHub Actions** if Pages is not already enabled. Every push to `main` then deploys the static site.
