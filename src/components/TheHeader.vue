<template>
  <div class="the-header bnq elegant">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand to="/">
        <b-img src="~/assets/images/logo.png" width="100" height="100"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav fill class="w-50">
          <b-nav-item href="#">HOME</b-nav-item>

          <b-nav-item-dropdown text="PRODUCTS" right>
            <b-dropdown-item href="#">Books</b-dropdown-item>
            <b-dropdown-item href="#">Stickers</b-dropdown-item>
            <b-dropdown-item href="#">Cards</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">ABOUT</b-nav-item>
          <b-nav-item href="#">CONTACT</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/wishlist" class="d-flex flex-column">
            <div class="d-flex justify-content-center">
              <b-img src="~/assets/images/icons/heart.png" width="40" height="40"/>
            </div>
            <div class="d-flex justify-content-center">Whishlist</div>
          </b-nav-item>

          <b-nav-item to="/my-cart" class="d-flex flex-column mx-3">
            <div class="d-flex justify-content-center">
              <b-img src="~/assets/images/icons/cart.png" width="40" height="40"/>
            </div>
            <div class="d-flex justify-content-center">My Cart</div>
          </b-nav-item>

          <b-nav-item to="/login" class="d-flex flex-column">
            <div class="d-flex justify-content-center">
              <b-img src="~/assets/images/icons/profile.png" width="40" height="40"/>
            </div>
            <div class="d-flex justify-content-center">Login</div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'TheHeader',

}
</script>

<style lang="scss" scoped>

.the-header {
  font-size: 1rem;
}

</style>