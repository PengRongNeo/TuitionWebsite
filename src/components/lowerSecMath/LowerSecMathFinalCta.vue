<template>
  <section class="chem-final-cta section" aria-labelledby="lsm-final-heading">
    <div class="container chem-final-cta__inner">
      <h2 id="lsm-final-heading">Ready to Strengthen Sec 1 &amp; 2 Math?</h2>
      <p>
        Build foundations and confidence with Teacher Karen in small-group classes near Pioneer MRT.
      </p>
      <LowerSecMathWhatsappButton label="WhatsApp Teacher Karen" />
      <p class="chem-final-cta__location">
        <RouterLink :to="{ path: '/', hash: '#find-us' }" class="chem-link">Tuition @ Pioneer, Jurong West</RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup>
import LowerSecMathWhatsappButton from '@/components/lowerSecMath/LowerSecMathWhatsappButton.vue'
</script>

<style scoped>
.chem-final-cta {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, #fff5f8 0%, #fff8f0 45%, #f0f8ff 100%);
}
.chem-final-cta__inner {
  text-align: center;
  max-width: 36rem;
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
