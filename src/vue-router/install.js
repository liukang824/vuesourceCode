
import RouterLink from './component/router-link'
import RouterView from './component/router-view'
export default function install(Vue) {
  // 每个vue实例都是执行
  // 使用Vue.mixin 混入 
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    }
  })
  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._routerRoot._router
    }
  })
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot._route
    }
  })
  Vue.component('router-link', RouterLink)
  Vue.component('router-view', RouterView)
}


