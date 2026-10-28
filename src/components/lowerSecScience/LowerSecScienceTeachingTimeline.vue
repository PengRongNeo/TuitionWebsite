<template>
  <section class="chem-journey section" aria-labelledby="chem-method-heading">
    <div class="container">
      <header class="chem-journey__header">
        <h2 id="chem-method-heading" class="chem-journey__title">{{ heading }}</h2>
        <p class="chem-journey__subtitle">{{ subtitle }}</p>
      </header>

      <div
        ref="timelineRoot"
        class="chem-journey__timeline-wrap"
        @mouseenter="onHoverStart"
        @mouseleave="onHoverEnd"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
      >
        <ol class="chem-journey__timeline" role="list">
          <li
            v-for="(step, index) in steps"
            :key="step.step"
            class="chem-journey__item"
            :class="{ 'chem-journey__item--active': index === activeIndex }"
            :style="{
              '--step-accent': step.accent,
              '--step-node': step.nodeColor,
            }"
          >
            <div class="chem-journey__node-col">
              <div class="chem-journey__connector-node" aria-hidden="true">
                <span class="chem-journey__step-num">{{ step.step }}</span>
              </div>
            </div>

            <div class="chem-journey__arm" aria-hidden="true" />

            <div class="chem-journey__card">
              <button
                type="button"
                class="chem-journey__trigger"
                :aria-expanded="index === activeIndex"
                :aria-controls="`chem-journey-desc-${step.step}`"
                @click="goTo(index, true)"
              >
                <span class="chem-journey__emoji" aria-hidden="true">{{ step.icon }}</span>
                <span class="chem-journey__card-title">{{ step.title }}</span>
              </button>

              <div
                :id="`chem-journey-desc-${step.step}`"
                class="chem-journey__body"
                :class="{ 'chem-journey__body--open': index === activeIndex }"
                :aria-hidden="index !== activeIndex"
              >
                <div class="chem-journey__body-inner">
                  <p v-for="(para, pi) in step.paragraphs" :key="pi" class="chem-journey__text">
                    {{ para }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  TEACHING_TIMELINE,
  TEACHING_TIMELINE_HEADING,
  TEACHING_TIMELINE_SUBTITLE,
} from '@/config/lowerSecScience'

const AUTOPLAY_MS = 2000

const heading = TEACHING_TIMELINE_HEADING
const subtitle = TEACHING_TIMELINE_SUBTITLE
const steps = TEACHING_TIMELINE

const activeIndex = ref(0)
const hoverPaused = ref(false)
const focusPaused = ref(false)
const tabHidden = ref(false)
const reducedMotion = ref(false)

const timelineRoot = ref(null)
let autoplayTimer = null

const shouldAutoplay = computed(
  () =>
    !reducedMotion.value &&
    !hoverPaused.value &&
    !focusPaused.value &&
    !tabHidden.value,
)

function clearAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function scheduleAutoplay() {
  clearAutoplay()
  if (!shouldAutoplay.value) return
  autoplayTimer = setInterval(() => {
    goTo((activeIndex.value + 1) % steps.length, false)
  }, AUTOPLAY_MS)
}

function resetAutoplayTimer() {
  scheduleAutoplay()
}

function goTo(index, fromUser = false) {
  const len = steps.length
  activeIndex.value = ((index % len) + len) % len
  if (fromUser) resetAutoplayTimer()
}

function onHoverStart() {
  hoverPaused.value = true
  clearAutoplay()
}

function onHoverEnd() {
  hoverPaused.value = false
  scheduleAutoplay()
}

function onFocusIn() {
  focusPaused.value = true
  clearAutoplay()
}

function onFocusOut(event) {
  if (timelineRoot.value?.contains(event.relatedTarget)) return
  focusPaused.value = false
  scheduleAutoplay()
}

function onVisibilityChange() {
  tabHidden.value = document.hidden
  if (tabHidden.value) clearAutoplay()
  else scheduleAutoplay()
}

onMounted(() => {
  reducedMotion.value =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reducedMotion.value) {
    scheduleAutoplay()
  }

  document.addEventListener('visibilitychange', onVisibilityChange)
})

onUnmounted(() => {
  clearAutoplay()
  document.removeEventListener('visibilitychange', onVisibilityChange)
})
</script>

<style scoped>
.chem-journey {
  padding: var(--spacing-2xl) 0 var(--spacing-3xl);
  background: linear-gradient(180deg, #fffaf5 0%, #f5f9ff 45%, #fff5f8 100%);
}

.chem-journey__header {
  text-align: center;
  max-width: 40rem;
  margin: 0 auto var(--spacing-xl);
}

.chem-journey__title {
  margin-bottom: var(--spacing-md);
}

.chem-journey__subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.55;
}

.chem-journey__timeline-wrap {
  max-width: 720px;
  margin: 0 auto;
}

/* Vertical rail + horizontal arms + stacked cards */
.chem-journey__timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  --rail-x: 19px;
  --node-size: 40px;
  --arm-width: 20px;
}

.chem-journey__timeline::before {
  content: '';
  position: absolute;
  left: var(--rail-x);
  top: calc(var(--node-size) / 2);
  bottom: calc(var(--node-size) / 2);
  width: 4px;
  margin-left: -2px;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    #ff9933 0%,
    #66aaee 25%,
    #55bb77 50%,
    #e6b800 75%,
    #ff7799 100%
  );
  opacity: 0.85;
  z-index: 0;
}

.chem-journey__item {
  display: grid;
  grid-template-columns: var(--node-size) var(--arm-width) minmax(0, 1fr);
  column-gap: 0;
  margin-bottom: var(--spacing-md);
  position: relative;
  align-items: start;
}

.chem-journey__item:last-child {
  margin-bottom: 0;
}

.chem-journey__node-col {
  display: flex;
  justify-content: center;
  padding-top: var(--spacing-sm);
  z-index: 1;
}

.chem-journey__connector-node {
  width: var(--node-size);
  height: var(--node-size);
  border-radius: 50%;
  background: white;
  border: 3px solid var(--step-node);
  box-shadow:
    0 0 0 3px color-mix(in srgb, var(--step-accent) 75%, white),
    var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-width 0.35s ease;
}

.chem-journey__step-num {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--step-node);
}

.chem-journey__item--active .chem-journey__connector-node {
  transform: scale(1.1);
  border-width: 4px;
  box-shadow:
    0 0 0 5px color-mix(in srgb, var(--step-accent) 95%, white),
    0 4px 14px color-mix(in srgb, var(--step-node) 35%, transparent);
}

.chem-journey__arm {
  align-self: start;
  width: 100%;
  height: 3px;
  margin-top: calc(var(--spacing-sm) + var(--node-size) / 2 - 1.5px);
  background: color-mix(in srgb, var(--step-node) 35%, var(--border-color));
  border-radius: 2px;
  transition:
    background 0.35s ease,
    height 0.35s ease,
    box-shadow 0.35s ease;
}

.chem-journey__item--active .chem-journey__arm {
  height: 4px;
  background: var(--step-node);
  box-shadow: 0 0 8px color-mix(in srgb, var(--step-node) 45%, transparent);
}

.chem-journey__card {
  min-width: 0;
  background: linear-gradient(145deg, white, var(--step-accent));
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid color-mix(in srgb, var(--step-node) 20%, var(--border-color));
  border-left: 3px solid color-mix(in srgb, var(--step-node) 50%, var(--border-color));
  opacity: 0.9;
  transition:
    opacity 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.chem-journey__item--active .chem-journey__card {
  opacity: 1;
  box-shadow: var(--shadow-lg);
  border-left: 5px solid var(--step-node);
}

.chem-journey__trigger {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

.chem-journey__item--active .chem-journey__trigger {
  padding: var(--spacing-md) var(--spacing-lg);
  flex-direction: column;
  align-items: flex-start;
}

.chem-journey__trigger:focus-visible {
  outline: 2px solid var(--step-node);
  outline-offset: 2px;
  border-radius: var(--radius-lg);
}

.chem-journey__emoji {
  font-size: 1.35rem;
  line-height: 1;
  flex-shrink: 0;
}

.chem-journey__item--active .chem-journey__emoji {
  font-size: 1.85rem;
}

.chem-journey__card-title {
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text-primary);
  flex: 1;
  min-width: 0;
}

.chem-journey__item--active .chem-journey__card-title {
  font-size: 1.05rem;
}

.chem-journey__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.chem-journey__body--open {
  grid-template-rows: 1fr;
}

.chem-journey__body-inner {
  overflow: hidden;
}

.chem-journey__text {
  margin: 0;
  padding: 0 var(--spacing-lg) var(--spacing-md);
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.chem-journey__text:first-child {
  padding-top: 0;
}

@media (min-width: 640px) {
  .chem-journey__timeline {
    --node-size: 48px;
    --arm-width: 32px;
    --rail-x: 23px;
  }

  .chem-journey__timeline-wrap {
    max-width: 780px;
  }

  .chem-journey__item {
    margin-bottom: var(--spacing-lg);
  }

  .chem-journey__emoji {
    font-size: 1.5rem;
  }

  .chem-journey__item--active .chem-journey__emoji {
    font-size: 2rem;
  }

  .chem-journey__card-title {
    font-size: 1rem;
  }

  .chem-journey__item--active .chem-journey__card-title {
    font-size: 1.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chem-journey__body,
  .chem-journey__card,
  .chem-journey__connector-node {
    transition: none;
  }

  .chem-journey__item--active .chem-journey__card,
  .chem-journey__item--active .chem-journey__connector-node {
    transform: none;
  }
}
</style>
