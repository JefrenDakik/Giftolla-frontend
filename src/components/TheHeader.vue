<template>
  <div class="the-header bnq rubik">
    <b-navbar toggleable="" type="light" variant="faded">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand to="/" class="ml-3 mr-auto">
        <b-img src="~/assets/images/logo.png" width="100" height="33.1"/>
      </b-navbar-brand>
      
    
      <b-navbar-nav class="d-flex flex-row">
        <b-nav-item v-if="isAuth" to="/profile">
          <div class="d-flex flex-row align-items-center mr-2">
            <div class="galapagos-green">{{ userName }}</div>
            <div class="vertical-line ml-2"></div>
          </div>
        </b-nav-item>

        <b-nav-item to="/wishlist">
          <b-img src="~/assets/images/icons/heart.png" width="35" height="35"/>
        </b-nav-item>

        <b-nav-item to="/my-cart" class="mx-2">
          <b-img src="~/assets/images/icons/cart.png" width="35" height="35"/>
        </b-nav-item>

        <b-nav-item :to="isAuth ? '/profile': '/login'">
          <b-img src="~/assets/images/icons/profile.png" width="35" height="35"/>
        </b-nav-item>
      </b-navbar-nav>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
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
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters({
      userName: 'auth/getUserName',
      isAuth: 'auth/isAuthenticated'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.the-header {
  font-size: 1rem;
}

.vertical-line {
  border-left: 1px solid $dark-grey;
  height: 35px;
}

</style>