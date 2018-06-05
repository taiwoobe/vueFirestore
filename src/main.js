// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFirestore from 'vue-firestore';
import nativeToast from 'native-toast'
import Spinner from 'vue-spinkit'
import '../node_modules/native-toast/dist/native-toast.css'
import config from './configurations/config'

Vue.use(VueFirestore);

Vue.component('Spinner', Spinner)

Vue.config.productionTip = false

// Exporting the database as a variable named db, for use in our components.
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
// End of Firebase Initialization

let app;

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth  && !currentUser) next ('login')
  else if (!requiresAuth && currentUser) next ('HelloWorld')
  else next()
})

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});