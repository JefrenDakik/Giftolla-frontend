<template>
  <div class="d-flex flex-column justify-content-center align-items-center bnq font-l text-center">
    <h1 class="bnq stoner font-xl">
      Contact Us
    </h1>
    <p>Have any questions? We'd love to hear from you</p>

    <div class="d-flex flex-row my-5">
      <div class="flex-even d-flex flex-column align-items-center p-4">
        <b-img src="~/assets/images/icons/whatsapp.png" width="50" height="50"/>
        <p class="mt-4">
          Whatsapp or Call us on:<br>
          +961 81 770 240
        </p>
      </div>

      <div class="flex-even d-flex flex-column align-items-center p-4
        border-right border-left border-dark">
        <b-img src="~/assets/images/icons/mail.png" width="50" height="50"/>
        <p class="mt-4">
          Email Us On: <br>
          beunique100@gmail.com <br>
        </p>
      </div>

      <div class="flex-even d-flex flex-column align-items-center p-4">
        <div>
          <b-img src="~/assets/images/icons/instagram.png" width="50" height="50" class="mr-2"/>
          <b-img src="~/assets/images/icons/facebook.png" width="50" height="50"/>
        </div>
        <p class="mt-4">
          Get In Touch<br>
          <br>
        </p>
      </div>
    </div>

    <div class="my-5">
      <span>We Are Online Only.</span>
      <br>
      <span>We Ship Worldwide.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style lang="scss" scoped>

.flex-even {
  flex: 1;
}
</style>