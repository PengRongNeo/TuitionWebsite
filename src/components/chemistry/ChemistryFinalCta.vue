<template>
  <section class="chem-final-cta section" aria-labelledby="chem-final-heading">
    <div class="container chem-final-cta__inner">
      <h2 id="chem-final-heading">Ready to Build Confidence in Chemistry?</h2>
      <p>
        Strengthen your Chemistry foundations, practise examination techniques, and prepare for your O Levels with Tuition
        @ Pioneer.
      </p>
      <ChemistryWhatsappButton label="WhatsApp Peng Rong" />
      <p class="chem-final-cta__location">
        Small-group classes near
        <RouterLink :to="{ path: '/', hash: '#find-us' }" class="chem-link">Pioneer MRT, Jurong West</RouterLink>.
      </p>
    </div>
  </section>
</template>

<script setup>
import ChemistryWhatsappButton from '@/components/chemistry/ChemistryWhatsappButton.vue'
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
