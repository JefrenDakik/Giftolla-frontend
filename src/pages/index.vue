<template>
  <div>
    <Home/>
    <Products/>
    <AboutUs/>
    <ContactUs/>
    <AppButton @click="logout">logout</AppButton>
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
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
