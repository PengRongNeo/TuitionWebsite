<template>
  <section class="chem-section section emath-tutor-section" aria-labelledby="emath-tutor-heading">
    <div class="container">
      <h2 id="emath-tutor-heading" class="chem-section__title">Meet Your E-Math Tutor</h2>

      <div class="emath-tutor card">
        <div class="emath-tutor__photo-wrap">
          <img :src="photo" alt="Teacher Karen" class="emath-tutor__photo" width="240" height="240" loading="lazy" />
        </div>
        <div class="emath-tutor__body">
          <h3 class="emath-tutor__name">Teacher Karen</h3>
          <p class="emath-tutor__tagline">Strong Results, Built on Strong Relationships</p>
          <p class="emath-tutor__bio">
            Teacher Karen believes that students learn best when they feel understood, supported and confident enough to ask questions. Her close connection with students helps make Mathematics lessons engaging, approachable and effective.
          </p>
          <ul class="emath-tutor__verified" role="list">
            <li>Full-time educator · 8 years of teaching experience</li>
            <li>Secondary Level: Math and Science</li>
          </ul>
          <EmathWhatsappButton label="Learn E-Math with Karen" />
        </div>
      </div>

      <div class="emath-highlight-grid">
        <article class="emath-highlight-card emath-highlight-card--results">
          <span class="emath-highlight-card__icon" aria-hidden="true">🌟</span>
          <h4 class="emath-highlight-card__title">A1 &amp; A2 Student Results</h4>
          <p class="emath-highlight-card__text">
            Students in Karen's Mathematics classes have achieved A1 and A2 grades. WhatsApp Teacher Karen to discuss your child's level and goals—we can share what to expect from lessons without overpromising outcomes.
          </p>
        </article>
        <article class="emath-highlight-card">
          <span class="emath-highlight-card__icon" aria-hidden="true">💪</span>
          <h4 class="emath-highlight-card__title">Confident Teaching</h4>
          <p class="emath-highlight-card__text">
            Karen brings confidence and dedication to helping students strengthen their Mathematics foundations and work towards their academic goals.
          </p>
        </article>
        <article class="emath-highlight-card">
          <span class="emath-highlight-card__icon" aria-hidden="true">🤝</span>
          <h4 class="emath-highlight-card__title">Meaningful Student Connections</h4>
          <p class="emath-highlight-card__text">
            By building strong relationships with her students, Karen creates a supportive environment where they feel comfortable asking questions, making mistakes and learning.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import EmathWhatsappButton from '@/components/emath/EmathWhatsappButton.vue'
import photo from '@/assets/teacherkaren.jpeg'
</script>

<style scoped>
.emath-tutor-section {
  background: linear-gradient(180deg, #fffafc 0%, var(--background-secondary) 100%);
}

.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.emath-tutor {
  display: grid;
  grid-template-columns: minmax(200px, 260px) 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background: linear-gradient(145deg, #ffffff, #fff5f8);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 153, 153, 0.25);
  margin-bottom: var(--spacing-xl);
}

.emath-tutor__photo {
  width: 100%;
  border-radius: var(--radius-xl);
  object-fit: cover;
  box-shadow: var(--shadow-md);
  border: 3px solid rgba(255, 153, 153, 0.2);
}

.emath-tutor__name {
  font-size: 1.75rem;
  margin-bottom: var(--spacing-xs);
}

.emath-tutor__tagline {
  font-weight: 700;
  color: #ff7799;
  margin: 0 0 var(--spacing-md);
  font-size: 1.05rem;
}

.emath-tutor__bio {
  line-height: 1.65;
  margin-bottom: var(--spacing-md);
  max-width: 40rem;
}

.emath-tutor__verified {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg);
  font-size: 0.92rem;
  color: var(--text-secondary);
}

.emath-tutor__verified li {
  margin-bottom: var(--spacing-xs);
}

.emath-tutor__verified li::before {
  content: '✓ ';
  color: var(--color-orange);
  font-weight: 700;
}

.emath-highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-lg);
}

.emath-highlight-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  border-top: 4px solid #ff7799;
}

.emath-highlight-card--results {
  border-top-color: var(--color-orange);
  background: linear-gradient(160deg, #fff8f0, #ffffff);
}

.emath-highlight-card__icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: var(--spacing-sm);
}

.emath-highlight-card__title {
  margin: 0 0 var(--spacing-sm);
  font-size: 1.05rem;
}

.emath-highlight-card__text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-secondary);
}

.emath-highlight-card__note {
  display: none;
}

@media (max-width: 768px) {
  .emath-tutor {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .emath-tutor__photo-wrap {
    max-width: 220px;
    margin: 0 auto;
  }
}
</style>
