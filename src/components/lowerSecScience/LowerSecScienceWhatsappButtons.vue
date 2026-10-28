<template>
  <div class="ls-science-wa" :class="{ 'ls-science-wa--stack': stack }">
    <button type="button" class="btn btn-primary ls-science-wa__karen" @click="onKaren">
      <span class="ls-science-wa__icon" aria-hidden="true">📞</span>
      {{ karenLabel }}
    </button>
    <button type="button" class="btn btn-primary ls-science-wa__peng" @click="onPengRong">
      <span class="ls-science-wa__icon" aria-hidden="true">📞</span>
      {{ pengRongLabel }}
    </button>
  </div>
</template>

<script setup>
import {
  lowerSecScienceKarenEnquiryMessage,
  lowerSecSciencePengRongEnquiryMessage,
  openWhatsapp,
  TEACHER_KAREN_PHONE,
  TEACHER_PENG_RONG_PHONE,
} from '@/utils/whatsapp'

defineProps({
  karenLabel: { type: String, default: 'WhatsApp Teacher Karen' },
  pengRongLabel: { type: String, default: 'WhatsApp Teacher Peng Rong' },
  stack: { type: Boolean, default: false },
})

function onKaren() {
  openWhatsapp(lowerSecScienceKarenEnquiryMessage(), {
    subject: 'Lower Secondary Science',
    phone: TEACHER_KAREN_PHONE,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}

function onPengRong() {
  openWhatsapp(lowerSecSciencePengRongEnquiryMessage(), {
    subject: 'Lower Secondary Science',
    phone: TEACHER_PENG_RONG_PHONE,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}
</script>

<style scoped>
.ls-science-wa {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
}

.ls-science-wa button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.ls-science-wa__icon {
  font-size: 1.1rem;
}

.ls-science-wa--stack {
  flex-direction: column;
  align-items: stretch;
}

.ls-science-wa__karen {
  background: linear-gradient(135deg, var(--color-orange), #ff7799);
}

.ls-science-wa__peng {
  background: linear-gradient(135deg, #66aaee, #4488cc);
}
</style>
