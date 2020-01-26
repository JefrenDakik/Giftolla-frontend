<template>
  <div>
    <Home/>
    <AboutUs/>
    <ContactUs/>
  </div>
</template>

<script>
import Home from '@/components/Home'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'

export default {
  components: {
    Home,
    ContactUs,
    AboutUs,
  }
}
</script>

<style>

</style>
