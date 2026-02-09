<script setup>
import Button from '@/components/ui/Button.vue';
import { useGithubRelease } from '@/composables/useGithubRelease';

const { downloadUrl } = useGithubRelease();
</script>

<template>
  <section class="container mx-auto px-4 md:px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center gap-10 min-h-[60vh]">
    <div>
      <img src="/img/logo.png" alt="Clone Tools Logo" class="h-16 w-auto mx-auto">
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
  </section>
</template>
