<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { animate } from 'animejs';
import { DownloadCloud, Loader2 } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { useGithubDownloads } from '@/composables/useGithubDownloads';

const { totalDownloads, isLoading } = useGithubDownloads();
const counterRef = ref<HTMLElement | null>(null);
const animatedCountObj = { value: 0 };
const displayCount = ref('0');

let hasAnimated = false;
let animationInstance: any = null;

function formatNumber(num: number) {
  return new Intl.NumberFormat('en-US').format(Math.floor(num));
}

function startAnimation() {
  if (totalDownloads.value <= 0)
    return;

  if (animationInstance) {
    animationInstance.pause();
  }

  animationInstance = animate(animatedCountObj, {
    value: totalDownloads.value,
    duration: 2500,
    easing: 'easeOutExpo',
    onUpdate: () => {
      displayCount.value = formatNumber(animatedCountObj.value);
    },
  });
}

useIntersectionObserver(
  counterRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasAnimated && totalDownloads.value > 0) {
      hasAnimated = true;
      startAnimation();
    }
  },
  { threshold: 0.5 },
);

watch(totalDownloads, (newVal) => {
  if (newVal > 0 && hasAnimated) {
    startAnimation();
  }
});
</script>

<template>
  <div ref="counterRef" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-neutral-900/50 px-4 py-1.5 text-sm backdrop-blur transition-colors hover:bg-neutral-800/50">
    <div v-if="isLoading" class="flex items-center gap-2 text-neutral-400">
      <Loader2 class="h-4 w-4 animate-spin" />
      <span>Loading downloads...</span>
    </div>
    <div v-else class="flex items-center gap-2">
      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
        <DownloadCloud class="h-3.5 w-3.5" />
      </div>
      <span class="font-medium text-neutral-200">
        Over <span class="font-bold text-white">{{ displayCount }}</span> downloads
      </span>
    </div>
  </div>
</template>
