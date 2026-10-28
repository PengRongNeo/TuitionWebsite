<template>
  <section id="emath-syllabus" class="chem-section section chem-section--alt" aria-labelledby="emath-syllabus-heading">
    <div class="container">
      <h2 id="emath-syllabus-heading" class="chem-section__title">Explore the O Level E-Math Syllabus</h2>
      <p class="chem-syllabus__lead">
        Topics follow the official Elementary Mathematics syllabus (<strong>{{ syllabusCode }}</strong>, {{ syllabusYear }}).
        Learning objectives below are paraphrased for revision—refer to the
        <a :href="syllabusPdf" target="_blank" rel="noopener noreferrer" class="chem-link">official syllabus PDF</a>
        for the complete list.
      </p>
      <div class="chem-topic-grid">
        <article
          v-for="topic in topics"
          :key="topic.id"
          class="chem-topic-card"
          :style="{ '--topic-accent': topic.accent }"
        >
          <header class="chem-topic-card__head">
            <span class="chem-topic-card__icon" aria-hidden="true">{{ topic.icon }}</span>
            <div>
              <p class="chem-topic-card__meta">{{ topic.code }} · {{ topic.syllabusSection }}</p>
              <h3 :id="`emath-topic-title-${topic.id}`" class="chem-topic-card__title">{{ topic.name }}</h3>
            </div>
            <div class="chem-topic-card__progress">
              <input
                type="checkbox"
                :checked="isComplete(topic.id)"
                :aria-labelledby="`emath-topic-title-${topic.id}`"
                @change="toggleComplete(topic.id)"
              />
            </div>
          </header>
          <p class="chem-topic-card__intro">{{ topic.intro }}</p>
          <details class="chem-topic-card__details">
            <summary>Key learning objectives</summary>
            <ul>
              <li v-for="(obj, i) in topic.objectives" :key="i">{{ obj }}</li>
            </ul>
          </details>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  EMATH_TOPICS,
  OFFICIAL_SYLLABUS_PDF,
  SYLLABUS_CODE,
  SYLLABUS_YEAR,
} from '@/config/emath4052'
import { useEmathTopicProgress } from '@/composables/useEmathTopicProgress'

const topics = EMATH_TOPICS
const syllabusPdf = OFFICIAL_SYLLABUS_PDF
const syllabusCode = SYLLABUS_CODE
const syllabusYear = SYLLABUS_YEAR

const { isComplete, toggleComplete } = useEmathTopicProgress()
</script>

<style scoped>
.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.chem-syllabus__lead {
  text-align: center;
  max-width: 42rem;
  margin: 0 auto var(--spacing-xl);
  color: var(--text-secondary);
}

.chem-link {
  color: var(--color-orange);
  font-weight: 600;
}

.chem-topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.chem-topic-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  border-top: 4px solid var(--topic-accent, var(--color-orange));
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.chem-topic-card__head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-sm);
  align-items: start;
}

.chem-topic-card__icon {
  font-size: 1.75rem;
}

.chem-topic-card__meta {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--text-light);
}

.chem-topic-card__title {
  font-size: 1.05rem;
  margin: 0;
}

.chem-topic-card__progress input {
  accent-color: var(--color-orange);
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
}

.chem-topic-card__intro {
  font-size: 0.92rem;
  color: var(--text-secondary);
  margin: 0;
}

.chem-topic-card__details summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-orange);
}

.chem-topic-card__details ul {
  margin: var(--spacing-sm) 0 0;
  padding-left: 1.2rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.chem-topic-card__details li {
  margin-bottom: var(--spacing-xs);
}
</style>
