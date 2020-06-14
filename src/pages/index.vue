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
import axios from 'axios'

export default {
  components: {
    Home,
    ContactUs,
    AboutUs,
    Products,
  },
}
</script>

<style>

</style>
