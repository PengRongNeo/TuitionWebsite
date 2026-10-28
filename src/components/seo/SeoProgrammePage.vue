<template>
  <div class="seo-programme" :data-seo-page="pageSlug">
    <PageBreadcrumb :items="breadcrumbs" />

    <section class="seo-hero section">
      <div class="container">
        <p v-if="eyebrow" class="seo-hero__eyebrow">{{ eyebrow }}</p>
        <h1 class="seo-hero__title">{{ h1 }}</h1>
        <p class="seo-hero__lead">{{ lead }}</p>
        <EnquiryCta
          :message="enquiryMessage"
          :subject="leadSubject"
          button-label="Enquire about this programme"
          compact
        />
      </div>
    </section>

    <slot />
  </div>
</template>

<script setup>
import PageBreadcrumb from '@/components/seo/PageBreadcrumb.vue'
import EnquiryCta from '@/components/seo/EnquiryCta.vue'

defineProps({
  pageSlug: { type: String, required: true },
  h1: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  lead: { type: String, required: true },
  breadcrumbs: { type: Array, required: true },
  enquiryMessage: { type: String, required: true },
  leadSubject: { type: String, required: true },
})
</script>

<style scoped>
.seo-hero {
  padding-top: 0;
  padding-bottom: var(--spacing-2xl);
  background: var(--background-secondary);
}

.seo-hero__eyebrow {
  font-weight: 600;
  color: var(--color-orange);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.85rem;
}

.seo-hero__title {
  max-width: 18ch;
}

.seo-hero__lead {
  font-size: 1.125rem;
  max-width: 42rem;
}
</style>
