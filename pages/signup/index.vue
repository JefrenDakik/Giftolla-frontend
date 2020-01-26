<template>
  <div>
    <h1 class="bnq stoner font-xl text-center">
      signup
    </h1>
    <ValidationObserver>
      <form class="d-flex flex-column align-items-center form-group row">
        <AppInput
          name="email" label="Email" rules="required|email" class="col-sm-5">
        </AppInput>

        <AppInput
          name="password" label="Password" type="password" vid="password"
          rules="required|min:8|one-upper-letter|one-lower-letter|one-numeric-char"
          class="col-sm-5">
        </AppInput>

        <AppInput
          name="confirm password" label="Confirm Password" type="password"
          rules="required|confirmedBy:@password"
          class="col-sm-5">
        </AppInput>

        <nuxt-link to="/" class="mt-3">Forgot Your Password?</nuxt-link>
        <nuxt-link to="/login">Already Have an Account? Login Here</nuxt-link>

        <AppButton class="bnq button-md mt-3">
          Create Account
        </AppButton>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import AppInput from "@/components/App/form/AppInput"
import AppButton from "@/components/App/form/AppButton";

export default {
  components: {
    ValidationObserver,
    AppInput,
    AppButton,
  }
}
</script>

<style lang="scss" scoped>

</style>
