<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-border bg-card text-card-foreground',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
