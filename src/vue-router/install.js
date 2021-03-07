
import RouterLink from './component/link'
import RouterView from './component/view'
export default function install(Vue){
  // 每个vue实例都是执行
  // 使用Vue.mixin 混入 
  Vue.mixin({
    // 执行的生命周期
    beforeCreate(){
        // 判断是否有route 
        if(this.$options.router){
          // 挂在
          this._routerRoot = this  
          this._router = this.$options.router 
          //  初始化方法
          this._router.init(this)
          Vue.util.defineReactive(this, '_route', this._router.history.current)
        }else{
          // 去找父元素
          this._routerRoot = this.$parent  && this.$parent._routerRoot
        }
        Object.defineProperty(this,'$route',{
          get (){
            return this._routerRoot._route;
          }
        })
        Object.defineProperty(this,'$router',{
          get(){
            return {
              //当前路由所在的状态
              current:this._routerRoot._router
            }
          }
        })
    }
  })
  Vue.component('router-link',RouterLink)
  Vue.component('router-view',RouterView)

}
