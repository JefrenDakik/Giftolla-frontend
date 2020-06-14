<template>
  <div class="d-flex flex-column">
    <Label :for="$attrs.name" class="bnq font-l">{{ label }}</Label>
    <ValidationProvider :name="$attrs.name" :rules="rules" v-slot="{ errors }" :vid="$attrs.vid">
      <input
        :name="$attrs.name"
        :type="$attrs.type"
        :multiple="$attrs.multiple"
        v-model="value$"
        @change="emitEvent"
        :readonly="readOnly"
        class="bnq form-control"/>
      <div class="text-danger">{{ errors[0] }}</div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'AppInput',
  components: {
    ValidationProvider,
  },
  inheritAttrs: true,
  props: {
    label: String,
    value: {},
    readOnly: Boolean,
    rules: String,
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
    },
  },
  methods: {
    emitEvent(event) {
      this.$emit('change', event)
    }
  }
}
</script>