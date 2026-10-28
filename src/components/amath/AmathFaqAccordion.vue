<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="amath-faq-heading">
    <div class="container chem-faq">
      <h2 id="amath-faq-heading" class="chem-section__title">Frequently Asked Questions</h2>
      <div class="chem-faq__list">
        <details v-for="item in faqs" :key="item.id" class="chem-faq__item">
          <summary>{{ item.question }}</summary>
          <div class="chem-faq__answer">
            <p>{{ item.answer }}</p>
          </div>
        </details>
      </div>

      <aside class="chem-faq-cta" aria-labelledby="amath-faq-cta-heading">
        <h3 id="amath-faq-cta-heading" class="chem-faq-cta__title">💬 Have More Questions?</h3>
        <p class="chem-faq-cta__text">
          Ask Teacher Peng Rong directly about A-Math tuition, class schedules or anything else you'd like to know!
        </p>
        <button type="button" class="btn btn-primary chem-faq-cta__btn" @click="onFaqCtaClick">
          Ask Teacher Peng Rong Now!
        </button>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { AMATH_FAQ, AMATH_FAQ_WHATSAPP_MESSAGE } from '@/config/amath4049'
import { openWhatsapp, TEACHER_PENG_RONG_PHONE } from '@/utils/whatsapp'

const faqs = AMATH_FAQ

function onFaqCtaClick() {
  openWhatsapp(AMATH_FAQ_WHATSAPP_MESSAGE, {
    subject: 'O Level A-Math',
    phone: TEACHER_PENG_RONG_PHONE,
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

.chem-faq-cta__btn {
  max-width: 320px;
  width: 100%;
}
</style>
