<template>
  <div class="card-item d-flex flex-row justify-content-between align-items-center py-3 px-4 my-1"
    :class="{ 'background-green': selected && !removable }">
    <div v-if="removable"  @click="onRemove"
      class="bnq font-l font-weight-bold clickable">
      x
    </div>
    <AppRadioButton v-else @change="onChange" :checked="selected" name="cardGroup"/>
    
    <div class="d-flex flex-column text-center w-75">
      <div>MASTER CARD</div>
      <div class="bnq rubik-light font-xs">
        hello
      </div>
    </div>

    <b-img src="~/assets/images/icons/edit.png" class="edit-icon" @click="editCard"></b-img>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PaymentCardItem',
  props: {
    card: {
      type: Object,
      required: true,
    },
    selectedCardId: {
      type: Number,
      required: true
    },
    removable: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    selected() {
      return this.selectedCardId == this.card.id
    },
  },
  methods: {
    ...mapActions({
      removeCard: 'payment/removeCard'
    }),
    onChange() {
      this.$emit('selectCard', this.card)
    },
    editCard() {
      this.$emit('editCard', this.card)
    },
    async onRemove() {
      const cardId = this.card.id
      await this.removeCard(cardId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.edit-icon {
  width: 20px;
  height: 20px;
}

.card-item {
  border: 1px solid $dark-grey;
  border-radius: 5px;
}

.background-green {
  background-color: $galapagos-light-green;
  border: 1px solid $galapagos-green;
}
</style>