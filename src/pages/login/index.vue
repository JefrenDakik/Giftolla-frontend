<template>
  <div>
    <h1 class="bnq stoner font-xl text-center">
      login
    </h1>
    <form class="d-flex flex-column align-items-center form-group row">
      <AppInput
        name="email" label="Email" rules="required|email" 
        class="col-sm-5"
        v-model="form.email">
      </AppInput>

      <AppInput
        name="password" label="Password" type="password" rules="required" 
        class="col-sm-5"
        v-model="form.password">
      </AppInput>

      <nuxt-link to="/" class="link mt-3">Forgot Your Password?</nuxt-link>
      <nuxt-link to="/signup" class="link">Don't Have an Account? Sign Up Here</nuxt-link>

      <AppButton class="bnq button-md mt-3" 
        @click="login">
        Login
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    async login() {
      try {
        const { email, password } = this.form
        const auth = await this.signIn({
          email, 
          password,
        })

        if(auth) {
          this.$router.push({name: 'index'})
        }
      } catch (error) {
        console.log(error)
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
