<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
      <li v-for="(item, index) in items" :key="item.path" class="breadcrumb__item">
        <RouterLink
          v-if="index < items.length - 1"
          :to="item.path"
          class="breadcrumb__link"
        >
          {{ item.name }}
        </RouterLink>
        <span v-else class="breadcrumb__current" aria-current="page">{{ item.name }}</span>
        <span v-if="index < items.length - 1" class="breadcrumb__sep" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.breadcrumb {
  padding-top: calc(80px + var(--spacing-md));
  margin-bottom: var(--spacing-lg);
}

.breadcrumb__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.9rem;
}

.breadcrumb__link {
  color: var(--text-secondary);
  text-decoration: none;
}

.breadcrumb__link:hover {
  color: var(--color-orange);
}

.breadcrumb__current {
  color: var(--text-primary);
  font-weight: 600;
}

.breadcrumb__sep {
  color: var(--text-light);
  margin: 0 var(--spacing-xs);
}
</style>
