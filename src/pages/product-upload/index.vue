<template>
  <div>
    <!-- <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" 
        class="d-flex flex-column align-items-center form-group row">
        <AppInput type="file" multiple @change="onFileSelected" class="col-sm-5"/>
        <AppButton class="bnq button-md mt-3" @click="onSubmit">
          upload
        </AppButton>
      </form>
    </ValidationObserver> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // middleware: 'auth',
  // data() {
  //   return {
  //     images: null
  //   }
  // },
  // methods: {
  //   ...mapActions({
  //     uploadProduct: 'product/uploadProduct'
  //   }), 
  //   onFileSelected(event) {
  //     // console.log('event', event)
  //     this.images = event.target.files
  //   },
  //   onSubmit() {
  //     const form = new FormData()
  //     for (let i = 0; i < this.images.length; i++) {
  //       const image = this.images[i];
  //       form.append(image.name, image)
  //     }
  //     form.append('name', 'jaafar')
      
  //     this.uploadProduct(form)
  //   }
  // }
}
</script>