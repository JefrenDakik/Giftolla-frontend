<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset"
      class="d-flex flex-column align-items-center form-group row">

      <AppInput
        name="Name" label="Name" rules="required" class="col-12 mt-1"
        v-model="form.name" :readOnly="!editMode">
      </AppInput>

      <AppInput
        name="email" label="Email" rules="required|email" class="col-12 mt-1"
        v-model="form.email" :readOnly="!editMode">
      </AppInput>

      <div v-if="editMode" class="col-12 row d-flex flex-row justify-content-end mt-2">
        <AppButton type="reset" class="bnq mr-3" secondary
          @click="cancel">
          Cancel
        </AppButton>

        <AppButton class="bnq" type="submit" secondary>
          Save
        </AppButton>
      </div>

      <div v-else class="col-12 row d-flex flex-row justify-content-end mt-2">
        <AppButton class="bnq mr-3" secondary
          @click="edit">
          Edit
        </AppButton>
      </div>
        
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'PersonalInformationForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
      editMode: false,
    }
  },
  computed: {
    ...mapGetters({
      name: 'authentication/getUserName',
      email: 'authentication/getEmail'
    })
  },
  created() {
    this.fillForm()
  },
  methods: {
    fillForm() {
      this.form.name = this.name
      this.form.email = this.email
    },
    cancel() {
      this.fillForm()
      this.editMode = false
    },
    edit() {
      this.editMode = true
    },
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