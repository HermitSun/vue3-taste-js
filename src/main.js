import Vue from 'vue'
import { plugin } from 'vue-function-api'
import router from './router'
import store from './store'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
