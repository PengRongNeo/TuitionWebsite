<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="emath-faq-heading">
    <div class="container chem-faq">
      <h2 id="emath-faq-heading" class="chem-section__title">Frequently Asked Questions</h2>
      <div class="chem-faq__list">
        <details v-for="item in faqs" :key="item.id" class="chem-faq__item">
          <summary>{{ item.question }}</summary>
          <div class="chem-faq__answer">
            <p>{{ item.answer }}</p>
          </div>
        </details>
      </div>

      <aside class="chem-faq-cta emath-faq-cta" aria-labelledby="emath-faq-cta-heading">
        <h3 id="emath-faq-cta-heading" class="chem-faq-cta__title">💬 Have More Questions?</h3>
        <p class="chem-faq-cta__text">
          Ask Teacher Karen directly about E-Math tuition, class schedules or anything else you'd like to know!
        </p>
        <button type="button" class="btn btn-primary chem-faq-cta__btn emath-faq-cta__btn" @click="onFaqCtaClick">
          Ask Teacher Karen Now!
        </button>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { EMATH_FAQ, EMATH_FAQ_WHATSAPP_MESSAGE } from '@/config/emath4052'
import { openWhatsapp, TEACHER_KAREN_PHONE } from '@/utils/whatsapp'

const faqs = EMATH_FAQ

function onFaqCtaClick() {
  openWhatsapp(EMATH_FAQ_WHATSAPP_MESSAGE, {
    subject: 'O Level E-Math',
    phone: TEACHER_KAREN_PHONE,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}
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
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.18), rgba(255, 153, 51, 0.14));
  border: 1px solid rgba(255, 153, 51, 0.25);
}

.emath-faq-cta {
  background: linear-gradient(135deg, rgba(255, 119, 153, 0.15), rgba(255, 215, 0, 0.16));
  border-color: rgba(255, 119, 153, 0.28);
}

.emath-faq-cta__btn {
  background: linear-gradient(135deg, var(--color-orange), #ff7799);
  max-width: 320px;
  width: 100%;
}
</style>
