<template>
  <section class="chem-final-cta section" aria-labelledby="lss-final-heading">
    <div class="container chem-final-cta__inner">
      <h2 id="lss-final-heading">Ready to Build Science Confidence?</h2>
      <p>
        Strengthen Sec 1 &amp; 2 Science foundations with Teachers Karen and Peng Rong near Pioneer MRT.
      </p>
      <LowerSecScienceWhatsappButtons stack />
      <p class="chem-final-cta__location">
        <RouterLink :to="{ path: '/', hash: '#find-us' }" class="chem-link">Tuition @ Pioneer, Jurong West</RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup>
import LowerSecScienceWhatsappButtons from '@/components/lowerSecScience/LowerSecScienceWhatsappButtons.vue'
</script>

<style scoped>
.chem-final-cta {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, #e8fff0 0%, #f0f8ff 50%, #fff8f0 100%);
}
.chem-final-cta__inner {
  text-align: center;
  max-width: 36rem;
  margin: 0 auto;
}
.chem-final-cta h2 {
  margin-bottom: var(--spacing-md);
}
.chem-final-cta p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-secondary);
}
.chem-final-cta__location {
  margin-top: var(--spacing-lg);
  font-size: 0.95rem;
}
.chem-link {
  color: var(--color-orange);
  font-weight: 600;
}
</style>
