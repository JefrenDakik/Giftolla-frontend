<template>
  <div class="home bnq font-l text-center">
    <h1 class="bnq stoner font-xxl">
      Contact Us
    </h1>
    <p>Have any questions? We'd love to hear from you</p>

    <div class="row my-5">
      <div class="col ">
        <b-img src="~/assets/images/icons/whatsapp.png" class="img" />
        <p class="bnq font-md mt-4">
          Whatsapp or Call us on:<br>
          +961 81 770 240
        </p>
      </div>

      <div class="col
        border-right border-left border-dark">
        <b-img src="~/assets/images/icons/mail.png" class="img" />
        <p class="bnq font-md mt-4">
          Email Us On: <br>
          beunique@gmail.com <br>
        </p>
      </div>

      <div class="col">
        <div class="row d-flex justify-content-center">
          <b-img src="~/assets/images/icons/instagram.png" class="img mr-1"/>
          <b-img src="~/assets/images/icons/facebook.png" class="img ml-1"/>
        </div>
        <p class="bnq font-md mt-4">
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

.img {
  max-width: 40px;
  max-height: 40px;
}

.flex-even {
  flex: 1;
}
</style>