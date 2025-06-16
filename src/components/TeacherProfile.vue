<template>
  <div class="teacher-profile" :class="{ reverse: reverseLayout }">
    <!-- Image -->
    <div class="teacher-photo">
      <img :src="photo" :alt="name" />
    </div>

    <!-- Info Carousel -->
    <div class="teacher-info">
      <Swiper
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        :space-between="30"
        class="swiper-wrapper"
      >
        <SwiperSlide>
          <div class="card">
            <h3>{{ name }}</h3>
            <p><strong>Experience:</strong> {{ experience }}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <h3>{{ name }}'s Teaching Philosophy</h3>
            <p>{{ philosophy }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps({
  name: String,
  photo: String,
  experience: String,
  philosophy: String,
  reverseLayout: Boolean
})
</script>

<style scoped>
.teacher-profile {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  max-width: 1100px;
}

.teacher-profile.reverse {
  flex-direction: row-reverse;
}

.teacher-photo img {
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 24px;
}

.teacher-info {
  width: 340px;
}

.card {
  background: white;
  color: #1e1e1e;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card h3 {
  font-size: 1.8rem;
  color: #6f2cf4;
  margin-bottom: 1rem;
}

.card p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>