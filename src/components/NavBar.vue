<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo">Tuition @ Pioneer</div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <a href="#gallery">Sign Up</a>
      <a href="#teachers">Teachers</a>
      <a href="#classes">Classes</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#footer">Contact</a>
    </nav>

    <!-- Mobile Hamburger Icon -->
    <div class="hamburger" @click="toggleMenu">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </div>

    <!-- Mobile Nav Overlay -->
    <div class="mobile-nav" v-if="menuOpen">
      <button class="close-btn" @click="toggleMenu">×</button>
      <a href="#gallery" @click="toggleMenu">Gallery</a>
      <a href="#teachers" @click="toggleMenu">Teachers</a>
      <a href="#classes" @click="toggleMenu">Classes</a>
      <a href="#testimonials" @click="toggleMenu">Testimonials</a>
      <a href="#footer" @click="toggleMenu">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1.2rem 2rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
  font-family: 'Comic Sans MS', 'Comic Neue';
}

header.scrolled {
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.desktop-nav {
  display: flex;
  gap: 2rem;
}

.desktop-nav a {
  text-decoration: none;
  color: #111;
  font-weight: 600;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #111;
  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70vw;
  background-color: #fff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
}

.mobile-nav a {
  text-decoration: none;
  color: #111;
  font-size: 1.2rem;
  font-weight: 600;
}

.close-btn {
  font-size: 2rem;
  background: none;
  border: none;
  align-self: flex-end;
  cursor: pointer;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
