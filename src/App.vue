<template>
  <div id="app">
    <Navbar />
    <Gallery />
    <Teachers />
    <ClassList />
    <Testimonials />
    <ProudStudents />
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Navbar from './components/NavBar.vue'
import Gallery from './components/Gallery.vue'
import Teachers from './components/Teachers.vue'
import ClassList from './components/Classlist.vue'
import Testimonials from './components/Testimonials.vue'
import ProudStudents from './components/ProudStudents.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsappButton.vue'
</script>

<style>
/* Global Fixes */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
  max-width: 100vw;
}

/* App Container */
#app {
  position: relative;
  z-index: 0;
  background-image: url('@/assets/schoolbackground.jpg');
  background-repeat: repeat;
  background-size: 300px auto;
  background-attachment: fixed;
  color: #1e1e1e;
  overflow-x: hidden;
  max-width: 100vw;
}

/* Optional white overlay */
#app::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: -1;
  pointer-events: none;
}
</style>
