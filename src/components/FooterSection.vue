<template>
  <footer id="footer">
    <h2>Find Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE"></iframe>
    <h3>Contact Us</h3>
    <p>Phone: 9876 5432</p>
    <p>Scan to WhatsApp: <img :src="whatsappQR" alt="WhatsApp QR" width="150" /></p>
  </footer>
</template>

<script setup>
import whatsappQR from '@/assets/whatsappQR.jpeg'
</script>

<style scoped>
footer {
  background: #f4f4f4;
  padding: 2rem;
}
iframe {
  width: 100%;
  height: 300px;
  border: none;
}
</style>
