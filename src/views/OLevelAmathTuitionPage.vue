<template>
  <main id="main-content" class="chemistry-hub" data-seo-page="o-level-amath">
    <AmathHero />
    <AmathTutorSection />
    <AmathResourceCards />
    <AmathSyllabusTopics />
    <AmathTeachingTimeline />
    <SubjectTuitionFeesSection
      tier="upper"
      contact="pengRong"
      subject="O Level A-Math"
      enquiry-variant="amath"
    />
    <AmathFaqAccordion />
    <AmathFinalCta />

    <section class="chem-section section chem-hub-links" aria-label="Related pages">
      <div class="container chem-hub-links__inner">
        <p>
          View Sec 3 &amp; Sec 4 rates on our
          <RouterLink to="/#classes" class="chem-hub-links__a">class list</RouterLink>, explore
          <RouterLink to="/tuition/o-level-math/" class="chem-hub-links__a">O Level E-Math tuition</RouterLink>,
          <RouterLink to="/tuition/o-level-chemistry/" class="chem-hub-links__a">Chemistry</RouterLink>, or
          <RouterLink to="/tuition/o-level-physics/" class="chem-hub-links__a">Physics</RouterLink>.
        </p>
      </div>
    </section>
  </main>
  <SeoFooterLinks />
</template>

<script setup>
import { computed } from 'vue'
import SeoFooterLinks from '@/components/seo/SeoFooterLinks.vue'
import AmathHero from '@/components/amath/AmathHero.vue'
import AmathTutorSection from '@/components/amath/AmathTutorSection.vue'
import AmathResourceCards from '@/components/amath/AmathResourceCards.vue'
import AmathSyllabusTopics from '@/components/amath/AmathSyllabusTopics.vue'
import AmathTeachingTimeline from '@/components/amath/AmathTeachingTimeline.vue'
import SubjectTuitionFeesSection from '@/components/tuition/SubjectTuitionFeesSection.vue'
import AmathFaqAccordion from '@/components/amath/AmathFaqAccordion.vue'
import AmathFinalCta from '@/components/amath/AmathFinalCta.vue'
import { usePageSeo, webPageJsonLd, courseJsonLd } from '@/composables/usePageSeo'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'O Level A-Math Tuition', path: ROUTE_PATHS.oLevelAmath },
]

const pageTitle = 'O Level A-Math Tuition Jurong West | Tuition @ Pioneer'
const pageDescription =
  'O Level Additional Mathematics tuition for Sec 3 and 4 students in Jurong West, near Pioneer MRT. Learn syllabus 4049 with Teacher Peng Rong. Enquire today.'

usePageSeo(
  computed(() => ({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: ROUTE_PATHS.oLevelAmath,
    breadcrumbs,
    jsonLd: [
      webPageJsonLd({
        path: ROUTE_PATHS.oLevelAmath,
        name: pageTitle,
        description: pageDescription,
      }),
      courseJsonLd({
        path: ROUTE_PATHS.oLevelAmath,
        name: 'O Level Additional Mathematics Tuition',
        description: pageDescription,
        teaches: 'GCE O-Level Additional Mathematics (4049)',
      }),
    ],
  })),
)
</script>

<style scoped>
.chemistry-hub {
  background: var(--background-primary);
}

.chemistry-hub :deep(.chem-hero) {
  padding-top: calc(80px + var(--spacing-2xl));
}

.chem-hub-links {
  padding-bottom: var(--spacing-2xl);
}

.chem-hub-links__inner {
  text-align: center;
  max-width: 42rem;
  margin: 0 auto;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.chem-hub-links__a {
  color: var(--color-orange);
  font-weight: 600;
}
</style>
