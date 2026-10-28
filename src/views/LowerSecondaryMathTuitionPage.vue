<template>
  <main id="main-content" class="chemistry-hub" data-seo-page="lower-secondary-math">
    <LowerSecMathHero />
    <LowerSecMathTutorSection />
    <LowerSecMathResourceCards />
    <LowerSecMathSyllabusTopics />
    <LowerSecMathTeachingTimeline />
    <SubjectTuitionFeesSection
      tier="lower"
      contact="karen"
      subject="Lower Secondary Math"
      enquiry-variant="lowerSecMath"
    />
    <LowerSecMathFaqAccordion />
    <LowerSecMathFinalCta />

    <section class="chem-section section chem-hub-links" aria-label="Related pages">
      <div class="container chem-hub-links__inner">
        <p>
          View Sec 1 &amp; Sec 2 rates on our
          <RouterLink to="/#classes" class="chem-hub-links__a">class list</RouterLink>, explore
          <RouterLink :to="sciencePath" class="chem-hub-links__a">Lower Secondary Science</RouterLink>, or
          <RouterLink :to="emathPath" class="chem-hub-links__a">O Level E-Math</RouterLink>.
        </p>
      </div>
    </section>
  </main>
  <SeoFooterLinks />
</template>

<script setup>
import { computed } from 'vue'
import SeoFooterLinks from '@/components/seo/SeoFooterLinks.vue'
import LowerSecMathHero from '@/components/lowerSecMath/LowerSecMathHero.vue'
import LowerSecMathTutorSection from '@/components/lowerSecMath/LowerSecMathTutorSection.vue'
import LowerSecMathResourceCards from '@/components/lowerSecMath/LowerSecMathResourceCards.vue'
import LowerSecMathSyllabusTopics from '@/components/lowerSecMath/LowerSecMathSyllabusTopics.vue'
import LowerSecMathTeachingTimeline from '@/components/lowerSecMath/LowerSecMathTeachingTimeline.vue'
import SubjectTuitionFeesSection from '@/components/tuition/SubjectTuitionFeesSection.vue'
import LowerSecMathFaqAccordion from '@/components/lowerSecMath/LowerSecMathFaqAccordion.vue'
import LowerSecMathFinalCta from '@/components/lowerSecMath/LowerSecMathFinalCta.vue'
import { usePageSeo, webPageJsonLd, courseJsonLd } from '@/composables/usePageSeo'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const sciencePath = ROUTE_PATHS.lowerSecScience
const emathPath = ROUTE_PATHS.oLevelMath

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Lower Secondary Math Tuition', path: ROUTE_PATHS.lowerSecMath },
]

const pageTitle = 'Sec 1 & 2 Math Tuition Jurong West | Tuition @ Pioneer'
const pageDescription =
  'Lower Secondary Math tuition for Sec 1 and 2 students in Jurong West, near Pioneer MRT. Build confidence and strong foundations with Teacher Karen.'

usePageSeo(
  computed(() => ({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: ROUTE_PATHS.lowerSecMath,
    breadcrumbs,
    jsonLd: [
      webPageJsonLd({
        path: ROUTE_PATHS.lowerSecMath,
        name: pageTitle,
        description: pageDescription,
      }),
      courseJsonLd({
        path: ROUTE_PATHS.lowerSecMath,
        name: 'Lower Secondary Mathematics Tuition',
        description: pageDescription,
        teaches: 'MOE Lower Secondary G2 & G3 Mathematics',
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
