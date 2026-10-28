import { ref, onMounted, watch } from 'vue'
import { PROGRESS_STORAGE_KEY } from '@/config/chemistry6092'

function readProgress() {
  if (typeof localStorage === 'undefined') return {}
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeProgress(map) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(map))
  } catch {
    /* ignore quota errors */
  }
}

export function useChemistryTopicProgress() {
  const progress = ref(readProgress())

  onMounted(() => {
    progress.value = readProgress()
  })

  watch(
    progress,
    (val) => {
      writeProgress(val)
    },
    { deep: true },
  )

  function isComplete(topicId) {
    return Boolean(progress.value[topicId])
  }

  function toggleComplete(topicId) {
    progress.value = {
      ...progress.value,
      [topicId]: !progress.value[topicId],
    }
  }

  return { progress, isComplete, toggleComplete }
}
