<template>
  <section id="testimonials" class="testimonials">
    <h2>What Parents Say 💬</h2>

    <div class="testimonial-row">
      <!-- PSLE Testimonials -->
      <div class="testimonial-column">
        <h3 class="subheading">📚 PSLE Achievers</h3>
        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          navigation
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="(img, index) in psleTestimonials" :key="'psle-' + index">
            <img :src="img" class="testimonial-img" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- O/N Level Testimonials -->
      <div class="testimonial-column">
        <h3 class="subheading">🧪 O/N Level Stars</h3>
        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          navigation
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="(img, index) in secondaryTestimonials" :key="'sec-' + index">
            <img :src="img" class="testimonial-img" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Improvement Testimonials -->
      <div class="testimonial-column">
        <h3 class="subheading">🚀 Amazing Improvements</h3>
        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          navigation
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="(img, index) in improvementTestimonials" :key="'imp-' + index">
            <img :src="img" class="testimonial-img" />
          </SwiperSlide>
        </Swiper>
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
import testimonial1 from '@/assets/psletestimonial1.jpg'
import testimonial2 from '@/assets/psletestimonial2.jpg'

// O/N Level Testimonials
import testimonial11 from '@/assets/olvltestimonial1.jpg'
import testimonial12 from '@/assets/olvltestimonial2.jpg'

// Improvement Testimonials
import improvement1 from '@/assets/improvement1.jpg'
import improvement2 from '@/assets/improvement2.jpg'
import improvement3 from '@/assets/improvement3.jpg'
import improvement4 from '@/assets/improvement4.jpg'
const psleTestimonials = [testimonial1, testimonial2]
const secondaryTestimonials = [testimonial11, testimonial12]
const improvementTestimonials = [improvement1, improvement2, improvement3, improvement4]
</script>

<style scoped>
.testimonials {
  padding: 4rem 1rem;
  text-align: center;
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif;
}

.testimonials h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #111;
}

.testimonial-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.testimonial-column {
  flex: 1 1 300px;
  max-width: 400px;
  width: 100%;
}

.subheading {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: bold;
}

.testimonial-img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.testimonial-swiper {
  padding: 1rem 0;
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .testimonial-row {
    flex-direction: column;
    align-items: center;
  }

  .testimonial-column {
    max-width: 100%;
  }

  .testimonials h2 {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1.3rem;
  }
}
</style>
