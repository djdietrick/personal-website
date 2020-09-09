import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource'
// import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueResouce);

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
