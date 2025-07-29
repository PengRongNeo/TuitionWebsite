<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo">Tuition @ Pioneer 🎓</div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <a href="#teachers">Teachers</a>
      <a href="#classes">Classes</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#footer">Contact</a>
      <a href="#" @click.prevent="showTerms = true">Cancellation Policy</a>
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
      <a href="#gallery" @click="toggleMenu">Sign Up</a>
      <a href="#teachers" @click="toggleMenu">Teachers</a>
      <a href="#classes" @click="toggleMenu">Classes</a>
      <a href="#testimonials" @click="toggleMenu">Testimonials</a>
      <a href="#footer" @click="toggleMenu">Contact</a>
      <a href="#" @click.prevent="openTermsMobile">Cancellation Policy</a>
    </div>

    <!-- Terms Popup -->
    <div v-if="showTerms" class="terms-popup">
      <div class="bubble">
        <button class="close-btn" @click="closeTerms">×</button>
        <p>
          📝 <strong>Cancellation Policy for Lessons</strong><br><br>
          Cancellation of lessons should be <strong>12 hours in advance</strong>.<br><br>
          If the student is sick and cannot attend, please provide an MC. Otherwise, <strong>last minute cancellations will be charged the full amount.</strong><br><br>
          Alternatively, please arrange another day for a make-up lesson.<br><br>
          Thank you for your understanding 🙏🏻
        </p>
      </div>
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

const showTerms = ref(false)
const closeTerms = () => (showTerms.value = false)
const openTermsMobile = () => {
  showTerms.value = true
  menuOpen.value = false
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

header.scrolled {
  opacity: 0.95;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #111;
}

.desktop-nav {
  display: flex;
  gap: 2rem;
}

.desktop-nav a {
  position: relative;
  text-decoration: none;
  color: #111;
  font-weight: 600;
  padding-bottom: 4px;
  transition: color 0.3s;
}

.desktop-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #111;
  transition: width 0.3s ease-in-out;
}

.desktop-nav a:hover::after {
  width: 100%;
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
  background-color: white;
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

.terms-popup {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1050;
  display: flex;
  justify-content: flex-end;
}

.bubble {
  max-width: 300px;
  background: #fff7dd;
  color: #333;
  font-size: 0.95rem;
  padding: 1rem 1.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif;
}

.bubble::after {
  content: '';
  position: absolute;
  top: 10px;
  right: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent transparent #fff7dd;
}

.bubble .close-btn {
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 1.2rem;
  background: none;
  border: none;
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
