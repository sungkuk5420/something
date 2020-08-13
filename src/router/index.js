import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";


Vue.use(VueRouter);


import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyA009ZWLJlW4VJE8EKtRy3QJ-FdYYIwSMM",
  authDomain: "some-26ee7.firebaseapp.com",
  databaseURL: "https://some-26ee7.firebaseio.com",
  projectId: "some-26ee7",
  storageBucket: "some-26ee7.appspot.com",
  messagingSenderId: "881830153002",
  appId: "1:881830153002:web:5a041835cecd79da6fac53",
  measurementId: "G-PLJFTBVXYH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
