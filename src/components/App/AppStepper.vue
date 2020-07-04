<template>
  <div class="d-flex flex-row">
    <div v-for="(step, index) in steps" :key="index" class="d-flex flex-row">
      <div class="d-flex flex-column">
        <AppRadioButton :checked="index <= currentStepIndex" class="d-flex align-self-center" disabled/>
        <div class="mt-1">{{ step }}</div>
        
      </div>
      <div v-if="index != steps.length - 1" class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppStepper',
  props: {
    steps: {
      type: Array,
      required: true
    },
    currentStepIndex: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.line {
  width: 6em;
  height: 0;
  border: 0.3px solid black;
  margin-top: 0.5em;
}
</style>