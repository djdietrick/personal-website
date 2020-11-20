import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource'
import store from './store';
// import Axios from 'axios'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import DashVue from 'dash-vue';
import 'dash-vue/dist/dash-vue.css';

Vue.use(DashVue);

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "dash-website-1b9cb.firebaseapp.com",
  databaseURL: "https://dash-website-1b9cb.firebaseio.com",
  projectId: "dash-website-1b9cb",
  storageBucket: "dash-website-1b9cb.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESSENGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
});

export const auth = firebase.auth();
export const db = firebase.firestore();

Vue.config.productionTip = false

Vue.use(VueResouce);

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
