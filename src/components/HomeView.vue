<template>
  <div>
    <Navbar />
    <main id="main-content">
    <Gallery />
    <WhyChooseUs />
    <Teachers />
    <ClassList />
    <ProudStudents />
    <TestimonialsAndReviews />
    <TrustedSchools />
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import Gallery from '@/components/Gallery.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import Teachers from '@/components/Teachers.vue'
import ClassList from '@/components/ClassList.vue'
import TestimonialsAndReviews from '@/components/TestimonialsAndReviews.vue'
import FooterSection from '@/components/FooterSection.vue'
import WhatsAppButton from '@/components/WhatsappButton.vue'
import ProudStudents from './ProudStudents.vue'
import TrustedSchools from './TrustedSchools.vue'
</script>
