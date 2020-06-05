<template>
  <div>
    <Home/>
    <Products/>
    <AboutUs/>
    <ContactUs/>
  </div>
</template>

<script>
import Home from '@/components/Home'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import Products from "@/components/Products";

export default {
  components: {
    Home,
    ContactUs,
    AboutUs,
    Products,
  },
  created() {

  }
}
</script>

<style>

</style>
