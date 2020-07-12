<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="bnq stoner font-xxl mb-5">
      Wishlist
    </h1>

    <p v-if="getWishlist.length == 0">Your Wishlist is empty</p>
    <client-only v-else>
      <WishlistProductList :wishlist="getWishlist"/>
    </client-only>

    <div class="d-flex flex-row mt-5 px-md-5" 
      :class="className">
      <AppButton class="bnq mr-2">
        CONTINUE SHOPPING
      </AppButton>

      <AppButton v-if="getWishlist.length != 0" class="bnq"
        @click="addToCart">
        ADD TO CART
      </AppButton>
    </div>
  </div>
</template>

<script>
import WishlistProductList from '@/components/BeUnique/wishlist/WishlistProductList'
import { mapGetters, mapActions } from 'vuex'

export default {
  components:{
    WishlistProductList
  },
  computed: {
    ...mapGetters({
      getWishlist: 'wishlist/getWishlist',
      isAuthenticated: 'authentication/isAuthenticated',
    }),
    className: function () {
      if(this.getWishlist.length == 0) {
        return 'align-items-center'
      } else {
        return 'ml-auto'
      }
    },
  },
  methods: {
    ...mapActions({
      saveCart: 'cart/saveCart',
      removeProductFromWishlist: 'wishlist/removeProductFromWishlist'
    }),
    async addToCart() {
      const cartItems = []
      this.getWishlist.forEach(product => {
        if(product.checked && !product.pickedColor.outOfStock) {
          cartItems.push({
            productId: product.pickedColor.productId,
            quantity: product.quantity,
          })
          this.removeProductFromWishlist(product.productId)
        }
      })

      await this.saveCart(cartItems)

      this.$router.push({ name: 'my-cart' })
    }
  }
}
</script>