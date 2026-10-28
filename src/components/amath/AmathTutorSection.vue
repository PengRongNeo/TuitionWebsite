<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="amath-tutor-heading">
    <div class="container">
      <h2 id="amath-tutor-heading" class="chem-section__title">Meet Your A-Math Tutor</h2>
      <div class="chem-tutor card">
        <div class="chem-tutor__photo-wrap">
          <img :src="photo" alt="Teacher Peng Rong" class="chem-tutor__photo" width="240" height="240" loading="lazy" />
        </div>
        <div class="chem-tutor__body">
          <h3 class="chem-tutor__name">Peng Rong</h3>
          <p class="chem-tutor__bio">
            Teacher Peng Rong focuses on helping students understand mathematical concepts, recognise question patterns and develop the confidence to solve problems independently.
          </p>
          <AmathWhatsappButton label="Learn A-Math with Peng Rong" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AmathWhatsappButton from '@/components/amath/AmathWhatsappButton.vue'
import photo from '@/assets/teacherpengrong.jpeg'
</script>

<style scoped>
.chem-section--alt {
  background: var(--background-secondary);
}

.chem-section__title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.chem-tutor {
  display: grid;
  grid-template-columns: minmax(200px, 260px) 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background: linear-gradient(145deg, #ffffff, #fff5f8);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
}

.chem-tutor__photo {
  width: 100%;
  border-radius: var(--radius-xl);
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

.chem-tutor__name {
  font-size: 1.75rem;
  margin-bottom: var(--spacing-md);
}

.chem-tutor__bio {
  margin-bottom: var(--spacing-lg);
  max-width: 40rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .chem-tutor {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .chem-tutor__photo-wrap {
    max-width: 220px;
    margin: 0 auto;
  }
}
</style>
