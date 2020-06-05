import Vue from 'vue'

import AppButton from '@/components/App/form/AppButton'
import AppColorPicker from '@/components/App/form/AppColorPicker'
import AppCounter from '@/components/App/form/AppCounter'
import AppInput from '@/components/App/form/AppInput'
import { ValidationObserver } from 'vee-validate'

Vue.component('AppButton', AppButton)
Vue.component('AppColorPicker', AppColorPicker)
Vue.component('AppCounter', AppCounter)
Vue.component('AppInput', AppInput)
Vue.component('ValidationObserver', ValidationObserver)