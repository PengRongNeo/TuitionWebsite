<template>
  <section class="chem-hero section" aria-labelledby="lss-hero-heading">
    <div class="chem-hero__decor" aria-hidden="true">
      <span class="chem-hero__blob chem-hero__blob--1"></span>
      <span class="chem-hero__blob chem-hero__blob--2"></span>
      <span class="chem-hero__blob chem-hero__blob--3"></span>
      <span class="chem-hero__float chem-hero__float--a">🧬</span>
      <span class="chem-hero__float chem-hero__float--b">⚡</span>
    </div>

    <div class="container chem-hero__inner">
      <div class="chem-hero__content">
        <p class="chem-hero__eyebrow">Lower Secondary Science · Sec 1 &amp; 2 · Jurong West</p>
        <h1 id="lss-hero-heading" class="chem-hero__title">Secondary 1 &amp; 2 Science Tuition in Jurong West</h1>
        <p class="chem-hero__subtitle">
          Build strong scientific foundations, understand key concepts, and develop confidence in Secondary 1 and 2 Science with Teachers Karen and Peng Rong.
        </p>
        <div class="chem-hero__cta">
          <LowerSecScienceWhatsappButtons stack />
          <a href="#lss-resources" class="btn btn-secondary chem-hero__scroll">Explore Science Resources</a>
        </div>
      </div>

      <aside class="chem-hero__panel" aria-label="Programme highlights">
        <article class="chem-hero__feature">
          <span class="chem-hero__feature-icon" aria-hidden="true">🔬</span>
          <div>
            <p class="chem-hero__feature-title">Sec 1 &amp; 2 Science</p>
          </div>
          <span class="chem-hero__feature-badge">G2 / G3</span>
        </article>
        <ul class="chem-hero__highlights" role="list">
          <li
            v-for="item in highlights"
            :key="item.label"
            class="chem-hero__highlight"
            :style="{ '--highlight-tint': item.tint }"
          >
            <span class="chem-hero__highlight-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="chem-hero__highlight-text">{{ item.label }}</span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
import LowerSecScienceWhatsappButtons from '@/components/lowerSecScience/LowerSecScienceWhatsappButtons.vue'

const highlights = [
  { icon: '📚', label: 'MOE G2 & G3', tint: '#e8f4ff' },
  { icon: '👥', label: 'Small-Group Tuition', tint: '#fff5e8' },
  { icon: '📍', label: 'Near Pioneer MRT', tint: '#f3eeff' },
]
</script>

<style scoped>
.chem-hero {
  position: relative;
  padding: var(--spacing-2xl) 0 var(--spacing-3xl);
  background: linear-gradient(135deg, #fff8f0 0%, #f0f8ff 45%, #e8fff0 100%);
  overflow: hidden;
}
.chem-hero__decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.chem-hero__blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.45;
}
.chem-hero__blob--1 {
  width: 280px;
  height: 280px;
  top: -80px;
  right: 8%;
  background: radial-gradient(circle, rgba(102, 187, 119, 0.25), transparent 70%);
}
.chem-hero__blob--2 {
  width: 220px;
  height: 220px;
  bottom: -60px;
  left: 55%;
  background: radial-gradient(circle, rgba(153, 204, 255, 0.35), transparent 70%);
}
.chem-hero__blob--3 {
  width: 160px;
  height: 160px;
  top: 40%;
  right: 2%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.2), transparent 70%);
}
.chem-hero__float {
  position: absolute;
  font-weight: 700;
  opacity: 0.35;
  animation: chem-hero-float 7s ease-in-out infinite;
}
.chem-hero__float--a {
  top: 16%;
  right: 14%;
  font-size: 1.5rem;
}
.chem-hero__float--b {
  top: 28%;
  right: 8%;
  animation-delay: -1s;
}
.chem-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: clamp(var(--spacing-lg), 4vw, var(--spacing-2xl));
  align-items: center;
}
.chem-hero__eyebrow {
  font-weight: 600;
  color: var(--color-orange);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: clamp(0.7rem, 1.6vw, 0.82rem);
  margin: 0 0 var(--spacing-sm);
}
.chem-hero__title {
  font-size: clamp(1.65rem, 3.2vw, 2.35rem);
  font-weight: 800;
  line-height: 1.2;
  max-width: 22em;
  margin: 0 0 var(--spacing-md);
  text-wrap: balance;
}
.chem-hero__subtitle {
  font-size: clamp(1rem, 1.8vw, 1.125rem);
  line-height: 1.65;
  max-width: 34rem;
  color: var(--text-secondary);
  margin: 0 0 var(--spacing-xl);
}
.chem-hero__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
}
.chem-hero__scroll {
  text-decoration: none;
}
.chem-hero__panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
.chem-hero__feature {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-radius: 20px;
  background: linear-gradient(145deg, #e8fff0 0%, #ffffff 55%, #eef6ff 100%);
  border: 1px solid rgba(102, 187, 119, 0.25);
  box-shadow: 0 8px 24px rgba(102, 187, 119, 0.1);
}
.chem-hero__feature-icon {
  font-size: 2.25rem;
}
.chem-hero__feature-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
}
.chem-hero__feature-badge {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-orange);
  background: rgba(255, 153, 51, 0.12);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xs) var(--spacing-sm);
}
.chem-hero__highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-sm);
}
.chem-hero__highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-sm);
  border-radius: 16px;
  background: linear-gradient(160deg, var(--highlight-tint), #ffffff);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}
.chem-hero__highlight-icon {
  font-size: 1.35rem;
}
.chem-hero__highlight-text {
  font-size: 0.78rem;
  font-weight: 600;
}
@keyframes chem-hero-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
@media (max-width: 900px) {
  .chem-hero__inner {
    grid-template-columns: 1fr;
  }
}
@media (prefers-reduced-motion: reduce) {
  .chem-hero__float {
    animation: none;
  }
}
</style>
