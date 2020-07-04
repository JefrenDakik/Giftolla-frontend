<template>
  <div class="d-flex flex-column product-item mx-2 pb-3">
    <AppCarousel :images="product.images"/>

    <h2 class="bnq px-1 rubik font-l mt-3 text-center">
      <nuxt-link :to='`product/` + product.id' class="clickable">
        {{ product.name }}
      </nuxt-link>
      <span class="ml-2">{{ product.price }}$</span>
    </h2>

    <div class="d-flex flex-row justify-content-between px-4">
      <div class="bnq rubik-light font-md">{{ product.infoParagragh }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>

.product-item {
  max-width: 31vw;
  border: 0.4px solid $dark-grey;
}

</style>