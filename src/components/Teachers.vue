<template>
  <section id="teachers" class="teachers">
    <h2>Our Teachers 👩🏻‍🏫 </h2>

    <TeacherProfile
      name="Teacher Karen 👩🏻‍🏫"
      :photo="photoKaren"
      :experienceList="[
        'Full Time Educator',
        '5 Years of Teaching Experience',
        'Primary Level: English, Math and Science',
        'Secondary Level: Math and Science',
        'Helped over 120 students improve their grades'
      ]"
      philosophy="&quot;I believe in being firm and focused during lessons so every student stays on track — but outside of class, I connect with my students like a friend. Beyond just academics, I’m always here to listen, encourage, and help them grow with confidence.&quot;"
      animationClass="slide-in-left"
    />

    <TeacherProfile
      name="Teacher Peng Rong 🧑🏻‍🏫"
      :photo="photoPengRong"
      :experienceList="[
        'Part Time Tutor (NUS Business Analytics Undergraduate)',
        '3 Years of Teaching Experience',
        'Upper Secondary Level: Math, Amath, Chemistry, Physics',
        'Helped over 40 students improve their grades'
      ]"
      philosophy="&quot;I focus on delivering concepts in a way that’s easy to understand — using real-life examples and analogies so it clicks. Once students truly get it, it sticks.&quot;"
      :reverse-layout="true"
      animationClass="slide-in-right"
    />
  </section>
</template>


<script setup>
import TeacherProfile from './TeacherProfile.vue'
import photoKaren from '@/assets/teacherkaren.jpeg'
import photoPengRong from '@/assets/teacherpengrong.jpeg'
</script>

<style scoped>
.teachers {
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
}

.teachers h2 {
  font-size: 2.8rem;
  color: #111;
  margin-bottom: 3rem;
  font-weight: 900;
}
</style>
