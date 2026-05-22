<script setup>
import { AccordionItem } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: { type: String, default: '' },
  ...AccordionItem.props,
});
</script>

<template>
  <AccordionItem v-bind="props" :class="cn('border-b', props.class)">
    <slot />
  </AccordionItem>
</template>
