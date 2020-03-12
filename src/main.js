import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResouce from 'vue-resource'
// import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueResouce);

// Axios.defaults.headers.common['Authorization'] = "Bearer 1bee85049b5537e26f7c235a197e930eb7c9b776953bdaa8a6527ef59c1c8301df64e038aba8bf074cb12719ce01c09a";
// Axios.defaults.headers.common['Accept'] = "application/json";

// //Axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
// //Axios.defaults.headers.common['Access-Control-Allow-Methods'] = "GET";
// Axios.defaults.headers.common['Access-Control-Request-Methods'] = "GET";
// //Axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers,Authorization,Accept';
// Axios.defaults.headers.common['Access-Control-Request-Headers'] = 'Authorization,Accept';

//Vue.prototype.$http = Axios;


// Axios.defaults.headers.common['Authorization'] = "Bearer 1bee85049b5537e26f7c235a197e930eb7c9b776953bdaa8a6527ef59c1c8301df64e038aba8bf074cb12719ce01c09a";
// Axios.defaults.headers.common['Accept'] = "application/json";

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
