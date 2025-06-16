<template>
  <a
    href="https://wa.me/6591850641?text=Hi%2C%20I%20would%20like%20to%20have%20tuition%20for%20my%20son%2Fdaughter%20in%20Pri%2FSec%20XXX."
    class="fixed-whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="@/assets/whatsapp-icon.svg" alt="WhatsApp" />
  </a>
</template>

<style scoped>
.fixed-whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  z-index: 9999;
}

.fixed-whatsapp-button img {
  width: 28px;
  height: 28px;
}
</style>
