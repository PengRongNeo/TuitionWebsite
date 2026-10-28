<template>
  <section id="why-choose-us" class="why-choose-us section">
    <div class="container">
      <h2 class="section-title">Why Choose Us?</h2>
      <div class="why-grid">
        <article v-for="item in points" :key="item.title" class="why-card">
          <span class="why-icon" aria-hidden="true">{{ item.icon }}</span>
          <h3 class="why-title">{{ item.title }}</h3>
          <p class="why-text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  {
    icon: '🎓',
    title: 'Gen Z Teachers',
    text: 'Relatable teachers who make lessons engaging and easy to understand.',
  },
  {
    icon: '👥',
    title: 'Small-Group Learning',
    text: 'Small class sizes for more personalised attention.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    text: 'Affordable hourly rates without enrolment fees, deposits or material fees.',
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    text: 'Convenient lesson arrangements with a straightforward cancellation policy.',
  },
]
</script>

<style scoped>
.why-choose-us {
  background: var(--background-primary);
  position: relative;
}

.why-choose-us::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 153, 153, 0.04) 0%,
    rgba(153, 204, 255, 0.05) 50%,
    rgba(255, 215, 0, 0.04) 100%
  );
  z-index: 0;
  pointer-events: none;
}

.why-choose-us .container {
  position: relative;
  z-index: 1;
}

.section-title {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 800;
  text-align: center;
  margin: 0 0 var(--spacing-2xl);
  background: linear-gradient(135deg, var(--color-coral), var(--color-blue), var(--color-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-lg);
}

.why-card {
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgba(153, 204, 255, 0.3);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.why-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.why-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: var(--spacing-sm);
  border-radius: 50%;
  font-size: 1.35rem;
  background: linear-gradient(135deg, #ffe8f0, #e3f2fd);
}

.why-title {
  margin: 0 0 var(--spacing-xs);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.why-text {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .why-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .section-title {
    margin-bottom: var(--spacing-xl);
  }
}
</style>
