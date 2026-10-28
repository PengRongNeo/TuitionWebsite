<template>
  <section class="chem-section section chem-section--alt" aria-labelledby="phys-tutor-heading">
    <div class="container">
      <h2 id="phys-tutor-heading" class="chem-section__title">Meet Your Physics Tutor</h2>
      <div class="chem-tutor card">
        <div class="chem-tutor__photo-wrap">
          <img :src="photo" alt="Teacher Peng Rong" class="chem-tutor__photo" width="240" height="240" loading="lazy" />
        </div>
        <div class="chem-tutor__body">
          <h3 class="chem-tutor__name">Peng Rong</h3>
          <div class="chem-tutor__achievements" role="list">
            <div class="chem-achievement" role="listitem">
              <span class="chem-achievement__icon" aria-hidden="true">🏅</span>
              <div>
                <strong>A1</strong> in O Level Pure Physics
              </div>
            </div>
            <div class="chem-achievement" role="listitem">
              <span class="chem-achievement__icon" aria-hidden="true">🎓</span>
              <div>
                <strong>A</strong> in H2 Physics
              </div>
            </div>
          </div>
          <p class="chem-tutor__bio">
            "Physics is all about visualising how the world works. I help students turn abstract concepts into those 'Ohhh, now I get it!' moments — because once you truly understand Physics, everything starts to click."
          </p>
          <PhysicsWhatsappButton label="Learn Physics with Peng Rong" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PhysicsWhatsappButton from '@/components/physics/PhysicsWhatsappButton.vue'
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

.chem-tutor__achievements {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.chem-achievement {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  font-size: 0.95rem;
}

.chem-achievement__icon {
  font-size: 1.35rem;
}

.chem-tutor__bio {
  margin-bottom: var(--spacing-lg);
  max-width: 40rem;
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

  .chem-tutor__achievements {
    justify-content: center;
  }
}
</style>
