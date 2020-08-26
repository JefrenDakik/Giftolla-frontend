<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset"
      class="d-flex flex-column align-items-center form-group row">

      <AppInput
        name="email" label="Email" rules="required|email" class="col-12 mt-1"
        v-model="form.email">
      </AppInput>

      <div class="col-12 row d-flex flex-row justify-content-end mt-2">
        <AppButton class="bnq" type="submit" secondary>
          Send Email
        </AppButton>
      </div>
        
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'ChangePasswordForm',
  data() {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      // try {
      //   const { name, email, password, confirmPassword } = this.form
      //   const response = await this.signUp({
      //     name,
      //     email, 
      //     password,
      //     confirmPassword,
      //   })

      //   if(response) {
      //     this.$router.push({name: 'index'})
      //   } else {
      //     this.$refs.form.setErrors({'email': ['email already exists']});
      //   }
      // } catch (error) {
      //   console.log(error)
      // }
    }
  }
}
</script>