<template>
  <header :class="{ scrolled: isScrolled }" class="navbar">
    <div class="container">
      <button class="logo" @click="scrollToSection('gallery')">
        <span class="logo-icon">🎓</span>
        <span class="logo-text">Tuition @ Pioneer</span>
      </button>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <a href="#teachers" @click.prevent="scrollToSection('teachers')" class="nav-link">Teachers</a>
        <a href="#classes" @click.prevent="scrollToSection('classes')" class="nav-link">Classes</a>
        <a href="#testimonials" @click.prevent="scrollToSection('testimonials')" class="nav-link">Testimonials</a>
        <a href="#footer" @click.prevent="scrollToSection('footer')" class="nav-link">Contact Us</a>
        <a href="#" @click.prevent="showTerms = true" class="nav-link policy-link">Cancellation Policy</a>
      </nav>

      <!-- Mobile Hamburger Icon -->
      <div class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Mobile Nav Overlay -->
      <div class="mobile-nav" v-if="menuOpen" @click="closeMenuOnOutsideClick">
        <div class="mobile-nav-content" @click.stop>
          <!-- Simple Header -->
          <div class="mobile-nav-header">
            <div class="header-content">
              <span class="logo-text">Menu</span>
              <button class="close-btn" @click="toggleMenu">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Simple Navigation Links -->
          <nav class="mobile-nav-links">
            <a href="#gallery" @click.prevent="scrollToSectionMobile('gallery')" class="mobile-nav-link">Sign Up</a>
            <a href="#teachers" @click.prevent="scrollToSectionMobile('teachers')" class="mobile-nav-link">Teachers</a>
            <a href="#classes" @click.prevent="scrollToSectionMobile('classes')" class="mobile-nav-link">Classes</a>
            <a href="#testimonials" @click.prevent="scrollToSectionMobile('testimonials')" class="mobile-nav-link">Testimonials</a>
            <a href="#footer" @click.prevent="scrollToSectionMobile('footer')" class="mobile-nav-link">Contact</a>
            <a href="#" @click.prevent="openTermsMobile" class="mobile-nav-link policy-link">Cancellation Policy</a>
          </nav>
        </div>
      </div>

      <!-- Terms Popup -->
      <div v-if="showTerms" class="terms-popup" @click="closeTerms">
        <div class="terms-content" @click.stop>
          <div class="terms-header">
            <div class="terms-icon">📋</div>
            <div class="terms-title-section">
              <h3>Cancellation Policy</h3>
              <p class="terms-subtitle"></p>
            </div>
            <button class="close-btn" @click="closeTerms" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
                      <div class="terms-body">
              <div class="policy-section">
                <div class="policy-grid">
                <div class="policy-item">
                  <div class="policy-icon">⏰</div>
                  <div class="policy-content">
                    <h5>Advance Notice Required</h5>
                    <p>Cancellation of lessons should be <strong>12 hours in advance</strong></p>
                  </div>
                </div>
                
                <div class="policy-item">
                  <div class="policy-icon">🏥</div>
                  <div class="policy-content">
                    <h5>Medical Certificate</h5>
                    <p>If the student is sick and cannot attend, please provide an MC</p>
                  </div>
                </div>
                
                <div class="policy-item warning">
                  <div class="policy-icon">⚠️</div>
                  <div class="policy-content">
                    <h5>Last Minute Cancellations</h5>
                    <p><strong>Last minute cancellations will be charged the full amount</strong></p>
                  </div>
                </div>
                
                <div class="policy-item">
                  <div class="policy-icon">🔄</div>
                  <div class="policy-content">
                    <h5>Make-up Lessons</h5>
                    <p>For missed lessons, please arrange another day for make-up.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="terms-footer">
              <div class="footer-icon">🙏🏻</div>
              <p>Thank you for your understanding and cooperation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const closeMenuOnOutsideClick = (event) => {
  // Only close if clicking on the overlay, not the content
  if (event.target.classList.contains('mobile-nav')) {
    menuOpen.value = false
  }
}

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const showTerms = ref(false)
const closeTerms = () => {
  console.log('Close terms clicked!')
  showTerms.value = false
  console.log('showTerms value:', showTerms.value)
}
const openTermsMobile = () => {
  showTerms.value = true
  menuOpen.value = false
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 50 // Offset in pixels from the top
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const scrollToSectionMobile = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbarHeight = 80 // Approximate mobile navbar height
    const elementPosition = element.offsetTop - navbarHeight
    
    // Close menu first
    menuOpen.value = false
    
    // Wait a bit for menu to close, then scroll
    setTimeout(() => {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }, 100)
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  font-family: var(--font-family-primary);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-lg);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.logo:hover {
  background: rgba(37, 99, 235, 0.05);
  transform: translateY(-1px);
}

.logo:active {
  transform: translateY(0);
}

.logo-icon {
  font-size: 1.5rem;
}

.logo-text {
  font-family: var(--font-family-display);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(37, 99, 235, 0.05);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: all var(--transition-normal);
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.policy-link {
  color: var(--secondary-color);
  font-weight: 600;
}

.policy-link:hover {
  color: var(--secondary-color);
  background: rgba(245, 158, 11, 0.1);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.hamburger:hover {
  background: var(--background-accent);
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: all var(--transition-normal);
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-nav {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: transparent !important;
  z-index: 99999 !important;
  animation: fadeIn var(--transition-normal);
}

.mobile-nav-content {
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  width: 45vw !important;
  max-width: 240px !important;
  height: 100vh !important;
  background: white !important;
  box-shadow: -3px 0 15px rgba(0, 0, 0, 0.08) !important;
  animation: slideInRight var(--transition-normal);
  border-left: 1px solid var(--border-color) !important;
  overflow-y: auto !important;
  z-index: 100000 !important;
}

.mobile-nav-header {
  background: #f5f5f5;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.mobile-nav-links {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  background: white;
}

.mobile-nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  border-bottom: 1px solid var(--border-color);
}

.mobile-nav-link:hover {
  background: var(--background-accent);
  color: var(--primary-color);
}

.mobile-nav-link.policy-link {
  color: var(--secondary-color);
  font-weight: 600;
}

.mobile-nav-link.policy-link:hover {
  background: rgba(245, 158, 11, 0.1);
  color: var(--secondary-color);
}

.close-btn {
  background: rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  z-index: 1051;
  position: relative;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.2);
  color: var(--text-primary);
  transform: scale(1.05);
}

.terms-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  animation: fadeIn var(--transition-normal);
}

.terms-content {
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  animation: slideUp var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  margin: auto;
}

.terms-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 24px 24px 0 0;
  position: relative;
  overflow: hidden;
  gap: var(--spacing-lg);
  z-index: 1051;
}

.terms-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.terms-icon {
  font-size: 2rem;
  margin-right: var(--spacing-lg);
  flex-shrink: 0;
  margin-top: var(--spacing-sm);
}

.terms-title-section {
  flex: 1;
  min-width: 0;
}

.terms-header h3 {
  margin: var(--spacing-sm) 0 var(--spacing-sm) 0;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.terms-subtitle {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 400;
}

.terms-body {
  padding: var(--spacing-xl);
  background: white;
}

.policy-section {
  margin-bottom: var(--spacing-xl);
}



.policy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.policy-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--background-accent);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.policy-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.policy-item.warning {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-color: #f59e0b;
}

.policy-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.policy-content h5 {
  margin: 0 0 var(--spacing-sm) 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.policy-content p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
}

.terms-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, var(--background-accent), white);
  border-top: 1px solid var(--border-color);
  border-radius: 0 0 24px 24px;
  text-align: center;
}

.footer-icon {
  font-size: 1.5rem;
}

.terms-footer p {
  margin: 0;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
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
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav-content {
    width: 280px;
    height: 100%;
    max-width: 85vw;
  }

  .terms-popup {
    padding: var(--spacing-sm);
    align-items: flex-start;
    padding-top: var(--spacing-xl);
  }

  .terms-content {
    margin: 0;
    max-width: 100%;
    max-height: 90vh;
    border-radius: var(--radius-lg);
  }

  .terms-header {
    padding: var(--spacing-lg);
  }

  .terms-header h3 {
    font-size: 1.1rem;
  }

  .terms-body {
    padding: var(--spacing-lg);
  }

  .terms-body p {
    font-size: 0.9rem;
  }

  .terms-body li {
    font-size: 0.9rem;
  }
}
</style>
