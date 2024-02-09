<script setup lang="ts">
import { formatDate } from "@vueuse/core";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpRight,
  BanknoteIcon,
  CalendarIcon,
  ChevronDownIcon,
  CircleDollarSignIcon,
  EyeIcon,
  LineChart,
  MoreHorizontalIcon,
  PackageIcon,
  ShoppingBagIcon,
  SmileIcon,
  UploadIcon,
  UserIcon,
} from "lucide-vue-next";

const cards = [
  {
    title: "Customer Unpaid",
    icon: CircleDollarSignIcon,
    value: 234,
  },
  {
    title: "Total Revenue",
    icon: BanknoteIcon,
    value: 5673,
  },
  {
    title: "Total Orders",
    icon: PackageIcon,
    value: 2344,
  },
  {
    title: "Total Customers",
    icon: UserIcon,
    value: 7893,
  },
];

const recentOrders = [
  {
    id: 1123,
    product: "Apple Watch",
    date: "2021-10-10",
    price: 399,
    status: "Delivered",
  },
  {
    id: 452,
    product: "iPhone 13",
    date: "2021-10-10",
    price: 999,
    status: "Delivered",
  },
  {
    id: 23123,
    product: "Macbook Pro",
    date: "2021-10-10",
    price: 1999,
    status: "Delivered",
  },
  {
    id: 2344,
    product: "iPad Pro",
    date: "2021-10-10",
    price: 799,
    status: "Delivered",
  },
  {
    id: 2345,
    product: "AirPods",
    date: "2021-10-10",
    price: 199,
    status: "Delivered",
  },
];

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
    icon: LineChart,
    title: "Conversion Rate",
    value: 5.6,
    percentage: 1.2,
  },
];

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
  <div class="grid grid-cols-4 gap-6 px-4 sm:p-6">
    <Card v-for="card in cards" class="border-none">
      <CardContent class="relative flex items-start gap-6 px-6 py-6">
        <div class="rounded-md bg-accent p-2.5">
          <Component :is="card.icon" class="h-6 w-6 text-muted-foreground" />
        </div>
        <div class="flex flex-col gap-0.5">
          <span class="text-2xl font-medium tabular-nums leading-none">
            {{ card.value }}
          </span>
          <span class="text-sm text-muted-foreground">{{ card.title }}</span>
        </div>
        <ArrowUpRight class="absolute right-4 top-4 h-5 w-5 text-muted" />
      </CardContent>
    </Card>
    <Card class="col-span-4 border-none">
      <CardContent class="grid grid-cols-2 p-0">
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
                  <CalendarIcon class="mr-2 h-4 w-4 flex-shrink-0" />
                  <span class="flex-1">
                    {{ date ? formatDate(date, "D MMMM YYYY") : "Pick a date" }}
                  </span>
                  <ChevronDownIcon class="ml-2 h-4 w-4" />
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
              <div
                class="flex items-center gap-1 text-xs text-muted-foreground"
              >
                <Component
                  :is="highlight.percentage > 0 ? ArrowUpIcon : ArrowDownIcon"
                  :class="
                    highlight.percentage > 0
                      ? 'text-primary'
                      : 'text-destructive'
                  "
                  class="h-4 w-4 flex-shrink-0"
                ></Component>
                <span
                  :class="
                    highlight.percentage > 0
                      ? 'text-primary'
                      : 'text-destructive'
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
    <Card class="col-span-2 border-none">
      <CardContent class="px-2">
        <CardHeader class="p-4">
          <CardTitle class="text-xl">Recent Messages</CardTitle>
          <CardDescription>
            Your recent messages from customers.
          </CardDescription>
        </CardHeader>
        <ScrollArea class="h-[360px]">
          <div
            v-for="message in messages"
            :key="message.name"
            class="hover:bg-default rounded-xl"
          >
            <div class="flex items-center gap-4 p-4">
              <Avatar :name="message.name" size="sm" :variant="'rounded'">
                <AvatarImage :src="'/images/' + message.name + '.jpg'" />

                <AvatarFallback>
                  {{ message.name[0] }}
                </AvatarFallback>
              </Avatar>
              <div class="flex flex-1 flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <span class="text-base font-medium">{{ message.name }}</span>
                  <div class="flex items-start gap-2">
                    <span class="text-xs text-muted-foreground">
                      {{ message.time }}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      class="-mt-1 h-auto p-0.5"
                    >
                      <MoreHorizontalIcon
                        class="h-5 w-5 text-muted-foreground"
                      />
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
    <Card class="col-span-2 border-none">
      <CardContent class="p-0">
        <CardHeader class="p-4">
          <CardTitle class="text-xl">Recent Orders</CardTitle>
          <CardDescription>
            Your recent orders made by customers.
          </CardDescription>
        </CardHeader>
        <Table class="border-t">
          <TableCaption class="sr-only">Recent Orders</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead><Checkbox /></TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="order in recentOrders" :key="order.id">
              <TableCell><Checkbox /></TableCell>
              <TableCell>{{ order.id }}</TableCell>
              <TableCell>{{ order.product }}</TableCell>
              <TableCell>{{ order.date }}</TableCell>
              <TableCell>{{ order.price }}</TableCell>
              <TableCell>
                <Badge
                  :variant="
                    order.status === 'Delivered' ? 'default' : 'secondary'
                  "
                >
                  {{ order.status }}
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>
