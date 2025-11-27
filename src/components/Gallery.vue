<template>
  <section id="gallery" class="gallery section">
    <div class="container">
      <div class="gallery-content">
        <!-- Left: Text content -->
        <div class="gallery-left fade-in">
          <h1 class="gallery-title">Tuition @ Pioneer</h1>
          <p class="gallery-subtitle">
            We provide <span class="highlight-orange">quality</span> and <span class="highlight-coral">affordable</span> tuition
            to help students <span class="highlight-blue">improve</span> with <span class="highlight-yellow">confidence</span>.
          </p>
          <a
            class="btn btn-primary gallery-cta"
            href="https://wa.me/6591850641?text=Hi%20Teacher%20Karen%2C%20I%20would%20like%20to%20ask%20about%20tuition%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Join Us Now</span>
            <span class="cta-icon">📆</span>
          </a>
        </div>

                <!-- Right: Carousel -->
        <div class="gallery-right slide-up">
          <div class="carousel-container">
            <!-- Custom Carousel -->
            <div 
              class="custom-carousel"
              @mouseenter="stopAutoplay"
              @mouseleave="startAutoplay"
            >
              <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div v-for="(img, index) in alternativeImages" :key="index" class="carousel-slide">
                  <img :src="img" class="gallery-img" :alt="`Classroom ${index + 1}`" />
                  <div class="image-overlay">
                    <span class="image-caption">Classroom {{ index + 1 }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Carousel Navigation -->
              <div class="carousel-nav">
                <button @click="prevSlide" class="nav-btn prev-btn">‹</button>
                <button @click="nextSlide" class="nav-btn next-btn">›</button>
              </div>
              
              <!-- Carousel Indicators -->
              <div class="carousel-indicators">
                <button 
                  v-for="(img, index) in alternativeImages" 
                  :key="index"
                  @click="goToSlide(index)"
                  :class="['indicator', { active: currentSlide === index }]"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'



// Import images with explicit file extensions
import classroom1 from '@/assets/classroomphoto1.jpeg'
import classroom2 from '@/assets/classroomphoto2.jpeg'
import classroom3 from '@/assets/classroomphoto3.jpeg'
import classroom4 from '@/assets/classroomphoto4.jpeg'
import classroom5 from '@/assets/classroomphoto5.jpeg'
import classroom6 from '@/assets/classroomphoto6.jpeg'
import classroom7 from '@/assets/classroomphoto7.jpeg'
import classroom8 from '@/assets/classroomphoto8.jpeg'
import classroom9 from '@/assets/classroomphoto9.jpeg'
import classroom10 from '@/assets/classroomphoto10.jpeg'


const images = [classroom1, classroom2, classroom3, classroom4, classroom5, classroom6, classroom7, classroom8, classroom9, classroom10]

// Try alternative import method
const alternativeImages = [
  new URL('@/assets/classroomphoto1.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto2.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto3.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto4.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto5.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto6.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto7.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto8.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto9.jpeg', import.meta.url).href,
  new URL('@/assets/classroomphoto10.jpeg', import.meta.url).href
]

// Alternative approach: Use public URLs if imports fail
const fallbackImages = [
  '/src/assets/classroomphoto1.jpeg',
  '/src/assets/classroomphoto2.jpeg',
  '/src/assets/classroomphoto3.jpeg',
  '/src/assets/classroomphoto4.jpeg',
  '/src/assets/classroomphoto5.jpeg',
  '/src/assets/classroomphoto6.jpeg',
  '/src/assets/classroomphoto7.jpeg',
  '/src/assets/classroomphoto8.jpeg',
  '/src/assets/classroomphoto9.jpeg',
  '/src/assets/classroomphoto10.jpeg'
]

// Carousel functionality
const currentSlide = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % alternativeImages.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? alternativeImages.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 1500) // 1.5 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})




</script>

<style scoped>
.gallery {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--background-secondary);
  position: relative;
  overflow: hidden;
}

.gallery::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 153, 51, 0.05) 0%, rgba(255, 153, 153, 0.05) 30%, rgba(153, 204, 255, 0.05) 60%, rgba(255, 215, 0, 0.05) 100%);
  z-index: -1;
}

.gallery-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  width: 100%;
}

.gallery-left {
  animation: slideInLeft 0.8s ease-out;
}

.gallery-title {
  font-size: clamp(2.5rem, 6vw, 3.2rem);
  font-weight: 900;
  margin-bottom: var(--spacing-lg);
  line-height: 1.1;
  background: linear-gradient(135deg, var(--color-coral), var(--color-blue), var(--color-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
  font-weight: 400;
}

.gallery-subtitle strong {
  color: var(--primary-color);
  font-weight: 700;
}

/* Maythematics.com style highlights */
.gallery-subtitle .highlight-orange {
  color: #FF9933;
  font-weight: 700;
  font-size: 1.15em;
}

.gallery-subtitle .highlight-coral {
  color: #FF9999;
  font-weight: 700;
  font-size: 1.15em;
}

.gallery-subtitle .highlight-blue {
  color: #99CCFF;
  font-weight: 700;
  font-size: 1.15em;
}

.gallery-subtitle .highlight-purple {
  color: #CC99FF;
  font-weight: 700;
  font-size: 1.15em;
}

.gallery-subtitle .highlight-yellow {
  color: #FFD700;
  font-weight: 700;
  font-size: 1.15em;
}

.gallery-cta {
  font-size: 1.1rem;
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 600;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  background: linear-gradient(135deg, #E6D5F5, #D4C5E8) !important;
  color: var(--text-primary) !important;
}

.gallery-cta:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

.cta-icon {
  font-size: 1.2rem;
}

.gallery-right {
  animation: slideInRight 0.8s ease-out 0.2s both;
}

.carousel-container {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  background: white;
}

.gallery-swiper {
  width: 100%;
  height: 500px;
  /* Fallback styles */
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  display: block;
  max-width: 100%;
}

.image-container:hover .gallery-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: var(--spacing-xl);
  color: white;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.image-caption {
  font-size: 1.1rem;
  font-weight: 600;
}

.debug-info {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  color: #333;
}

.debug-info p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.custom-carousel {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 1.5rem;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-slide .gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Carousel Navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  pointer-events: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-btn:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Carousel Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Custom Swiper Styles */
:deep(.swiper-pagination) {
  bottom: var(--spacing-lg);
}

:deep(.custom-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all var(--transition-normal);
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--primary-color);
  transform: scale(1.2);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.9);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: white;
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 1.2rem;
  font-weight: bold;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .gallery {
    padding: var(--spacing-4xl) 0 var(--spacing-3xl) 0;
    min-height: auto;
  }

  .gallery-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
    text-align: center;
    padding-top: var(--spacing-xl);
  }

  .gallery-left {
    order: 2;
  }

  .gallery-right {
    order: 1;
    margin-bottom: var(--spacing-xl);
  }

  .gallery-title {
    font-size: clamp(2rem, 8vw, 2.5rem);
    margin-bottom: var(--spacing-md);
  }

  .gallery-subtitle {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-lg);
  }

  .gallery-cta {
    width: 100%;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-xl);
  }

  .gallery-swiper {
    height: 300px;
  }

  .carousel-container {
    border-radius: var(--radius-xl);
    margin: var(--spacing-md) var(--spacing-sm);
  }

  .custom-carousel {
    height: 350px;
    margin-top: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .gallery {
    padding: var(--spacing-3xl) 0 var(--spacing-2xl) 0;
  }

  .gallery-content {
    gap: var(--spacing-2xl);
    padding-top: var(--spacing-lg);
  }

  .custom-carousel {
    height: 300px;
  }

  .carousel-container {
    margin: 0 var(--spacing-xs);
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }

  .gallery-title {
    font-size: 1.8rem;
  }

  .gallery-subtitle {
    font-size: 1rem;
  }
}
</style>
