<script setup>
import { DownloadCloud, Loader2 } from 'lucide-vue-next';
import { useGithubDownloads } from '@/composables/useGithubDownloads';

const { formattedDownloads, isLoading } = useGithubDownloads();
</script>

<template>
  <div class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-neutral-900/50 px-4 py-1.5 text-sm backdrop-blur transition-colors hover:bg-neutral-800/50">
    <div v-if="isLoading" class="flex items-center gap-2 text-neutral-400">
      <Loader2 class="h-4 w-4 animate-spin" />
      <span>Loading downloads...</span>
    </div>
    <div v-else class="flex items-center gap-2">
      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
        <DownloadCloud class="h-3.5 w-3.5" />
      </div>
      <span class="font-medium text-neutral-200">
        Over <span class="font-bold text-white">{{ formattedDownloads }}</span> downloads
      </span>
    </div>
  </div>
</template>
