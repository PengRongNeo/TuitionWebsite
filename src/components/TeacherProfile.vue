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
  animationClass: String
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
