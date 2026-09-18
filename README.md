# AbRom Auto — website

Website oficial AbRom Auto (dealer mașini rulate, Alba Iulia). React + Vite + TypeScript + Tailwind CSS v4, fără backend obligatoriu — deployat static pe Cloudflare Pages.

## Stack

- React 19 + React Router 7 (routing client-side)
- Vite 8 + TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/vite`, design tokens în `src/index.css`)
- lucide-react pentru iconografie
- Fără CMS/backend — datele mașinilor sunt fișiere TypeScript statice în `src/data/`, generate din `_research/current-site/` (conținut real extras de pe abromauto.ro)

## Structură

```
src/
  components/   # layout, ui, home, vehicle
  pages/        # o pagină per rută
  data/         # vehicles.ts, company.ts — date reale, generate
  types/        # Vehicle, CompanyInfo
  hooks/        # useFavorites, useDocumentHead
  lib/          # format, whatsapp, leads, seo, facets, images
scripts/
  build-data.mjs        # regenerează src/data/*.ts din _research/current-site/*.json
  process-images.mjs    # optimizează pozele reale în WebP (thumb/card/detail/cover)
  generate-sitemap.mjs  # regenerează public/sitemap.xml (rulat automat la build)
public/
  images/       # pozele optimizate (WebP), servite static
  _redirects    # 301-uri Cloudflare Pages + fallback SPA
  robots.txt
```

## Comenzi

```bash
npm install
npm run dev        # server local, http://localhost:5173
npm run build      # tsc -b + generate-sitemap + vite build -> dist/
npm run preview    # servește build-ul de producție local
npm run lint        # oxlint
```

## Actualizarea datelor mașinilor

1. Actualizează `_research/current-site/vehicles.json` / `company.json` (extrase reale de pe site).
2. `npm run build-data` — regenerează `src/data/vehicles.ts` și `src/data/company.ts`.
3. Pune pozele noi în `_research/current-site/images/<slug>/` (numerotate `01.jpg`, `02.jpg`, ...) și rulează `npm run process-images`.
4. Commit + push.

Nu edita manual `src/data/vehicles.ts` / `company.ts` — sunt regenerate.

## Deploy pe Cloudflare Pages

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite (sau None)
- Repository GitHub conectat direct la Cloudflare Pages — fiecare push pe `main` redeployează automat.
- `public/_redirects` este copiat automat în `dist/_redirects` de Vite — Cloudflare Pages îl citește nativ pentru 301-uri și fallback SPA.

## Formulare / lead-uri

Nu există backend încă. `src/lib/leads.ts` deschide un mesaj WhatsApp pre-completat către numărul real AbRom Auto (funcționează garantat, fără infrastructură). Când va exista un backend/CRM, doar corpul funcției `submitLead()` trebuie schimbat cu un `fetch()` — apelurile din componente nu trebuie modificate.

Vezi `ABROM_AUTO_WEBSITE_AUDIT.md` pentru raportul complet (research competitori, migrare conținut/imagini, arhitectură, SEO, redirect-uri, ce mai trebuie făcut).
