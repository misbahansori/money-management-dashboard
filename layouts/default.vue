<template>
  <div class="flex">
    <Sidebar />
    <div class="flex min-h-screen flex-1 flex-col">
      <Navbar />
      <main class="flex-1 bg-accent">
        <slot />
      </main>
    </div>
  </div>
</template>
