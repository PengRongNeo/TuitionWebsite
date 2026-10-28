<template>
  <section id="chemistry-syllabus" class="chem-section section chem-section--alt" aria-labelledby="chem-syllabus-heading">
    <div class="container">
      <h2 id="chem-syllabus-heading" class="chem-section__title">Explore the O Level Chemistry Syllabus</h2>
      <p class="chem-syllabus__lead">
        Topics follow the official Pure Chemistry syllabus (<strong>{{ syllabusCode }}</strong>, {{ syllabusYear }}).
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
              <p class="chem-topic-card__meta">Topic {{ topic.number }} · {{ topic.syllabusSection }}</p>
              <h3 class="chem-topic-card__title">{{ topic.name }}</h3>
            </div>
            <label class="chem-topic-card__progress">
              <input
                type="checkbox"
                :checked="isComplete(topic.id)"
                @change="toggleComplete(topic.id)"
              />
              <span class="sr-only">Mark topic {{ topic.number }} revised</span>
            </label>
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
  CHEMISTRY_TOPICS,
  OFFICIAL_SYLLABUS_PDF,
  SYLLABUS_CODE,
  SYLLABUS_YEAR,
} from '@/config/chemistry6092'
import { useChemistryTopicProgress } from '@/composables/useChemistryTopicProgress'

const topics = CHEMISTRY_TOPICS
const syllabusPdf = OFFICIAL_SYLLABUS_PDF
const syllabusCode = SYLLABUS_CODE
const syllabusYear = SYLLABUS_YEAR

const { isComplete, toggleComplete } = useChemistryTopicProgress()
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
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.chem-topic-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
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
  margin-bottom: 2px;
}

.chem-topic-card__title {
  font-size: 1.05rem;
  margin: 0;
}

.chem-topic-card__progress input {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: var(--color-orange);
  cursor: pointer;
}

.chem-topic-card__intro {
  font-size: 0.92rem;
  margin: 0;
}

.chem-topic-card__details {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.chem-topic-card__details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--color-orange);
  margin-bottom: var(--spacing-xs);
}

.chem-topic-card__details ul {
  padding-left: 1.1rem;
  margin: var(--spacing-sm) 0 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
