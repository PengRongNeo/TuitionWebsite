<template>
  <button type="button" class="btn chemistry-wa-btn emath-wa-btn" :class="variantClass" @click="onClick">
    <span class="chemistry-wa-btn__icon" aria-hidden="true">📞</span>
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { lowerSecMathEnquiryMessage, openWhatsapp, TEACHER_KAREN_PHONE } from '@/utils/whatsapp'

const props = defineProps({
  label: { type: String, default: 'Enquire About Math Tuition' },
  message: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
})

const variantClass = computed(() =>
  props.variant === 'secondary' ? 'btn-secondary chemistry-wa-btn--secondary' : 'btn-primary',
)

function onClick() {
  const text = props.message || lowerSecMathEnquiryMessage()
  openWhatsapp(text, {
    subject: 'Lower Secondary Math',
    phone: TEACHER_KAREN_PHONE,
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

.emath-wa-btn.btn-primary {
  background: linear-gradient(135deg, var(--color-orange), #ff7799);
}

.chemistry-wa-btn__icon {
  font-size: 1.1rem;
}
</style>
