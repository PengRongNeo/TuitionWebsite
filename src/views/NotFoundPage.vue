<template>
  <main id="main-content" class="not-found section">
    <div class="container text-center">
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved or is not available yet.</p>
      <RouterLink to="/" class="btn btn-primary">Back to homepage</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { usePageSeo } from '@/composables/usePageSeo'

usePageSeo({
  title: 'Page not found | Tuition @ Pioneer',
  description: 'This page could not be found on Tuition @ Pioneer.',
  canonicalPath: '/404',
  robots: 'noindex, follow',
})
</script>

<style scoped>
.not-found {
  padding-top: calc(80px + var(--spacing-3xl));
  min-height: 50vh;
}
</style>
