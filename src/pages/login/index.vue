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
        
        <div class="d-flex flex-row justify-content-center align-items-center mt-4 w-100">
          <div class="horizontal-line align-self-center w-25">
          </div>
          <div class="mx-2">Or</div>
          <div class="horizontal-line align-self-center w-25">
          </div>
        </div>

        <div class="mt-3">
          Login with your social network
        </div>

        <a href="#" class="fb btn mt-3" @click="loginWithFacebook">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>

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
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.horizontal-line {
  border: 0.3px solid $dark-grey;
  width: 120px;
  height: 0px;
}

.fb {
  background-color: #1877F2;
  color: white;
}
</style>
