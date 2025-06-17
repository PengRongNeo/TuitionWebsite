<template>
  <div class="teacher-profile" :class="{ reverse: reverseLayout }">
    <div class="teacher-photo">
      <img :src="photo" :alt="name" />
    </div>

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
            <ul class="experience-list">
              <li v-for="(item, index) in experienceList" :key="index">{{ item }}</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <h3>{{ name }}'s Philosophy</h3>
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
  experienceList: Array,
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
  padding: 0 1rem; /* ✅ Adds left and right space */
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
}

.teacher-profile.reverse {
  flex-direction: row-reverse;
}

.teacher-photo img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.teacher-info {
  width: 500px;
}

.card {
  background-color: #fff;
  color: #111;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #000;
}

.experience-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  text-align: left;
  color: #333;
}

.experience-list li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.4;
}

.card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  text-align: left;
}

/* ✅ Mobile Improvements */
@media (max-width: 768px) {
  .teacher-profile {
    flex-direction: column !important;
    padding: 0 1.5rem; /* more side padding for mobile */
  }

  .teacher-photo img {
    width: 100%;
    max-width: 320px;
    height: auto;
  }

  .teacher-info {
    width: 100%;
    max-width: 340px;
  }

  .card {
    padding: 1.5rem;
    min-height: auto;
  }
}

</style>
