<template>
  <div class="text-center">
    <h1 class="bnq stoner font-xxl mt-5">
      Thank You!
    </h1>
    <p class="mt-5">Thank you for choosing giftolla! <br>
    Your order has been placed</p>

    <AppButton @click="goToHomePage" class="mt-5">
      BACK TO HOME PAGE
    </AppButton>
  </div>
</template>

<script>
export default {
  name: 'ThankYou',
  methods: {
    goToHomePage() {
      this.$router.push({name: 'index'})
    }
  }
}
</script>