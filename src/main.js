import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


import localizeFilter from './filters/localize.filter'

Vue.filter('localize', localizeFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
