import Vue from 'vue'

import AppButton from '@/components/App/form/AppButton'
import AppColorPicker from '@/components/App/form/AppColorPicker'
import AppCounter from '@/components/App/form/AppCounter'
import AppInput from '@/components/App/form/AppInput'
import AppCarousel from '@/components/App/AppCarousel'
import AppCheckbox from '@/components/App/form/AppCheckbox'
import AppRadioButton from '@/components/App/form/AppRadioButton'
import AppTextArea from '@/components/App/form/AppTextArea'
import AppSelect from '@/components/App/form/AppSelect'
import AppStepper from '@/components/App/AppStepper'
import { ValidationObserver } from 'vee-validate'
import { ValidationProvider } from 'vee-validate'

Vue.component('AppButton', AppButton)
Vue.component('AppColorPicker', AppColorPicker)
Vue.component('AppCounter', AppCounter)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
Vue.component('AppCarousel', AppCarousel)
Vue.component('AppCheckbox', AppCheckbox)
Vue.component('AppRadioButton', AppRadioButton)
Vue.component('AppSelect', AppSelect)
Vue.component('AppStepper', AppStepper)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)