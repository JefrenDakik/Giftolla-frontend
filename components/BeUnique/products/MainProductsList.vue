<template>
  <div class="products-list">
    <div class="d-flex flex-row justify-content-between mt-3"
      v-for="(chunk, index) in productChunks" :key="index">
      <MainProductItem
        v-for="product in chunk" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import MainProductItem from "@/components/BeUnique/products/MainProductItem";
import _ from 'lodash'

export default {
  name: 'MainProductsList',
  components: {
    MainProductItem
  },
  props: {
    products: {
      type: Array,
      required: true,
    }
  },
  computed: {
    productChunks() {
      return _.chunk(Object.values(this.products), 3)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>