<template>
  <div>
    <nav class="flex h-20 items-center justify-between border-b"></nav>
    <aside
      class="fixed inset-y-0 left-0 flex min-h-screen w-[280px] flex-col border-r"
    >
      <div class="mx-2 h-20 px-2 py-4">
        <Button variant>
          <div>
            <span>Misbah Ansori</span>
            <span>misbah.ansori.dev</span>
          </div>
        </Button>
      </div>
      <div class="mx-2 flex flex-col items-start gap-1 px-2 py-4">
        <Button size="sm" class="h-auto w-full justify-start py-2">
          Dashboard
        </Button>
        <Button
          size="sm"
          variant="ghost"
          class="h-auto w-full justify-start py-2"
        >
          Chart
        </Button>
        <Button
          size="sm"
          variant="ghost"
          class="h-auto w-full justify-start py-2"
        >
          Payments
        </Button>
      </div>
    </aside>
  </div>
</template>
