<template>
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <h2 class="section-title">What Parents Say 💬</h2>

      <div class="testimonial-grid">
        <!-- PSLE Testimonials -->
        <div class="testimonial-column">
          <div class="testimonial-header">
            <div class="testimonial-icon">📚</div>
            <h3 class="testimonial-subheading">PSLE Achievers</h3>
          </div>
          <div class="testimonial-carousel">
            <Swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :pagination="{ 
                clickable: true,
                dynamicBullets: false
              }"
              navigation
              class="testimonial-swiper"
            >
              <SwiperSlide v-for="(img, index) in psleTestimonials" :key="'psle-' + index">
                <div class="testimonial-card">
                  <div class="testimonial-counter">
                    <span class="counter-text">{{ index + 1 }} of {{ psleTestimonials.length }}</span>
                  </div>
                  <img :src="img" class="testimonial-img" :alt="`PSLE Testimonial ${index + 1}`" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <!-- O/N Level Testimonials -->
        <div class="testimonial-column">
          <div class="testimonial-header">
            <div class="testimonial-icon">🧪</div>
            <h3 class="testimonial-subheading">O/N Level Stars</h3>
          </div>
          <div class="testimonial-carousel">
            <Swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :pagination="{ 
                clickable: true,
                dynamicBullets: false
              }"
              navigation
              class="testimonial-swiper"
            >
              <SwiperSlide v-for="(img, index) in secondaryTestimonials" :key="'sec-' + index">
                <div class="testimonial-card">
                  <div class="testimonial-counter">
                    <span class="counter-text">{{ index + 1 }} of {{ secondaryTestimonials.length }}</span>
                  </div>
                  <img :src="img" class="testimonial-img" :alt="`O/N Level Testimonial ${index + 1}`" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <!-- Improvement Testimonials -->
        <div class="testimonial-column">
            <div class="testimonial-header">
              <div class="testimonial-icon">🚀</div>
              <h3 class="testimonial-subheading">Amazing Improvements</h3>
            </div>
            <div class="testimonial-carousel">
              <Swiper
                :modules="[Navigation, Pagination]"
                :slides-per-view="1"
                              :pagination="{ 
                clickable: true,
                dynamicBullets: false
              }"
                navigation
                class="testimonial-swiper"
              >
              <SwiperSlide v-for="(img, index) in improvementTestimonials" :key="'imp-' + index">
                <div class="testimonial-card">
                  <div class="testimonial-counter">
                    <span class="counter-text">{{ index + 1 }} of {{ improvementTestimonials.length }}</span>
                  </div>
                  <img :src="img" class="testimonial-img" :alt="`Improvement Testimonial ${index + 1}`" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// PSLE Testimonials
import psletestimonial1 from '@/assets/psletestimonial1.jpg'
import psletestimonial2 from '@/assets/psletestimonial2.jpg'
import psletestimonial3 from '@/assets/psletestimonial3.jpeg'

// O/N Level Testimonials
import olvltestimonial1 from '@/assets/olvltestimonial1.jpg'
import olvltestimonial2 from '@/assets/olvltestimonial2.jpg'
import olvltestimonial3 from '@/assets/olvltestimonial3.jpeg'
import olvltestimonial4 from '@/assets/olvltestimonial4.jpeg'

// Improvement Testimonials
import improvement1 from '@/assets/improvement1.jpg'
import improvement2 from '@/assets/improvement2.jpg'
import improvement3 from '@/assets/improvement3.jpg'
import improvement4 from '@/assets/improvement4.jpg'
import improvement5 from '@/assets/improvement5.jpeg'
import improvement6 from '@/assets/improvement6.jpeg'
import improvement7 from '@/assets/improvement7.jpeg'
import improvement8 from '@/assets/improvement8.jpeg'
import improvement9 from '@/assets/improvement9.jpeg'
import improvement10 from '@/assets/improvement10.jpeg'
import improvement11 from '@/assets/improvement11.jpeg'
import improvement12 from '@/assets/improvement12.png'
import improvement13 from '@/assets/improvement13.jpeg'

const psleTestimonials = [psletestimonial1, psletestimonial2, psletestimonial3]
const secondaryTestimonials = [olvltestimonial1, olvltestimonial2, olvltestimonial3, olvltestimonial4]
const improvementTestimonials = [improvement1, improvement2, improvement3, improvement4,improvement5, improvement6, improvement7, improvement8, improvement9, improvement10, improvement11, improvement12, improvement13]
</script>

<style scoped>
.testimonials {
  background: var(--background-primary);
  position: relative;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 153, 51, 0.05) 25%, rgba(255, 153, 153, 0.05) 50%, rgba(153, 204, 255, 0.05) 75%, rgba(255, 215, 0, 0.05) 100%);
  z-index: -1;
}

.testimonial-grid {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-3xl);
  flex-wrap: nowrap;
}

.testimonial-column {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border: 1px solid var(--border-color);
  flex: 1;
  min-width: 0;
}

.testimonial-column:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--background-accent);
}

.testimonial-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.testimonial-subheading {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.testimonial-carousel {
  position: relative;
}

.testimonial-swiper {
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.testimonial-card {
  background: var(--background-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  position: relative;
}

.testimonial-img {
  width: 100%;
  max-height: 250px;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal);
}

.testimonial-img:hover {
  transform: scale(1.02);
}

.testimonial-counter {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
  backdrop-filter: blur(4px);
}

.counter-text {
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Custom Swiper Styles */
:deep(.swiper-pagination) {
  bottom: var(--spacing-md);
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: nowrap;
  max-width: 100%;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: var(--border-color);
  opacity: 1;
  transition: all var(--transition-normal);
  margin: 0 1px;
  border-radius: 50%;
  flex-shrink: 0;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--primary-color);
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
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
  font-size: 1rem;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .testimonial-grid {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
  
  .testimonial-column {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .testimonial-grid {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .testimonial-column {
    padding: var(--spacing-lg);
  }

  .testimonial-img {
    max-height: 300px;
  }
}

@media (max-width: 480px) {
  .testimonial-column {
    padding: var(--spacing-lg);
  }

  .testimonial-img {
    max-height: 250px;
  }
}
</style>
