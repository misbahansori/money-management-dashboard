<script setup lang="ts">
import { BellIcon, MenuIcon, SearchIcon } from "lucide-vue-next";

// Thursday, 1 January 1970
const now = useDateFormat(useNow(), "dddd, D MMMM YYYY");

const { toggleSidebar } = useSidebar();
</script>

<template>
  <nav class="h-20 border-b">
    <div class="flex h-full items-center justify-between px-4 sm:px-6">
      <div class="flex items-center gap-4">
        <Button variant="ghost" class="h-auto p-2" @click="toggleSidebar">
          <MenuIcon class="h-6 w-6 text-muted-foreground" />
        </Button>
        <div class="flex flex-col">
          <span class="text-base font-semibold text-foreground">Dashboard</span>
          <span class="text-sm text-muted-foreground">{{ now }}</span>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center px-2.5"
          >
            <SearchIcon class="h-5 w-5 text-muted-foreground" />
          </div>
          <Input class="pl-10" placeholder="Search..." />
        </div>
        <Separator orientation="vertical" class="h-8" />
        <div class="relative">
          <span class="absolute right-0 top-0 flex h-3 w-3">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
            />
            <span
              class="relative inline-flex h-3 w-3 rounded-full bg-indigo-500"
            />
          </span>
          <Button
            variant="secondary"
            class="flex h-auto items-center justify-center rounded-full p-2.5"
          >
            <BellIcon class="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>
