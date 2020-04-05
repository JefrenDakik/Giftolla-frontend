<template>
  <div>
    <h1 class="bnq stoner font-xl text-center">
      Our Products
    </h1>
    <MainProductsList :products="products"/>
  </div>
</template>

<script>
import MainProductsList from "@/components/BeUnique/products/MainProductsList";
import { mapState } from "vuex";

export default {
  name: 'Products',
  components: {
    MainProductsList
  },
  computed: {
    ...mapState({
      products: state => state.products.productsList,
    }),
  },
}
</script>