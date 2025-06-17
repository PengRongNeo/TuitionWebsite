<template>
  <section id="classes" class="classes">
    <h2>Subjects 📚 & Rates 💵</h2>
    <div class="card-grid">
      <div class="class-card" v-for="(item, index) in classRates" :key="index">
        <h3>{{ item.level }}</h3>
        <p class="subjects">📚
          <span v-for="(subject, i) in item.subjects" :key="i">
            {{ subject }}<span v-if="i < item.subjects.length - 1">, </span>
          </span>
        </p>
        <p class="rate">💵 {{ item.rate }}/h</p>
      </div>
    </div>
    <p class="note">📌 Class times and availability will be shared upon WhatsApp inquiry.</p>
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
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif;
}

.classes h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #111;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.class-card {
  background: #fff;
  border: 2px dashed #ccc;
  border-radius: 20px;
  padding: 1.5rem 1.2rem;
  width: 260px;
  min-height: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.class-card:hover {
  transform: translateY(-4px);
}

.class-card h3 {
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 0.5rem;
}

.subjects {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
}

.rate {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.note {
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #666;
}
</style>
