<script setup>
import { useWindowScroll } from '@vueuse/core';
import { computed } from 'vue';

const { y } = useWindowScroll();

const imageStyle = computed(() => {
  const startScale = 0.5;
  const endScale = 1;
  const scrollThreshold = 300;

  const progress = Math.min(Math.max(y.value / scrollThreshold, 0), 1);
  const scale = startScale + (endScale - startScale) * progress;

  return {
    transform: `scale(${scale})`,
    opacity: 0.5 + (progress * 0.5),
    transition: 'transform 0.1s linear',
  };
});
</script>

<template>
  <section class="container mx-auto px-4 md:px-6 pb-20">
    <div
      class="w-full max-w-5xl mx-auto overflow-hidden rounded-xl border bg-muted/50 shadow-xl"
      :style="imageStyle"
    >
      <div class="flex items-center gap-2 border-b bg-background/50 p-4 backdrop-blur">
        <div class="h-3 w-3 rounded-full bg-red-500" />
        <div class="h-3 w-3 rounded-full bg-yellow-500" />
        <div class="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div class="w-full bg-muted/50">
        <img src="/img/hero.webp" alt="Velocity Application Screenshot" class="w-full h-auto block">
      </div>
    </div>
  </section>
</template>
