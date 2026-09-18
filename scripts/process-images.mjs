import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const SRC = path.resolve('_research/current-site/images')
const DEST_VEHICLES = path.resolve('public/images/vehicles')
const DEST_SITE = path.resolve('public/images/site')

// Matches the {thumb, card, detail} contract in src/lib/images.ts, plus a
// JPEG "cover.jpg" (image 01 only) for OG/social previews — crawlers like
// Facebook/WhatsApp don't reliably render WebP og:image tags.
const VARIANTS = {
  thumb: { width: 320, quality: 65 },
  card: { width: 720, quality: 70 },
  detail: { width: 1440, quality: 72 },
}
const COVER_WIDTH = 1200
const COVER_QUALITY = 80

// Keep in sync with SLUG_OVERRIDES in scripts/build-data.mjs.
const SLUG_OVERRIDES = {
  peugeot: 'peugeot-2008',
  volvo: 'volvo-xc40-interior-bej',
}

async function processVehicleDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  files.sort()
  let count = 0
  for (const file of files) {
    const srcPath = path.join(srcDir, file)
    const base = path.parse(file).name
    for (const [variant, { width, quality }] of Object.entries(VARIANTS)) {
      await sharp(srcPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 5 })
        .toFile(path.join(destDir, `${base}-${variant}.webp`))
    }
    if (base === '01') {
      await sharp(srcPath)
        .resize({ width: COVER_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: COVER_QUALITY, mozjpeg: true })
        .toFile(path.join(destDir, 'cover.jpg'))
    }
    count++
  }
  return count
}

async function processSiteDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  files.sort()
  let count = 0
  for (const file of files) {
    const srcPath = path.join(srcDir, file)
    const base = path.parse(file).name
    const ext = path.extname(file).toLowerCase()
    // Keep a lossless-friendly PNG copy for logo/favicon (transparency), plus a WebP for perf.
    if (ext === '.png') {
      fs.copyFileSync(srcPath, path.join(destDir, file))
    }
    await sharp(srcPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(destDir, `${base}.webp`))
    count++
  }
  return count
}

async function main() {
  const vehicleSlugs = fs
    .readdirSync(SRC)
    .filter((d) => d !== 'site' && fs.statSync(path.join(SRC, d)).isDirectory())

  let totalImages = 0
  for (const slug of vehicleSlugs) {
    const destSlug = SLUG_OVERRIDES[slug] ?? slug
    const n = await processVehicleDir(path.join(SRC, slug), path.join(DEST_VEHICLES, destSlug))
    totalImages += n
    console.log(`${slug} -> ${destSlug}: ${n} images`)
  }

  const siteDir = path.join(SRC, 'site')
  if (fs.existsSync(siteDir)) {
    const n = await processSiteDir(siteDir, DEST_SITE)
    console.log(`site: ${n} images`)
    totalImages += n
  }

  console.log(`\nDone. ${totalImages} source images processed across ${vehicleSlugs.length} vehicles.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
