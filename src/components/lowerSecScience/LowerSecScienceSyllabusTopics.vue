<template>
  <section id="lss-syllabus" class="chem-section section chem-section--alt" aria-labelledby="lss-syllabus-heading">
    <div class="container">
      <h2 id="lss-syllabus-heading" class="chem-section__title">Explore Lower Secondary Science</h2>
      <p class="chem-syllabus__lead">
        Themes follow the official MOE G2 &amp; G3 lower secondary Science syllabus. Filter by year level—schools may cover topics in a different sequence.
        <a :href="syllabusPdf" target="_blank" rel="noopener noreferrer" class="chem-link">Official syllabus PDF</a>
      </p>

      <div class="topic-filters" role="group" aria-label="Filter topics">
        <div class="topic-filters__row">
          <span class="topic-filters__label">Year level</span>
          <button
            v-for="opt in secOptions"
            :key="opt.value"
            type="button"
            class="topic-filters__btn"
            :class="{ 'topic-filters__btn--active': secFilter === opt.value }"
            @click="secFilter = opt.value"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

      <div class="chem-topic-grid">
        <article
          v-for="topic in filteredTopics"
          :key="topic.id"
          class="chem-topic-card"
          :style="{ '--topic-accent': topic.accent }"
        >
          <header class="chem-topic-card__head">
            <span class="chem-topic-card__icon" aria-hidden="true">{{ topic.icon }}</span>
            <div>
              <p class="chem-topic-card__meta">
                {{ topic.code }} · {{ topic.syllabusSection }} ·
                {{ topic.secLevels.map(formatSec).join(', ') }}
              </p>
              <h3 :id="`lss-topic-${topic.id}`" class="chem-topic-card__title">{{ topic.name }}</h3>
            </div>
            <div class="chem-topic-card__progress">
              <input
                type="checkbox"
                :checked="isComplete(topic.id)"
                :aria-labelledby="`lss-topic-${topic.id}`"
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
import { ref, computed } from 'vue'
import { LOWER_SEC_SCIENCE_TOPICS, OFFICIAL_SYLLABUS_PDF } from '@/config/lowerSecScience'
import { useLowerSecScienceTopicProgress } from '@/composables/useLowerSecScienceTopicProgress'

const syllabusPdf = OFFICIAL_SYLLABUS_PDF
const secFilter = ref('all')
const secOptions = [
  { value: 'all', label: 'All' },
  { value: 'sec1', label: 'Secondary 1' },
  { value: 'sec2', label: 'Secondary 2' },
]

const filteredTopics = computed(() =>
  LOWER_SEC_SCIENCE_TOPICS.filter((t) => secFilter.value === 'all' || t.secLevels.includes(secFilter.value)),
)

function formatSec(s) {
  return s === 'sec1' ? 'Sec 1' : 'Sec 2'
}

const { isComplete, toggleComplete } = useLowerSecScienceTopicProgress()
</script>

<style scoped>
.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-md);
}
.chem-syllabus__lead {
  text-align: center;
  max-width: 44rem;
  margin: 0 auto var(--spacing-lg);
  color: var(--text-secondary);
  font-size: 0.95rem;
}
.chem-link {
  color: var(--color-orange);
  font-weight: 600;
}
.topic-filters {
  max-width: 480px;
  margin: 0 auto var(--spacing-xl);
}
.topic-filters__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
  justify-content: center;
}
.topic-filters__label {
  font-weight: 700;
  font-size: 0.85rem;
}
.topic-filters__btn {
  border: 1px solid var(--border-color);
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-xs) var(--spacing-md);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
}
.topic-filters__btn--active {
  background: linear-gradient(135deg, #55bb77, #66aaee);
  color: white;
  border-color: transparent;
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
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
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
}
.chem-topic-card__details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--color-orange);
  margin-top: var(--spacing-sm);
}
.chem-topic-card__details ul {
  padding-left: 1.2rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}
</style>
