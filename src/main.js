// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyB_gFdPKrJZ77rlYmlChNkaLTVzjWqOhtE",
  authDomain: "jonvi-18bf5.firebaseapp.com",
  databaseURL: "https://jonvi-18bf5.firebaseio.com",
  projectId: "jonvi-18bf5",
  storageBucket: "jonvi-18bf5.appspot.com",
  messagingSenderId: "8452384503"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
