<script setup>
import { AccordionRoot } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: { type: String, default: '' },
  ...AccordionRoot.props,
});

defineEmits(AccordionRoot.emits);
</script>

<template>
  <AccordionRoot v-bind="props" :class="cn(props.class)">
    <slot />
  </AccordionRoot>
</template>
