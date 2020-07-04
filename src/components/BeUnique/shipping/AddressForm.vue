<template>
  <div class="mt-4">
    <div class="bnq rubik-medium font-l">ADD A NEW SHIPPING ADDRESS</div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset"
        class="d-flex flex-column align-items-center form-group row">
        <AppSelect name="Country" class="col-12"
          :options="countries" :selectedId="form.countryId" @change="onChange"/>

        <AppInput
          name="fullName" label="Full Name" rules="required" 
          class="col-12 mt-1"
          v-model="form.fullName">
        </AppInput>

        <AppInput
          name="AddressLine1" label="Address Line 1" rules="required" 
          class="col-12 mt-1" placeholder="Street address, P.O box, company name, c/o"
          v-model="form.addressLine1">
        </AppInput>

        <AppInput
          name="AddressLine2" label="Address Line 2" rules="required" 
          class="col-12 mt-1" placeholder="Apartment, suite, unit, building, floor, etc"
          v-model="form.addressLine2">
        </AppInput>

        <AppInput
          name="City" label="City" rules="required" 
          class="col-12 mt-1"
          v-model="form.city">
        </AppInput>

        <AppInput
          name="State" label="State / Province / Region" rules="required" 
          class="col-12 mt-1"
          v-model="form.state">
        </AppInput>

        <AppInput
          name="Zip Code" label="Zip Code" rules="required" 
          class="col-12 mt-1"
          v-model="form.zipCode">
        </AppInput>

        <AppInput
          name="Phone Number" label="Phone Number" rules="required" 
          class="col-12 mt-1"
          v-model="form.phoneNumber">
        </AppInput>

        <AppTextArea
          name="Instructions" label="Do we need additional instructions to find this address?(Optional)" rules="" 
          class="col-12 mt-1" placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"
          v-model="form.instructions">
        </AppTextArea>

        <AppInput
          name="Security Code" label="Do we need a security code or a call box number to access this building?(Optional)" rules="" 
          class="col-12 mt-1" placeholder="1234"
          v-model="form.buildingSecurityCode">
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
  name: 'AddressForm',
  props: {
    address: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        id: null,
        fullName: null,
        addressLine1: null,
        addressLine2: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNumber: null,
        instructions: null,
        buildingSecurityCode: null,
        countryId: null
      }
    }
  },
  computed: {
    ...mapGetters({
      countries: 'static/getCountries'
    }),
  },
  watch: {
    address: {
      immediate: true, 
      handler (address) {
        if (address) {
          this.form = { ...address }
        } else {
          this.form = _.mapValues(this.form, () => null);
        }
      }
    }
  },
  methods: {
    ...mapActions({
      saveAddress: 'address/saveAddress'
    }),
    onChange(selectedCountryId) {
      this.form.countryId = selectedCountryId
    },
    cancel() {
      this.$emit('hideForm')
    },
    async onSubmit() {
      try {
        const address = _.pick(this.form, [
        'id',
        'fullName',
        'addressLine1',
        'addressLine2',
        'city',
        'state',
        'zipCode',
        'phoneNumber',
        'instructions',
        'buildingSecurityCode',
        'countryId'
      ])
      const resp = await this.saveAddress(address)

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