<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="bnq stoner font-xl mb-5">
      Wishlist
    </h1>

    <p v-if="getWishlist.length == 0">Your Wishlist is empty</p>
    <WishlistProductList v-else :wishlist="getWishlist"/>

    <div class="d-flex flex-row mt-5 px-md-5" 
      :class="className">
      <AppButton class="bnq mr-2">
        CONTINUE SHOPPING
      </AppButton>

      <AppButton v-if="getWishlist.length != 0" class="bnq"
        @click="addProductsToCart">
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
  middleware: 'auth',
  computed: {
    ...mapGetters({
      getWishlist: 'wishlist/getWishlist',
      isAuthenticated: 'auth/isAuthenticated'
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
    addProductsToCart() {
      
    }
  }
}
</script>