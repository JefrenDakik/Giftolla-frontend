<template>
  <div>
    <h1 class="bnq stoner font-xxl text-center">
      login
    </h1>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)"
        class="d-flex flex-column align-items-center form-group row">
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

        <AppButton class="bnq button-md mt-3 text-center" 
          type="submit">
          Login
        </AppButton>

        <AppButton class="bnq button-md mt-3 text-center" 
          @click="loginWithFacebook">
          Login with facebook
        </AppButton>

        <AppButton class="bnq button-md mt-3 text-center" 
          @click="test">
          test
        </AppButton>
      </form>
    </ValidationObserver>
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
      signIn: 'authentication/signIn',
    }),
    async onSubmit() {
      try {
        const { email, password } = this.form
        const auth = await this.signIn({
          email,
          password,
        })

        if(auth) {
          this.$router.push({name: 'index'})
        } else {
          this.$refs.form.setErrors({'email': ['worng email or password']});
        }
      } catch (error) {
        console.log(error)
      }
    },
    async loginWithFacebook() {
      try {
        await this.$auth.loginWith('facebook')
      } catch (error) {
        console.log(error)
      }
    },
    async test() {
      console.log(this.$auth)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
