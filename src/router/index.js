import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_PATHS } from '@/config/siteRoutes'

const HomePage = () => import('@/views/HomePage.vue')
const OLevelChemistryTuitionPage = () => import('@/views/OLevelChemistryTuitionPage.vue')
const OLevelPhysicsTuitionPage = () => import('@/views/OLevelPhysicsTuitionPage.vue')
const OLevelAmathTuitionPage = () => import('@/views/OLevelAmathTuitionPage.vue')
const OLevelMathTuitionPage = () => import('@/views/OLevelMathTuitionPage.vue')
const LowerSecondaryMathTuitionPage = () => import('@/views/LowerSecondaryMathTuitionPage.vue')
const LowerSecondaryScienceTuitionPage = () => import('@/views/LowerSecondaryScienceTuitionPage.vue')
const NotFoundPage = () => import('@/views/NotFoundPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: ROUTE_PATHS.home, name: 'home', component: HomePage },
    {
      path: '/tuition/o-level-chemistry',
      alias: ['/tuition/o-level-chemistry/'],
      name: 'tuition-o-level-chemistry',
      component: OLevelChemistryTuitionPage,
    },
    {
      path: '/tuition/o-level-physics',
      alias: ['/tuition/o-level-physics/'],
      name: 'tuition-o-level-physics',
      component: OLevelPhysicsTuitionPage,
    },
    {
      path: '/tuition/o-level-amath',
      alias: ['/tuition/o-level-amath/'],
      name: 'tuition-o-level-amath',
      component: OLevelAmathTuitionPage,
    },
    {
      path: '/tuition/o-level-math',
      alias: ['/tuition/o-level-math/'],
      name: 'tuition-o-level-math',
      component: OLevelMathTuitionPage,
    },
    {
      path: '/tuition/lower-secondary-math',
      alias: ['/tuition/lower-secondary-math/'],
      name: 'tuition-lower-secondary-math',
      component: LowerSecondaryMathTuitionPage,
    },
    {
      path: '/tuition/lower-secondary-science',
      alias: ['/tuition/lower-secondary-science/'],
      name: 'tuition-lower-secondary-science',
      component: LowerSecondaryScienceTuitionPage,
    },
    {
      path: '/locations/jurong-west',
      alias: ['/locations/jurong-west/'],
      redirect: { path: ROUTE_PATHS.home },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
