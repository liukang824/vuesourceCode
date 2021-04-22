import Vue from 'vue'
import App from './App.vue'
import create from './utils/create'

import router from './router'

import store from './store'


Vue.config.productionTip = false
// 事件总线
// Vue.prototype.$bus = new Vue()
// Vue.prototype.$create = create
Vue.use(create)

// 3.挂载router实例，why？
new Vue({
  // Vue.prototype.$router = router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
