<script setup>
import { AccordionContent } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: { type: String, default: '' },
  ...AccordionContent.props,
});
</script>

<template>
  <AccordionContent
    v-bind="props"
    class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
