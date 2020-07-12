<template>
  <div>
    <b-card body-class="order-item-wrapper" class="mb-4">
      <div class="bnq font-l ml-4">
        {{ order.status }}
      </div>

      <div class="table-responsive mb-0">
        <b-table hover foot-clone :items="items" :fields="fields" class="table"
          thead-tr-class="thead-tr-class" tbody-tr-class="tbody-tr-class" 
          thead-class="no-header" tfoot-class="no-footer">

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
        </b-table>
      </div>

      <div class="line"></div>

      <div class="d-flex flex-row justify-content-around text-center">
        <div class="d-flex align-items-center">
          placed on {{ order.orderDate.toUTCString() }}
        </div>

        <div>
          <div class="vertical-line">
          </div>
        </div>

        <div>
          <div>SUBTOTAL</div>
          <div>SHIPPING</div>
          <div class="bnq font-l galapagos-green">TOTAL</div>
        </div>
        <div>
          <div>{{ totalPrice }}$</div>
          <div>{{ order.shippingCost }}$</div>
          <div class="bnq font-l galapagos-green">{{ totalPrice + order.shippingCost }}$</div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
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
          label: ''
        },
        {
          key: 'totalPrice',
          label: ''
        }
      ],
      items: this.order.products
    }
  },
  computed: {
    totalPrice: function() {
      let orderTotalPrice = 0
      this.items.forEach(product => {
        orderTotalPrice += product.price * product.quantity
      })
      return orderTotalPrice
    }
  },
}
</script>

<style lang="scss" scoped>
.order-item-wrapper {
  padding: 0px !important;
}

.line {
  width: auto;
  height: 0;
  border: 0.4px solid black;
}

.vertical-line {
  border-left: 0.6px solid $dark-grey;
  height: 100%;
}
</style>