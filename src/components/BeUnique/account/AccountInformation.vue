<template>
  <div class="d-flex flex-column">
    <h6 class="bnq rubik-medium mb-2 font-l">PERSONAL INFORMATION</h6>
    <PersonalInformationForm/>

    <h6 class="bnq rubik-medium mb-2 font-l">CHANGE PASSWORD</h6>
    <ChangePasswordForm/>
    
    <div class="col-12 d-flex flex-row justify-content-center mt-3">
      <AppButton @click="logout">
        LOGOUT
      </AppButton>
    </div>
    
  </div>
</template>

<script>
import PersonalInformationForm from "@/components/BeUnique/account/PersonalInformationForm"
import ChangePasswordForm from "@/components/BeUnique/account/ChangePasswordForm"

export default {
  name: 'AccountInformation',
  components: {
    PersonalInformationForm,
    ChangePasswordForm,
  },
  methods: {
    async logout() {
      await this.$store.dispatch('authentication/logout')
    }
  }
}
</script>