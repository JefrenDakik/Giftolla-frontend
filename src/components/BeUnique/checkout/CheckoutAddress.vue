<template>
  <div class="d-flex flex-column">
    <h4 class="bnq rubik-bold font-xl">SHIPPING INFORMATION</h4>

    <div class="shipping-information-box font-weight-bold px-4 pt-4 pb-3">
      <ShippingInformation/>
    </div>
  </div>
</template>

<script>
import ShippingInformation from '@/components/BeUnique/shipping/ShippingInformation'

export default {
  name: 'CheckoutAddress',
  components: {
    ShippingInformation,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.shipping-information-box {
  border: 0.8px solid $dark-grey;
  border-radius: 5px;
}
</style>