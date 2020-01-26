<template>
  <div class="home row">
    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center px-5 pb-5">
      <b-img src="~/assets/images/welcome.png" fluid  alt="Responsive image" 
        class="title-img"/>
      <p class="bnq elegant">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type  
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    
    <div class="col-md-6 px-5">
      <b-img src="~/assets/images/flower.png" fluid alt="Responsive image"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.title-img {
  width: 75%;
}

</style>
