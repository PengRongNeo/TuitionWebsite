import { ROUTE_PATHS } from '@/config/siteRoutes'

/**
 * Maps class-list subject chip labels to dedicated programme pages.
 * Only subjects with an existing page should appear here.
 */
export const SUBJECT_CHIP_ROUTES = {
  Math: ROUTE_PATHS.lowerSecMath,
  Science: ROUTE_PATHS.lowerSecScience,
  'E-Math': ROUTE_PATHS.oLevelMath,
  'A-Math': ROUTE_PATHS.oLevelAmath,
  Chemistry: ROUTE_PATHS.oLevelChemistry,
  Physics: ROUTE_PATHS.oLevelPhysics,
}

export function getSubjectChipRoute(subjectLabel) {
  return SUBJECT_CHIP_ROUTES[subjectLabel] ?? null
}

/** Desktop/mobile Classes submenu — grouped labels are non-link headings */
export const CLASSES_NAV_DROPDOWN = [
  { type: 'heading', label: 'Lower Secondary' },
  { type: 'link', label: 'Secondary 1 & 2 Mathematics', to: ROUTE_PATHS.lowerSecMath },
  { type: 'link', label: 'Secondary 1 & 2 Science', to: ROUTE_PATHS.lowerSecScience },
  { type: 'heading', label: 'Upper Secondary' },
  { type: 'link', label: 'O Level E-Math Tuition', to: ROUTE_PATHS.oLevelMath },
  { type: 'link', label: 'O Level A-Math Tuition', to: ROUTE_PATHS.oLevelAmath },
  { type: 'link', label: 'O Level Chemistry Tuition', to: ROUTE_PATHS.oLevelChemistry },
  { type: 'link', label: 'O Level Physics Tuition', to: ROUTE_PATHS.oLevelPhysics },
]
