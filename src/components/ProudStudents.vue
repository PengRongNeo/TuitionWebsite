<template>
  <section id="proud-students" class="proud-students">
    <h2>🌟 Proud Student Achievements</h2>
    <div class="student-grid">
      <div class="student-card" v-for="(student, index) in students" :key="index">
        <h3>{{ student.name }}</h3>
        <p>{{ student.achievement }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const students = [
  { name: "Yong Xuan Kee", achievement: "6 Pointer for PSLE" },
  { name: "Lucas", achievement: "6 Pointer for PSLE" },
  { name: "Caton Ng", achievement: "AL6 to AL2 in Math and Science for PSLE" },
  { name: "Adiv Fikri", achievement: "C5 Prelims to A2 in O Level Additional Math"},
  { name: "Jaycia Ng", achievement: "F9 Prelims to A1 in N Level Math" },
]
</script>

<style scoped>
.proud-students {
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
}

.proud-students h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 800;
  color: #111;
}

.student-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.student-card {
  background: #fff;
  border: 2px dashed #ccc;
  border-radius: 16px;
  padding: 1.5rem;
  width: 260px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  text-align: left;
}

.student-card:hover {
  transform: translateY(-4px);
}

.student-card h3 {
  font-size: 1.3rem;
  color: #000;
  margin-bottom: 0.5rem;
}

.student-card p {
  font-size: 1rem;
  color: #444;
}
</style>
