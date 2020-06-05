<template>
  <div id="app">
    <TheHeader/>
    <nuxt class="container-fluid mb-5 mt-2"/>
    <!-- <hr class="bg-dark"> -->
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"
import TheFooter from "@/components/TheFooter"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="sass">

</style>

