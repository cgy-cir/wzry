import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import http from './http'


Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.mixin({
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bear ${localStorage.token || ''}`
      }
    }
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
