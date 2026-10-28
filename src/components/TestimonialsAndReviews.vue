<template>
  <section id="reviews" class="stories-section section" aria-labelledby="stories-heading">
    <div class="container">
      <h2 id="stories-heading" class="stories-main-title">Real Stories. Real Progress.</h2>

      <div class="stories-block stories-block--parents">
        <h3 class="stories-subtitle">What Parents Say 💬</h3>
        <Testimonials embedded />
      </div>

      <div class="stories-block stories-block--google">
        <GoogleReviews embedded />
      </div>
    </div>
  </section>
</template>

<script setup>
import Testimonials from './Testimonials.vue'
import GoogleReviews from './GoogleReviews.vue'
</script>

<style scoped>
.stories-section {
  background: var(--background-secondary);
  position: relative;
}

.stories-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 153, 51, 0.04) 0%,
    rgba(153, 204, 255, 0.05) 50%,
    rgba(255, 215, 0, 0.04) 100%
  );
  z-index: 0;
  pointer-events: none;
}

.stories-section .container {
  position: relative;
  z-index: 1;
}

.stories-main-title {
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

.stories-subtitle {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  text-align: center;
  margin: 0 0 var(--spacing-xl);
  color: var(--text-primary);
}

.stories-block--google {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid rgba(153, 204, 255, 0.25);
}

@media (max-width: 768px) {
  .stories-block--google {
    margin-top: var(--spacing-2xl);
    padding-top: var(--spacing-xl);
  }
}
</style>
