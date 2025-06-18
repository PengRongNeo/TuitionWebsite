<template>
  <div
    ref="observerTarget"
    class="teacher-profile"
    :class="[
      { reverse: reverseLayout },
      isVisible ? animationClass : ''
    ]"
  >
    <div class="teacher-photo">
      <img :src="photo" :alt="name" />
    </div>

    <div class="teacher-info">
      <Swiper
        :modules="[Pagination, Navigation]"
        :pagination="{ clickable: true }"
        navigation
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
import { Pagination, Navigation } from 'swiper/modules'
import { ref, onMounted } from 'vue'
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
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  max-width: 1100px;
  padding: 0 1rem;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
  opacity: 0; /* Initially hidden */
}

.teacher-profile.reverse {
  flex-direction: row-reverse;
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

/* Mobile */
@media (max-width: 768px) {
  .teacher-profile {
    flex-direction: column !important;
    padding: 0 1.5rem;
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
