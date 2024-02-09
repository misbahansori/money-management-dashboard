<template>
  <div class="flex">
    <Sidebar />
    <div class="flex h-screen flex-1 flex-col">
      <Navbar />
      <ScrollArea class="flex-1" as="main">
        <slot />
      </ScrollArea>
    </div>
  </div>
</template>
