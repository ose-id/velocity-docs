<script setup>
import { useWindowScroll } from '@vueuse/core';
import { computed } from 'vue';
import LightRays from '@/components/molecules/LightRays.vue';
import Button from '@/components/ui/Button.vue';
import { useGithubRelease } from '@/composables/useGithubRelease';

const { downloadUrl } = useGithubRelease();
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
  <section id="hero" class="relative w-full py-24 md:py-32 pb-20 overflow-visible">
    <div class="absolute -top-16 left-0 right-0 h-[calc(100%+4rem)] pointer-events-none z-0">
      <LightRays
        rays-origin="top-center"
        rays-color="#a3a3a3"
        :rays-speed="1.5"
        :light-spread="0.8"
        :ray-length="2.0"
        :follow-mouse="true"
        :mouse-influence="0.1"
        :noise-amount="0.1"
        :distortion="0.05"
      />
    </div>
    <div class="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center gap-10">
      <div>
        <img src="/img/velocity-logo.svg" alt="Velocity Logo" class="h-16 w-auto mx-auto">
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight w-full max-w-none leading-none">
        Experience Speed with the <span class="text-primary">Next-Generation</span> Git Tool
      </h1>
      <div class="flex flex-col sm:flex-row gap-4">
        <a :href="downloadUrl" download>
          <Button size="lg" class="h-14 px-8 text-lg rounded-full bg-neutral-950 text-white hover:bg-neutral-900 border border-white/10 transition-all cursor-pointer">
            <svg class="mr-3 h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3.44L9.366 2.126V11.53H0V3.44zm10.749-1.393L24 0v11.53H10.749V2.047zm0 10.906H24V24l-13.251-1.838v-9.21zM0 12.953h9.366v7.864L0 19.53v-6.577z" />
            </svg>
            Download for Windows
          </Button>
        </a>
        <a href="https://github.com/ose-id/velocity" target="_blank">
          <Button variant="outline" size="lg" class="h-14 px-8 text-lg rounded-full cursor-pointer">
            View on GitHub
          </Button>
        </a>
      </div>
      <p class="text-xs text-muted-foreground mt-2">
        Requires Windows 10 or later
      </p>
    </div>
    <div class="relative z-10 container mx-auto px-4 md:px-6 mt-16">
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
          <img src="/img/hero.png" alt="Velocity Application Screenshot" class="w-full h-auto block">
        </div>
      </div>
    </div>
  </section>
</template>
