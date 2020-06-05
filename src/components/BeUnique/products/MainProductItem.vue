<template>
  <div class="d-flex flex-column product-item px-3">
    <b-img class="img w-100" :src="product.img"/>

    <h2 class="bnq pl-4 aileron font-l mt-3">
      <nuxt-link :to='`product/` + product.id' class="clickable">
        {{ product.title }}
      </nuxt-link>
      <span class="ml-2">{{ product.price }}$</span>
    </h2>

    <div class="d-flex flex-row justify-content-between px-4">
      <div class="bnq aileron-thin font-md">{{ product.description }}</div>
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
}

</style>