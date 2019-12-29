<template>
  <div>
    <input
    v-model="value$"
    class="bnq form-input"
    :readonly="readOnly"
  />
  </div>
</template>

<script>
  export default {
    name: 'AppInput',
    inheritAttrs: true,
    props: {
      value: {},
      readOnly: Boolean,
    },
    data() {
      return {
        value$: ""
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(newValue) {
          this.value$ = newValue
        }
      },
      value$(value) {
        this.$emit('input', value)
      }
    }
  }
</script>