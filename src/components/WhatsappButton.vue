<template>
  <div class="whatsapp-container">
    <!-- Welcome Popup -->
    <div v-if="showPopup" class="welcome-popup" @click="closePopup">
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
        <img src="@/assets/whatsapp-icon.svg" alt="WhatsApp" />
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
import { ref, onMounted } from 'vue'

const showPopup = ref(false)

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

// Show popup automatically when component mounts (every refresh)
onMounted(() => {
  // Show popup after a short delay on every page load
  setTimeout(() => {
    showPopup.value = true
  }, 2000) // 2 second delay
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

.whatsapp-icon img {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
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

  .whatsapp-icon img {
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

  .whatsapp-icon img {
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
