<template>
  <section id="proud-students" class="proud-students section">
    <div class="container">
      <h2 class="section-title">🌟 Proud Student Achievements</h2>
      
      <div class="achievements-carousel">
        <Swiper
          :modules="[Pagination, Navigation, Autoplay]"
          :slides-per-view="slidesPerView"
          :space-between="30"
          :pagination="{ 
            clickable: true,
            dynamicBullets: true
          }"
          navigation
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          class="achievements-swiper"
        >
          <SwiperSlide v-for="(student, index) in students" :key="index">
            <div class="student-card card">
              <div class="achievement-badge">
                <span class="achievement-icon">🏆</span>
              </div>
              <div class="student-info">
                <h3 class="student-name">{{ student.name }}</h3>
                <p class="student-school">{{ student.school }}</p>
                <div class="achievement-details">
                  <span class="achievement-text">{{ student.achievement }}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const students = [
  { name: "Yong Xuan Kee", school: "Jurong West Primary School", achievement: "AL6 for PSLE, Top 4 in cohort" },
  { name: "Lucas Choon Chen Rui", school: "Jurong West Primary School", achievement: "AL6 for PSLE, Top 4 in cohort" },
  { name: "Caton Ng", school: "St Anthony's Primary School", achievement: "AL6 to AL2 in Math and Science for PSLE" },
  { name: "Adiv Fikri", school: "Yuan Ching Secondary School", achievement: "C5 Prelims to A2 in O Level Additional Math" },
  { name: "Jaycia Ng", school: "Juying Secondary School", achievement: "F9 in Sec 3 to A2 in N Level Math" },
  { name: "Christine Yap Ying Xin", school: "Xingnan Primary School", achievement: "AL7 to AL4 in 3 Months" },
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
  background: var(--background-primary);
  position: relative;
}

.proud-students::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%);
  z-index: -1;
}

.achievements-carousel {
  margin-top: var(--spacing-3xl);
  position: relative;
}

.achievements-swiper {
  padding: var(--spacing-lg) 0;
}

.student-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.student-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.student-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.student-card:hover::before {
  opacity: 1;
}

.achievement-badge {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
}

.achievement-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.student-info {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.student-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.student-school {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
}

.achievement-details {
  background: var(--background-accent);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
}

.achievement-text {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.5;
}

/* Custom Swiper Styles */
:deep(.swiper-pagination) {
  bottom: 0;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: var(--border-color);
  opacity: 1;
  transition: all var(--transition-normal);
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--secondary-color);
  transform: scale(1.3);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--secondary-color);
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

/* Responsive Design */
@media (max-width: 768px) {
  .achievements-carousel {
    margin-top: var(--spacing-2xl);
  }

  .student-card {
    padding: var(--spacing-xl);
  }

  .student-name {
    font-size: 1.2rem;
  }

  .achievement-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .student-card {
    padding: var(--spacing-lg);
  }

  .achievement-icon {
    font-size: 2rem;
  }

  .student-name {
    font-size: 1.1rem;
  }
}
</style>
