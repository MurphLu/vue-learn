import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

var app = new Vue({
  render: h => h(App),
}).$mount('#app')

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor

