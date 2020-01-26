<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="bnq stoner font-xl mb-5">
      Wishlist
    </h1>
    <p>No products were added to the wishlist</p>
    <AppButton class="bnq button-md mt-5">
      View Products
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