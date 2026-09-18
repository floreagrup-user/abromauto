# AbRom Auto — Audit & Raport Rebuild Website

Data: 2026-09-18. Website nou construit de la zero în `/Users/aldeacosmin/Developer/abromauto`, React + Vite + TypeScript + Tailwind CSS v4, pregătit pentru Cloudflare Pages + GitHub.

---

## A. Research competitori

Analizate (research complet în `_research/competitor-benchmark.md`): **Autovit.ro**, **OLX.ro** (secțiunea Auto), **Bestauto.ro**, **DasWeltAuto.ro**, și **Carvago.com/ro** (a 5-a alegere — platformă europeană de vânzare mașini rulate axată aproape integral pe eliminarea anxietății de cumpărare: inspecție tehnică independentă, garanție, retur 14 zile, livrare la domiciliu — structural mai apropiată de ce are nevoie un dealer premium single-brand decât un marketplace peer-to-peer).

Principiile prioritizate extrase (lista completă, pe 5 niveluri de prioritate, în fișierul de research) și **implementate efectiv** în noul site:

1. **Elimină anxietatea specifică pieței second-hand din România** — kilometraj certificat, raport CarVertical, istoric service, verificare posibilă în service autorizat → toate afișate explicit pe fiecare card și pagină de mașină (`PurchaseTrustBlock`, `TrustBar`, badge-uri pe card).
2. **Reduce fricțiunea de la card la contact** — CTA WhatsApp precompletat cu numele mașinii, telefon direct, sticky CTA bar pe mobil pe pagina de detaliu (`StickyMobileCTA`), formular contextual care știe automat ce mașină interesează utilizatorul.
3. **Filtrare fără overwhelm** — filtre esențiale (status, marcă, caroserie, combustibil, transmisie, preț, an), fără fațete inutile pentru un stoc de 20 mașini; fără infinite scroll (grid simplu, tot stocul disponibil vizibil).
4. **Încredere construită pe homepage înainte de pagina de detaliu** — trust bar cu explicații (nu doar iconițe), secțiune „De ce AbRom Auto", stats reale (100% clienți mulțumiți, 12 luni garanție, 30 min aprobare finanțare, 7/7 deschis).
5. **Detalii vizuale/UI** — carduri cu specificații esențiale vizibile fără click, galerie foto completă, design system coerent (vezi secțiunea F).

Nu s-a copiat niciun layout, text, imagine sau cod al competitorilor — doar principii, redactate independent.

---

## B. Audit website actual (abromauto.ro)

Detalii complete în `_research/current-site/pages-audit.md`. Rezumat:

- Platformă sursă: WordPress + Bricks Builder + Rank Math SEO. Toate paginile accesate fără blocaje (fără Cloudflare challenge, fără hotlink protection).
- **20 mașini** în stoc (11 disponibile, 8 vândute — păstrate ca social proof, 1 „sosește în curând"), toate cu date reale complete: preț (unele cu variantă „fără TVA"), an, km, combustibil, transmisie, motor, putere, culoare, VIN, dotări categorizate, descriere.
- Pagini statice: `/despre-noi/`, `/finantare/`, `/contact/`, `/trade-in/`, `/privacy-policy/`, `/politica-privind-modulele-cookie/`, `/refund_returns/` (de fapt Termeni și Condiții).
- Date companie verificate cross-pagină: SC ABROM TRANS SRL, CUI 49361806, RC J2024000013017, sediu Str. Unirii Nr. 3 vs. showroom Str. Pietrar (adrese diferite — păstrate corect distincte), telefon/WhatsApp `0786 087 474`, program **inclusiv weekend** (diferențiator real față de mulți competitori), Meta Pixel activ (`1469736181848423`), fără GA4/GTM instalat.
- **Fără testimoniale reale găsite nicăieri** — secțiunea a fost omisă intenționat pe noul site, per instrucțiune explicită de a nu inventa conținut.

---

## C. Migrare conținut

Tot conținutul real a fost migrat, nimic inventat:

- **20 vehicule** cu toate specificațiile (`src/data/vehicles.ts`, generat automat din `_research/current-site/vehicles.json` via `scripts/build-data.mjs`).
- Corectare date la migrare (fără fabricare — doar normalizare tehnică): 6 vehicule aveau anul publicat ca dată „LL.AAAA" (ex. „08.2020") în loc de an numeric — normalizat la an numeric pentru sortare/filtrare, cu data originală păstrată în câmpul `firstRegistration` pentru afișare.
- Conținut verbatim migrat: Finanțare (`financing.md`), Despre noi + Trade-In (`about.md`), toate cele 3 pagini legale (`legal-pages.md`) — Politică de confidențialitate, Politică cookie, Termeni și condiții.
- Descrierea lungă, identică pe toate cele 20 pagini vechi (bloc de încredere/finanțare/livrare/plată/mențiuni) a fost **centralizată într-o singură componentă** (`PurchaseTrustBlock`) în loc de dublată 20 de ori — aceeași informație reală, prezentare mai bună.
- Testimoniale: **omise deliberat** — nu există niciunul real pe site-ul curent.
- Buy-Back: menționat doar generic pe site-ul vechi (fără termeni publici); păstrat la același nivel de generalitate pe noul site (nu s-au inventat procente/condiții).

---

## D. Migrare imagini

- **761 fotografii reale** descărcate de pe abromauto.ro (305 MB original), verificate — toate poze reale ale mașinilor fizice (unele profesionale, majoritatea telefon/WhatsApp — autentice, nu stock photos).
- Optimizare (`scripts/process-images.mjs`, sharp): fiecare foto → 3 variante WebP (`thumb` 320px pentru strip-ul de thumbnail-uri, `card` 720px pentru carduri/listare, `detail` 1440px pentru galeria principală) + `cover.jpg` (JPEG, pentru `og:image` — crawlerele Facebook/WhatsApp nu randează consecvent WebP).
- Rezultat: **136 MB** total (de la 305 MB original), fără nicio poză eliminată.
- Site-wide: logo, favicon, hero homepage, badge-uri ANPC SAL/SOL — toate migrate.
- 2 slug-uri ambigue (`/peugeot/`, `/volvo/` — nu indicau modelul) redenumite descriptiv (`peugeot-2008`, `volvo-xc40-interior-bej`) cu redirect 301 (vezi secțiunea H).

---

## E. Arhitectură nouă

```
src/
  components/{layout,ui,home,vehicle}/
  pages/                    # o pagină per rută + pages/legal/
  data/{vehicles,company}.ts   # generate, nu edita manual
  types/{vehicle,company}.ts
  hooks/{useFavorites,useDocumentHead}.ts
  lib/{format,whatsapp,leads,seo,facets,images}.ts
scripts/{build-data,process-images,generate-sitemap}.mjs
public/{images,_redirects,robots.txt,sitemap.xml}
```

Rute: `/`, `/stoc-auto/` (filtre + sort via query params, fără pagini noi pe brand — nu existau pe site-ul vechi), `/finantare/`, `/trade-in/`, `/despre-noi/`, `/contact/`, `/favorite/` (localStorage, fără backend), `/:slug/` (pagină mașină — slug-uri păstrate identice cu cele vechi unde posibil), `/privacy-policy/`, `/politica-cookie/`, `/termeni-si-conditii/`, 404.

Funcționalități implementate: filtre + sortare stoc, galerie foto cu lightbox fullscreen, calculator de rată **orientativ** (marcat explicit ca simulare — site-ul vechi nu publică nicio dobândă reală), formular de contact contextual (WhatsApp precompletat cu mașina), favorite (localStorage), sticky CTA mobil pe pagina de mașină, buton WhatsApp flotant global.

Funcționalități **omise deliberat**: comparare mașini (catalog de 11 mașini disponibile — nu justifică complexitatea unei funcții de comparare, per instrucțiune explicită de a nu adăuga funcții doar „de dragul funcțiilor"); testimoniale (fără date reale); calculator de rată cu dobândă reală (nepublicată nicăieri de dealer).

---

## F. Design system

- Tipografie: Inter (text) + Sora (titluri/display), Google Fonts.
- Culori (`src/index.css`, Tailwind `@theme`): `ink` (navy aproape negru, pentru texte/fundal dark), `primary` (albastru încredere, CTA-uri), `accent` (auriu cald, folosit cu moderație pentru badge-uri), plus success/danger/warning.
- Componente UI reutilizabile: `Button`/`LinkButton` (variante `primary/secondary/outline/outlineOnDark/white/ghost/whatsapp` — fiecare variantă își deține propriile culori, niciodată suprascrise prin `className`, pentru a evita conflicte de specificitate CSS), `Badge`, `Container`.
- Fără glassmorphism, fără gradient-uri excesive, fără animații agresive — micro-interacțiuni subtile (hover pe carduri, tranziții de culoare).

---

## G. SEO

- `<title>` + meta description unice per pagină (`useDocumentHead`), Open Graph + Twitter Card.
- JSON-LD: `AutomotiveBusiness` (homepage, contact), `Car` + `Offer` (fiecare pagină de mașină — preț, an, km, combustibil, transmisie, VIN, disponibilitate), `BreadcrumbList`.
- `sitemap.xml` generat automat la fiecare build (`scripts/generate-sitemap.mjs`) din datele reale ale mașinilor — 29 URL-uri (9 statice + 20 mașini).
- `robots.txt` (permite tot, exclude `/favorite/`, referă sitemap-ul).
- Breadcrumb-uri vizibile pe pagina de mașină.
- SEO local: adresă, oraș (Alba Iulia), coordonate GPS reale în schema.org + hartă embedded.

---

## H. Strategie de redirect (URL vechi → nou)

Implementat în `public/_redirects` (Cloudflare Pages redirects nativ):

| URL vechi | URL nou | Motiv |
|---|---|---|
| `/peugeot/` | `/peugeot-2008/` | Slug ambiguu (nu indica modelul) |
| `/volvo/` | `/volvo-xc40-interior-bej/` | Slug ambiguu (2 unități XC40 distincte) |
| `/refund_returns/` | `/termeni-si-conditii/` | Slug WooCommerce implicit, conținut era de fapt T&C |
| `/category/in-stoc/` | `/stoc-auto/?status=available` | Categorie WP → filtru pe pagina de stoc |
| `/category/vandut/` | `/stoc-auto/?status=sold` | idem |
| `/category/soseste-in-curand/` | `/stoc-auto/?status=coming-soon` | idem |
| `/politica-privind-modulele-cookie/` | `/politica-cookie/` | Slug simplificat |

Toate celelalte URL-uri (homepage, `/despre-noi/`, `/finantare/`, `/contact/`, `/trade-in/`, `/privacy-policy/`, cele 18 slug-uri de mașini rămase) **au fost păstrate identice** cu site-ul vechi — nicio schimbare inutilă de URL, per instrucțiune explicită.

---

## I. Performanță

- Imagini: WebP, 3 dimensiuni per poză, `loading="lazy"` pe carduri/thumbnail-uri, `loading="eager"` + `fetchPriority="high"` doar pe hero-ul homepage.
- Code splitting automat per pagină (`React.lazy` + `Suspense` pe toate rutele din `App.tsx`) — fiecare pagină e un chunk separat descărcat doar la navigare.
- Bundle principal: ~384 KB / **100 KB gzip** (include date complete pentru 20 vehicule) — acceptabil pentru un catalog de această dimensiune; pagini individuale (Stock, VehicleDetail, Financing etc.) sunt chunk-uri separate de 2–17 KB gzip.
- Fără librării UI grele — componente proprii, Tailwind pentru stilizare (CSS final: 37 KB / 7 KB gzip).

---

## J. Testare efectuată

- **Build**: `tsc -b` (strict, fără erori) + `vite build` — succes, fără erori TypeScript, fără erori de build.
- **Browser real** (Chrome DevTools MCP, `npm run dev`): verificat homepage, `/stoc-auto/` (filtre + rezultate corecte — 11 mașini disponibile), pagină de mașină individuală (`/audi-a4-limuzina/`) — galerie, specificații, dotări, calculator finanțare (calcul live corect), formular, sticky sidebar, footer. Fără erori în consolă pe toate paginile verificate.
- **2 bug-uri reale găsite și corectate în timpul testării vizuale** (nu doar type-check):
  1. Butoane cu text invizibil (text alb pe fundal alb) — cauzat de conflict de specificitate Tailwind între clasa de variantă a componentei `Button` și un `className` de override; corectat prin adăugarea unor variante proprii (`outlineOnDark`, `white`) în loc de a suprascrie culori via `className`.
  2. Poza principală din galeria unei mașini afișa aproape exclusiv cer (crop greșit al unei fotografii portret cu `object-cover` într-un container landscape) — corectat la `object-contain` pentru imaginea mare din galerie (cardurile, care afișează corect deja, rămân `object-cover`).

---

## K. Probleme rămase / necesită intervenție umană

1. **Testimoniale** — nu există niciunul real pe site-ul vechi. Dacă AbRom Auto vrea această secțiune, trebuie furnizate recenzii reale (ex. export din Google Business Profile) — nu s-a inventat conținut.
2. **Buy-Back** — menționat doar generic pe site-ul vechi, fără termeni publici (procent, condiții exacte). Pagina Trade-In (distinctă, cu conținut real complet) e implementată; Buy-Back propriu-zis rămâne la nivelul de generalitate al site-ului sursă.
3. **Email de contact** — site-ul vechi folosește 3 adrese diferite (`vanzari@abromauto.ro`, `office@abromauto.ro`, `contact@abrom-auto.ro` — domeniu cu cratimă, posibil greșeală). Noul site folosește `vanzari@abromauto.ro` ca principal — de confirmat cu proprietarul.
4. **VIN vizibil public** — păstrat în modelul de date (secțiune de specificații), ca pe site-ul vechi. De discutat cu proprietarul dacă ar trebui ascuns din vizualizarea publică.
5. **GA4/Google Tag Manager** — nu exista pe site-ul vechi. Meta Pixel existent a fost păstrat (`1469736181848423`) pentru continuitate campanii; GA4 trebuie adăugat ca ID nou, de la proprietar.
6. **Repository GitHub** — momentan doar inițializat local (`git init`); push către `https://github.com/floreagrup-user/abromauto.git` necesită credențiale pe care nu le am în acest mediu.
7. **Dependency install** — instalarea de pachete noi npm eșuează local din cauza unei probleme de permisiuni pe cache-ul npm al sistemului (`~/.npm/_cacache`, `EACCES`); nu a blocat build-ul (toate dependențele necesare erau deja instalate), dar ar trebui reparată (`sudo chown -R $(whoami) ~/.npm`) înainte de a adăuga pachete noi.
8. **Fotografii "artistice"** — câteva poze din setul real (ex. Audi A4, shot profesional) au compoziții neobișnuite (cer dominant) — utile ca poze de galerie suplimentare, dar merită verificat manual care poză e cea mai potrivită ca `01.jpg` (coperta) pentru fiecare mașină, dacă proprietarul vrea control fin asupra ordinii.
