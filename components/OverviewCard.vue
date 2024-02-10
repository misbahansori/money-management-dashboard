<script setup lang="ts">
import { formatDate } from "@vueuse/core";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  ChevronDownIcon,
  EyeIcon,
  LineChartIcon,
  ShoppingBagIcon,
  SmileIcon,
  UploadIcon,
} from "lucide-vue-next";

const date = ref<Date | null>(new Date());

const hightlights = [
  {
    icon: SmileIcon,
    title: "Unique Customers",
    value: 98,
    percentage: 16.0,
  },
  {
    icon: ShoppingBagIcon,
    title: "Customers Orders",
    value: 34,
    percentage: -6.0,
  },
  {
    icon: EyeIcon,
    title: "Product Views",
    value: 520,
    percentage: 5.82,
  },
  {
    icon: LineChartIcon,
    title: "Conversion Rate",
    value: 5.6,
    percentage: 1.2,
  },
];
</script>

<template>
  <Card>
    <CardContent class="grid grid-cols-1 p-0 md:grid-cols-2">
      <div>
        <CardHeader class="flex flex-row items-center justify-between p-4">
          <CardTitle class="text-xl">Bussiness Overview</CardTitle>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              <div class="size-4 rounded-full bg-[#EBF9A3]"></div>
              <span class="text-sm">Yesterday</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="size-4 rounded-full bg-[#2A514C]"></div>
              <span class="text-sm">Today</span>
            </div>
          </div>
        </CardHeader>
        <div class="h-[307px]">
          <OverviewChart />
        </div>
      </div>
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-center justify-end gap-2">
          <Popover>
            <PopoverTrigger as-child>
              <Button
                :variant="'outline'"
                :class="
                  cn(
                    'min-w-[240px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )
                "
              >
                <CalendarIcon
                  class="mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground"
                />
                <span class="flex-1">
                  {{ date ? formatDate(date, "D MMMM YYYY") : "Pick a date" }}
                </span>
                <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="date" />
            </PopoverContent>
          </Popover>
          <Button class="gap-2">
            <UploadIcon class="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
        <div class="grid grid-cols-2 gap-px rounded-xl border">
          <div
            v-for="(highlight, i) in hightlights"
            class="relative flex flex-col gap-3 px-6 py-8"
          >
            <div
              v-if="i > 1"
              class="absolute inset-x-0 top-0 flex items-center justify-center"
            >
              <Separator class="w-[90%]" />
            </div>
            <div
              v-if="i % 2 === 1"
              class="absolute inset-y-0 left-0 flex flex-col items-center justify-center"
            >
              <Separator class="h-[80%]" orientation="vertical" />
            </div>

            <div class="flex items-center gap-4">
              <div class="rounded-full border p-3">
                <Component
                  :is="highlight.icon"
                  class="h-6 w-6 text-muted-foreground"
                />
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-2xl font-medium tabular-nums leading-none">
                  {{ highlight.value }}
                </span>
                <p class="text-sm text-muted-foreground">
                  {{ highlight.title }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-1 text-xs text-muted-foreground">
              <Component
                :is="highlight.percentage > 0 ? ArrowUpIcon : ArrowDownIcon"
                :class="
                  highlight.percentage > 0 ? 'text-primary' : 'text-destructive'
                "
                class="h-4 w-4 flex-shrink-0"
              ></Component>
              <span
                :class="
                  highlight.percentage > 0 ? 'text-primary' : 'text-destructive'
                "
              >
                {{ highlight.percentage > 0 ? "+" : "" }}
                {{ highlight.percentage }}%
              </span>
              <span>from yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
