<template>
  <div class="d-flex flex-column color-picker-wrapper">
    <div>Color</div>

    <div class="d-flex flex-row">
      <div v-for="color in colors" :key="color.id" class="color-box mr-2" 
      :style="{ 'background-color': color.hexadecimal}"
      :class="{ bordered: isPicked(color)}" @click="pickColor(color)"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppColorPicker',
  props: {
    colorsList: {
      required: true,
      type: Array,
    }
  },
  data() {
    return {
      colors: this.colorsList,
      pickedColorIndex: 0,
    }
  },
  computed: {
    pickedColor() {
      const pickedColor = this.colors[this.pickedColorIndex]
      this.$emit('update-color', pickedColor)
      return pickedColor
    },
  },
  methods: {
    isPicked(color) {
      return this.pickedColor === color
    },
    pickColor(color) {
      this.pickedColorIndex = this.colors.indexOf(color)
    }
  }
}
</script>

<style lang="scss" scoped>
.color-picker-wrapper {
  width: 20vw;
}

.color-box {
  width: 4em;
  height: 2em;
}

.bordered {
  border: 1px solid black;
}
</style>