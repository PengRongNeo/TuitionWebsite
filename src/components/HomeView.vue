<template>
  <div>
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
import Navbar from '@/components/NavBar.vue'
import Gallery from '@/components/Gallery.vue'
import Teachers from '@/components/Teachers.vue'
import ClassList from '@/components/ClassList.vue'
import Testimonials from '@/components/Testimonials.vue'
import FooterSection from '@/components/FooterSection.vue'
import WhatsAppButton from '@/components/WhatsappButton.vue'
import ProudStudents from './ProudStudents.vue'
</script>
