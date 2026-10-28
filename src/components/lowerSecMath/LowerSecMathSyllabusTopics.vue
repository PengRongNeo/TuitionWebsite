<template>
  <section id="lsm-syllabus" class="chem-section section chem-section--alt" aria-labelledby="lsm-syllabus-heading">
    <div class="container">
      <h2 id="lsm-syllabus-heading" class="chem-section__title">Explore Lower Secondary Mathematics</h2>
      <p class="chem-syllabus__lead">
        Topics are organised from the official MOE G2 &amp; G3 Mathematics syllabuses. Schools may teach topics in a different order—use the filters to focus on Sec 1, Sec 2 and course level.
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
        <div class="topic-filters__row">
          <span class="topic-filters__label">Course</span>
          <button
            v-for="opt in trackOptions"
            :key="opt.value"
            type="button"
            class="topic-filters__btn"
            :class="{ 'topic-filters__btn--active': trackFilter === opt.value }"
            @click="trackFilter = opt.value"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

      <p v-if="filteredTopics.length === 0" class="topic-filters__empty">No topics match this filter combination.</p>

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
              <h3 :id="`lsm-topic-${topic.id}`" class="chem-topic-card__title">{{ topic.name }}</h3>
            </div>
            <div class="chem-topic-card__progress">
              <input
                type="checkbox"
                :checked="isComplete(topic.id)"
                :aria-labelledby="`lsm-topic-${topic.id}`"
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
          <details v-if="topic.skills?.length" class="chem-topic-card__details">
            <summary>Key mathematical skills</summary>
            <ul>
              <li v-for="(skill, i) in topic.skills" :key="i">{{ skill }}</li>
            </ul>
          </details>
          <details v-if="topic.practice" class="chem-topic-card__details chem-topic-card__practice">
            <summary>Topical practice</summary>
            <div class="practice-block">
              <h4>Concept breakdown</h4>
              <p>{{ topic.practice.concept }}</p>
              <h4>Guided worked example</h4>
              <p class="practice-q">{{ topic.practice.example.question }}</p>
              <ol>
                <li v-for="(step, si) in topic.practice.example.steps" :key="si">{{ step }}</li>
              </ol>
              <p><strong>Answer:</strong> {{ topic.practice.example.answer }}</p>
              <h4>Try it yourself</h4>
              <div v-for="(item, ti) in topic.practice.tryIt" :key="ti" class="try-item">
                <p class="practice-q">{{ item.question }}</p>
                <details>
                  <summary>Hint</summary>
                  <p>{{ item.hint }}</p>
                </details>
                <details>
                  <summary>Answer</summary>
                  <p>{{ item.answer }}</p>
                </details>
              </div>
            </div>
          </details>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { LOWER_SEC_MATH_TOPICS, OFFICIAL_SYLLABUS_PDF } from '@/config/lowerSecMath'
import { useLowerSecMathTopicProgress } from '@/composables/useLowerSecMathTopicProgress'

const syllabusPdf = OFFICIAL_SYLLABUS_PDF
const secFilter = ref('all')
const trackFilter = ref('all')

const secOptions = [
  { value: 'all', label: 'All' },
  { value: 'sec1', label: 'Secondary 1' },
  { value: 'sec2', label: 'Secondary 2' },
]
const trackOptions = [
  { value: 'all', label: 'All' },
  { value: 'g2', label: 'G2' },
  { value: 'g3', label: 'G3' },
]

const filteredTopics = computed(() =>
  LOWER_SEC_MATH_TOPICS.filter((t) => {
    const secOk = secFilter.value === 'all' || t.secLevels.includes(secFilter.value)
    const trackOk = trackFilter.value === 'all' || t.tracks.includes(trackFilter.value)
    return secOk && trackOk
  }),
)

function formatSec(s) {
  return s === 'sec1' ? 'Sec 1' : 'Sec 2'
}

const { isComplete, toggleComplete } = useLowerSecMathTopicProgress()
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
  max-width: 640px;
  margin: 0 auto var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
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
  min-width: 5rem;
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
  background: linear-gradient(135deg, var(--color-orange), #ff7799);
  color: white;
  border-color: transparent;
}
.topic-filters__empty {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
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
  font-size: 0.72rem;
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
.practice-block h4 {
  font-size: 0.9rem;
  margin: var(--spacing-md) 0 var(--spacing-xs);
}
.practice-q {
  font-weight: 600;
}
.try-item {
  margin-bottom: var(--spacing-md);
}
</style>
