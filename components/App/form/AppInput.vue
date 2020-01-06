<template>
  <div class="d-flex flex-column">
    <Label :for="name" class="bnq font-l">{{ label }}</Label>
    <ValidationProvider :rules="rules" v-slot="{ errors }">
      <input
        :name="name"
        v-model="value$"
        :readonly="readOnly"
        class=" form-control input-lg"/>
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
      name: String,
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
      }
    }
  }
</script>