<template>
  <section id="teachers" class="teachers section">
    <div class="container">
      <h2 class="section-title">Our Teachers 👩🏻‍🏫🧑🏻‍🏫</h2>

      <!-- Desktop Layout (unchanged) -->
      <div class="teachers-grid desktop-only">
        <TeacherProfile
          name="Teacher Karen"
          :photo="photoKaren"
          :socialLinks="karenSocialLinks"
          :experienceList="[
            'Full Time Educator',
            '8 Years of Teaching Experience',
            'Primary Level: English, Math and Science',
            'Secondary Level: Math and Science',
            'Currently teaching over 80+ students weekly across Pri and Sec levels'
          ]"
          :philosophy="karenPhilosophy"
          animationClass="slide-in-left"
        />

        <div class="teacher-separator">
          <div class="separator-line"></div>
        </div>

        <TeacherProfile
          name="Teacher Peng Rong"
          :photo="photoPengRong"
          :experienceList="[
            'NUS Bachelor of Science - Honours (Highest Distinction)',
            '6 Years of Teaching Experience',
            'Specialised in Upper Secondary Level: Math, Amath, Chemistry, Physics',
            'Proven track record of helping students improve their grades within 1 term'
          ]"
          :philosophy="pengRongPhilosophy"
          :reverse-layout="true"
          animationClass="slide-in-right"
        />
      </div>

      <!-- Mobile Layout (new card-based design) -->
      <div class="teachers-mobile mobile-only">
        <!-- Teacher Karen Mobile Card -->
        <div class="mobile-teacher-card">
          <div class="mobile-teacher-photo">
            <img :src="photoKaren" alt="Teacher Karen" />
            <div class="mobile-teacher-badge">👩🏻‍🏫</div>
          </div>
          <div class="mobile-teacher-content">
            <h3 class="mobile-teacher-name">Teacher Karen</h3>
            <div class="mobile-qualifications">
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Full Time Educator</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>6 Years of Teaching Experience</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Primary Level: English, Math and Science</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Secondary Level: Math and Science</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Currently teaching over 80+ students weekly across Pri and Sec levels</span>
              </div>
            </div>
            <div class="mobile-teacher-social">
              <a
                v-for="link in karenSocialLinks"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="mobile-teacher-social-link"
                :aria-label="link.label"
              >
                <svg
                  v-if="link.platform === 'tiktok'"
                  class="mobile-teacher-social-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <svg
                  v-else-if="link.platform === 'instagram'"
                  class="mobile-teacher-social-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <div class="mobile-philosophy">
              <h4 class="mobile-philosophy-title">Teaching Philosophy</h4>
              <p class="mobile-philosophy-text">
                "I believe in being firm and focused during lessons so every student stays on track — but outside of class, I connect with my students like a friend. Beyond just academics, I'm always here to listen, encourage, and help them grow with confidence."
              </p>
            </div>
          </div>
        </div>

        <!-- Teacher Peng Rong Mobile Card -->
        <div class="mobile-teacher-card">
          <div class="mobile-teacher-photo">
            <img :src="photoPengRong" alt="Teacher Peng Rong" />
            <div class="mobile-teacher-badge">🧑🏻‍🏫</div>
          </div>
          <div class="mobile-teacher-content">
            <h3 class="mobile-teacher-name">Teacher Peng Rong</h3>
            <div class="mobile-qualifications">
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Part Time Tutor (NUS Bachelor of Science - Honours (Highest Distinction))</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>4 Years of Teaching Experience</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Upper Secondary Level: Math, Amath, Chemistry, Physics</span>
              </div>
              <div class="mobile-qualification-item">
                <span class="mobile-check">✓</span>
                <span>Helped over 50+ students improve their grades</span>
              </div>
            </div>
            <div class="mobile-philosophy">
              <h4 class="mobile-philosophy-title">Teaching Philosophy</h4>
              <p class="mobile-philosophy-text">
                "I focus on delivering concepts in a way that's easy to understand — using real-life examples and analogies so it clicks. Once students truly get it, it sticks."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TeacherProfile from './TeacherProfile.vue'
import photoKaren from '@/assets/teacherkaren.jpeg'
import photoPengRong from '@/assets/teacherpengrong.jpeg'

const karenSocialLinks = [
  {
    platform: 'tiktok',
    href: 'https://www.tiktok.com/@teacherkaren_',
    label: 'Teacher Karen on TikTok',
  },
  {
    platform: 'instagram',
    href: 'https://www.instagram.com/teacherkaren__',
    label: 'Teacher Karen on Instagram',
  },
]

const karenPhilosophy = "I believe in being firm and focused during lessons so every student stays on track — but outside of class, I connect with my students like a friend. Beyond just academics, I'm always here to listen, encourage, and help them grow with confidence."

const pengRongPhilosophy = "I focus on delivering concepts in a way that's easy to understand — using real-life examples and analogies so it clicks. Once students truly get it, it sticks."
</script>

<style scoped>
.teachers {
  background: var(--background-secondary);
  position: relative;
}

.teachers::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(153, 204, 255, 0.05) 0%, rgba(255, 153, 51, 0.05) 50%, rgba(255, 215, 0, 0.05) 100%);
  z-index: -1;
}

.teachers-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
}

.teacher-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-l) 0;
  padding: var(--spacing-xl) 0;
}

.separator-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  width: 300px;
  border-radius: 1px;
}

/* Display Controls */
.desktop-only {
  display: block;
}

.mobile-only {
  display: none !important;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--text-primary);
  margin-bottom: var(--spacing-3xl);
  font-weight: 800;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -var(--spacing-md);
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

/* Mobile Layout Styles */
.teachers-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
  padding: 0 var(--spacing-sm);
  margin-top: var(--spacing-xl);
}

.mobile-teacher-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  margin-bottom: var(--spacing-xl);
}

.mobile-teacher-card:last-child {
  margin-bottom: 0;
}

.mobile-teacher-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.mobile-teacher-photo {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.mobile-teacher-photo img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  aspect-ratio: 1 / 1;
}

.mobile-teacher-badge {
  position: absolute;
  top: -8px;
  right: calc(50% - 80px);
  background: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.mobile-teacher-content {
  text-align: center;
}

.mobile-teacher-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-qualifications {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.mobile-qualification-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
  text-align: left;
}

.mobile-check {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 1px;
  flex-shrink: 0;
}

.mobile-teacher-social {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.mobile-teacher-social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-lg);
  background: var(--background-accent);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  text-decoration: none;
  overflow: hidden;
}

.mobile-teacher-social-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: all var(--transition-normal);
  transform: translateX(-50%);
  border-radius: var(--radius-sm);
}

.mobile-teacher-social-link:hover {
  background: rgba(255, 153, 153, 0.1);
  transform: translateY(-2px);
}

.mobile-teacher-social-link:hover::after {
  width: 80%;
}

.mobile-teacher-social-icon {
  width: 22px;
  height: 22px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
  position: relative;
  z-index: 1;
}

.mobile-teacher-social-link:hover .mobile-teacher-social-icon {
  color: var(--primary-color);
}

.mobile-philosophy {
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
}

.mobile-philosophy-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.mobile-philosophy-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: block !important;
  }

  .teachers {
    padding: var(--spacing-xl) 0;
  }

  .section-title {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
    margin-bottom: var(--spacing-xl);
  }
}

@media (max-width: 480px) {
  .teachers {
    padding: var(--spacing-lg) 0;
  }

  .teachers-mobile {
    gap: var(--spacing-3xl);
    padding: 0 var(--spacing-xs);
    margin-top: var(--spacing-lg);
  }

  .mobile-teacher-card {
    padding: var(--spacing-md);
  }

  .mobile-teacher-photo img {
    width: 140px;
    height: 140px;
  }

  .mobile-teacher-badge {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
    right: calc(50% - 70px);
  }

  .mobile-teacher-name {
    font-size: 1.3rem;
  }

  .mobile-qualification-item {
    font-size: 0.85rem;
  }

  .mobile-philosophy-text {
    font-size: 0.85rem;
  }

  .section-title {
    font-size: clamp(1.5rem, 7vw, 2rem);
    margin-bottom: var(--spacing-lg);
  }
}
</style>
