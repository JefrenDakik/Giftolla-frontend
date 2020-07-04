<template>
  <div class="home row mb-5">
    <div class="col-2"></div>
    <div class="col-4 d-flex flex-column justify-content-center align-items-center pb-5">
      <b-img src="~/assets/images/welcome.png" fluid  alt="Responsive image" 
        class="title-img pt-3"/>
      <p class="bnq rubik font-xs mt-2 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </p>
    </div>
    
    <div class="col-4 ">
      <b-img src="~/assets/images/flower.png" fluid alt="Responsive image"/>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.title-img {
  width: 100%;
}

</style>
