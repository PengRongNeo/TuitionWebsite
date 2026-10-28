<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="lss-tutor-heading">
    <div class="container">
      <h2 id="lss-tutor-heading" class="chem-section__title">Meet Your Science Tutors</h2>
      <p class="lss-tutor-lead">
        Lower Secondary Science is taught by Teachers Karen and Peng Rong. 
      </p>

      <div class="lss-tutor-grid">
        <article class="chem-tutor card">
          <div class="chem-tutor__photo-wrap">
            <img :src="karenPhoto" alt="Teacher Karen" class="chem-tutor__photo" width="240" height="240" loading="lazy" />
          </div>
          <div class="chem-tutor__body">
            <h3 class="chem-tutor__name">Teacher Karen</h3>
            <ul class="lss-tutor-points" role="list">
              <li>Supports students in building confidence</li>
              <li>Creates positive relationships with students</li>
              <li>Uses clear, approachable explanations</li>
            </ul>
            <button type="button" class="btn btn-primary lss-karen-only lss-contact-btn" @click="onKaren">
              <span aria-hidden="true">📞</span>
              Teacher Karen
            </button>
          </div>
        </article>

        <article class="chem-tutor card">
          <div class="chem-tutor__photo-wrap">
            <img :src="pengPhoto" alt="Teacher Peng Rong" class="chem-tutor__photo" width="240" height="240" loading="lazy" />
          </div>
          <div class="chem-tutor__body">
            <h3 class="chem-tutor__name">Teacher Peng Rong</h3>
            <ul class="lss-tutor-points" role="list">
              <li>Focuses on conceptual understanding</li>
              <li>Helps students understand scientific reasoning</li>
              <li>Uses practice and examination techniques to reinforce learning</li>
            </ul>
            <button type="button" class="btn btn-primary lss-peng-only lss-contact-btn" @click="onPengRong">
              <span aria-hidden="true">📞</span>
              Teacher Peng Rong
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import karenPhoto from '@/assets/teacherkaren.jpeg'
import pengPhoto from '@/assets/teacherpengrong.jpeg'
import {
  lowerSecScienceKarenEnquiryMessage,
  lowerSecSciencePengRongEnquiryMessage,
  openWhatsapp,
  TEACHER_KAREN_PHONE,
  TEACHER_PENG_RONG_PHONE,
} from '@/utils/whatsapp'

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
.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-md);
}
.lss-tutor-lead {
  text-align: center;
  max-width: 40rem;
  margin: 0 auto var(--spacing-xl);
  color: var(--text-secondary);
  font-size: 0.95rem;
}
.lss-tutor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}
.chem-tutor {
  display: grid;
  grid-template-columns: minmax(160px, 200px) 1fr;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: linear-gradient(145deg, #ffffff, #f0f8ff);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
}
.chem-tutor__photo {
  width: 100%;
  border-radius: var(--radius-xl);
  object-fit: cover;
  box-shadow: var(--shadow-md);
}
.chem-tutor__name {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
}
.lss-tutor-points {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg);
  font-size: 0.92rem;
  color: var(--text-secondary);
}
.lss-tutor-points li {
  margin-bottom: var(--spacing-xs);
}
.lss-tutor-points li::before {
  content: '✓ ';
  color: var(--color-orange);
  font-weight: 700;
}
.lss-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.lss-karen-only {
  background: linear-gradient(135deg, var(--color-orange), #ff7799);
}
.lss-peng-only {
  background: linear-gradient(135deg, #66aaee, #4488cc);
}
@media (max-width: 640px) {
  .chem-tutor {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .chem-tutor__photo-wrap {
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>
