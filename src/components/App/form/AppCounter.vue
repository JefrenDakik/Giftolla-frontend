<template>
  <div class="d-flex flex-column counter-wrapper">
    <div class="w-100">{{ label }}</div>

    <div class="d-flex flex-row" :class="{ 'justify-content-center': center}">
      <button @click="decrement" class="counter-button ">-</button>

      <input type="text" class="counter-input mx-2 text-center " readonly :value="count">

      <button @click="increment" class="counter-button ">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCounter',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 1,
    },
    center: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      count: this.value
    }
  },
  methods: {
    decrement() {
      if (this.count > 1) {
        this.count--  
        // this.$emit()
      }
    },
    increment() {
      this.count++
    },
  }
}
</script>

<style lang="scss" scoped>
  .counter-button {
    background-color: white;
    width: 2.4rem;
    height: 2.4rem;
    border: 0.8px solid $dark-grey;
    outline: none;
  }

  .counter-input {
    width: 2.8rem;
    height: 2.4rem;
    border: 0.8px solid $dark-grey;
    margin: 0px;
  }

  .counter-input:focus {
    box-shadow: 0 0 0 white !important;
    padding: none;
    margin: none;
    outline: none;
    border: 0.8px solid $dark-grey !important;
  }

  .counter-wrapper {
    // width: 20vw;
  }
</style>