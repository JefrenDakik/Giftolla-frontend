<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1 class="bnq stoner font-xl mb-5">
      My Cart
    </h1>
    <!-- <p>Your cart is currently empty</p> -->

    <CartProductList/>

    <AppButton class="bnq button-md mt-5">
      Shop Now
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/App/form/AppButton";
import CartProductList from "@/components/BeUnique/cart/CartProductList"

export default {
  components: {
    AppButton,
    CartProductList
  }
}
</script>