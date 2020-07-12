<template>
  <div class="my-5">
    <h1 class="bnq stoner font-xxl mb-4 text-center">
      My Profile
    </h1>

    <b-tabs card nav-wrapper-class="nav-wrapper-class" >
      <b-tab title="ACCOUNT" title-link-class="title-link-class">
        
      </b-tab>

      <b-tab title="ORDERS" title-link-class="title-link-class">
        <OrdersList class="col-sm-8 center"/>
      </b-tab>

      <b-tab title="PAYMENT METHODS" title-link-class="title-link-class">
        <PaymentInformation class="col-sm-8 center" removable/>
      </b-tab>

      <b-tab title="SHIPPING ADDRESSES" title-link-class="title-link-class">
        <ShippingInformation class="col-sm-8 center" removable/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import PaymentInformation from '@/components/BeUnique/payment/PaymentInformation'
import ShippingInformation from '@/components/BeUnique/shipping/ShippingInformation'
import OrdersList from '@/components/BeUnique/order/OrdersList'

export default {
  middleware: 'isAuth',
  components: {
    PaymentInformation,
    ShippingInformation,
    OrdersList,
  }
}
</script>

<style lang="scss" scoped>
.center{
  margin:0 auto;
}
</style>