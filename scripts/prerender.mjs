/**
 * Post-build prerender for the SPA homepage (/).
 * Renders the built app in headless Chromium and writes dist/index.html
 * so crawlers receive meaningful HTML without executing JavaScript.
 *
 * Vercel/Linux CI: @sparticuz/chromium + puppeteer-core (no system libnss/libnspr).
 * Local: full puppeteer with its bundled Chrome.
 */
import { createServer } from 'node:http'
import { writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const indexPath = path.join(distDir, 'index.html')

const SKIP = process.env.SKIP_PRERENDER === '1'
const IS_VERCEL = Boolean(process.env.VERCEL)

function validateHtml(html) {
  const errors = []

  if (!html.includes('Tuition @ Pioneer')) {
    errors.push('Missing brand heading text')
  }
  if (!html.includes('id="classes"') && !html.includes('Subjects')) {
    errors.push('Missing classes section content')
  }
  if (!html.includes('id="find-us"') && !html.includes('Find Us')) {
    errors.push('Missing Find Us section content')
  }

  const canonicalCount = (html.match(/rel="canonical"/g) || []).length
  if (canonicalCount !== 1) {
    errors.push(`Expected 1 canonical tag, found ${canonicalCount}`)
  }

  const orgSchemaCount = (html.match(/"@type"\s*:\s*"EducationalOrganization"/g) || []).length
  if (orgSchemaCount !== 1) {
    errors.push(`Expected 1 EducationalOrganization JSON-LD block, found ${orgSchemaCount}`)
  }

  if (errors.length) {
    throw new Error(`Prerender validation failed:\n- ${errors.join('\n- ')}`)
  }
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
  const serve = sirv(distDir, {
    dev: false,
    etag: true,
    single: true,
  })

  const server = createServer((req, res) => {
    serve(req, res)
  })

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const { port } = server.address()
  return { server, port }
}

async function prerenderHomepage() {
  if (SKIP) {
    console.log('[prerender] SKIP_PRERENDER=1 — skipping homepage prerender.')
    return
  }

  if (!existsSync(indexPath)) {
    throw new Error(`[prerender] Missing ${indexPath}. Run vite build first.`)
  }

  const { server, port } = await startStaticServer()
  const url = `http://127.0.0.1:${port}/`

  let browser
  try {
    browser = await launchBrowser()

    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 900 })

    await page.goto(url, {
      waitUntil: 'load',
      timeout: 120000,
    })

    await page.waitForSelector('h1.gallery-title', { timeout: 60000 })
    await page.waitForSelector('#classes', { timeout: 60000 })
    await page.waitForSelector('#find-us', { timeout: 60000 })
    await page.waitForSelector('#teachers', { timeout: 60000 })

    // Allow Swiper/carousel layout to settle without waiting on analytics network idle.
    await new Promise((r) => setTimeout(r, 800))

    let html = await page.content()
    // Normalise any absolute dev-server asset URLs captured during prerender.
    html = html.replace(/https?:\/\/127\.0\.0\.1:\d+\//g, '/')
    validateHtml(html)
    writeFileSync(indexPath, html, 'utf8')
    console.log(
      `[prerender] Wrote prerendered homepage to dist/index.html (${IS_VERCEL ? 'Vercel/sparticuz' : 'local puppeteer'})`,
    )
  } finally {
    if (browser) {
      await browser.close()
    }
    await new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()))
    })
  }
}

prerenderHomepage().catch((error) => {
  console.error(error)
  process.exit(1)
})
