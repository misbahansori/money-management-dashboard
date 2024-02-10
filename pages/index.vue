<script setup lang="ts">
import {
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
  <div
    class="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"
  >
    <StatCard v-for="card in cards" :card="card" />
    <OverviewCard class="sm:col-span-2 lg:col-span-4" />
    <RecentMessagesCard class="lg:col-span-2" />
    <RecentOrdersCard class="lg:col-span-2" />
  </div>
</template>
