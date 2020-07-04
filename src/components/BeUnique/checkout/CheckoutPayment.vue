<template>
  <div class="d-flex flex-column">
    <OrderSummary :cart="cart"/>

    <h4 class="bnq rubik-bold font-xl">PAYMENT METHOD</h4>
    <b-card no-body>
      <b-tabs card nav-wrapper-class="nav-wrapper-class" >
        <b-tab v-if="selectedAddressCountry == 'Lebanon'" title="CASH ON DELIVERY" title-link-class="title-link-class">
          <b-card-text>This option is only available in Lebanon</b-card-text>
        </b-tab>

        <b-tab title="MASTER CARD" title-link-class="title-link-class">
          <PaymentInformation/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import OrderSummary from '@/components/BeUnique/order/OrderSummary'
import PaymentInformation from '@/components/BeUnique/payment/PaymentInformation'
import { mapGetters } from 'vuex'

export default {
  name: 'CheckoutPayment',
  components: {
    OrderSummary,
    PaymentInformation,
  },
  computed: {
    ...mapGetters({
      getOrderSelectedAddress: 'order/getSelectedAddress',
      getCountryById: 'static/getCountryById',
      cart: 'cart/getCart'
    }),
    selectedAddressCountry() {
      const selectedAddress = this.getOrderSelectedAddress
      const countryName =  this.getCountryById(selectedAddress.countryId).name
      return countryName
    }
  },
}
</script>

<style lang="scss" scoped>

</style>