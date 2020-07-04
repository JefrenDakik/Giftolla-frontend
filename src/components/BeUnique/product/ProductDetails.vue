<template>
  <div class="d-flex flex-row">
    <div class="row w-50">
      <div class="col-md-1">
      </div>

      <div class="col-md-11">
        <AppCarousel :images="product.images"/>

        <div class="bnq mt-3">{{ product.infoParagragh }}</div>

        <div class="d-flex flex-row mt-4">
          <div class="font-weight-bold">
            DESCRIPTION
          </div>
          <div class="d-flex flex-column border-left border-dark mt-1 ml-2 pl-2">
            <div v-for="(value, propertyName, index) in filteredDescription" :key="index">
              <span class="font-weight-bold">{{ propertyName }}: </span> {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column w-50 pl-4">
      <div>
        <span>{{ product.name }}</span>

        <b-img v-if="!isProductInWishlist(pickedColor.productId)" @click="addToWishlist" src="~/assets/images/icons/unwishit.png" 
          class="heart-icon img-fluid ml-3" fluid  alt="Responsive image"/>
        <b-img v-else @click="removeFromWishlist" src="~/assets/images/icons/wishit.png"
          class="heart-icon img-fluid ml-3" fluid  alt="Responsive image"/>
      </div>

      <div class="d-flex flex-row" v-if="pickedColor.salePrice != 0">
        <div class="text-danger mr-2">{{ pickedColor.salePrice }}$</div>
        <del>{{ product.price }}$</del>
      </div>
      <div v-else>
        {{ product.price }}$
      </div>

      <div>{{ product.infoParagraph }}</div>

      <AppCounter @updateCount="onUpdateCount($event)" label="Quantity"
        class="mt-3"/>

      <AppColorPicker :colors-list="product.colors" @update-color="onUpdateColor"
        class="mt-2"/>
      <div v-if="pickedColor.outOfStock" class="text-danger">COLOR OUT OF STOCK*</div>

      <div class="bnq rubik-light font-xs mt-2 mb-1">shipping calculated at checkout</div>
      <AppButton class="bnq" @click="addToCart">
        ADD TO CART
      </AppButton>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 1,
      pickedColor: this.product.colors[0]
    }
  },
  computed: {
    ...mapGetters({
      isProductInWishlist: 'wishlist/isProductInWishlist'
    }),
    filteredDescription() {
      return _.pickBy(this.product.description, (value, key) => {
        return value != null
      })
    }
  },
  methods: {
    ...mapActions({
      saveCartProduct: 'cart/saveCartProduct',
      saveWishlistProduct: 'wishlist/saveWishlistProduct',
      removeProductFromWishlist: 'wishlist/removeProductFromWishlist'
    }),
    onUpdateCount(count) {
      this.quantity = count
    },
    onUpdateColor(color) {
      this.pickedColor = color
    },
    async addToWishlist() {
      try {
        const wishlistItem = {
          productId: this.pickedColor.productId,
          quantity: this.quantity,
          checked: false,
        }
        await this.saveWishlistProduct(wishlistItem)
      } catch (error) {
        console.log(error)
      }
    },
    async removeFromWishlist() {
      await this.removeProductFromWishlist(this.pickedColor.productId)
    },
    async addToCart() {
      if(this.pickedColor.outOfStock) {
        return
      }

      const cartItem = {
        productId: this.pickedColor.productId,
        quantity: this.quantity
      }
      await this.saveCartProduct(cartItem)

      this.$router.push({ name: 'my-cart' })
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-icon {
  width: 1.8em;
  height: 1.8em;
}
</style>
