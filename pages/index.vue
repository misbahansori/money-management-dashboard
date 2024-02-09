<script setup lang="ts">
import {
  ArrowUpRight,
  BanknoteIcon,
  CircleDollarSignIcon,
  PackageIcon,
  UserIcon,
} from "lucide-vue-next";

const cards = [
  {
    title: "Customer Unpaid",
    icon: CircleDollarSignIcon,
    value: 234,
  },
  {
    title: "Total Revenue",
    icon: BanknoteIcon,
    value: 5673,
  },
  {
    title: "Total Orders",
    icon: PackageIcon,
    value: 2344,
  },
  {
    title: "Total Customers",
    icon: UserIcon,
    value: 7893,
  },
];
</script>
<template>
  <div class="grid grid-cols-4 gap-6 px-4 sm:p-6">
    <Card v-for="card in cards" class="border-none">
      <CardContent class="relative flex items-start gap-6 px-6 py-6">
        <div class="rounded-md bg-accent p-2.5">
          <Component :is="card.icon" class="h-6 w-6 text-muted-foreground" />
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-medium tabular-nums">
            {{ card.value }}
          </span>
          <span class="text-sm text-muted-foreground">{{ card.title }}</span>
        </div>
        <ArrowUpRight class="absolute right-4 top-4 h-5 w-5 text-muted" />
      </CardContent>
    </Card>
  </div>
</template>
