<template>
  <section id="testimonials" class="testimonials">
    <h2>What Parents Say 💬</h2>
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="slidesPerView"
      :space-between="20"
      :pagination="{ clickable: true }"
      navigation
      class="testimonial-swiper"
    >
      <SwiperSlide v-for="(img, index) in testimonialImages" :key="index">
        <img :src="img" class="testimonial-img" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import testimonial screenshots
import testimonial8 from '@/assets/testimonial8.jpg'
import testimonial2 from '@/assets/testimonial2.jpg'
import testimonial3 from '@/assets/testimonial3.jpg'
import testimonial4 from '@/assets/testimonial4.jpg'
import testimonial5 from '@/assets/testimonial5.jpg'
import testimonial6 from '@/assets/testimonial6.jpg'
import testimonial7 from '@/assets/testimonial7.jpg'

const testimonialImages = [testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8]

// Dynamically adjust slide count
const slidesPerView = ref(1)

onMounted(() => {
  const updateSlides = () => {
    slidesPerView.value = window.innerWidth > 768 ? 5 : 1
  }
  updateSlides()
  window.addEventListener('resize', updateSlides)
})
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
</style>
