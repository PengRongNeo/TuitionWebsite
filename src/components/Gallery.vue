<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <!-- Left: Text content -->
      <div class="gallery-left">
        <h2 class="title">Tuition @ Pioneer</h2>
        <p class="subtitle">
          We provide <span class="highlight">quality</span> and <span class="highlight">affordable</span> tuition
          to help students improve academically and confidently.
        </p>
        <a
          class="cta-outline-button"
          href="https://wa.me/6591850641?text=Hi%2C%20I%20would%20like%20to%20sign%20up%20for%20tuition.%20Can%20you%20share%20more%20info%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up Now 📆
        </a>
      </div>

      <!-- Right: Carousel -->
      <div class="gallery-right">
        <Swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 5000 }"
          pagination
          navigation
          class="swiper-wrapper"
        >
          <SwiperSlide v-for="(img, index) in images" :key="index">
            <img :src="img" class="gallery-img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import classroom1 from '@/assets/classroomphoto1.jpg'
import classroom2 from '@/assets/classroomphoto2.JPG'
import classroom3 from '@/assets/classroomphoto3.jpeg'
import classroom4 from '@/assets/classroomphoto4.jpeg'

const images = [classroom1, classroom2, classroom3, classroom4]
</script>

<style scoped>
.gallery {
  height: 100vh;
  background: #6f2cf4; /* Timely purple */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  color: white;
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
}

.gallery-left {
  flex: 1;
  text-align: left;
  padding: 1rem;
}

.gallery-right {
  flex: 1;
  min-width: 0;
}

.title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: white;
}

.subtitle {
  font-size: 1.5rem;
  color: #f3e8ff;
  line-height: 1.7;
}

.highlight {
  color: #00ffa3;
  font-weight: 600;
  text-shadow: 0 0 6px rgba(0, 255, 163, 0.3);
}

.cta-outline-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #6f2cf4;
  background-color: white;
  border: 2px solid #6f2cf4;
  border-radius: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s;
  box-shadow: 0 2px 8px rgba(111, 44, 244, 0.2);
}

.cta-outline-button:hover {
  background-color: #f3e8ff;
  color: #4c1d95;
  transform: translateY(-2px);
}

.gallery-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .gallery-img {
    height: auto;
    max-height: 280px;
  }

  .title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
}
</style>
