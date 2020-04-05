<template>
  <div>
    <h1 class="bnq stoner font-xl text-center">
      login
    </h1>
    <form class="d-flex flex-column align-items-center form-group row">
      <AppInput
        name="email" label="Email" rules="required|email" class="col-sm-5">
      </AppInput>

      <AppInput
        name="password" label="Password" type="password"
        rules="required" 
        class="col-sm-5">
      </AppInput>

      <nuxt-link to="/" class="link mt-3">Forgot Your Password?</nuxt-link>
      <nuxt-link to="/signup" class="link">Don't Have an Account? Sign Up Here</nuxt-link>

      <AppButton class="bnq button-md mt-3">
        Login
      </AppButton>
    </form>
  </div>
</template>

<script>
import AppInput from "@/components/App/form/AppInput"
import AppButton from "@/components/App/form/AppButton";

export default {
  components: {
    AppInput,
    AppButton,
  }
}
</script>

<style lang="scss" scoped>

</style>
