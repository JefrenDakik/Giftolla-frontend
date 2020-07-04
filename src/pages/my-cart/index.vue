<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1 class="bnq stoner font-xxl mb-5">
      My Cart
    </h1>
    
    <p v-if="getCart.length == 0">Your cart is currently empty</p>
    <client-only v-else>
      <CartProductList :cart="getCart"/>
    </client-only>

    <div class="d-flex flex-row mt-5 px-md-5" 
      :class="className">
      <AppButton class="bnq mr-2">
        CONTINUE SHOPPING
      </AppButton>

      <AppButton v-if="getCart.length != 0" class="bnq"
        @click="checkout">
        CHECKOUT
      </AppButton>
    </div>
    
  </div>
</template>

<script>

import CartProductList from "@/components/BeUnique/cart/CartProductList"
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CartProductList
  },
  computed: {
    ...mapGetters({
      getCart: 'cart/getCart',
      isAuthenticated: 'auth/isAuthenticated'
    }),
    className: function () {
      if(this.getCart.length == 0) {
        return 'align-items-center'
      } else {
        return 'ml-auto'
      }
    }
  },
  methods: {
    ...mapActions({
      
    }),
    checkout() {
      if(this.isAuthenticated) {
        this.$router.push({ name: 'checkout' })
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  },
}
</script>