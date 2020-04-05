<template>
  <div class="d-flex flex-row">
    <div class="row w-50">
      <div class="col-md-1">
      </div>

      <div class="col-md-11">
        <b-img :src="product.img" class="w-100"></b-img>
        <div class="d-flex flex-row mt-4">
          <div class="">
            DESCRIPTION
          </div>
          <div class="d-flex flex-column border-left border-dark ml-2 pl-2">
            <div>Number of pages:</div>
            <div>Size:</div>
            <div>Paper quality:</div>
            <div>Cover Type:</div>
            <div>Weight:</div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column w-50 pl-4">
      <div>
        <span>{{ product.title }}</span>

        <b-img src="~/assets/images/icons/heart.png" class="heart-icon img-fluid" fluid  alt="Responsive image"/>
      </div>

      <div>{{ product.price }}$</div>

      <div>{{ product.description }}</div>

      <div v-if="pickedColor.availability">OUT OF STOCK*</div>

      <AppCounter label="Quantity"/>

      <AppColorPicker :colors-list="product.colors" @update-color="updateColor"/>
    </div>
  </div>
</template>

<script>
import AppCounter from "@/components/App/form/AppCounter"
import AppColorPicker from "@/components/App/form/AppColorPicker"

export default {
  name: 'ProductDetails',
  components: {
    AppCounter,
    AppColorPicker,
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pickedColor: this.product.colors[0]
    }
  },
  methods: {
    updateColor(color) {
      this.pickedColor = color
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-icon {
  width: 2rem;
  height: 2rem;
}
</style>
