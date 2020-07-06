<template>
  <div>
    <PaymentCardItem v-for="(card) in cardsList" :key="card.id"
      :card="card" :selectedCardId="selectedCardId" :removable="removable"
      @selectCard="onSelectPaymentCard" @editCard="onEditPaymentCard"/>

    <div class="add-payment-card d-flex align-items-center justify-content-center w-100 clickable py-2"
      @click="showPaymentCardForm">
      <b-img class="plus-icon" src="~/assets/images/icons/plus.png"></b-img>
    </div>
  </div>
</template>

<script>
import PaymentCardItem from '@/components/BeUnique/payment/PaymentCardItem'

export default {
  name: 'PaymentCardsList',
  components: {
    PaymentCardItem
  },
  props: {
    cardsList: {
      type: Array,
      required: true,
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedCardId: this.cardsList[0].id
    }
  },
  methods: {
    onSelectPaymentCard(selectedCard) {
      this.selectedCardId = selectedCard.id
    },
    showPaymentCardForm() {
      this.$emit('showPaymentCardForm')
    },
    onEditPaymentCard(card) {
      this.$emit('editPaymentCard', card)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.add-payment-card {
  border: 1px solid $dark-grey;
  border-radius: 5px;
}

.plus-icon {
  width: 4em;
  height: 4em;
}
</style>