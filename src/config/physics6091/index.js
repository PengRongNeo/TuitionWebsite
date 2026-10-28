import { PHYSICS_TOPICS_CORE } from './topicsCore'
import { OFFICIAL_SYLLABUS_PDF, SYLLABUS_CODE, SYLLABUS_YEAR, PROGRESS_STORAGE_KEY } from './constants'

export {
  OFFICIAL_SYLLABUS_PDF,
  SYLLABUS_CODE,
  SYLLABUS_YEAR,
  PROGRESS_STORAGE_KEY,
}

export {
  PHYSICS_RESOURCES,
  TEACHING_TIMELINE,
  TEACHING_TIMELINE_HEADING,
  TEACHING_TIMELINE_SUBTITLE,
  PHYSICS_FAQ,
  PHYSICS_FAQ_WHATSAPP_MESSAGE,
} from './hubMeta'

export const PHYSICS_TOPICS = PHYSICS_TOPICS_CORE

export function getTopicById(id) {
  return PHYSICS_TOPICS.find((t) => t.id === id) ?? null
}

export function getTopicIndex(id) {
  return PHYSICS_TOPICS.findIndex((t) => t.id === id)
}
