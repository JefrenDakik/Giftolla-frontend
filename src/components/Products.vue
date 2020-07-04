<template>
  <div>
    <h1 class="bnq stoner font-xxl text-center">
      Books
    </h1>
    <MainProductsList :products="getProducts" filterCategory="Books"/>
    <h1 class="bnq stoner font-xxl text-center mt-4">
      Cards
    </h1>
    <MainProductsList :products="getProducts" filterCategory="Cards"/>
  </div>
</template>

<script>
import MainProductsList from "@/components/BeUnique/products/MainProductsList";
import { mapGetters } from "vuex";

export default {
  name: 'Products',
  components: {
    MainProductsList
  },
  computed: {
    ...mapGetters({
      getProducts: 'product/getProducts'
    }),
  },
}
</script>