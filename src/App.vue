<script setup>
import TheFooter from '@/components/organisms/TheFooter.vue';
import TheNavbar from '@/components/organisms/TheNavbar.vue';
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased text-foreground">
    <TheNavbar />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
