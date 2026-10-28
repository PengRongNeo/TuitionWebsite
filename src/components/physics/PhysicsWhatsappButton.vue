<template>
  <button type="button" class="btn chemistry-wa-btn" :class="variantClass" @click="onClick">
    <span class="chemistry-wa-btn__icon" aria-hidden="true">📞</span>
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { physicsEnquiryMessage, openWhatsapp, TEACHER_PENG_RONG_PHONE } from '@/utils/whatsapp'

const props = defineProps({
  label: { type: String, default: 'Enquire About Physics Tuition' },
  message: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
  subject: { type: String, default: 'O Level Physics' },
})

const variantClass = computed(() =>
  props.variant === 'secondary' ? 'btn-secondary chemistry-wa-btn--secondary' : 'btn-primary',
)

function onClick() {
  const text = props.message || physicsEnquiryMessage()
  openWhatsapp(text, {
    subject: props.subject,
    phone: TEACHER_PENG_RONG_PHONE,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}
</script>

<style scoped>
.chemistry-wa-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.chemistry-wa-btn__icon {
  font-size: 1.1rem;
}

.chemistry-wa-btn--secondary {
  border: 2px solid var(--color-orange);
}
</style>
