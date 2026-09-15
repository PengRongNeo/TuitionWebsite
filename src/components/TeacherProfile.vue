<template>
  <div
    ref="observerTarget"
    class="teacher-profile card"
    :class="[
      { reverse: reverseLayout },
      isVisible ? animationClass : ''
    ]"
  >
    <div class="teacher-photo">
      <div class="photo-container">
        <img :src="photo" :alt="name" />
        <div class="photo-overlay">
          <span class="teacher-emoji">{{ name.includes('Karen') ? '👩🏻‍🏫' : '🧑🏻‍🏫' }}</span>
        </div>
      </div>
    </div>

    <div class="teacher-info">
      <Swiper
        :modules="[Pagination, Navigation]"
        :pagination="{ 
          clickable: true,
          dynamicBullets: true
        }"
        navigation
        :space-between="30"
        class="teacher-swiper"
        :initial-slide="0"
      >
        <SwiperSlide>
          <div class="info-card">
            <h3 class="teacher-name">{{ name }}</h3>
            <ul class="experience-list">
              <li v-for="(item, index) in experienceList" :key="index">
                <span class="experience-icon">✓</span>
                {{ item }}
              </li>
            </ul>
            <div v-if="socialLinks.length" class="teacher-social">
              <a
                v-for="link in socialLinks"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="teacher-social-link"
                :aria-label="link.label"
              >
                <svg
                  v-if="link.platform === 'tiktok'"
                  class="teacher-social-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <svg
                  v-else-if="link.platform === 'instagram'"
                  class="teacher-social-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="info-card">
            <h3 class="teacher-name">{{ name }}'s Philosophy</h3>
            <div class="philosophy-content">
              <p class="philosophy-text">{{ philosophy }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps({
  name: String,
  photo: String,
  experienceList: Array,
  philosophy: String,
  reverseLayout: Boolean,
  animationClass: String,
  socialLinks: {
    type: Array,
    default: () => []
  }
})







const isVisible = ref(false)
const observerTarget = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // Only run once
      }
    },
    { threshold: 0.2 }
  )

  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }
})
</script>

<style scoped>
.teacher-profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-3xl);
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  opacity: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.teacher-profile:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.teacher-profile.reverse {
  direction: rtl;
}

.teacher-profile.reverse > * {
  direction: ltr;
}

/* Animation classes */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.teacher-photo {
  display: flex;
  justify-content: center;
}

.photo-container {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  transition: all var(--transition-normal);
}

.photo-container:hover {
  transform: scale(1.02);
}

.teacher-photo img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  display: block;
}

.photo-overlay {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.teacher-emoji {
  font-size: 1.5rem;
}

.teacher-info {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
}

.teacher-swiper {
  height: 100%;
  width: 100%;
  max-width: 500px;
}

.info-card {
  background: var(--background-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: relative;
  max-width: 90%;
  margin: 0 auto;
}

.teacher-name {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.experience-icon {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.teacher-social {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
}

.teacher-social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: white;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  text-decoration: none;
  overflow: hidden;
}

.teacher-social-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: all var(--transition-normal);
  transform: translateX(-50%);
  border-radius: var(--radius-sm);
}

.teacher-social-link:hover {
  background: rgba(255, 153, 153, 0.1);
  transform: translateY(-2px);
}

.teacher-social-link:hover::after {
  width: 80%;
}

.teacher-social-icon {
  width: 24px;
  height: 24px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
  position: relative;
  z-index: 1;
}

.teacher-social-link:hover .teacher-social-icon {
  color: var(--primary-color);
}

.philosophy-content {
  position: relative;
}



.philosophy-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
}



/* Custom Swiper Styles */
:deep(.swiper-pagination) {
  bottom: var(--spacing-md);
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: var(--border-color);
  opacity: 1;
  transition: all var(--transition-normal);
  border: 2px solid white;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--primary-color);
  transform: scale(1.2);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.95);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border: 2px solid var(--border-color);
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: white;
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 1rem;
  font-weight: bold;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .teacher-profile {
    background: white;
    border-radius: var(--radius-xl);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    margin: 0;
    max-width: 100%;
    overflow: hidden;
  }

  .teacher-profile.reverse {
    direction: ltr;
  }

  .teacher-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .teacher-photo img {
    width: 180px;
    height: 180px;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
  }

  .photo-overlay {
    right: calc(50% - 90px);
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .teacher-info {
    min-height: auto;
    padding: 0;
    width: 100%;
  }

  .info-card {
    padding: var(--spacing-md);
    max-width: 100%;
    margin: 0;
    box-shadow: none;
    background: transparent;
    border: none;
    width: 100%;
    box-sizing: border-box;
  }

  .teacher-name {
    font-size: 1.3rem;
    margin-bottom: var(--spacing-md);
    text-align: center;
  }

  .experience-list {
    margin: 0;
    padding: 0;
  }

  .experience-list li {
    font-size: 0.85rem;
    margin-bottom: var(--spacing-sm);
    padding: 0;
    text-align: left;
  }

  .philosophy-text {
    font-size: 0.85rem;
    text-align: center;
    margin: 0;
  }
}

@media (max-width: 480px) {
  .teacher-profile {
    padding: var(--spacing-sm);
    margin: 0;
    overflow: hidden;
  }

  .teacher-photo img {
    width: 150px;
    height: 150px;
  }

  .photo-overlay {
    right: calc(50% - 75px);
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }

  .info-card {
    padding: var(--spacing-sm);
  }

  .teacher-name {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
  }

  .experience-list li {
    font-size: 0.8rem;
    margin-bottom: var(--spacing-xs);
  }

  .philosophy-text {
    font-size: 0.8rem;
  }
}
</style>
