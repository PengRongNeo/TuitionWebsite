<template>
  <div class="whatsapp-container">
    <!-- Welcome Popup -->
    <div v-if="showPopup" :class="['welcome-popup', { 'popup-hidden': isScrolling }]" @click="closePopup">
      <div class="chat-bubble" @click.stop>
        <div class="chat-header">
          <div class="chat-logo">
            <span class="graduation-cap">🎓</span>
            <span class="logo-text">Tuition @ Pioneer</span>
          </div>
          <button class="chat-close" @click="closePopup">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="chat-message">
          <p>Hi Parents, feel free to let us know if you have any questions. We are here to help 😃 </p>
        </div>
        <div class="chat-pointer"></div>
      </div>
    </div>


    
    <!-- WhatsApp Button -->
    <button
      class="whatsapp-button"
      @click="showWelcomePopup"
      aria-label="Contact us on WhatsApp"
    >
      <div class="whatsapp-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </div>
      <div class="whatsapp-tooltip">
        <span>Chat with us!</span>
        <div class="tooltip-arrow"></div>
      </div>
      <div class="pulse-ring"></div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showPopup = ref(false)
const isScrolling = ref(false)
let scrollTimeout = null

const showWelcomePopup = () => {
  // Directly open WhatsApp when button is clicked
  const whatsappUrl = "https://wa.me/6591850641?text=Hi%20Teacher%20Karen%2C%20I%20would%20like%20to%20ask%20about%20tuition%20for%20my%20child."
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

const closePopup = () => {
  showPopup.value = false
}

const openWhatsApp = () => {
  const whatsappUrl = "https://wa.me/6591850641?text=Hi%20Teacher%20Karen%2C%20I%20would%20like%20to%20ask%20about%20tuition%20for%20my%20child."
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  closePopup()
}

const handleScroll = () => {
  // Set scrolling state
  isScrolling.value = true
  
  // Clear existing timeout
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  
  // Set timeout to detect when scrolling stops
  scrollTimeout = setTimeout(() => {
    isScrolling.value = false
  }, 150) // Wait 150ms after scrolling stops
}

// Show popup automatically when component mounts (every refresh)
onMounted(() => {
  // Show popup after a short delay on every page load
  setTimeout(() => {
    showPopup.value = true
  }, 2000) // 2 second delay
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  // Clean up scroll event listener
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<style scoped>
.whatsapp-container {
  position: relative;
}

.whatsapp-button {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  z-index: 10000;
  transition: all var(--transition-normal);
  text-decoration: none;
  overflow: visible;
  animation: float 3s ease-in-out infinite;
  border: none;
  cursor: pointer;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-xl);
  background: linear-gradient(135deg, #128C7E, #25D366);
}

.whatsapp-button:active {
  transform: scale(0.95);
}

.whatsapp-icon {
  position: relative;
  z-index: 2;
}

.whatsapp-icon svg {
  width: 28px;
  height: 28px;
  color: white;
}

.whatsapp-tooltip {
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--text-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.whatsapp-tooltip .tooltip-arrow {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid var(--text-primary);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.whatsapp-button:hover .whatsapp-tooltip {
  opacity: 1;
  visibility: visible;
  right: 80px;
}

.pulse-ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #25D366;
  border-radius: 50%;
  animation: pulse 2s infinite;
  opacity: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 55px;
    height: 55px;
    z-index: 10000;
  }

  .whatsapp-icon svg {
    width: 24px;
    height: 24px;
  }

  .whatsapp-tooltip {
    display: none;
  }
}

@media (max-width: 480px) {
  .whatsapp-button {
    width: 50px;
    height: 50px;
  }

  .whatsapp-icon svg {
    width: 22px;
    height: 22px;
  }
}

/* Welcome Popup Styles */
.welcome-popup {
  position: fixed;
  bottom: 120px;
  right: 30px;
  z-index: 99999;
  animation: slideInChat 0.3s ease-out;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.welcome-popup.popup-hidden {
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
}

.chat-bubble {
  background: white;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  max-width: 280px;
  width: 100%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.chat-logo {
  display: flex;
  align-items: center;
  gap: 6px;
}

.graduation-cap {
  font-size: 16px;
}

.logo-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  font-family: var(--font-family-display);
}

.chat-close {
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--text-secondary);
  border-radius: 50%;
}

.chat-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: var(--text-primary);
}

.chat-message {
  padding: 12px 16px 16px 16px;
}

.chat-message p {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-primary);
  margin: 0;
  font-weight: 400;
}

.chat-pointer {
  position: absolute;
  bottom: -8px;
  right: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInChat {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mobile Responsive for Chat Bubble */
@media (max-width: 768px) {
  .welcome-popup {
    bottom: 100px;
    right: 20px;
  }
  
  .chat-bubble {
    max-width: 250px;
  }
  
  .chat-message p {
    font-size: 13px;
  }
  
  .logo-text {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .welcome-popup {
    bottom: 90px;
    right: 15px;
  }
  
  .chat-bubble {
    max-width: 220px;
  }
  
  .chat-header {
    padding: 10px 14px 6px 14px;
  }
  
  .chat-message {
    padding: 10px 14px 14px 14px;
  }
  
  .chat-message p {
    font-size: 12px;
  }
  
  .logo-text {
    font-size: 12px;
  }
}
</style>
