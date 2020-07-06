<template>
  <div class="my-5">
    <h1 class="bnq stoner font-xxl mb-4 text-center">
      My Profile
    </h1>

    <b-tabs card nav-wrapper-class="nav-wrapper-class" >
      <b-tab title="MY ACCOUNT" title-link-class="title-link-class">
        
      </b-tab>
      <b-tab title="MY ORDERS" title-link-class="title-link-class">
        
      </b-tab>
      <b-tab title="PAYMENT METHODS" title-link-class="title-link-class">
        <PaymentInformation removable/>
      </b-tab>
      <b-tab title="SHIPPING ADDRESSES" title-link-class="title-link-class">
        <ShippingInformation removable/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import PaymentInformation from '@/components/BeUnique/payment/PaymentInformation'
import ShippingInformation from '@/components/BeUnique/shipping/ShippingInformation'

export default {
  middleware: 'auth',
  components: {
    PaymentInformation,
    ShippingInformation,
  }
}
</script>