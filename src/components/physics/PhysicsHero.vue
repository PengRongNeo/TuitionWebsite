<template>
  <section class="chem-hero section" aria-labelledby="phys-hero-heading">
    <div class="chem-hero__decor" aria-hidden="true">
      <span class="chem-hero__blob chem-hero__blob--1"></span>
      <span class="chem-hero__blob chem-hero__blob--2"></span>
      <span class="chem-hero__blob chem-hero__blob--3"></span>
      <span class="chem-hero__float chem-hero__float--a">⚡</span>
      <span class="chem-hero__float chem-hero__float--b">F=ma</span>
    </div>

    <div class="container chem-hero__inner">
      <div class="chem-hero__content">
        <p class="chem-hero__eyebrow">
          Pure Physics · Syllabus {{ syllabusCode }} · Jurong West
        </p>
        <h1 id="phys-hero-heading" class="chem-hero__title">
          O Level Physics Tuition in Jurong West
        </h1>
        <p class="chem-hero__subtitle">
          Build strong Physics foundations, master problem-solving techniques, and develop confidence for your O Level examinations.
        </p>
        <div class="chem-hero__cta">
          <PhysicsWhatsappButton label="Enquire About Physics Tuition" />
          <a href="#physics-resources" class="btn btn-secondary chem-hero__scroll">
            Explore Physics Resources
          </a>
        </div>
      </div>

      <aside class="chem-hero__panel" aria-label="Programme highlights">
        <article class="chem-hero__feature">
          <span class="chem-hero__feature-icon" aria-hidden="true">⚛️</span>
          <div>
            <p class="chem-hero__feature-title">O Level Pure Physics</p>
          </div>
          <span class="chem-hero__feature-badge">{{ syllabusCode }}</span>
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

        <div class="chem-hero__mini-orbit" aria-hidden="true">
          <span class="chem-hero__mini-orbit-ring"></span>
          <span class="chem-hero__mini-orbit-core">{{ syllabusCode }}</span>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import PhysicsWhatsappButton from '@/components/physics/PhysicsWhatsappButton.vue'
import { SYLLABUS_CODE } from '@/config/physics6091'

const syllabusCode = SYLLABUS_CODE

const highlights = [
  { icon: '📚', label: `Syllabus ${syllabusCode}`, tint: '#e8f4ff' },
  { icon: '👥', label: 'Small-Group Tuition', tint: '#fff5e8' },
  { icon: '📍', label: 'Near Pioneer MRT', tint: '#f3eeff' },
]
</script>

<style scoped>
.chem-hero {
  position: relative;
  padding: var(--spacing-2xl) 0 var(--spacing-3xl);
  background: linear-gradient(135deg, #fff8f0 0%, #f0f8ff 45%, #fff0f5 100%);
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
  filter: blur(0);
  opacity: 0.45;
}

.chem-hero__blob--1 {
  width: 280px;
  height: 280px;
  top: -80px;
  right: 8%;
  background: radial-gradient(circle, rgba(255, 153, 51, 0.2), transparent 70%);
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
  background: radial-gradient(circle, rgba(230, 200, 255, 0.35), transparent 70%);
}

.chem-hero__float {
  position: absolute;
  font-size: 1.25rem;
  opacity: 0.35;
  animation: chem-hero-float 7s ease-in-out infinite;
}

.chem-hero__float--a {
  top: 18%;
  right: 12%;
}

.chem-hero__float--b {
  bottom: 22%;
  right: 28%;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-secondary);
  animation-delay: -2s;
}

.chem-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: clamp(var(--spacing-lg), 4vw, var(--spacing-2xl));
  align-items: center;
}

.chem-hero__content {
  min-width: 0;
}

.chem-hero__eyebrow {
  font-weight: 600;
  color: var(--color-orange);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: clamp(0.7rem, 1.6vw, 0.82rem);
  margin: 0 0 var(--spacing-sm);
  line-height: 1.4;
}

.chem-hero__title {
  font-size: clamp(1.65rem, 3.2vw, 2.35rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
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
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;
}

.chem-hero__scroll {
  text-decoration: none;
}

.chem-hero__panel {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  min-width: 0;
  width: 100%;
}

.chem-hero__feature {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-radius: 20px;
  background: linear-gradient(145deg, #fff5e8 0%, #ffffff 55%, #eef6ff 100%);
  border: 1px solid rgba(255, 153, 51, 0.25);
  box-shadow: 0 8px 24px rgba(255, 153, 51, 0.12);
}

.chem-hero__feature-icon {
  font-size: 2.25rem;
  line-height: 1;
}

.chem-hero__feature-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
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
  border: 1px solid rgba(153, 204, 255, 0.35);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  min-height: 100%;
}

.chem-hero__highlight-icon {
  font-size: 1.35rem;
  line-height: 1;
}

.chem-hero__highlight-text {
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--text-primary);
}

.chem-hero__mini-orbit {
  position: absolute;
  top: -12px;
  right: -8px;
  width: 72px;
  height: 72px;
  pointer-events: none;
}

.chem-hero__mini-orbit-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px dashed rgba(153, 204, 255, 0.55);
  animation: chem-hero-spin 22s linear infinite;
}

.chem-hero__mini-orbit-core {
  position: absolute;
  inset: 22%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--color-orange), var(--secondary-color));
  box-shadow: var(--shadow-sm);
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

@keyframes chem-hero-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 900px) {
  .chem-hero__inner {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .chem-hero__panel {
    max-width: 32rem;
    margin: 0 auto;
  }

  .chem-hero__mini-orbit {
    top: -8px;
    right: 4px;
  }
}

@media (max-width: 560px) {
  .chem-hero__highlights {
    grid-template-columns: 1fr;
  }

  .chem-hero__highlight {
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    padding: var(--spacing-md);
  }

  .chem-hero__feature {
    grid-template-columns: auto 1fr;
  }

  .chem-hero__feature-badge {
    grid-column: 2;
    justify-self: start;
    margin-top: var(--spacing-xs);
  }

  .chem-hero__blob--1 {
    right: -20%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chem-hero__float,
  .chem-hero__mini-orbit-ring {
    animation: none;
  }
}
</style>
