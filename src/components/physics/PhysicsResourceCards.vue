<template>
  <section id="physics-resources" class="chem-section section" aria-labelledby="phys-resources-heading">
    <div class="container">
      <h2 id="phys-resources-heading" class="chem-section__title">Physics Resources &amp; Downloads</h2>
      <div class="chem-resource-grid">
        <article
          v-for="item in resources"
          :key="item.id"
          class="chem-resource-card"
          :class="`chem-resource-card--${item.accent}`"
        >
          <span class="chem-resource-card__icon" aria-hidden="true">{{ item.icon }}</span>
          <h3 class="chem-resource-card__title">{{ item.title }}</h3>
          <p v-if="item.subtitle" class="chem-resource-card__subtitle">{{ item.subtitle }}</p>
          <p class="chem-resource-card__desc">{{ item.description }}</p>
          <p v-if="item.note" class="chem-resource-card__note">{{ item.note }}</p>
          <a
            v-if="item.status === 'available' && item.href"
            :href="item.href"
            class="btn btn-primary chem-resource-card__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.buttonLabel }}
          </a>
          <span v-else class="chem-resource-card__soon">{{ item.buttonLabel }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PHYSICS_RESOURCES } from '@/config/physics6091'

const resources = PHYSICS_RESOURCES
</script>

<style scoped>
.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.chem-resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--spacing-lg);
}

.chem-resource-card {
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.chem-resource-card--orange {
  background: linear-gradient(160deg, #fff5e8, #ffffff);
}

.chem-resource-card--blue {
  background: linear-gradient(160deg, #eef6ff, #ffffff);
}

.chem-resource-card--pink {
  background: linear-gradient(160deg, #fff0f5, #ffffff);
}

.chem-resource-card__icon {
  font-size: 2rem;
}

.chem-resource-card__title {
  font-size: 1.15rem;
  margin-bottom: 0;
}

.chem-resource-card__subtitle {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-xs);
}

.chem-resource-card__desc {
  flex: 1;
  font-size: 0.95rem;
  margin-bottom: var(--spacing-md);
}

.chem-resource-card__note {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-sm);
}

.chem-resource-card__btn {
  align-self: flex-start;
  text-decoration: none;
}

.chem-resource-card__soon {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
