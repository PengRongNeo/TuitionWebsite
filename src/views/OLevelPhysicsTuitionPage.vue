<template>
  <main id="main-content" class="chemistry-hub" data-seo-page="o-level-physics">
    <PhysicsHero />
    <PhysicsTutorSection />
    <PhysicsResourceCards />
    <PhysicsSyllabusTopics />
    <PhysicsTeachingTimeline />
    <SubjectTuitionFeesSection
      tier="upper"
      contact="pengRong"
      subject="O Level Physics"
      enquiry-variant="physics"
    />
    <PhysicsFaqAccordion />
    <PhysicsFinalCta />

    <section class="chem-section section chem-hub-links" aria-label="Related pages">
      <div class="container chem-hub-links__inner">
        <p>
          View Sec 3 &amp; Sec 4 rates on our
          <RouterLink to="/#classes" class="chem-hub-links__a">class list</RouterLink>, explore
          <RouterLink to="/tuition/o-level-chemistry/" class="chem-hub-links__a">O Level Chemistry tuition</RouterLink>, or
          <RouterLink to="/tuition/o-level-math/" class="chem-hub-links__a">O Level Math tuition</RouterLink>.
        </p>
      </div>
    </section>
  </main>
  <SeoFooterLinks />
</template>

<script setup>
import { computed } from 'vue'
import SeoFooterLinks from '@/components/seo/SeoFooterLinks.vue'
import PhysicsHero from '@/components/physics/PhysicsHero.vue'
import PhysicsTutorSection from '@/components/physics/PhysicsTutorSection.vue'
import PhysicsResourceCards from '@/components/physics/PhysicsResourceCards.vue'
import PhysicsSyllabusTopics from '@/components/physics/PhysicsSyllabusTopics.vue'
import PhysicsTeachingTimeline from '@/components/physics/PhysicsTeachingTimeline.vue'
import SubjectTuitionFeesSection from '@/components/tuition/SubjectTuitionFeesSection.vue'
import PhysicsFaqAccordion from '@/components/physics/PhysicsFaqAccordion.vue'
import PhysicsFinalCta from '@/components/physics/PhysicsFinalCta.vue'
import { usePageSeo, webPageJsonLd, courseJsonLd } from '@/composables/usePageSeo'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'O Level Physics Tuition', path: ROUTE_PATHS.oLevelPhysics },
]

const pageTitle = 'O Level Physics Tuition Jurong West | Tuition @ Pioneer'
const pageDescription =
  'O Level Pure Physics tuition for Sec 3 and 4 students in Jurong West, near Pioneer MRT. Learn syllabus 6091 with Teacher Peng Rong. WhatsApp to enquire.'

usePageSeo(
  computed(() => ({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: ROUTE_PATHS.oLevelPhysics,
    breadcrumbs,
    jsonLd: [
      webPageJsonLd({
        path: ROUTE_PATHS.oLevelPhysics,
        name: pageTitle,
        description: pageDescription,
      }),
      courseJsonLd({
        path: ROUTE_PATHS.oLevelPhysics,
        name: 'O Level Physics Tuition',
        description: pageDescription,
        teaches: 'GCE O-Level Pure Physics (6091)',
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
