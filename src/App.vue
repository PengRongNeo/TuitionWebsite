<template>
  <div id="app">
    <Navbar />
    <Gallery />
    <Teachers />
    <ClassList />
    <Testimonials />
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
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsappButton.vue'
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #6f2cf4; /* global deep purple background */
  color: white;
  scroll-behavior: smooth;
}

a {
  color: inherit;
}
</style>
