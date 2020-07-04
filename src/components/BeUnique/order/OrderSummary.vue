<template>
  <div>
    <b-card body-class="order-summary-wrapper" class="text-center mb-4">
      <b-card-title class="mt-3">ORDER SUMMARY</b-card-title>

      <div class="table-responsive mb-0">
        <b-table hover foot-clone :items="items" :fields="fields" class="table"
          thead-tr-class="thead-tr-class" tbody-tr-class="tbody-tr-class">

          <template v-slot:cell(images)="data">
            <b-img fluid :src="data.item.images[0].src" width="50" height="50"/>
          </template>

          <template v-slot:cell(quantity)="data">
            {{ data.item.quantity }}
          </template>

          <template v-slot:cell(pickedColor)="data">
            <div class="d-flex justify-content-center">
              <div class="color-box" :style="{ 'background-color': data.item.pickedColor.hexadecimal}"></div>
            </div>
          </template>

          <template v-slot:cell(totalPrice)="data">
            <div>{{ data.item.quantity * data.item.price }}$</div>
          </template>

          <template v-slot:foot(price)>
            <div class="text-center">Subtotal</div>
          </template>

          <template v-slot:foot(totalPrice)>
            <div class="text-center">{{ totalPrice }}$</div>
            <div>{{ getShippingCost }}$</div>
          </template>

          <template v-slot:foot(images)>
          </template>

          <template v-slot:foot(name)>
          </template>

          <template v-slot:foot(pickedColor)>
          </template>

          <template v-slot:foot(quantity)>
            <div>subtotal</div>
            <div>shipping</div>
          </template>
        </b-table>
      </div>

      <div class="line"></div>

      <div class="d-flex flex-row justify-content-end total-price bnq rubik galapagos-green my-2">
    
        <div class="mx-1">TOTAL</div>
        <div class="mx-3">{{ totalPrice + getShippingCost }}$</div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OrderSummary',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      fields: [
        {
          key: 'images',
          label: '',
        },
        {
          key: 'name',
          label: ''
        },
        {
          key: 'pickedColor',
          label: ''
        },
        {
          key: 'quantity',
          label: 'QUANTITY'
        },
        {
          key: 'totalPrice',
          label: 'TOTAL'
        }
      ],
      items: this.cart
    }
  },
  computed: {
    ...mapGetters({
      getShippingCost: 'order/getShippingCost'
    }),
    totalPrice: function() {
      let cartTotalPrice = 0
      this.items.forEach(cartItem => {
        cartTotalPrice += cartItem.price * cartItem.quantity
      })
      return cartTotalPrice
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.order-summary-wrapper {
  padding: 0px !important;
}

.line {
  width: auto;
  height: 0;
  border: 0.3px solid black;
}

.total-price {
  font-size: 2.8rem !important;
}

</style>