<template>
  <section id="teachers" class="teachers">
    <h2>Our Teachers</h2>
    <TeacherProfile
      name="Teacher Karen"
      :photo="photoKaren"
      experience="10 years teaching Primary Math. Previously a MOE teacher."
      philosophy="Every child learns differently. My role is to inspire curiosity and build confidence."
    />
    <TeacherProfile
      name="Teacher Peng Rong"
      :photo="photoPengRong"
      experience="Specialized in Secondary Science and Math. Worked with over 200 students."
      philosophy="I focus on teaching from first principles so students understand 'why', not just 'what'."
      :reverse-layout="true"
    />
  </section>
</template>

<script setup>
import TeacherProfile from './TeacherProfile.vue'
import photoKaren from '@/assets/teacherkaren.JPG'
import photoPengRong from '@/assets/teacherpengrong.JPG'
</script>

<style scoped>
.teachers {
  padding: 2rem;
  background-color: #f6f4fd;
  text-align: center;
}

.teachers h2 {
  font-size: 2.5rem;
  color: #4c1d95;
  margin-bottom: 3rem;
  font-weight: 800;
}
</style>