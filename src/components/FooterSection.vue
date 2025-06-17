<template>
  <footer id="footer" class="footer">
    <h2 class="footer-title">Find Us</h2>
    <div class="footer-content">
      <!-- Left: Google Map -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.732233662056!2d103.69308367526762!3d1.3369130616166736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f6ab39099ed%3A0x9fdb80edecd31bd2!2sBlk%20986C%20Jurong%20West%20St%2093!5e0!3m2!1sen!2ssg!4v1750078540730!5m2!1sen!2ssg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Right: Contact Info -->
      <div class="contact-container">
        <h3>📞 Contact Us</h3>
        <p class="phone">9185 0641 (Teacher Karen)</p>
        <p class="phone">9650 8879 (Teacher Peng Rong)</p>
        <p class="qr-label">Scan to WhatsApp:</p>
        <img :src="whatsappQR" alt="WhatsApp QR" class="qr-code" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import whatsappQR from '@/assets/whatsappQR.jpeg'
</script>

<style scoped>
.footer {
  padding: 3rem 2rem;
  color: #111;
  font-family: 'Comic Sans MS', 'Comic Neue', sans-serif;
}

.footer-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: stretch; /* Ensures map + card match in height */
}

.map-container {
  flex: 1 1 55%;
  min-width: 300px;
}

.map-container iframe {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  border: none;
}

.contact-container {
  flex: 1 1 35%;
  min-width: 260px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.contact-container h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.phone {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.qr-label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.qr-code {
  width: 120px;
  height: auto;
  border-radius: 8px;
}
</style>
