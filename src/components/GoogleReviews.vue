<template>
  <component
    :is="embedded ? 'div' : 'section'"
    :id="embedded ? undefined : 'google-reviews'"
    :class="embedded ? 'google-reviews google-reviews--embedded' : 'google-reviews section'"
    :aria-labelledby="embedded ? 'google-reviews-heading' : 'google-reviews-heading'"
  >
    <div :class="embedded ? '' : 'container'">
      <header class="reviews-header">
        <component
          :is="embedded ? 'h3' : 'h2'"
          id="google-reviews-heading"
          class="reviews-title"
        >
          Loved by Our Students &amp; Parents ❤️
        </component>
        <p class="reviews-subtitle">
          Trusted by <span class="highlight-students">100+</span> Students
        </p>
      </header>

      <div
        ref="viewportRef"
        class="reviews-viewport"
        @mouseenter="setPaused(true)"
        @mouseleave="setPaused(false)"
        @focusin="setPaused(true)"
        @focusout="onFocusOut"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div
          class="reviews-track"
          :class="{
            'is-paused': isPaused || prefersReducedMotion,
            'is-static': prefersReducedMotion,
            'is-touch-scroll': useTouchScroll,
          }"
          :style="trackStyle"
          role="list"
        >
          <article
            v-for="(review, index) in loopedReviews"
            :key="`${review.id}-${index}`"
            class="review-card"
            role="listitem"
            tabindex="0"
          >
            <div class="review-card-header">
              <div class="review-avatar" aria-hidden="true">
                {{ getInitial(review.name) }}
              </div>
              <div class="review-meta">
                <h3 class="review-name">{{ review.name }}</h3>
                <div class="review-stars" :aria-label="`${review.rating} out of 5 stars`">
                  <span v-for="star in review.rating" :key="star" class="star" aria-hidden="true">★</span>
                </div>
              </div>
            </div>
            <p class="review-excerpt">
              {{ expandedIds.has(review.id) ? review.fullText : review.excerpt }}
            </p>
            <button
              v-if="canExpand(review)"
              type="button"
              class="review-read-more"
              @click="toggleExpand(review.id)"
            >
              {{ expandedIds.has(review.id) ? 'Show less' : 'Read more' }}
            </button>
            <p class="review-google" aria-label="Review source">
              <svg class="google-g" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Posted on Google
            </p>
          </article>
        </div>
      </div>

      <div class="reviews-cta-wrap">
        <a
          :href="googleReviewsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="reviews-cta-btn"
        >
          Read All Our Google Reviews
        </a>
      </div>
    </div>
  </component>
</template>

<script setup>
defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
})

import { computed, onMounted, onUnmounted, ref } from 'vue'
import { googleReviews, googleReviewsUrl } from '@/data/googleReviews'

const MARQUEE_DURATION_SEC = 40
const CARD_WIDTH = 320
const CARD_GAP = 24

const viewportRef = ref(null)
const isPaused = ref(false)
const prefersReducedMotion = ref(false)
const useTouchScroll = ref(false)
const expandedIds = ref(new Set())
const motionQuery = ref(null)

const loopedReviews = computed(() => {
  if (prefersReducedMotion.value || useTouchScroll.value) {
    return googleReviews
  }
  return [...googleReviews, ...googleReviews]
})

const trackStyle = computed(() => {
  if (prefersReducedMotion.value || useTouchScroll.value) {
    return {}
  }
  const singleSetWidth = googleReviews.length * (CARD_WIDTH + CARD_GAP)
  return {
    '--marquee-distance': `${singleSetWidth}px`,
    '--marquee-duration': `${MARQUEE_DURATION_SEC}s`,
  }
})

const getInitial = (name) => {
  const trimmed = name.trim()
  return trimmed ? trimmed.charAt(0).toUpperCase() : '?'
}

const canExpand = (review) =>
  review.fullText && review.fullText.length > review.excerpt.length

const toggleExpand = (id) => {
  const next = new Set(expandedIds.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  expandedIds.value = next
}

const setPaused = (value) => {
  isPaused.value = value
}

const onFocusOut = (event) => {
  if (!viewportRef.value?.contains(event.relatedTarget)) {
    setPaused(false)
  }
}

const onTouchStart = () => {
  setPaused(true)
}

const onTouchEnd = () => {
  window.setTimeout(() => setPaused(false), 1200)
}

const updateMotionPreference = () => {
  prefersReducedMotion.value = motionQuery.value?.matches ?? false
}

const updateTouchScrollMode = () => {
  useTouchScroll.value = window.matchMedia('(max-width: 768px)').matches
}

onMounted(() => {
  motionQuery.value = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotionPreference()
  updateTouchScrollMode()
  motionQuery.value.addEventListener('change', updateMotionPreference)
  window.addEventListener('resize', updateTouchScrollMode)
})

onUnmounted(() => {
  motionQuery.value?.removeEventListener('change', updateMotionPreference)
  window.removeEventListener('resize', updateTouchScrollMode)
})
</script>

<style scoped>
.google-reviews {
  background: var(--background-secondary);
  padding: var(--spacing-3xl) 0 var(--spacing-4xl);
  position: relative;
}

.google-reviews--embedded {
  background: transparent;
  padding: 0;
}

.google-reviews--embedded::before {
  display: none;
}

.google-reviews::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 153, 51, 0.04) 0%,
    rgba(153, 204, 255, 0.06) 50%,
    rgba(255, 215, 0, 0.04) 100%
  );
  z-index: 0;
  pointer-events: none;
}

.google-reviews .container {
  position: relative;
  z-index: 1;
}

.reviews-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.reviews-title {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 800;
  margin: 0 0 var(--spacing-md);
  background: linear-gradient(135deg, var(--color-coral), var(--color-blue), var(--color-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.reviews-subtitle {
  margin: 0 auto;
  max-width: 36rem;
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  color: var(--text-secondary);
  line-height: 1.6;
}

.highlight-students {
  color: var(--color-orange);
  font-weight: 700;
}

.reviews-viewport {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}

.reviews-track {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: reviews-marquee var(--marquee-duration, 40s) linear infinite;
  will-change: transform;
}

.reviews-track.is-paused {
  animation-play-state: paused;
}

.reviews-track.is-static {
  animation: none;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  gap: var(--spacing-lg);
}

.reviews-track.is-touch-scroll {
  animation: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: 100%;
  padding-bottom: var(--spacing-sm);
  scrollbar-width: thin;
}

.reviews-track.is-touch-scroll .review-card {
  scroll-snap-align: center;
}

@keyframes reviews-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-1 * var(--marquee-distance, 2064px)));
  }
}

.review-card {
  flex: 0 0 320px;
  width: 320px;
  min-height: 220px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgba(153, 204, 255, 0.35);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
}

.review-card:focus {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
}

.review-card:focus-visible {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.review-card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.review-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: #3d3d3d;
  background: linear-gradient(135deg, #ffe8f0, #e3f2fd);
  border: 1px solid rgba(153, 204, 255, 0.35);
  flex-shrink: 0;
}

.review-meta {
  min-width: 0;
}

.review-name {
  margin: 0 0 2px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.review-stars {
  color: #f5b301;
  font-size: 0.95rem;
  letter-spacing: 1px;
  line-height: 1;
}

.review-excerpt {
  margin: 0;
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--text-secondary);
}

.review-read-more {
  align-self: flex-start;
  padding: 0;
  border: none;
  background: none;
  color: var(--color-coral);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.review-read-more:hover {
  color: var(--primary-color);
}

.review-google {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: var(--spacing-xs) 0 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-light);
}

.google-g {
  width: 14px;
  height: 14px;
  opacity: 0.75;
}

.reviews-cta-wrap {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-2xl);
}

.reviews-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #3d3d3d;
  background: linear-gradient(135deg, #fff4d6, #dff5e8);
  border: 1px solid rgba(153, 204, 255, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.reviews-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .google-reviews {
    padding: var(--spacing-2xl) 0 var(--spacing-3xl);
  }

  .reviews-viewport {
    mask-image: none;
    -webkit-mask-image: none;
  }

  .review-card {
    flex: 0 0 min(320px, calc(100vw - 2.5rem));
    width: min(320px, calc(100vw - 2.5rem));
  }
}

@media (max-width: 480px) {
  .reviews-header {
    margin-bottom: var(--spacing-xl);
  }

  .review-card {
    min-height: 200px;
    padding: var(--spacing-md);
  }
}
</style>
