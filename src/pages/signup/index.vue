<template>
  <div>
    <h1 class="bnq stoner font-xl text-center">
      signup
    </h1>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)"
        class="d-flex flex-column align-items-center form-group row">
        <AppInput
          name="name" label="Name" rules="required" class="col-sm-5"
          v-model="form.name">
        </AppInput>

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
          type="submit">
          Create Account
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
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  },
  methods: {
    ...mapActions({
      signUp: 'auth/signUp'
    }),
    async onSubmit() {
      try {
        const { name, email, password, confirmPassword } = this.form
        const response = await this.signUp({
          name,
          email, 
          password,
          confirmPassword,
        })

        if(response) {
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
