<script setup>
import { useWindowScroll } from '@vueuse/core';
import { computed } from 'vue';
import DownloadDropdown from '@/components/molecules/DownloadDropdown.vue';
import LightRays from '@/components/molecules/LightRays.vue';
import TotalDownloads from '@/components/molecules/TotalDownloads.vue';
import Button from '@/components/ui/Button.vue';

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
        <img src="/img/velocity-logo.svg" alt="Velocity Logo" class="h-16 2k:h-24 4k:h-32 w-auto mx-auto" width="300" height="300">
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-8xl 2k:text-9xl 4k:text-[12rem] 2k:leading-tight font-extrabold tracking-tight w-full max-w-none leading-none">
        Experience Speed with the <span class="text-primary">Next-Generation</span> Git Tool
      </h1>
      <div class="flex flex-col sm:flex-row gap-4 2k:gap-8 4k:gap-12 2k:mt-10 4k:mt-20">
        <DownloadDropdown size="lg" btn-class="h-14 2k:h-20 4k:h-28 px-6 2k:px-10 4k:px-16 text-lg 2k:text-2xl 4k:text-4xl rounded-full" :show-icon="false">
          <svg class="mr-3 h-5 w-5 2k:h-8 2k:w-8 4k:h-12 4k:w-12 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3.44L9.366 2.126V11.53H0V3.44zm10.749-1.393L24 0v11.53H10.749V2.047zm0 10.906H24V24l-13.251-1.838v-9.21zM0 12.953h9.366v7.864L0 19.53v-6.577z" />
          </svg>
          Download for Windows
        </DownloadDropdown>
        <a href="https://github.com/ose-id/velocity" target="_blank">
          <Button variant="outline" size="lg" class="h-14 2k:h-20 4k:h-28 px-8 2k:px-12 4k:px-20 text-lg 2k:text-2xl 4k:text-4xl rounded-full cursor-pointer">
            View on GitHub
          </Button>
        </a>
      </div>
      <TotalDownloads class="2k:scale-125 4k:scale-150 2k:mt-6 4k:mt-12" />
      <p class="text-xs 2k:text-lg 4k:text-2xl text-muted-foreground mt-2 2k:mt-8 4k:mt-12">
        Currently available for Windows. Mac and Linux versions coming soon.
      </p>
    </div>
    <div class="relative z-10 container mx-auto px-4 md:px-6 mt-16 2k:mt-32 4k:mt-48">
      <div
        class="w-full max-w-5xl xl:max-w-6xl 2k:max-w-7xl 4k:max-w-[120rem] mx-auto overflow-hidden rounded-xl border bg-muted/50 shadow-xl"
        :style="imageStyle"
      >
        <div class="flex items-center gap-2 border-b bg-background/50 p-4 backdrop-blur">
          <div class="h-3 w-3 rounded-full bg-red-500" />
          <div class="h-3 w-3 rounded-full bg-yellow-500" />
          <div class="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div class="w-full bg-muted/50">
          <img src="/img/hero.webp" alt="Velocity Application Screenshot" class="w-full h-auto block" width="1920" height="1080">
        </div>
      </div>
    </div>
  </section>
</template>
