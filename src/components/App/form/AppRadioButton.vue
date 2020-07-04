<template>
  <div>
    <input type="radio" v-bind="$attrs" @change="onChange">
  </div>
</template>

<script>
export default {
  name: 'AppRadioButton',
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

input[type='radio']{
  width: 1em !important;
  height: 1em!important;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance:none;
  background: white;
  font-size: 1.2em;
  outline: none;
  box-shadow: 0 0 0 0.5px black !important;
  border: 2px solid white !important;
  border-radius: 100%;
  margin: 0;
}

input[type='radio']:checked{
  width: 1em !important;
  height: 1em !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance:none;
  border-radius: 100%;
  background: $galapagos-green;
  box-shadow: 0 0 0 0.5px black !important;
  font-size: 1.2em;
  outline: none;
  border: 2px solid white !important;
}

</style>