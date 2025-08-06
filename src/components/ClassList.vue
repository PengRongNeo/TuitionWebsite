<template>
  <section id="classes" class="classes section">
    <div class="container">
      <h2 class="section-title">Subjects 📚 & Rates 💵</h2>
      
      <div class="class-grid">
        <div 
          class="class-card card" 
          v-for="(item, index) in classRates" 
          :key="index"
          :class="{ 'primary-level': item.level.includes('P'), 'secondary-level': item.level.includes('Sec') }"
        >
          <div class="card-header">
            <div class="level-badge">
              <span class="level-icon">{{ item.level.includes('P') ? '🎓' : '🧪' }}</span>
              <h3 class="level-title">{{ item.level }}</h3>
            </div>
          </div>
          
          <div class="card-content">
            <div class="subjects-section">
              <h4 class="subjects-title">Subjects</h4>
              <div class="subjects-list">
                <span 
                  class="subject-tag" 
                  v-for="(subject, i) in item.subjects" 
                  :key="i"
                >
                  {{ subject }}
                </span>
              </div>
            </div>
            
            <div class="rate-section">
              <div class="rate-badge">
                <span class="rate-icon">💰</span>
                <span class="rate-amount">{{ item.rate }}</span>
                <span class="rate-unit">/hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="info-note">
        <div class="note-icon">📌</div>
        <p class="note-text">Class times and availability will be shared upon WhatsApp inquiry.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const classRates = [
  { level: 'P1–P2', subjects: ['English', 'Math'], rate: '$22' },
  { level: 'P3–P4', subjects: ['English', 'Math', 'Science'], rate: '$25' },
  { level: 'P5–P6', subjects: ['English', 'Math', 'Science'], rate: '$28' },
  { level: 'Sec 1', subjects: ['Math', 'Science'], rate: '$30' },
  { level: 'Sec 2', subjects: ['Math', 'Science'], rate: '$32' },
  { level: 'Sec 3', subjects: ['E-Math', 'A-Math', 'Physics', 'Chemistry'], rate: '$35' },
  { level: 'Sec 4', subjects: ['E-Math', 'A-Math', 'Physics', 'Chemistry'], rate: '$40' }
]
</script>

<style scoped>
.classes {
  background: var(--background-secondary);
  position: relative;
}

.classes::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(37, 99, 235, 0.02) 100%);
  z-index: -1;
}

.class-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-3xl);
}

.class-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.class-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.class-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.class-card:hover::before {
  opacity: 1;
}

.primary-level {
  border-color: rgba(37, 99, 235, 0.1);
}

.primary-level:hover {
  border-color: rgba(37, 99, 235, 0.2);
}

.secondary-level {
  border-color: rgba(245, 158, 11, 0.1);
}

.secondary-level:hover {
  border-color: rgba(245, 158, 11, 0.2);
}

.card-header {
  margin-bottom: var(--spacing-md);
}

.level-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  justify-content: center;
}

.level-icon {
  font-size: 1.2rem;
}

.level-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.subjects-section {
  text-align: center;
}

.subjects-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.subjects-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  justify-content: center;
}

.subject-tag {
  background: var(--background-accent);
  color: var(--text-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.subject-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.rate-section {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
}

.rate-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.rate-badge:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.rate-icon {
  font-size: 1.2rem;
}

.rate-amount {
  font-size: 1.2rem;
  font-weight: 800;
}

.rate-unit {
  font-size: 0.9rem;
  opacity: 0.9;
}

.info-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-3xl);
  padding: var(--spacing-xl);
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.note-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.note-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .class-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-2xl);
  }

  .class-card {
    padding: var(--spacing-lg);
  }

  .subjects-list {
    gap: var(--spacing-xs);
  }

  .subject-tag {
    font-size: 0.85rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .info-note {
    margin-top: var(--spacing-2xl);
    padding: var(--spacing-lg);
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .class-card {
    padding: var(--spacing-lg);
  }

  .level-title {
    font-size: 1.25rem;
  }

  .rate-amount {
    font-size: 1.25rem;
  }
}
</style>
