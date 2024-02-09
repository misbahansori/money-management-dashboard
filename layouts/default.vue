<template>
  <div class="flex">
    <Sidebar />
    <div class="flex min-h-screen flex-1 flex-col">
      <Navbar />
      <main class="bg-default flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
