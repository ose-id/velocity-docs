<script setup>
import { Code, LayoutDashboard, Terminal } from 'lucide-vue-next';
import SpotlightCard from '@/components/ui/SpotlightCard.vue';

const features = [
  {
    title: 'Quick Clone',
    description: 'Instantly clone repositories with a single click and get straight to work.',
    icon: Terminal,
  },
  {
    title: 'Smart Editor Launch',
    description: 'Automatically open projects in VS Code, Cursor, or Windsurf.',
    icon: Code,
  },
  {
    title: 'Clean Dashboard',
    description: 'Manage all your cloned repositories in one beautiful, organized interface.',
    icon: LayoutDashboard,
  },
  {
    title: 'Peak Performance',
    description: 'Experience zero-latency performance and deep system integration.',
    icon: LayoutDashboard,
  },
];
</script>

<template>
  <section id="features" class="container mx-auto px-4 md:px-6 py-20 bg-muted/30">
    <div class="text-center mb-16 space-y-4 2k:space-y-8 4k:space-y-12">
      <h2 class="text-3xl lg:text-4xl 2k:text-6xl 4k:text-8xl font-bold tracking-tight uppercase">
        Streamline Your Workflow
      </h2>
      <p class="text-muted-foreground text-base lg:text-lg 2k:text-2xl 4k:text-4xl max-w-2xl 2k:max-w-4xl 4k:max-w-6xl mx-auto">
        Everything you need to manage your repositories efficiently.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SpotlightCard
        v-for="feature in features"
        :key="feature.title"
        class="rounded-2xl border border-white/5 bg-neutral-900/50 p-6 4k:p-12 hover:border-white/10 transition-colors duration-300"
      >
        <div class="mb-4 inline-flex h-12 w-12 2k:h-16 2k:w-16 4k:h-24 4k:w-24 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
          <component :is="feature.icon" class="h-6 w-6 2k:h-8 2k:w-8 4k:h-12 4k:w-12 text-white" />
        </div>

        <h3 class="mb-2 text-lg 2k:text-3xl 4k:text-5xl font-bold tracking-tight text-white">
          {{ feature.title }}
        </h3>
        <p class="text-sm 2k:text-xl 4k:text-2xl text-muted-foreground leading-relaxed">
          {{ feature.description }}
        </p>
      </SpotlightCard>
    </div>
  </section>
</template>
