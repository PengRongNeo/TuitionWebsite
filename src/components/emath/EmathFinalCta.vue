<template>
  <section class="chem-final-cta section emath-final-cta" aria-labelledby="emath-final-heading">
    <div class="container chem-final-cta__inner">
      <h2 id="emath-final-heading">Ready to Build Confidence in E-Math?</h2>
      <p>
        Learn with Teacher Karen in a supportive environment that combines strong mathematical foundations, consistent practice and a genuine connection with students.
      </p>
      <EmathWhatsappButton label="WhatsApp Teacher Karen" />
      <p class="chem-final-cta__location">
        Small-group classes near
        <RouterLink :to="{ path: '/', hash: '#find-us' }" class="chem-link">Pioneer MRT, Jurong West</RouterLink>.
      </p>
    </div>
  </section>
</template>

<script setup>
import EmathWhatsappButton from '@/components/emath/EmathWhatsappButton.vue'
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
