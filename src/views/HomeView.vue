<script setup>
import TheFeatures from '@/components/organisms/TheFeatures.vue';
import TheFooter from '@/components/organisms/TheFooter.vue';
import TheHero from '@/components/organisms/TheHero.vue';
import TheHeroImage from '@/components/organisms/TheHeroImage.vue';
import TheNavbar from '@/components/organisms/TheNavbar.vue';
import TheTestimonials from '@/components/organisms/TheTestimonials.vue';
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased text-foreground">
    <TheNavbar />
    <TheHero />
    <TheHeroImage />
    <TheFeatures />
    <TheTestimonials />

    <TheFooter />
  </div>
</template>
