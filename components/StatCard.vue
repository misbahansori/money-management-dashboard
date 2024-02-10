<script setup lang="ts">
import type { FunctionalComponent, SVGAttributes } from "vue";

interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
type Icon = FunctionalComponent<SVGProps>;

const {} = defineProps<{
  card: {
    icon: Icon;
    value: string | number;
    title: string;
  };
}>();
</script>

<template>
  <Card class="">
    <CardContent class="relative flex items-start gap-6 px-5 py-5">
      <div class="rounded-md bg-accent p-2.5">
        <Component :is="card.icon" class="h-6 w-6 text-muted-foreground" />
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-2xl font-medium tabular-nums leading-none">
          {{ card.value }}
        </span>
        <span class="text-sm text-muted-foreground">{{ card.title }}</span>
      </div>
      <ArrowUpRight class="absolute right-4 top-4 h-5 w-5 text-muted" />
    </CardContent>
  </Card>
</template>
