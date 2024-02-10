<script setup lang="ts">
const { isSidebarOpen } = useSidebar();
</script>

<template>
  <SidebarItem class="hidden lg:flex" />

  <Sheet v-model:open="isSidebarOpen">
    <SheetContent side="left" :with-close-button="false" class="w-auto p-0">
      <SidebarItem class="border-none" />
    </SheetContent>
  </Sheet>
</template>
