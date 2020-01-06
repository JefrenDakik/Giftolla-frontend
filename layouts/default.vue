<template>
  <div id="app">
    <TheHeader/>
    <nuxt class="container-fluid"/>
    <!-- <hr class="bg-dark"> -->
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader/TheHeader"
import TheFooter from "@/components/Footer/TheFooter"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">

</style>

