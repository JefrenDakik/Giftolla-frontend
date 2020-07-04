<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1 v-if="currentStepIndex != steps.length - 1" class="bnq stoner font-xxl mb-5">
      Checkout
    </h1>
    <AppStepper v-if="currentStepIndex != steps.length - 1" :currentStepIndex="currentStepIndex" 
      :steps="['SHIPPING', 'PAYMENT', 'THANK YOU']" class="mb-5"/>

    <component :is="currentStepComponent" class="col-sm-8"></component>

    <div class="d-flex flex-row justify-content-between col-sm-8 mt-4">
      <AppButton v-if="currentStepComponent != 'ThankYou'" @click="back">
        BACK
      </AppButton>

      <AppButton v-if="currentStepComponent == 'CheckoutAddress'" @click="continueToPayment">
        CONTINUE TO PAYMENT
      </AppButton>

      <AppButton v-if="currentStepComponent == 'CheckoutPayment'" @click="placeOrder"
        background-color="green">
        PLACE ORDER
      </AppButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckoutAddress from '@/components/BeUnique/checkout/CheckoutAddress'
import CheckoutPayment from '@/components/BeUnique/checkout/CheckoutPayment'
import ThankYou from '@/components/BeUnique/checkout/ThankYou'

const steps = ['CheckoutAddress', 'CheckoutPayment', 'ThankYou']

export default {
  components: {
    CheckoutAddress,
    CheckoutPayment,
    ThankYou,
  },
  data() {
    return {
      steps: steps,
      currentStepIndex: 0,
    }
  },
  computed: {
    ...mapGetters({
      getOrderSelectedAddress: 'order/getSelectedAddress'
    }),
    currentStepComponent() {
      return steps[this.currentStepIndex]
    }
  },
  methods: {
    back() {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex--
      } else {
        this.$router.push({ name:'my-cart' })
      }
    },
    nextStep() {
      if (this.currentStepIndex < this.steps.length - 1) {
        this.currentStepIndex++
      }
    },
    async continueToPayment() {
      if(this.getOrderSelectedAddress == null) {
        return
      }
      this.nextStep()
    },
    async placeOrder() {
      this.nextStep()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>