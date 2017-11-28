import Vue from 'vue'
import router from './router'
import App from './App.vue'

require('./css/admin.css');

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
