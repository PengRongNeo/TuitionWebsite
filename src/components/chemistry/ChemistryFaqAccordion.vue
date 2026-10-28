<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="chem-faq-heading">
    <div class="container chem-faq">
      <h2 id="chem-faq-heading" class="chem-section__title">Frequently Asked Questions</h2>
      <div class="chem-faq__list">
        <details v-for="item in faqs" :key="item.id" class="chem-faq__item">
          <summary>{{ item.question }}</summary>
          <div class="chem-faq__answer">
            <p>{{ item.answer }}</p>
          </div>
        </details>
      </div>

      <aside class="chem-faq-cta" aria-labelledby="chem-faq-cta-heading">
        <h3 id="chem-faq-cta-heading" class="chem-faq-cta__title">💬 Have More Questions?</h3>
        <p class="chem-faq-cta__text">
          Ask Teacher Peng Rong directly about Chemistry tuition, class schedules or anything else you'd
          like to know!
        </p>
        <button type="button" class="btn btn-primary chem-faq-cta__btn" @click="onFaqCtaClick">
          Ask Teacher Peng Rong Now!
        </button>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { CHEMISTRY_FAQ, CHEMISTRY_FAQ_WHATSAPP_MESSAGE } from '@/config/chemistry6092'
import { openWhatsapp, TEACHER_PENG_RONG_PHONE } from '@/utils/whatsapp'

const faqs = CHEMISTRY_FAQ

function onFaqCtaClick() {
  openWhatsapp(CHEMISTRY_FAQ_WHATSAPP_MESSAGE, {
    subject: 'O Level Chemistry',
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
  font-size: 1rem;
  color: var(--text-primary);
  list-style: none;
}

.chem-faq__item summary::-webkit-details-marker {
  display: none;
}

.chem-faq__item summary::after {
  content: '+';
  float: right;
  color: var(--color-orange);
  font-size: 1.25rem;
}

.chem-faq__item[open] summary::after {
  content: '−';
}

.chem-faq__item summary:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.chem-faq__answer {
  overflow: hidden;
}

.chem-faq__answer p {
  margin-top: var(--spacing-md);
  margin-bottom: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.chem-faq-cta {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
  border-radius: var(--radius-2xl);
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.18),
    rgba(255, 153, 51, 0.14)
  );
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 153, 51, 0.25);
}

.chem-faq-cta__title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
}

.chem-faq-cta__text {
  margin-bottom: var(--spacing-lg);
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.55;
}

.chem-faq-cta__btn {
  width: 100%;
  max-width: 320px;
}

@media (prefers-reduced-motion: no-preference) {
  .chem-faq__item {
    transition: box-shadow var(--transition-normal);
  }

  .chem-faq__item[open] {
    box-shadow: var(--shadow-md);
  }
}
</style>
