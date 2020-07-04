<template>
  <div class="address-item d-flex flex-row justify-content-between align-items-center py-3 px-4 my-1"
    :class="{ 'background-green': selected }">
    <AppRadioButton @change="onChange" :checked="selected" name="AddressGroup"/>
    
    <div class="d-flex flex-column text-center w-75">
      <div>ADDRESS {{ index + 1 }}</div>
      <div class="bnq rubik-light font-xs">
        {{ country.name }}/{{ address.state }}/{{ address.addressLine1 }}/
        {{ address.addressLine2 }}/{{ address.phoneNumber }}/{{ address.zipCode }}/
        {{ address.fullName }}/{{ address.instructions }}
      </div>
    </div>

    <b-img src="~/assets/images/icons/edit.png" class="edit-icon" @click="editAddress"></b-img>
  </div>
</template>

<script>
export default {
  name: 'AddressItem',
  props: {
    address: {
      type: Object,
      required: true,
    },
    selectedAddressId: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true,
    }
  },
  computed: {
    selected() {
      return this.selectedAddressId == this.address.id
    },
    country() {
      return this.$store.getters['static/getCountryById'](this.address.countryId)
    }
  },
  created() {
    if (this.selected) {
      this.$emit('selectAddress', this.address)
    }
  },
  methods: {
    onChange() {
      this.$emit('selectAddress', this.address)
    },
    editAddress() {
      this.$emit('editAddress', this.address)
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

.address-item {
  border: 1px solid $dark-grey;
  border-radius: 5px;
}

.background-green {
  background-color: $galapagos-light-green;
  border: 1px solid $galapagos-green;
}
</style>