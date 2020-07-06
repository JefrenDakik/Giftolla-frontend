<template>
  <div>
    <AddressItem v-for="(address, index) in addresses" :key="address.id"
      :removable="removable" :address="address" :selectedAddressId="selectedAddressId" :index="index"
      @selectAddress="onSelectAddress" @editAddress="onEditAddress"/>

    <div class="add-address d-flex align-items-center justify-content-center w-100 clickable py-2"
      @click="showAddressForm">
      <b-img class="plus-icon" src="~/assets/images/icons/plus.png"></b-img>
    </div>
  </div>
</template>

<script>
import AddressItem from '@/components/BeUnique/shipping/AddressItem'
import { mapActions } from 'vuex'

export default {
  name: 'AddressesList',
  components: {
    AddressItem
  },
  props: {
    addresses: {
      type: Array,
      required: true,
    },
    removable: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      selectedAddressId: this.addresses[0].id
    }
  },
  methods: {
    ...mapActions({
      setOrderSelectedAddress: 'order/setSelectedAddress'
    }),
    async onSelectAddress(selectedAddress) {
      this.selectedAddressId = selectedAddress.id
      
      await this.setOrderSelectedAddress(selectedAddress)
    },
    showAddressForm() {
      this.$emit('showAddressForm')
    },
    onEditAddress(address) {
      this.$emit('editAddress', address)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.add-address {
  border: 1px solid $dark-grey;
  border-radius: 5px;
}

.plus-icon {
  width: 4em;
  height: 4em;
}
</style>