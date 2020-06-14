<template>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<script>
import ProductDetails from "@/components/BeUnique/product/productDetails"
import { mapGetters } from "vuex"

export default {
  components: {
    ProductDetails,
  },
  computed: {
    ...mapGetters({
      getProductById: 'product/getProductById'
    }),
    product() {
      const id = Number(this.$route.params.id)
      return this.getProductById(id)
    }
  },
}
</script>