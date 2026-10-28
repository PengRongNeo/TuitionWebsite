<template>
  <footer class="seo-footer section">
    <div class="container">
      <p class="seo-footer__brand">Tuition @ Pioneer · Gen Z Teachers making a difference.</p>
      <nav class="seo-footer__nav" aria-label="Related pages">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="lowerMathPath">Sec 1–2 Math</RouterLink>
        <RouterLink :to="lowerSciencePath">Sec 1–2 Science</RouterLink>
        <RouterLink :to="mathPath">O Level E-Math</RouterLink>
        <RouterLink :to="amathPath">O Level A-Math</RouterLink>
        <RouterLink :to="chemPath">O Level Chemistry</RouterLink>
        <RouterLink :to="physicsPath">O Level Physics</RouterLink>
        <RouterLink to="/#find-us">Find us</RouterLink>
      </nav>
      <p class="seo-footer__copy">© {{ year }} Tuition @ Pioneer. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ROUTE_PATHS } from '@/config/siteRoutes'

const lowerMathPath = ROUTE_PATHS.lowerSecMath
const lowerSciencePath = ROUTE_PATHS.lowerSecScience
const chemPath = ROUTE_PATHS.oLevelChemistry
const physicsPath = ROUTE_PATHS.oLevelPhysics
const amathPath = ROUTE_PATHS.oLevelAmath
const mathPath = ROUTE_PATHS.oLevelMath
const year = new Date().getFullYear()
</script>

<style scoped>
.seo-footer {
  background: var(--background-secondary);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-2xl) 0;
}

.seo-footer__brand {
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.seo-footer__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.seo-footer__nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
}

.seo-footer__nav a:hover {
  color: var(--color-orange);
}

.seo-footer__copy {
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 0;
}
</style>
