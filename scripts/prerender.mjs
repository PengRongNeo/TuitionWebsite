/**
 * Post-build prerender for public SEO routes.
 */
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'
import { PRERENDER_ROUTES, SITEMAP_PATHS } from '../src/config/siteRoutes.js'
import { SITE_ORIGIN } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

const SKIP = process.env.SKIP_PRERENDER === '1'
const IS_VERCEL = Boolean(process.env.VERCEL)

function validateHtml(html, profile) {
  const errors = []

  if (!html.includes('Tuition @ Pioneer')) {
    errors.push('Missing brand text')
  }

  const canonicalCount = (html.match(/rel="canonical"/g) || []).length
  if (canonicalCount !== 1) {
    errors.push(`Expected 1 canonical tag, found ${canonicalCount}`)
  }

  if (profile === 'home') {
    if (!html.includes('id="classes"') && !html.includes('Subjects')) {
      errors.push('Missing classes section content')
    }
    if (!html.includes('id="find-us"') && !html.includes('Find Us')) {
      errors.push('Missing Find Us section content')
    }
    const orgSchemaCount = (html.match(/"@type"\s*:\s*"EducationalOrganization"/g) || []).length
    if (orgSchemaCount !== 1) {
      errors.push(`Expected 1 EducationalOrganization JSON-LD block, found ${orgSchemaCount}`)
    }
  }

  if (errors.length) {
    throw new Error(`Prerender validation failed:\n- ${errors.join('\n- ')}`)
  }
}

function writeSitemap() {
  const urls = SITEMAP_PATHS.map(
    (p) => `  <url>\n    <loc>${SITE_ORIGIN}${p === '/' ? '/' : p}</loc>\n  </url>`,
  ).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8')
  console.log('[prerender] Wrote dist/sitemap.xml')
}

async function launchBrowser() {
  if (IS_VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default
    const puppeteer = (await import('puppeteer-core')).default
    chromium.setGraphicsMode = false
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    })
  }

  const puppeteer = (await import('puppeteer')).default
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })
}

async function startStaticServer() {
  const serve = sirv(distDir, { dev: false, etag: true, single: true })
  const server = createServer((req, res) => serve(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  return { server, port: server.address().port }
}

function normalizeHtml(html) {
  return html.replace(/https?:\/\/127\.0\.0\.1:\d+\//g, '/')
}

async function prerenderAll() {
  if (SKIP) {
    console.log('[prerender] SKIP_PRERENDER=1 — skipping.')
    return
  }

  if (!existsSync(path.join(distDir, 'index.html'))) {
    throw new Error('[prerender] Missing dist/index.html. Run vite build first.')
  }

  const { server, port } = await startStaticServer()
  let browser

  const spaShellPath = path.join(distDir, 'index.html')
  const spaShellHtml = readFileSync(spaShellPath, 'utf8')

  try {
    browser = await launchBrowser()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 900 })

    for (const route of PRERENDER_ROUTES) {
      // Sirv `single` serves index.html for all paths — keep the Vite shell, not a prior prerender snapshot.
      writeFileSync(spaShellPath, spaShellHtml, 'utf8')

      const url = `http://127.0.0.1:${port}${route.path}`
      await page.goto(url, { waitUntil: 'load', timeout: 120000 })

      await page.waitForSelector(route.waitSelector, { timeout: 60000 })
      await new Promise((r) => setTimeout(r, 800))

      let html = normalizeHtml(await page.content())
      validateHtml(html, route.profile)

      const outPath = path.join(distDir, route.outFile)
      mkdirSync(path.dirname(outPath), { recursive: true })
      writeFileSync(outPath, html, 'utf8')
      console.log(`[prerender] Wrote ${route.outFile}`)
    }

    writeSitemap()
  } finally {
    if (browser) await browser.close()
    await new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()))
    })
  }
}

prerenderAll().catch((error) => {
  console.error(error)
  process.exit(1)
})
