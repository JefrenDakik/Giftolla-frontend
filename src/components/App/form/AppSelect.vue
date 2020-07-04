<template>
  <div>
    <ValidationProvider rules="excluded:0" name="select" v-slot="{ errors }">
      <select class="form-control" v-model="value">
        <option value="0">Please Choose a {{ $attrs.name }}</option>
        <option v-for="option in options" :key="option.id" :value="option.id">
          {{ option.name }}
        </option>
      </select>
      <span class="text-danger">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      default: []
    },
    selectedId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: 0
    }
  },
  watch: {
    value(id) {
      this.$emit('change', Number(id))
    },
    selectedId: {
      immediate: true,
      handler(id) {
        this.value = id
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>