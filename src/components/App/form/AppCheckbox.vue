<template>
  <div>
    <input type="checkbox" v-bind="$attrs" @change="onChange">
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  inheritAttrs: false,
  methods: {
    onChange(event) {
      this.$emit('change', event.target.checked)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

input[type='checkbox']{
  width: 0.5em !important;
  height: 0.5em!important;
  // margin: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance:none;
  outline: 1px solid $dark-grey;
  box-shadow: none;
  font-size: 2em;

  box-shadow: none !important;
  border: none !important;
}

input[type='checkbox']:checked{
  width: 0.5em !important;
  height: 0.5em !important;
  // margin: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance:none;
  outline: 1px solid $dark-grey;
  background: $galapagos-green;
  box-shadow: none;
  font-size: 2em;

  box-shadow: none !important;
  border: 1px solid white !important;
}

</style>