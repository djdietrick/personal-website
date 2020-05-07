import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResouce from 'vue-resource'
// import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueResouce);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
