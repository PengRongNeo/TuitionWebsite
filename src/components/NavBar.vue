<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo">Tuition @ Pioneer</div>
    <nav>
      <a href="#gallery">Gallery</a>
      <a href="#teachers">Teachers</a>
      <a href="#classes">Classes</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#footer">Contact</a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: transparent;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

header.scrolled {
  background: white;
  color: #6f2cf4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.logo {
  font-size: 2rem;
  font-weight: 800;
  color: inherit;
  transition: color 0.3s ease;
}

nav a {
  margin-left: 2rem;
  font-size: 1.15rem;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #854dff;
}

nav a::after {
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background-color: #854dff;
  transition: width 0.3s;
  position: absolute;
  bottom: -4px;
  left: 0;
}

nav a:hover::after {
  width: 100%;
}
</style>
