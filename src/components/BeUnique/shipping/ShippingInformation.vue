<template>
  <div class="d-flex flex-column">
    <template v-if="addresses.length > 0">
      <h6 class="bnq rubik-medium mb-2 font-l">CHOOSE A SHIPPPING ADDRESS</h6>
      <client-only>
        <AddressesList :addresses="addresses" :removable="removable"
          @showAddressForm="onShowAddressForm" @editAddress="onEditAddress"/>
      </client-only>
    </template>

    <AddressForm v-if="showAddressForm" :address="editAddress" @hideForm="onHideForm"/>
  </div>
</template>

<script>
import AddressesList from '@/components/BeUnique/shipping/AddressesList'
import AddressForm from '@/components/BeUnique/shipping/AddressForm'
import { mapGetters } from 'vuex'

export default {
  name: 'ShippingInformation',
  components: {
    AddressesList,
    AddressForm,
  },
  props: {
    removable: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      showAddressForm: false,
      editAddress: null,
      selectedAddressId: null,
    }
  },
  computed: {
    ...mapGetters({
      addresses: ['address/getAddresses']
    })
  },
  watch: {
    addresses(addresses) {
      if(addresses.length == 0) {
        this.showAddressForm = true
      }
    }
  },
  mounted() {
    if(this.addresses.length == 0) {
      this.showAddressForm = true
    } else {
      this.selectedAddressId = this.addresses[0].id
    }
  },
  methods: {
    onShowAddressForm() {
      this.editAddress = null
      this.showAddressForm = true
    },
    onHideForm() {
      this.editAddress = null
      this.showAddressForm = false
    },
    onEditAddress(editAddress) {
      this.editAddress = editAddress
      this.showAddressForm = !this.showAddressForm
    }
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