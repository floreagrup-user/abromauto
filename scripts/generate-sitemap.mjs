import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const SITE_URL = 'https://abromauto.ro'

// Read vehicle slugs straight from the generated data module without a full
// TS/bundler pipeline — this runs as a plain prebuild Node script.
const vehiclesTs = fs.readFileSync(`${root}/src/data/vehicles.ts`, 'utf-8')
const slugs = [...vehiclesTs.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1])

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/stoc-auto/', priority: '0.9', changefreq: 'daily' },
  { path: '/finantare/', priority: '0.7', changefreq: 'monthly' },
  { path: '/trade-in/', priority: '0.6', changefreq: 'monthly' },
  { path: '/despre-noi/', priority: '0.5', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy-policy/', priority: '0.2', changefreq: 'yearly' },
  { path: '/politica-cookie/', priority: '0.2', changefreq: 'yearly' },
  { path: '/termeni-si-conditii/', priority: '0.2', changefreq: 'yearly' },
]

const today = new Date().toISOString().slice(0, 10)

const urls = [
  ...staticPages.map((p) => ({ loc: p.path, priority: p.priority, changefreq: p.changefreq })),
  ...slugs.map((slug) => ({ loc: `/${slug}/`, priority: '0.8', changefreq: 'weekly' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

fs.writeFileSync(`${root}/public/sitemap.xml`, xml)
console.log(`Wrote sitemap.xml with ${urls.length} URLs (${slugs.length} vehicles + ${staticPages.length} static pages)`)
