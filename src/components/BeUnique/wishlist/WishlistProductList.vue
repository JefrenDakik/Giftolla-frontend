<template>
  <div class="wishlist-product-list px-md-5 table-responsive">
    <b-table foot-clone :items="items" :fields="fields" class="table"
      thead-tr-class="thead-tr-class" tb :tbody-tr-class="rowClass">

      <template v-slot:cell(select)="data">
        <div v-if="!data.item.pickedColor.outOfStock" 
          class="font-weight-bold clickable">
          <AppCheckbox :checked="data.item.checked" @change="onCheck(data.item, $event)"/>
        </div>
        <div v-else class="text-danger">
          out of stock
        </div>
      </template>

      <template v-slot:cell(images)="data">
        <b-img fluid :src="data.item.images[0].src" width="100" height="100"/>
      </template>

      <template v-slot:cell(quantity)="data">
        <AppCounter hideCountButtons label="" :value="data.value" center/>
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

      <template v-slot:cell(name)="data">
        {{ data.item.name }}
        <AppButton secondary @click="removeProduct(data.item.pickedColor.productId)" 
          class="bnq mt-2">Remove</AppButton>
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
import img from '@/static/products/img1.jpeg'

export default {
  name: 'WishlistProductList',
  props: {
    wishlist: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      img,
      fields: [
        {
          key: 'select',
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
      items: this.wishlist
    }
  },
  computed: {
    totalPrice: function() {
      let wishlistTotalPrice = 0
      this.items.forEach(wishlistItem => {
        wishlistTotalPrice += wishlistItem.price * wishlistItem.quantity
      })
      return wishlistTotalPrice
    },
  },
  methods: {
    ...mapActions({
      removeProductFromWishlist: 'wishlist/removeProductFromWishlist',
      saveWishlistProduct: 'wishlist/saveWishlistProduct'
    }),
    async onCheck(product, checked) {
      const productId = product.pickedColor.productId
      const quantity = product.quantity
      await this.saveWishlistProduct({ productId, checked, quantity })
    },
    async removeProduct(productId) {
      await this.removeProductFromWishlist(productId)
    },
    rowClass(item, type) {
      if (!item || type !== 'row') return
      if(item.checked) {
        return ['row-selected', 'tbody-tr-class']
      } else {
        return 'tbody-tr-class'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

</style>