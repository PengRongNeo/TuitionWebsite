<template>
  <footer id="footer" class="footer section">
    <div class="container">
      <h2 class="section-title">📍 Find Us (2 mins from Pioneer MRT)</h2>
      
      <div class="footer-content">
        <!-- Left: Google Map -->
        <div class="map-container">
          <div class="map-card">
            <div class="map-header">
              <div class="map-icon">🗺️</div>
              <h3 class="map-title">Our Location (Beside Pioneer MRT)</h3>
            </div>
            <div class="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.732233662056!2d103.69308367526762!3d1.3369130616166736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f6ab39099ed%3A0x9fdb80edecd31bd2!2sBlk%20986C%20Jurong%20West%20St%2093!5e0!3m2!1sen!2ssg!4v1750078540730!5m2!1sen!2ssg"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Tuition @ Pioneer Location"
              ></iframe>
            </div>
            <div class="address-info">
              <p class="address">Blk 986C Jurong West St 93</p>
              <p class="area">Jurong West, Singapore</p>
            </div>
          </div>
        </div>

        <!-- Right: Contact Info -->
        <div class="contact-container">
          <div class="contact-card">
            <div class="contact-header">
              <div class="contact-icon">📞</div>
              <h3 class="contact-title">Contact Us</h3>
            </div>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-label">Teacher Karen</div>
                <a href="tel:+6591850641" class="contact-phone">9185 0641</a>
              </div>
              
              <div class="contact-item">
                <div class="contact-label">Teacher Peng Rong</div>
                <a href="tel:+6596508879" class="contact-phone">9650 8879</a>
              </div>
            </div>
            
            <div class="whatsapp-section">
              <div class="whatsapp-header">
                <div class="whatsapp-icon">💬</div>
                <span class="whatsapp-label">Scan to WhatsApp</span>
              </div>
              <div class="qr-container">
                <img :src="whatsappQR" alt="WhatsApp QR Code" class="qr-code" />
                <div class="qr-overlay">
                  <span class="qr-text">Scan Me!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-info">
          <p class="footer-text">© 2024 Tuition @ Pioneer. All rights reserved.</p>
          <p class="footer-text">Quality education for confident learners.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import whatsappQR from '@/assets/whatsappQR.jpeg'
</script>

<style scoped>
.footer {
  background: var(--background-secondary);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%);
  z-index: -1;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-top: var(--spacing-3xl);
}

.map-container {
  position: relative;
}

.map-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.map-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.map-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.map-icon {
  font-size: 1.5rem;
}

.map-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.map-wrapper {
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.map-wrapper iframe {
  width: 100%;
  height: 300px;
  border: none;
  display: block;
}

.address-info {
  text-align: center;
}

.address {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.area {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.contact-container {
  position: relative;
}

.contact-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  height: 100%;
  transition: all var(--transition-normal);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.contact-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.contact-details {
  margin-bottom: var(--spacing-2xl);
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--background-accent);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.contact-item:hover {
  background: var(--primary-color);
  color: white;
}

.contact-item:hover .contact-label,
.contact-item:hover .contact-phone {
  color: white;
}

.contact-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.contact-phone {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.contact-phone:hover {
  color: var(--primary-color);
}

.whatsapp-section {
  text-align: center;
}

.whatsapp-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.whatsapp-icon {
  font-size: 1.2rem;
}

.whatsapp-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.qr-container {
  position: relative;
  display: inline-block;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.qr-container:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.qr-code {
  width: 150px;
  height: 150px;
  object-fit: cover;
  display: block;
}

.qr-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(37, 99, 235, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.qr-container:hover .qr-overlay {
  opacity: 1;
}

.qr-text {
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.footer-bottom {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-text {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-2xl);
  }

  .map-card,
  .contact-card {
    padding: var(--spacing-xl);
  }

  .map-wrapper iframe {
    height: 250px;
  }

  .contact-item {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }

  .qr-code {
    width: 120px;
    height: 120px;
  }

  .footer-bottom {
    margin-top: var(--spacing-2xl);
    padding-top: var(--spacing-xl);
  }
}

@media (max-width: 480px) {
  .map-card,
  .contact-card {
    padding: var(--spacing-lg);
  }

  .map-wrapper iframe {
    height: 200px;
  }

  .qr-code {
    width: 100px;
    height: 100px;
  }
}
</style>
