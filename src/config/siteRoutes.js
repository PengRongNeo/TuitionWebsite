/** Indexable public routes — keep in sync with vue-router and prerender script. */

export const ROUTE_PATHS = {
  home: '/',
  lowerSecMath: '/tuition/lower-secondary-math/',
  lowerSecScience: '/tuition/lower-secondary-science/',
  oLevelChemistry: '/tuition/o-level-chemistry/',
  oLevelPhysics: '/tuition/o-level-physics/',
  oLevelAmath: '/tuition/o-level-amath/',
  oLevelMath: '/tuition/o-level-math/',
}

export const SITEMAP_PATHS = [
  ROUTE_PATHS.home,
  ROUTE_PATHS.lowerSecMath,
  ROUTE_PATHS.lowerSecScience,
  ROUTE_PATHS.oLevelChemistry,
  ROUTE_PATHS.oLevelPhysics,
  ROUTE_PATHS.oLevelAmath,
  ROUTE_PATHS.oLevelMath,
]

/** Used by scripts/prerender.mjs via dynamic import */
export const PRERENDER_ROUTES = [
  {
    path: ROUTE_PATHS.lowerSecMath,
    outFile: 'tuition/lower-secondary-math/index.html',
    waitSelector: '[data-seo-page="lower-secondary-math"] h1',
    profile: 'tuition',
  },
  {
    path: ROUTE_PATHS.lowerSecScience,
    outFile: 'tuition/lower-secondary-science/index.html',
    waitSelector: '[data-seo-page="lower-secondary-science"] h1',
    profile: 'tuition',
  },
  {
    path: ROUTE_PATHS.oLevelChemistry,
    outFile: 'tuition/o-level-chemistry/index.html',
    waitSelector: '[data-seo-page="o-level-chemistry"] h1',
    profile: 'tuition',
  },
  {
    path: ROUTE_PATHS.oLevelPhysics,
    outFile: 'tuition/o-level-physics/index.html',
    waitSelector: '[data-seo-page="o-level-physics"] h1',
    profile: 'tuition',
  },
  {
    path: ROUTE_PATHS.oLevelAmath,
    outFile: 'tuition/o-level-amath/index.html',
    waitSelector: '[data-seo-page="o-level-amath"] h1',
    profile: 'tuition',
  },
  {
    path: ROUTE_PATHS.oLevelMath,
    outFile: 'tuition/o-level-math/index.html',
    waitSelector: '[data-seo-page="o-level-math"] h1',
    profile: 'tuition',
  },
  {
    path: ROUTE_PATHS.home,
    outFile: 'index.html',
    waitSelector: 'h1.gallery-title',
    profile: 'home',
  },
]
