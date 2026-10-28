<template>
  <section class="chem-final-cta section" aria-labelledby="amath-final-heading">
    <div class="container chem-final-cta__inner">
      <h2 id="amath-final-heading">Ready to Build Confidence in A-Math?</h2>
      <p>
        Strengthen your mathematical foundations, master problem-solving methods, and prepare confidently for your O Level Additional Mathematics examinations.
      </p>
      <AmathWhatsappButton label="WhatsApp Teacher Peng Rong" />
      <p class="chem-final-cta__location">
        Small-group classes near
        <RouterLink :to="{ path: '/', hash: '#find-us' }" class="chem-link">Pioneer MRT, Jurong West</RouterLink>.
      </p>
    </div>
  </section>
</template>

<script setup>
import AmathWhatsappButton from '@/components/amath/AmathWhatsappButton.vue'
</script>

<style scoped>
.chem-final-cta {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, #fff5e8 0%, #e8f4ff 50%, #ffe8f0 100%);
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
