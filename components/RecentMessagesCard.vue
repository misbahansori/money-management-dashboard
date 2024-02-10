<script setup lang="ts">
import { MoreHorizontalIcon } from "lucide-vue-next";

const messages = [
  {
    name: "John Doe",
    message: "Hello! Have you seen our latest collection?",
    time: "2m ago",
  },
  {
    name: "Alice Smith",
    message:
      "Hi there! Just wanted to let you know about our special discount today.",
    time: "5m ago",
  },
  {
    name: "Mike Johnson",
    message:
      "Hey! We have some great deals on electronics right now. Check it out!",
    time: "10m ago",
  },
  {
    name: "Emily Brown",
    message: "Hello! Is there anything specific you're looking for today?",
    time: "15m ago",
  },
  {
    name: "David Wilson",
    message:
      "Hey there! Did you know we offer free shipping on orders over $50?",
    time: "20m ago",
  },
  {
    name: "Sarah Davis",
    message:
      "Hi! Our new arrivals are here. Take a look and let me know if you need any assistance.",
    time: "25m ago",
  },
  {
    name: "Chris Martinez",
    message:
      "Hey! Have you checked out our clearance section lately? There are some amazing deals!",
    time: "30m ago",
  },
  {
    name: "Jessica Thompson",
    message:
      "Hello, friend! Need help finding the perfect gift? I'm here to assist you!",
    time: "35m ago",
  },
  {
    name: "Matthew Lee",
    message:
      "Hi, how can I assist you today? Let me know if you have any questions about our products.",
    time: "40m ago",
  },
  {
    name: "Jennifer Garcia",
    message:
      "Hey! Just a reminder that our sale ends tomorrow. Don't miss out!",
    time: "45m ago",
  },
];
</script>
<template>
  <Card>
    <CardContent class="p-0">
      <CardHeader class="p-4">
        <CardTitle class="text-xl">Recent Messages</CardTitle>
        <CardDescription>Your recent messages from customers.</CardDescription>
      </CardHeader>
      <ScrollArea class="h-[320px]">
        <div v-for="message in messages" :key="message.name" class="rounded-xl">
          <div class="flex items-center gap-4 px-4 py-3">
            <Avatar :name="message.name" size="sm" :variant="'rounded'">
              <AvatarImage :src="'/images/' + message.name + '.jpg'" />

              <AvatarFallback>
                {{ message.name[0] }}
              </AvatarFallback>
            </Avatar>
            <div class="flex flex-1 flex-col">
              <div class="flex items-center justify-between">
                <span class="text-base font-medium">{{ message.name }}</span>
                <div class="flex items-start gap-2">
                  <span class="text-xs text-muted-foreground">
                    {{ message.time }}
                  </span>
                  <Button variant="ghost" size="sm" class="-mt-1 h-auto p-0.5">
                    <MoreHorizontalIcon class="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="line-clamp-1 text-sm text-muted-foreground">
                  {{ message.message }}
                </span>
                <div class="flex min-w-10 items-center justify-end">
                  <div class="size-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
</template>
