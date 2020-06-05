<template>
  <div class="price-tag text-center">
    <span class="align-middle">{{ price + currency}}</span>
  </div>
</template>

<script>
export default {
  name: 'PriceTag',
  props: {
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.price-tag {
  background-color: $galapagos-green;
  border-radius: 25px;
  width: 5em;
  height: 2em;
  color: white;
}
</style>