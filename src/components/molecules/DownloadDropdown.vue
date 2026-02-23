<script setup>
import { onClickOutside } from '@vueuse/core';
import { ChevronDown, Download } from 'lucide-vue-next';
import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import { useGithubRelease } from '@/composables/useGithubRelease';

defineProps({
  size: {
    type: String,
    default: 'sm',
  },
  btnClass: {
    type: String,
    default: '',
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
});

const { downloadLinks, downloadUrl } = useGithubRelease();
const isOpen = ref(false);
const dropdownRef = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});
</script>

<template>
  <div ref="dropdownRef" class="relative inline-flex items-stretch text-left">
    <a :href="downloadUrl" download class="flex">
      <Button
        :size="size"
        class="!rounded-r-none border-r border-white/20 bg-neutral-950 text-white hover:bg-neutral-900 border md:border-white/10 cursor-pointer h-full" :class="[
          btnClass,
        ]"
      >
        <slot>Download</slot>
        <Download v-if="showIcon" class="ml-2 h-4 w-4" />
      </Button>
    </a>
    <Button
      :size="size"
      class="flex items-center justify-center !rounded-l-none px-2 bg-neutral-950 text-white hover:bg-neutral-900 border border-white/10 cursor-pointer h-full border-l-0 focus:z-10" :class="[
        btnClass,
      ]"
      aria-label="Download options"
      @click.prevent="toggleDropdown"
    >
      <ChevronDown class="h-4 w-4" />
    </Button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 w-48 origin-top-right rounded-md bg-neutral-900 border border-white/10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-1"
      >
        <div class="py-1">
          <span class="block mb-1 px-3 py-1.5 text-xs font-semibold text-neutral-400">Select Architecture</span>
          <a
            v-for="link in downloadLinks"
            :key="link.arch"
            :href="link.url"
            class="flex items-center px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 hover:text-white rounded-md mx-1 transition-colors"
            download
            @click="isOpen = false"
          >
            <Download class="mr-2 h-4 w-4 opacity-70" />
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>
