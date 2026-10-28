<template>
  <main id="main-content">
    <Gallery />
    <WhyChooseUs />
    <Teachers />
    <ClassList />
    <ProudStudents />
    <TestimonialsAndReviews />
    <TrustedSchools />
  </main>
  <FooterSection />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Gallery from '@/components/Gallery.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import Teachers from '@/components/Teachers.vue'
import ClassList from '@/components/ClassList.vue'
import ProudStudents from '@/components/ProudStudents.vue'
import TestimonialsAndReviews from '@/components/TestimonialsAndReviews.vue'
import TrustedSchools from '@/components/TrustedSchools.vue'
import FooterSection from '@/components/FooterSection.vue'
import { usePageSeo } from '@/composables/usePageSeo'
import {
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from '@/config/site'

const route = useRoute()

usePageSeo({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonicalPath: '/',
  includeOrganization: true,
})

function scrollToHash() {
  if (!route.hash) return
  const id = route.hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const top = el.offsetTop - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(scrollToHash)
watch(() => route.hash, scrollToHash)
</script>
