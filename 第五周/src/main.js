import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import VeeValidate, { Validator } from 'vee-validate'
import './local/index'

Vue.use(VeeValidate)
const validator = new Validator()
validator.localize('zh-CN')

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
