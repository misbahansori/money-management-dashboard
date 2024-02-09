<script setup lang="ts">
import {
  ArrowUpRight,
  BanknoteIcon,
  CircleDollarSignIcon,
  PackageIcon,
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
</script>
<template>
  <div class="grid grid-cols-4 gap-6 px-4 sm:p-6">
    <Card v-for="card in cards" class="border-none">
      <CardContent class="relative flex items-start gap-6 px-6 py-6">
        <div class="rounded-md bg-accent p-2.5">
          <Component :is="card.icon" class="h-6 w-6 text-muted-foreground" />
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-medium tabular-nums">
            {{ card.value }}
          </span>
          <span class="text-sm text-muted-foreground">{{ card.title }}</span>
        </div>
        <ArrowUpRight class="absolute right-4 top-4 h-5 w-5 text-muted" />
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
