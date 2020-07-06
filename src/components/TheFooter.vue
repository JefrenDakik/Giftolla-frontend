<template>
  <footer class="footer">
    <div class=" d-flex flex-row justify-content-center align-items-center h-100">
      <b-img src="~/assets/images/icons/instagram-black.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
      <b-img src="~/assets/images/icons/facebook-black.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 1px solid black;
}

.footer-icon {
  max-width: 40px;
  max-height: 40px;
}
</style>
