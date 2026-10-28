import { onMounted, watch, toValue } from 'vue'
import { SITE_ORIGIN, SITE_NAME, OG_IMAGE_PATH } from '@/config/site'

const ORG_JSON_LD_ID = `${SITE_ORIGIN}/#organization`

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  if (!data) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = id
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export function applyPageSeo(seo) {
  const canonicalPath = seo.canonicalPath || '/'
  const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`
  const title = seo.title
  const description = seo.description
  const ogImage = `${SITE_ORIGIN}${OG_IMAGE_PATH}`

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('name', 'robots', seo.robots || 'index, follow')
  upsertLink('canonical', canonicalUrl)

  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', canonicalUrl)
  upsertMeta('property', 'og:locale', 'en_SG')
  upsertMeta('property', 'og:image', ogImage)

  upsertMeta('name', 'twitter:card', 'summary')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', ogImage)

  if (seo.includeOrganization !== true && seo.jsonLd) {
    const payload = Array.isArray(seo.jsonLd)
      ? { '@context': 'https://schema.org', '@graph': seo.jsonLd }
      : seo.jsonLd
    upsertJsonLd('page-json-ld', payload)
  } else {
    upsertJsonLd('page-json-ld', null)
  }

  if (seo.breadcrumbs?.length) {
    upsertJsonLd('breadcrumb-json-ld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: seo.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_ORIGIN}${item.path}`,
      })),
    })
  } else {
    upsertJsonLd('breadcrumb-json-ld', null)
  }
}

export function usePageSeo(seoSource) {
  const apply = () => applyPageSeo(toValue(seoSource))

  onMounted(apply)
  watch(seoSource, apply, { deep: true })
}

export function webPageJsonLd({ path, name, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_ORIGIN}${path}#webpage`,
    url: `${SITE_ORIGIN}${path}`,
    name,
    description,
    isPartOf: { '@id': ORG_JSON_LD_ID },
    about: { '@id': ORG_JSON_LD_ID },
  }
}

export function courseJsonLd({ path, name, description, teaches }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: `${SITE_ORIGIN}${path}`,
    provider: { '@id': ORG_JSON_LD_ID },
    teaches,
    inLanguage: 'en-SG',
  }
}
