<template>
  <div>
    <button 
      class="app-button btn"
      :type="type" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  inheritAttrs: true,
  props: {
    type: {
      default: 'button',
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.app-button {
  width: 100%;
  border-radius: 6px;
  background-color: $galapagos-green;
  color: white;
  width: auto;
}

.app-button:hover {
  box-shadow: 0 0 5px $galapagos-green;
  border: 1px solid $galapagos-green;
}

</style>