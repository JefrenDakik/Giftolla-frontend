<template>
  <div class="the-header bnq font-l">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="/">
        <b-img src="~/assets/images/logo.png" width="100" height="100"></b-img>
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


      </b-collapse>
  </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'TheHeader',

}
</script>