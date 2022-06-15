import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({

  render: h => h(App),
  router,
  store
}).$mount('#app')
