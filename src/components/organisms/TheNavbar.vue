<script setup>
import { useIntersectionObserver } from '@vueuse/core';
import { Download } from 'lucide-vue-next';
import { nextTick, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Button from '@/components/ui/Button.vue';
import { useGithubRelease } from '@/composables/useGithubRelease';

const { downloadUrl } = useGithubRelease();
const route = useRoute();
const activeSection = ref('');
const navRefs = ref({});
const pillStyle = ref({ opacity: 0, left: '0px', width: '0px' });

const targets = ref([]);

watch(
  () => route.path,
  async (path) => {
    if (path === '/') {
      await nextTick();
      setTimeout(() => {
        targets.value = ['hero', 'features', 'testimonials']
          .map(id => document.getElementById(id))
          .filter(el => el);
      }, 100);
    }
    else {
      targets.value = [];
      activeSection.value = '';
    }
  },
  { immediate: true },
);

useIntersectionObserver(
  targets,
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: '-10% 0px -10% 0px',
  },
);

watch(activeSection, async () => {
  await nextTick();
  updatePillPosition();
});

function updatePillPosition() {
  const activeId = activeSection.value;
  const el = navRefs.value[activeId];
  if (el) {
    pillStyle.value = {
      opacity: 1,
      left: `${el.offsetLeft}px`,
      width: `${el.offsetWidth}px`,
    };
  }
  else {
    pillStyle.value = { ...pillStyle.value, opacity: 0 };
  }
}

const navItems = [
  { id: 'features', label: 'Features' },
  { id: 'testimonials', label: 'Testimonials' },
];

function setNavRef(el, id) {
  if (el)
    navRefs.value[id] = el;
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
      <div class="flex items-center gap-2 font-bold text-xl">
        <img src="/img/logo.png" alt="Velocity Logo" class="h-8 w-auto">
      </div>

      <nav
        v-if="$route.path === '/'"
        class="hidden md:flex items-center relative gap-1 p-1 bg-muted/30 rounded-full border border-white/5"
      >
        <div
          class="absolute top-1 bottom-1 bg-neutral-800 rounded-full transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
          :style="pillStyle"
        />

        <a
          v-for="item in navItems"
          :key="item.id"
          :ref="(el) => setNavRef(el, item.id)"
          :href="`/#${item.id}`"
          class="relative z-10 px-5 py-1.5 text-sm font-medium transition-colors rounded-full cursor-pointer"
          :class="[
            activeSection === item.id
              ? 'text-white'
              : 'text-foreground/60 hover:text-foreground/80',
          ]"
          @click="activeSection = item.id"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <a :href="downloadUrl" download>
          <Button size="sm" class="rounded-full bg-neutral-950 text-white hover:bg-neutral-900 border border-white/10 cursor-pointer">
            Download <Download class="ml-3 h-3.5 w-3.5" />
          </Button>
        </a>
      </div>
    </div>
  </header>
</template>
