<template>
  <div id="app">
    <NavBar />
    <RouterView />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import WhatsAppButton from '@/components/WhatsappButton.vue'
</script>
