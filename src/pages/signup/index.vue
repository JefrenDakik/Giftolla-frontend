<template>
  <div>
    <h1 class="bnq stoner font-xl text-center">
      signup
    </h1>
    <ValidationObserver>
      <form class="d-flex flex-column align-items-center form-group row">
        <AppInput
          name="email" label="Email" rules="required|email" class="col-sm-5"
          v-model="form.email">
        </AppInput>

        <AppInput
          name="password" label="Password" type="password" vid="password"
          rules="required|min:8|one-upper-letter|one-lower-letter|one-numeric-char" class="col-sm-5"
          v-model="form.password">
        </AppInput>

        <AppInput
          name="confirm password" label="Confirm Password" type="password"
          rules="required|confirmedBy:@password" class="col-sm-5"
          v-model="form.confirmPassword">
        </AppInput>

        <nuxt-link to="/" class="link mt-3">Forgot Your Password?</nuxt-link>
        <nuxt-link to="/login" class="link">Already Have an Account? Login Here</nuxt-link>

        <AppButton class="bnq button-md mt-3"
          @click="signUp">
          Create Account
        </AppButton>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    async signUp() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
