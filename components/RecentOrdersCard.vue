<script setup lang="ts">
const recentOrders = [
  {
    id: 1123,
    product: "Apple Watch",
    date: "2021-10-10",
    price: 399,
    status: "Processing",
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
  <Card>
    <CardContent class="p-0">
      <CardHeader class="p-4">
        <CardTitle class="text-xl">Recent Orders</CardTitle>
        <CardDescription>Your recent orders made by customers.</CardDescription>
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
</template>
