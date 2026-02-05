<script setup>
import { ChevronDown } from 'lucide-vue-next';
import { AccordionHeader, AccordionTrigger } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: { type: String, default: '' },
  ...AccordionTrigger.props,
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="props"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 cursor-pointer',
          props.class,
        )
      "
    >
      <slot />
      <ChevronDown
        class="h-4 w-4 shrink-0 transition-transform duration-200"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>
