<template>
  <main id="main-content" class="chemistry-hub" data-seo-page="lower-secondary-science">
    <LowerSecScienceHero />
    <LowerSecScienceTutorSection />
    <LowerSecScienceResourceCards />
    <LowerSecScienceSyllabusTopics />
    <LowerSecScienceTeachingTimeline />
    <SubjectTuitionFeesSection
      tier="lower"
      contact="dual"
      subject="Lower Secondary Science"
      enquiry-variant="lowerSecScience"
    />
    <LowerSecScienceFaqAccordion />
    <LowerSecScienceFinalCta />

    <section class="chem-section section chem-hub-links" aria-label="Related pages">
      <div class="container chem-hub-links__inner">
        <p>
          View Sec 1 &amp; Sec 2 rates on our
          <RouterLink to="/#classes" class="chem-hub-links__a">class list</RouterLink>, explore
          <RouterLink :to="mathPath" class="chem-hub-links__a">Lower Secondary Math</RouterLink>, or upper secondary
          <RouterLink :to="chemPath" class="chem-hub-links__a">Chemistry</RouterLink> and
          <RouterLink :to="physicsPath" class="chem-hub-links__a">Physics</RouterLink>.
        </p>
      </div>
    </section>
  </main>
  <SeoFooterLinks />
</template>

<script setup>
import { computed } from 'vue'
import SeoFooterLinks from '@/components/seo/SeoFooterLinks.vue'
import LowerSecScienceHero from '@/components/lowerSecScience/LowerSecScienceHero.vue'
import LowerSecScienceTutorSection from '@/components/lowerSecScience/LowerSecScienceTutorSection.vue'
import LowerSecScienceResourceCards from '@/components/lowerSecScience/LowerSecScienceResourceCards.vue'
import LowerSecScienceSyllabusTopics from '@/components/lowerSecScience/LowerSecScienceSyllabusTopics.vue'
import LowerSecScienceTeachingTimeline from '@/components/lowerSecScience/LowerSecScienceTeachingTimeline.vue'
import SubjectTuitionFeesSection from '@/components/tuition/SubjectTuitionFeesSection.vue'
import LowerSecScienceFaqAccordion from '@/components/lowerSecScience/LowerSecScienceFaqAccordion.vue'
import LowerSecScienceFinalCta from '@/components/lowerSecScience/LowerSecScienceFinalCta.vue'
import { usePageSeo, webPageJsonLd, courseJsonLd } from '@/composables/usePageSeo'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const mathPath = ROUTE_PATHS.lowerSecMath
const chemPath = ROUTE_PATHS.oLevelChemistry
const physicsPath = ROUTE_PATHS.oLevelPhysics

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Lower Secondary Science Tuition', path: ROUTE_PATHS.lowerSecScience },
]

const pageTitle = 'Sec 1 & 2 Science Tuition Jurong West | Tuition @ Pioneer'
const pageDescription =
  'Lower Secondary Science tuition for Sec 1 and 2 students near Pioneer MRT, Jurong West. Build scientific understanding with Teachers Karen and Peng Rong.'

usePageSeo(
  computed(() => ({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: ROUTE_PATHS.lowerSecScience,
    breadcrumbs,
    jsonLd: [
      webPageJsonLd({
        path: ROUTE_PATHS.lowerSecScience,
        name: pageTitle,
        description: pageDescription,
      }),
      courseJsonLd({
        path: ROUTE_PATHS.lowerSecScience,
        name: 'Lower Secondary Science Tuition',
        description: pageDescription,
        teaches: 'MOE Lower Secondary G2 & G3 Science',
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
