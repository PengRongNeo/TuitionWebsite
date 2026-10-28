import { CHEMISTRY_TOPICS_CORE } from './topicsCore'
import { OFFICIAL_SYLLABUS_PDF, SYLLABUS_CODE, SYLLABUS_YEAR, PROGRESS_STORAGE_KEY } from './constants'

export {
  OFFICIAL_SYLLABUS_PDF,
  SYLLABUS_CODE,
  SYLLABUS_YEAR,
  PROGRESS_STORAGE_KEY,
}

export {
  CHEMISTRY_RESOURCES,
  TEACHING_TIMELINE,
  TEACHING_TIMELINE_HEADING,
  TEACHING_TIMELINE_SUBTITLE,
  CHEMISTRY_FAQ,
  CHEMISTRY_FAQ_WHATSAPP_MESSAGE,
} from './hubMeta'

/** Full topic list for syllabus overview cards (single source of truth). */
export const CHEMISTRY_TOPICS = CHEMISTRY_TOPICS_CORE

export function getTopicById(id) {
  return CHEMISTRY_TOPICS.find((t) => t.id === id) ?? null
}

export function getTopicIndex(id) {
  return CHEMISTRY_TOPICS.findIndex((t) => t.id === id)
}
