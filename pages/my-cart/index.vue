<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="bnq stoner font-xl mb-5">
      My Cart
    </h1>
    <p>Your cart is currently empty</p>
    <AppButton class="bnq button-md mt-5">
      Shop Now
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/App/form/AppButton";

export default {
  components: {
    AppButton
  }
}
</script>