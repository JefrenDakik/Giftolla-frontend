<template>
  <div class="mt-4">
    <div class="bnq rubik-medium font-l">SETUP YOUR CREDIT OR DEBIT CARD</div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset"
        class="d-flex flex-column align-items-center form-group row">

        <AppInput
          name="First Name" label="First Name" rules="required" 
          class="col-12 mt-1"
          v-model="form.firstName">
        </AppInput>

        <AppInput
          name="Last Name" label="Last Name" rules="required" 
          class="col-12 mt-1"
          v-model="form.lastName">
        </AppInput>

        <AppInput
          name="Card Number" label="Card Number" rules="required" 
          class="col-12 mt-1"
          v-model="form.cardNumber">
        </AppInput>

        <AppInput
          name="Expiration Date" label="Expiration Date" rules="required" 
          class="col-12 mt-1"
          v-model="form.expirationDate">
        </AppInput>

        <AppInput
          name="Security Code" label="Security Code" rules="required" 
          class="col-12 mt-1"
          v-model="form.securityCode">
        </AppInput>

        <div class="col-12 row d-flex flex-row justify-content-end mt-4">
          <AppButton type="reset" class="bnq mr-3" secondary
            @click="cancel">
            Cancel
          </AppButton>

          <AppButton class="bnq" type="submit" secondary>
            Save
          </AppButton>
        </div>
        
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PaymentCardForm',
  props: {
    paymentCard: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        id: null,
        fistName: null,
        lastName: null,
        cardNumber: null,
        expirationDate: null,
        securityCode: null,
      }
    }
  },
  computed: {
    ...mapGetters({
    }),
  },
  watch: {
    paymentCard: {
      immediate: true, 
      handler (paymentCard) {
        if (paymentCard) {
          this.form = { ...paymentCard }
        } else {
          this.form = _.mapValues(this.form, () => null);
        }
      }
    }
  },
  methods: {
    ...mapActions({
      savePaymentCard: 'payment/saveCard'
    }),
    onChange(selectedCountryId) {
      this.form.countryId = selectedCountryId
    },
    cancel() {
      this.$emit('hideForm')
    },
    async onSubmit() {
      try {
        const paymentCard = _.pick(this.form, [
        'id',
        'fistName',
        'lastName',
        'cardNumber',
        'expirationDate',
        'securityCode',
      ])
      const resp = await this.savePaymentCard(paymentCard)

      if(resp) {
          this.$emit('hideForm')
      }

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>