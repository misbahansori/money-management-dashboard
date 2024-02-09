<script setup lang="ts">
import {
  ArchiveIcon,
  BellRingIcon,
  ChevronsUpDownIcon,
  LayoutGridIcon,
  MessageCircleQuestionIcon,
  MessageSquareTextIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingBagIcon,
  StoreIcon,
  Wallet2Icon,
} from "lucide-vue-next";

const navigations = [
  {
    title: "overview",
    children: [
      {
        title: "Dashboard",
        icon: LayoutGridIcon,
        url: "/dashboard",
      },
      {
        title: "Delivery",
        icon: ArchiveIcon,
        url: "/delivery",
      },
      {
        title: "Orders",
        icon: ShoppingBagIcon,
        url: "/orders",
      },
      {
        title: "Products",
        icon: PackageIcon,
        url: "/products",
      },
      {
        title: "Finance",
        icon: Wallet2Icon,
        url: "/finance",
      },
    ],
  },
  {
    title: "account",
    children: [
      {
        title: "Store",
        icon: StoreIcon,
        url: "/store",
      },
      {
        title: "Settings",
        icon: SettingsIcon,
        url: "/settings",
      },
      {
        title: "Notification",
        icon: BellRingIcon,
        url: "/notification",
      },
    ],
  },
];

const activeNavigation = computed(() => {
  return "/dashboard";
});
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 flex min-h-screen w-[280px] flex-col border-r"
  >
    <div class="flex h-20 items-center px-2">
      <Button
        variant="ghost"
        class="flex h-auto flex-1 items-center justify-between gap-3 py-1"
      >
        <Avatar variant="circle" size="sm">
          <AvatarImage src="/img/avatar.jpg" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <div class="flex flex-1 flex-col items-start">
          <span class="text-sm">Misbah Ansori</span>
          <span class="text-xs text-muted-foreground">misbah.ansori.dev</span>
        </div>
        <ChevronsUpDownIcon class="h-5 w-5 text-muted-foreground" />
      </Button>
    </div>
    <div class="flex flex-1 flex-col items-start gap-8 px-2 py-6">
      <div
        class="flex w-full flex-col items-start gap-1"
        v-for="nav in navigations"
      >
        <span class="px-2 text-xs font-medium uppercase text-muted-foreground">
          {{ nav.title }}
        </span>
        <div class="flex w-full flex-col items-start gap-2 pt-1">
          <Button
            :variant="activeNavigation === child.url ? 'secondary' : 'ghost'"
            class="flex w-full items-center justify-start gap-2 px-3 text-left"
            v-for="child in nav.children"
            :key="child.url"
          >
            <Component :is="child.icon" class="w- h-5" />
            <span class="text-sm">
              {{ child.title }}
            </span>
          </Button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start gap-1 px-2 py-6">
      <Button
        variant="ghost"
        class="flex w-full items-center justify-start gap-2 px-3 text-left"
      >
        <MessageCircleQuestionIcon class="h-5 w-5" />
        <span class="text-sm">Get Support</span>
      </Button>
      <Button
        variant="ghost"
        class="flex w-full items-center justify-start gap-2 px-3 text-left"
      >
        <MessageSquareTextIcon class="h-5 w-5" />
        <span class="text-sm">Add Feedback</span>
      </Button>

      <Button
        variant="ghost"
        class="flex w-full items-center justify-start gap-2 px-3 text-left"
      >
        <span class="text-sm">Toggle Dark Mode</span>
        <ChevronsUpDownIcon class="h-5 w-5" />
      </Button>
    </div>
  </aside>
</template>
