<template>
  <div>
    <div v-for="order in orders" :key="order.id">
      <OrderItem :order="order"/>
    </div>
  </div>
</template>

<script>
import OrderItem from '@/components/BeUnique/order/OrderItem'
import { mapGetters } from 'vuex'

export default {
  name: 'OrdersList',
  components: {
    OrderItem
  },
  computed: {
    ...mapGetters({
      orders: 'order/getOrders'
    }),
  }
}
</script>