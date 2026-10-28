<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="lsm-faq-heading">
    <div class="container chem-faq">
      <h2 id="lsm-faq-heading" class="chem-section__title">Frequently Asked Questions</h2>
      <div class="chem-faq__list">
        <details v-for="item in faqs" :key="item.id" class="chem-faq__item">
          <summary>{{ item.question }}</summary>
          <div class="chem-faq__answer">
            <p>{{ item.answer }}</p>
          </div>
        </details>
      </div>
      <aside class="chem-faq-cta emath-faq-cta" aria-labelledby="lsm-faq-cta-heading">
        <h3 id="lsm-faq-cta-heading" class="chem-faq-cta__title">💬 Have More Questions?</h3>
        <p class="chem-faq-cta__text">Ask Teacher Karen about Sec 1 &amp; 2 Math tuition or class availability.</p>
        <LowerSecMathWhatsappButton label="Ask Teacher Karen Now!" />
      </aside>
    </div>
  </section>
</template>

<script setup>
import LowerSecMathWhatsappButton from '@/components/lowerSecMath/LowerSecMathWhatsappButton.vue'
import { LOWER_SEC_MATH_FAQ } from '@/config/lowerSecMath'

const faqs = LOWER_SEC_MATH_FAQ
</script>

<style scoped>
.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}
.chem-faq__list {
  max-width: 720px;
  margin: 0 auto var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
.chem-faq__item {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-md) var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}
.chem-faq__item summary {
  cursor: pointer;
  font-weight: 700;
  list-style: none;
}
.chem-faq__item summary::-webkit-details-marker {
  display: none;
}
.chem-faq__item summary::after {
  content: '+';
  float: right;
  color: var(--color-orange);
}
.chem-faq__item[open] summary::after {
  content: '−';
}
.chem-faq__answer p {
  margin-top: var(--spacing-md);
  color: var(--text-secondary);
  line-height: 1.6;
}
.chem-faq-cta {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: var(--spacing-xl);
  border-radius: var(--radius-2xl);
  background: linear-gradient(135deg, rgba(255, 119, 153, 0.15), rgba(255, 215, 0, 0.16));
  border: 1px solid rgba(255, 119, 153, 0.28);
}
</style>
