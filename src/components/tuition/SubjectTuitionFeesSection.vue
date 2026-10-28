<template>
  <section class="tuition-fees chem-section section" aria-labelledby="tuition-fees-heading">
    <div class="container">
      <h2 id="tuition-fees-heading" class="chem-section__title">Tuition Fees</h2>

      <div class="tuition-fees__grid">
        <article
          v-for="row in pricingRows"
          :key="row.id"
          class="tuition-fees__card"
          :style="{ '--fee-accent': cardAccent(row.id) }"
        >
          <h3 class="tuition-fees__level">{{ row.label }}</h3>
          <p class="tuition-fees__monthly">{{ row.monthlyDisplay }}<span class="tuition-fees__period">/month</span></p>
          <p class="tuition-fees__hourly">{{ row.hourlyDisplay }}/hour</p>
        </article>
      </div>

      <p class="tuition-fees__note">{{ pricingNote }}</p>

      <div class="tuition-fees__cta">
        <template v-if="contactMode === 'dual'">
          <button
            type="button"
            class="btn btn-primary tuition-fees__btn tuition-fees__btn--karen"
            aria-label="Enquire about classes, WhatsApp Teacher Karen"
            @click="onDualKaren"
          >
            <span aria-hidden="true">📞</span>
            Enquire About Classes
          </button>
          <button
            type="button"
            class="btn btn-primary tuition-fees__btn tuition-fees__btn--peng"
            aria-label="Enquire about classes, WhatsApp Teacher Peng Rong"
            @click="onDualPengRong"
          >
            <span aria-hidden="true">📞</span>
            Enquire About Classes
          </button>
          <p class="tuition-fees__dual-hint">Contact Teacher Karen or Teacher Peng Rong via WhatsApp.</p>
        </template>
        <button v-else type="button" class="btn btn-primary tuition-fees__btn" :class="btnClass" @click="onSingleEnquire">
          <span aria-hidden="true">📞</span>
          Enquire About Classes
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import {
  LOWER_SECONDARY_PRICING,
  UPPER_SECONDARY_PRICING,
  PRICING_BASIS_NOTE,
} from '@/config/tuitionPricing'
import {
  openWhatsapp,
  TEACHER_KAREN_PHONE,
  TEACHER_PENG_RONG_PHONE,
  emathEnquiryMessage,
  lowerSecMathEnquiryMessage,
  lowerSecScienceKarenEnquiryMessage,
  lowerSecSciencePengRongEnquiryMessage,
  chemistryEnquiryMessage,
  physicsEnquiryMessage,
  amathEnquiryMessage,
} from '@/utils/whatsapp'

const props = defineProps({
  /** 'lower' = Sec 1–2, 'upper' = Sec 3–4 */
  tier: {
    type: String,
    required: true,
    validator: (v) => v === 'lower' || v === 'upper',
  },
  /** karen | pengRong | dual (lower sec science) */
  contact: {
    type: String,
    required: true,
    validator: (v) => ['karen', 'pengRong', 'dual'].includes(v),
  },
  /** Analytics / message context */
  subject: { type: String, required: true },
  enquiryVariant: {
    type: String,
    default: 'emath',
    validator: (v) =>
      ['emath', 'lowerSecMath', 'chemistry', 'physics', 'amath', 'lowerSecScience'].includes(v),
  },
})

const pricingRows = computed(() =>
  props.tier === 'lower' ? LOWER_SECONDARY_PRICING : UPPER_SECONDARY_PRICING,
)

const pricingNote = PRICING_BASIS_NOTE

const contactMode = computed(() => props.contact)

const btnClass = computed(() =>
  props.contact === 'karen' ? 'tuition-fees__btn--karen' : 'tuition-fees__btn--peng',
)

function cardAccent(id) {
  const map = {
    sec1: '#FFE8CC',
    sec2: '#E8F4FF',
    sec3: '#FFE0F0',
    sec4: '#FFF5CC',
  }
  return map[id] || '#FFE8CC'
}

function messageForVariant() {
  switch (props.enquiryVariant) {
    case 'emath':
      return emathEnquiryMessage()
    case 'lowerSecMath':
      return lowerSecMathEnquiryMessage()
    case 'chemistry':
      return chemistryEnquiryMessage()
    case 'physics':
      return physicsEnquiryMessage()
    case 'amath':
      return amathEnquiryMessage()
    case 'lowerSecScience':
      return lowerSecScienceKarenEnquiryMessage()
    default:
      return emathEnquiryMessage()
  }
}

function onSingleEnquire() {
  const phone = props.contact === 'karen' ? TEACHER_KAREN_PHONE : TEACHER_PENG_RONG_PHONE
  openWhatsapp(messageForVariant(), {
    subject: props.subject,
    phone,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}

function onDualKaren() {
  openWhatsapp(lowerSecScienceKarenEnquiryMessage(), {
    subject: props.subject,
    phone: TEACHER_KAREN_PHONE,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
  })
}

function onDualPengRong() {
  openWhatsapp(lowerSecSciencePengRongEnquiryMessage(), {
    subject: props.subject,
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

.tuition-fees__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-lg);
  max-width: 640px;
  margin: 0 auto var(--spacing-lg);
}

.tuition-fees__card {
  text-align: center;
  padding: var(--spacing-xl);
  border-radius: var(--radius-2xl);
  background: linear-gradient(160deg, var(--fee-accent, #fff5e8), #ffffff);
  border: 1px solid rgba(255, 153, 51, 0.2);
  box-shadow: var(--shadow-md);
}

.tuition-fees__level {
  margin: 0 0 var(--spacing-md);
  font-size: 1.1rem;
}

.tuition-fees__monthly {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-orange);
}

.tuition-fees__period {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.tuition-fees__hourly {
  margin: var(--spacing-sm) 0 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.tuition-fees__note {
  text-align: center;
  max-width: 36rem;
  margin: 0 auto var(--spacing-xl);
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.5;
}

.tuition-fees__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
  align-items: center;
}

.tuition-fees__btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.tuition-fees__btn--karen {
  background: linear-gradient(135deg, var(--color-orange), #ff7799);
}

.tuition-fees__btn--peng {
  background: linear-gradient(135deg, #66aaee, #4488cc);
}

.tuition-fees__dual-hint {
  flex-basis: 100%;
  text-align: center;
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

@media (max-width: 560px) {
  .tuition-fees__grid {
    grid-template-columns: 1fr;
  }

  .tuition-fees__cta {
    flex-direction: column;
    width: 100%;
  }

  .tuition-fees__btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
