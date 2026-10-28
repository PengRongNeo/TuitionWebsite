<template>
  <section class="content-section section" :class="{ 'content-section--alt': altBackground }">
    <div class="container content-section__inner">
      <h2 v-if="title" class="content-section__title">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  altBackground: { type: Boolean, default: false },
})
</script>

<style scoped>
.content-section {
  padding: var(--spacing-2xl) 0;
}

.content-section--alt {
  background: var(--background-secondary);
}

.content-section__title {
  margin-bottom: var(--spacing-xl);
}

.content-section__inner :deep(ul) {
  margin: var(--spacing-md) 0 var(--spacing-lg);
  padding-left: 1.25rem;
  color: var(--text-secondary);
}

.content-section__inner :deep(li) {
  margin-bottom: var(--spacing-sm);
}

.content-section__inner :deep(.topic-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.content-section__inner :deep(.topic-card) {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.content-section__inner :deep(.topic-card h3) {
  font-size: 1.05rem;
  margin-bottom: var(--spacing-sm);
}

.content-section__inner :deep(.faq-list) {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.content-section__inner :deep(.faq-item) {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.content-section__inner :deep(.faq-item h3) {
  font-size: 1.05rem;
  margin-bottom: var(--spacing-sm);
}

.content-section__inner :deep(.quote-block) {
  border-left: 4px solid var(--color-orange);
  padding-left: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  font-style: italic;
  color: var(--text-secondary);
}

.content-section__inner :deep(.text-link) {
  color: var(--color-orange);
  font-weight: 600;
}

.content-section__inner :deep(.placeholder-note) {
  background: #fff8e6;
  border: 1px dashed var(--color-orange);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  font-size: 0.95rem;
  color: var(--text-secondary);
}
</style>
