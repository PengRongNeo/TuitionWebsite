<template>
  <main id="main-content" class="chemistry-hub emath-hub" data-seo-page="o-level-math">
    <EmathHero />
    <EmathTutorSection />
    <EmathResourceCards />
    <EmathSyllabusTopics />
    <EmathTeachingTimeline />
    <SubjectTuitionFeesSection
      tier="upper"
      contact="karen"
      subject="O Level E-Math"
      enquiry-variant="emath"
    />
    <EmathFaqAccordion />
    <EmathFinalCta />

    <section class="chem-section section chem-hub-links" aria-label="Related pages">
      <div class="container chem-hub-links__inner">
        <p>
          View Sec 3 &amp; Sec 4 rates on our
          <RouterLink to="/#classes" class="chem-hub-links__a">class list</RouterLink>, explore
          <RouterLink to="/tuition/o-level-amath/" class="chem-hub-links__a">O Level A-Math tuition</RouterLink>,
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
import EmathHero from '@/components/emath/EmathHero.vue'
import EmathTutorSection from '@/components/emath/EmathTutorSection.vue'
import EmathResourceCards from '@/components/emath/EmathResourceCards.vue'
import EmathSyllabusTopics from '@/components/emath/EmathSyllabusTopics.vue'
import EmathTeachingTimeline from '@/components/emath/EmathTeachingTimeline.vue'
import SubjectTuitionFeesSection from '@/components/tuition/SubjectTuitionFeesSection.vue'
import EmathFaqAccordion from '@/components/emath/EmathFaqAccordion.vue'
import EmathFinalCta from '@/components/emath/EmathFinalCta.vue'
import { usePageSeo, webPageJsonLd, courseJsonLd } from '@/composables/usePageSeo'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'O Level E-Math Tuition', path: ROUTE_PATHS.oLevelMath },
]

const pageTitle = 'O Level E-Math Tuition Jurong West | Tuition @ Pioneer'
const pageDescription =
  'O Level E-Math tuition for Sec 3 and 4 students in Jurong West, near Pioneer MRT. Build confidence in Mathematics with Teacher Karen. WhatsApp to enquire.'

usePageSeo(
  computed(() => ({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: ROUTE_PATHS.oLevelMath,
    breadcrumbs,
    jsonLd: [
      webPageJsonLd({
        path: ROUTE_PATHS.oLevelMath,
        name: pageTitle,
        description: pageDescription,
      }),
      courseJsonLd({
        path: ROUTE_PATHS.oLevelMath,
        name: 'O Level Elementary Mathematics Tuition',
        description: pageDescription,
        teaches: 'GCE O-Level Elementary Mathematics (4052)',
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
