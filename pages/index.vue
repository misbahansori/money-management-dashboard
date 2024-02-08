<template>
  <div>
    <aside class="flex min-h-screen w-64 flex-col border-r">
      <div class="mx-2 px-2 py-4">
        <span class="text-lg font-semibold">Money Manager</span>
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
