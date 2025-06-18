<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <!-- Left: Text content -->
      <div class="gallery-left">
        <h2 class="title">Tuition @ Pioneer</h2>
        <p class="subtitle">
          We provide <strong>quality</strong> and <strong>affordable</strong> tuition
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
import classroom2 from '@/assets/classroomphoto2.jpeg'
import classroom3 from '@/assets/classroomphoto3.jpeg'
import classroom4 from '@/assets/classroomphoto4.jpeg'

const images = [classroom1, classroom2, classroom3, classroom4]
</script>

<style scoped>
.gallery {
  width: 100%;
  overflow-x: hidden;
  padding: 2rem 1rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
  height: 100vh;
  max-height: 100vh;
}

/* Container layout for desktop */
.container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}

.gallery-left,
.gallery-right {
  flex: 1 1 48%;
  min-width: 0;
  animation: slideInRight 0.8s ease-out both;
}


.title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: #000;
}

.subtitle {
  font-size: 1.5rem;
  color: #333;
  line-height: 1.7;
}

.cta-outline-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  background-color: white;
  border: 2px solid #000;
  border-radius: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cta-outline-button:hover {
  background-color: #000;
  color: #fff;
  transform: translateY(-2px);
}

.gallery-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ✅ MOBILE FIX */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 0 1rem;
  }

  .gallery-left,
  .gallery-right {
    flex: 1 1 100%;
    width: 100%;
  }

  .gallery {
    padding-top: 3rem; /* Previously might be too large */
    padding-bottom: 2rem;
  }

  .title {
    font-size: 2.2rem;
    margin-top: 0.5rem; /* Reduce gap after navbar */
    margin-bottom: 1rem; /* Reduce space before subtitle */
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 1rem; /* Reduce space before button */
  }

  .cta-outline-button {
    margin-top: 1rem; /* Reduce from 2rem */
  }

  .gallery-img {
    height: auto;
    max-height: 280px;
  }
}

</style>
