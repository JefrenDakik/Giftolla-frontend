<template>
  <footer class="footer d-flex flex-row justify-content-center py-3">
    <b-img src="~/assets/images/icons/phone.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
    <b-img src="~/assets/images/icons/mail.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
    <b-img src="~/assets/images/icons/instagram.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
    <b-img src="~/assets/images/icons/facebook.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
    <b-img src="~/assets/images/icons/whatsapp.png" class="footer-icon mx-2 img-fluid" fluid  alt="Responsive image"/>
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
