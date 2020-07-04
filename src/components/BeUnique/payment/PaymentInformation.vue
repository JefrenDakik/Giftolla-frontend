<template>
  <div class="d-flex flex-column">
    <template v-if="paymentCards.length > 0">
      <h6 class="bnq rubik-medium mb-2 font-l">CHOOSE A DEBIT/CREDIT CARD</h6>
            
      <client-only>
        <PaymentCardsList v-if="paymentCards.length > 0" :cardsList="paymentCards"
          @showPaymentCardForm="onShowPaymentCardForm" @editPaymentCard="onEditPaymentCard"/>
      </client-only>
    </template>

    <PaymentCardForm v-if="showPaymentCardForm" :paymentCard="editPaymentCard" @hideForm="onHideForm"/>
  </div>
</template>

<script>
import PaymentCardsList from '@/components/BeUnique/payment/PaymentCardsList'
import PaymentCardForm from '@/components/BeUnique/payment/PaymentCardForm'
import OrderSummary from '@/components/BeUnique/order/OrderSummary'
import { mapGetters } from 'vuex'

export default {
  name: 'PaymentInformation',
  components: {
    PaymentCardsList,
    PaymentCardForm,
    OrderSummary,
  },
  data() {
    return {
      showPaymentCardForm: false,
      editPaymentCard: null,
      selectedCardId: null,
    }
  },
  computed: {
    ...mapGetters({
      paymentCards: ['payment/getCards'],
    }),
  },
  mounted() {
    if(this.paymentCards.length == 0) {
      this.showPaymentCardForm = true
    } 
    else {
      this.selectedCardId = this.paymentCards[0].id
    }
  },
  methods: {
    onShowPaymentCardForm() {
      this.editPaymentCard = null
      this.showPaymentCardForm = true
    },
    onHideForm() {
      this.editPaymentCard = null
      this.showPaymentCardForm = false
    },
    onEditPaymentCard(editPaymentCard) {
      this.editPaymentCard = editPaymentCard
      this.showPaymentCardForm = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>