<template>
  <div class="enquiry-cta" :class="{ 'enquiry-cta--compact': compact }">
    <p v-if="supportingText" class="enquiry-cta__text">{{ supportingText }}</p>
    <button type="button" class="btn btn-primary enquiry-cta__btn" @click="onClick">
      <span class="enquiry-cta__icon" aria-hidden="true">💬</span>
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup>
import { openWhatsapp } from '@/utils/whatsapp'

const props = defineProps({
  message: { type: String, required: true },
  subject: { type: String, required: true },
  buttonLabel: { type: String, default: 'Enquire on WhatsApp' },
  supportingText: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})

function onClick() {
  openWhatsapp(props.message, {
    subject: props.subject,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}
</script>

<style scoped>
.enquiry-cta {
  text-align: center;
  padding: var(--spacing-xl);
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.12),
    rgba(255, 153, 51, 0.1)
  );
  border-radius: var(--radius-xl);
  margin: var(--spacing-2xl) 0;
}

.enquiry-cta--compact {
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.enquiry-cta__text {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

.enquiry-cta__btn {
  gap: var(--spacing-sm);
}

.enquiry-cta__icon {
  font-size: 1.15rem;
}
</style>
