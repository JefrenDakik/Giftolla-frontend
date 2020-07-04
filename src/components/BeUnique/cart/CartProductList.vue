<template>
  <div class="cart-product-list px-md-5 table-responsive">
    <b-table hover foot-clone :items="items" :fields="fields" class="table"
      thead-tr-class="thead-tr-class" tbody-tr-class="tbody-tr-class">

      <template v-slot:cell(remove)="data">
        <div class="font-weight-bold clickable" 
          @click="removeProduct(data.item.pickedColor.productId)">X
        </div>
      </template>

      <template v-slot:cell(images)="data">
        <b-img fluid :src="data.item.images[0].src" width="100" height="100"/>
      </template>

      <template v-slot:cell(quantity)="data">
        <AppCounter label="" :value="data.value" center
          @updateCount="onUpdateCount(data.item.productId, $event)"/>
      </template>

      <template v-slot:cell(pickedColor)="data">
        <div class="d-flex justify-content-center">
          <div class="color-box" :style="{ 'background-color': data.item.pickedColor.hexadecimal}"></div>
        </div>
      </template>

      <template v-slot:foot(images)>
        <span class="bnq rubik-light font-xs position-absolute">Shipping Calculated At Checkout</span>
      </template>

      <template v-slot:foot(name)>
      </template>

      <template v-slot:foot(pickedColor)>
      </template>

      <template v-slot:foot(quantity)>
      </template>

      <template v-slot:cell(price)="data">
        {{ data.value }}$
      </template>

      <template v-slot:foot(price)>
        <div class="text-center">Subtotal</div>
      </template>

      <template v-slot:cell(totalPrice)="data">
        <div>{{ data.item.quantity * data.item.price }}$</div>
      </template>

      <template v-slot:foot(totalPrice)>
        <div class="text-center">{{ totalPrice }}$</div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartProductList',
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
          key: 'remove',
          label: ''
        },
        {
          key: 'images',
          label: 'PRODUCT',
        },
        {
          key: 'name',
          label: ''
        },
        {
          key: 'pickedColor',
          label: 'COLOR'
        },
        {
          key: 'quantity',
          label: 'QUANTITY'
        },
        {
          key: 'price',
          label: 'PRICE'
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
    totalPrice: function() {
      let cartTotalPrice = 0
      this.items.forEach(cartItem => {
        cartTotalPrice += cartItem.price * cartItem.quantity
      })
      return cartTotalPrice
    }
  },
  methods: {
    ...mapActions({
      saveCartProduct: 'cart/saveCartProduct',
      removeCartProduct: 'cart/removeCartProduct'
    }),
    onUpdateCount(productId, count) {
      const cartItem = {
        productId,
        quantity: count
      }
      this.saveCartProduct(cartItem)
    },
    removeProduct(productId) {
      this.removeCartProduct(productId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>