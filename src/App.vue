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
import ClassList from './components/ClassList.vue'
import Testimonials from './components/Testimonials.vue'
import ProudStudents from './components/ProudStudents.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsappButton.vue'
</script>

<style>
/* Modern Design System */
:root {
  /* Color Palette - From Gallery Highlights */
  --color-orange: #FF9933; /* quality */
  --color-coral: #FF9999; /* affordable - BASE COLOR */
  --color-blue: #99CCFF; /* improve */
  --color-yellow: #FFD700; /* confidence */
  
  /* Legacy support - Coral as base */
  --primary-color: #FF9999;
  --primary-dark: #FF8888;
  --secondary-color: #FFD700;
  --accent-color: #99CCFF;
  
  /* Text Colors */
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-light: #999999;
  
  /* Background Colors */
  --background-primary: #F8F7F5;
  --background-secondary: #FFFFFF;
  --background-accent: #F5F5F3;
  --border-color: #E5E5E3;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  /* Typography */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-display: 'Poppins', var(--font-family-primary);
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Global Reset & Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: var(--font-family-primary);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-primary);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography Scale */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-display);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
h4 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); }
h5 { font-size: 1.125rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family-primary);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-yellow), var(--color-orange));
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(255, 153, 51, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* Section Styles */
.section {
  padding: var(--spacing-3xl) 0;
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -var(--spacing-md);
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-coral), var(--color-orange), var(--color-blue), var(--color-yellow));
  border-radius: 2px;
}

/* Card Styles */
.card {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-xl);
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-sm { margin-bottom: var(--spacing-sm); }
.mb-md { margin-bottom: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }
.mb-xl { margin-bottom: var(--spacing-xl); }
.mb-2xl { margin-bottom: var(--spacing-2xl); }

.mt-sm { margin-top: var(--spacing-sm); }
.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }
.mt-xl { margin-top: var(--spacing-xl); }
.mt-2xl { margin-top: var(--spacing-2xl); }

/* App Container */
#app {
  position: relative;
  z-index: 0;
  background: var(--background-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .section {
    padding: var(--spacing-2xl) 0;
  }
  
  .card {
    padding: var(--spacing-lg);
  }
}

/* Animation Classes */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
