<template>
  <section id="proud-students" class="proud-students">
    <div class="container">
      <h2>🌟 Proud Student Achievements</h2>
      <Swiper
        :modules="[Pagination, Navigation]"
        :slides-per-view="slidesPerView"
        :space-between="20"
        :pagination="{ clickable: true }"
        navigation
        class="swiper-wrapper"
      >
        <SwiperSlide v-for="(student, index) in students" :key="index">
          <div class="student-card">
            <h3>{{ student.name }}</h3>
            <p class="school">{{ student.school }}</p>
            <p class="achievement">{{ student.achievement }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const students = [
  { name: "Yong Xuan Kee", school: "Jurong West Primary School", achievement: "AL6 for PSLE, Top 4 in cohort" },
  { name: "Lucas Choon Chen Rui", school: "Jurong West Primary School", achievement: "AL6 for PSLE, Top 4 in cohort" },
  { name: "Caton Ng", school: "St Anthony's Primary School", achievement: "AL6 to AL2 in Math and Science for PSLE" },
  { name: "Adiv Fikri", school: "Yuan Ching Secondary School", achievement: "C5 Prelims to A2 in O Level Additional Math" },
  { name: "Jaycia Ng", school: "Juying Secondary School", achievement: "F9 in Sec 3 to A2 in N Level Math" },
]

const slidesPerView = ref(1)
onMounted(() => {
  const updateSlides = () => {
    slidesPerView.value = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1
  }
  updateSlides()
  window.addEventListener('resize', updateSlides)
})
</script>


<style scoped>
.proud-students {
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}

.proud-students h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 800;
  color: #111;
}

.student-card {
  background: #fff;
  border: 2px dashed #ccc;
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  text-align: left;
}

.student-card:hover {
  transform: translateY(-4px);
}

.student-card h3 {
  font-size: 1.3rem;
  color: #000;
  margin-bottom: 0.2rem;
}

.student-card .school {
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 0.6rem;
}

.student-card .achievement {
  font-size: 1rem;
  color: #444;
}
</style>
