<template>
  <div class="cart-product-list px-md-5 table-responsive">
    <b-table hover foot-clone :items="items" :fields="fields" class="table"
      thead-tr-class="thead-tr-class" tbody-tr-class="tbody-tr-class">

      <template v-slot:cell(img)="data">
        <b-img fluid :src="data.item.img" width="100" height="100"/>
      </template>

      <template v-slot:cell(quantity)="data">
        <AppCounter label="" :value="data.value" center/>
      </template>

      <template v-slot:cell(color)="data">
        <div class="d-flex justify-content-center">
          <div class="color-box" :style="{ 'background-color': data.item.color}"></div>
        </div>
      </template>

      <template v-slot:foot(img)>
        <span class="bnq aileron-thin font-xs position-absolute">Shipping Calculated At Checkout</span>
      </template>

      <template v-slot:foot(title)>
      </template>

      <template v-slot:foot(color)>
      </template>

      <template v-slot:foot(quantity)>
      </template>

      <template v-slot:foot(unitPrice)>
        <div class="text-center">Subtotal</div>
      </template>

      <template v-slot:foot(totalPrice)>
        <div class="text-center">50$</div>
      </template>
    </b-table>
  </div>
</template>

<script>

import img from '@/static/products/img1.jpeg'

export default {
  name: 'CartProductList',
  data() {
    return {
      img,
      fields: [
        {
          key: 'img',
          label: 'PRODUCT',
        },
        {
          key: 'title',
          label: ''
        },
        {
          key: 'color',
          label: 'COLOR'
        },
        {
          key: 'quantity',
          label: 'QUANTITY'
        },
        {
          key: 'unitPrice',
          label: 'PRICE'
        },
        {
          key: 'totalPrice',
          label: 'TOTAL'
        }
      ],
      items: [
          { img: img, title: 'Dickerson', color: '#A52A2A', quantity: 5, unitPrice: '5$', totalPrice: 12 },
          { img: img, title: 'Larsen', color: '#A52A2A', quantity: 2, unitPrice: '3$', totalPrice: 12 },
          { img: img, title: 'Geneva', color: '#A52A2A', quantity: 3, unitPrice: '12$', totalPrice: 15},
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
.color-box {
  width: 2.5rem;
  height: 1.8rem;
}
</style>