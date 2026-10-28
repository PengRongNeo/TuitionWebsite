<template>
  <main id="main-content" class="chemistry-hub" data-seo-page="o-level-chemistry">
    <ChemistryHero />
    <ChemistryTutorSection />
    <ChemistryResourceCards />
    <ChemistrySyllabusTopics />
    <ChemistryTeachingTimeline />
    <SubjectTuitionFeesSection
      tier="upper"
      contact="pengRong"
      subject="O Level Chemistry"
      enquiry-variant="chemistry"
    />
    <ChemistryFaqAccordion />
    <ChemistryFinalCta />

    <section class="chem-section section chem-hub-links" aria-label="Related pages">
      <div class="container chem-hub-links__inner">
        <p>
          View Sec 3 &amp; Sec 4 rates on our
          <RouterLink to="/#classes" class="chem-hub-links__a">class list</RouterLink>, explore
          <RouterLink to="/tuition/o-level-math/" class="chem-hub-links__a">O Level Math tuition</RouterLink>, or read about our
          <RouterLink :to="{ path: '/', hash: '#find-us' }" class="chem-hub-links__a">Jurong West centre near Pioneer MRT</RouterLink>.
        </p>
      </div>
    </section>
  </main>
  <SeoFooterLinks />
</template>

<script setup>
import { computed } from 'vue'
import SeoFooterLinks from '@/components/seo/SeoFooterLinks.vue'
import ChemistryHero from '@/components/chemistry/ChemistryHero.vue'
import ChemistryTutorSection from '@/components/chemistry/ChemistryTutorSection.vue'
import ChemistryResourceCards from '@/components/chemistry/ChemistryResourceCards.vue'
import ChemistrySyllabusTopics from '@/components/chemistry/ChemistrySyllabusTopics.vue'
import ChemistryTeachingTimeline from '@/components/chemistry/ChemistryTeachingTimeline.vue'
import SubjectTuitionFeesSection from '@/components/tuition/SubjectTuitionFeesSection.vue'
import ChemistryFaqAccordion from '@/components/chemistry/ChemistryFaqAccordion.vue'
import ChemistryFinalCta from '@/components/chemistry/ChemistryFinalCta.vue'
import { usePageSeo, webPageJsonLd, courseJsonLd } from '@/composables/usePageSeo'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'O Level Chemistry Tuition', path: ROUTE_PATHS.oLevelChemistry },
]

const pageTitle = 'O Level Chemistry Tuition Jurong West | Syllabus 6092 & Revision Hub'
const pageDescription =
  'O Level Chemistry tuition near Pioneer MRT: small-group classes, syllabus 6092 overview, and revision resources. WhatsApp Peng Rong to enquire.'

usePageSeo(
  computed(() => ({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: ROUTE_PATHS.oLevelChemistry,
    breadcrumbs,
    jsonLd: [
      webPageJsonLd({
        path: ROUTE_PATHS.oLevelChemistry,
        name: pageTitle,
        description: pageDescription,
      }),
      courseJsonLd({
        path: ROUTE_PATHS.oLevelChemistry,
        name: 'O Level Chemistry Tuition',
        description: pageDescription,
        teaches: 'GCE O-Level Pure Chemistry (6092)',
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
  max-width: 40rem;
  margin: 0 auto;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.chem-hub-links__a {
  color: var(--color-orange);
  font-weight: 600;
}
</style>
