<template>
  <header :class="{ scrolled: isScrolled }" class="navbar">
    <div class="container">
      <button class="logo" @click="goHomeLogo">
        <img :src="brandLogo" :alt="brandLogoAlt" class="logo-image" />
        <span class="logo-text">Tuition @ Pioneer</span>
      </button>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav" aria-label="Primary">
        <a href="/#gallery" @click.prevent="goToSection('gallery')" class="nav-link">Home</a>
        <a href="/#teachers" @click.prevent="goToSection('teachers')" class="nav-link">Teachers</a>
        <div
          ref="classesNavRef"
          class="nav-item-dropdown"
          :class="{ 'nav-item-dropdown--open': classesDropdownOpen }"
          @mouseenter="openClassesDropdown"
          @mouseleave="closeClassesDropdown"
          @focusin="openClassesDropdown"
          @focusout="onClassesFocusOut"
        >
          <div class="nav-item-dropdown__trigger">
            <a
              href="/#classes"
              class="nav-link nav-link--classes-main"
              @click.prevent="goToSection('classes')"
            >Classes</a>
            <button
              type="button"
              class="nav-dropdown-chevron-btn"
              aria-label="Show class programme pages"
              :aria-expanded="classesDropdownOpen"
              aria-haspopup="true"
              @click.stop="toggleClassesDropdown"
            >
              <svg class="nav-dropdown-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div
            v-show="classesDropdownOpen"
            class="nav-dropdown-panel"
            role="menu"
            aria-label="Class programmes"
          >
            <template v-for="(item, index) in classesDropdownItems" :key="item.type === 'heading' ? `h-${index}` : item.to">
              <p v-if="item.type === 'heading'" class="nav-dropdown-heading" role="presentation">
                {{ item.label }}
              </p>
              <RouterLink
                v-else
                :to="item.to"
                class="nav-dropdown-link"
                role="menuitem"
                @click="onClassesProgrammeNavigate"
              >
                {{ item.label }}
              </RouterLink>
            </template>
          </div>
        </div>
        <a href="/#results" @click.prevent="goToSection('results')" class="nav-link">Results</a>
        <a href="/#reviews" @click.prevent="goToSection('reviews')" class="nav-link">Reviews</a>
        <a href="/#find-us" @click.prevent="goToSection('find-us')" class="nav-link">Find Us</a>
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
          <nav class="mobile-nav-links" aria-label="Primary mobile">
            <!-- <a href="#gallery" @click.prevent="scrollToSectionMobile('gallery')" class="mobile-nav-link">Sign Up</a> -->
            <a href="/#gallery" @click.prevent="goToSectionMobile('gallery')" class="mobile-nav-link">Home</a>
            <a href="/#teachers" @click.prevent="goToSectionMobile('teachers')" class="mobile-nav-link">Teachers</a>
            <div class="mobile-nav-classes">
              <div class="mobile-nav-classes__row">
                <a
                  href="/#classes"
                  class="mobile-nav-link mobile-nav-link--classes-main"
                  @click.prevent="goToSectionMobile('classes')"
                >Classes</a>
                <button
                  type="button"
                  class="mobile-nav-submenu-toggle"
                  :aria-expanded="classesMobileOpen"
                  aria-label="Expand class programme links"
                  @click.stop="classesMobileOpen = !classesMobileOpen"
                >
                  <svg
                    class="mobile-nav-submenu-chevron"
                    :class="{ 'mobile-nav-submenu-chevron--open': classesMobileOpen }"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <div v-show="classesMobileOpen" class="mobile-nav-submenu">
                <template v-for="(item, index) in classesDropdownItems" :key="item.type === 'heading' ? `mh-${index}` : item.to">
                  <p v-if="item.type === 'heading'" class="mobile-nav-submenu-heading">{{ item.label }}</p>
                  <RouterLink
                    v-else
                    :to="item.to"
                    class="mobile-nav-sublink"
                    @click="onClassesProgrammeNavigate"
                  >
                    {{ item.label }}
                  </RouterLink>
                </template>
              </div>
            </div>
            <a href="/#results" @click.prevent="goToSectionMobile('results')" class="mobile-nav-link">Results</a>
            <a href="/#reviews" @click.prevent="goToSectionMobile('reviews')" class="mobile-nav-link">Reviews</a>
            <a href="/#find-us" @click.prevent="goToSectionMobile('find-us')" class="mobile-nav-link">Find Us</a>
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
import { useRoute, useRouter } from 'vue-router'
import { brandLogo, brandLogoAlt } from '@/constants/brand'
import { CLASSES_NAV_DROPDOWN } from '@/config/subjectRoutes'

const route = useRoute()
const router = useRouter()

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const classesDropdownItems = CLASSES_NAV_DROPDOWN
const classesDropdownOpen = ref(false)
const classesMobileOpen = ref(false)
const classesNavRef = ref(null)

const openClassesDropdown = () => {
  classesDropdownOpen.value = true
}

const closeClassesDropdown = () => {
  classesDropdownOpen.value = false
}

const toggleClassesDropdown = () => {
  classesDropdownOpen.value = !classesDropdownOpen.value
}

const onClassesFocusOut = (event) => {
  if (classesNavRef.value?.contains(event.relatedTarget)) return
  closeClassesDropdown()
}

const onClassesProgrammeNavigate = () => {
  closeClassesDropdown()
  classesMobileOpen.value = false
  menuOpen.value = false
}

const onDocumentKeydown = (event) => {
  if (event.key === 'Escape') {
    if (classesDropdownOpen.value) closeClassesDropdown()
    if (classesMobileOpen.value) classesMobileOpen.value = false
  }
}

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
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', onDocumentKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', onDocumentKeydown)
})

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
    const offset = 50
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}

const goHomeLogo = () => {
  if (route.path === '/') {
    scrollToSection('gallery')
  } else {
    router.push('/')
  }
}

const goToSection = (sectionId) => {
  if (route.path === '/') {
    scrollToSection(sectionId)
  } else {
    router.push({ path: '/', hash: `#${sectionId}` })
  }
}

const goToSectionMobile = (sectionId) => {
  menuOpen.value = false
  if (route.path === '/') {
    setTimeout(() => scrollToSection(sectionId), 100)
  } else {
    router.push({ path: '/', hash: `#${sectionId}` })
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
  background: rgba(255, 153, 153, 0.1);
  transform: translateY(-1px);
}

.logo:active {
  transform: translateY(0);
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
  flex-shrink: 0;
}

.logo-text {
  font-family: var(--font-family-display);
  background: linear-gradient(135deg, var(--color-coral), var(--color-blue), var(--color-yellow));
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
  color: var(--color-coral);
  background: rgba(255, 153, 153, 0.1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-coral), var(--color-blue), var(--color-yellow));
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
  color: var(--color-yellow);
  background: rgba(255, 215, 0, 0.15);
}

.nav-item-dropdown {
  position: relative;
}

.nav-item-dropdown__trigger {
  display: flex;
  align-items: center;
}

.nav-link--classes-main {
  padding-right: var(--spacing-xs);
}

.nav-dropdown-chevron-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs);
  margin-left: -4px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav-dropdown-chevron-btn:hover,
.nav-item-dropdown--open .nav-dropdown-chevron-btn {
  color: var(--color-coral);
  background: rgba(255, 153, 153, 0.1);
}

.nav-dropdown-chevron-btn:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
}

.nav-dropdown-chevron {
  transition: transform var(--transition-fast);
}

.nav-item-dropdown--open .nav-dropdown-chevron {
  transform: rotate(180deg);
}

.nav-dropdown-panel {
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 8px;
  min-width: 260px;
  z-index: 1100;
}

.nav-dropdown-heading {
  margin: var(--spacing-sm) 0 var(--spacing-xs);
  padding: 0 var(--spacing-xs);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-light);
}

.nav-dropdown-heading:first-child {
  margin-top: 0;
}

.nav-dropdown-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav-dropdown-link + .nav-dropdown-link {
  margin-top: var(--spacing-xs);
}

.nav-dropdown-link:hover {
  color: var(--color-coral);
  background: rgba(255, 153, 153, 0.08);
}

.nav-dropdown-link:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
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
  background: rgba(255, 215, 0, 0.15);
  color: var(--secondary-color);
}

.mobile-nav-classes__row {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid var(--border-color);
}

.mobile-nav-link--classes-main {
  flex: 1;
  border-bottom: none;
}

.mobile-nav-submenu-toggle {
  flex-shrink: 0;
  width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
}

.mobile-nav-submenu-toggle:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: -2px;
}

.mobile-nav-submenu-chevron {
  transition: transform var(--transition-fast);
}

.mobile-nav-submenu-chevron--open {
  transform: rotate(180deg);
}

.mobile-nav-submenu {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-md);
  background: var(--background-accent);
  border-bottom: 1px solid var(--border-color);
}

.mobile-nav-submenu-heading {
  margin: var(--spacing-sm) var(--spacing-md) var(--spacing-xs);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-light);
}

.mobile-nav-sublink {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: var(--radius-md);
}

.mobile-nav-sublink:hover {
  background: white;
  color: var(--primary-color);
}

.mobile-nav-sublink:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
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
  background: linear-gradient(135deg, var(--color-coral), var(--color-blue), var(--color-yellow));
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
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 153, 51, 0.1));
  border-color: var(--color-yellow);
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
  .logo-image {
    height: 34px;
  }

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
