export  function createRoute (record,location){
  let res = []
  if(record){
    while (record) {
      res.unshift(record)
      record = record.parent
    }
  }
  return {
    ...location,
    matched:res
  }
}
export default  class History{
  constructor(route){
    this.route = route
    this.current = createRoute(null,{path:'/'})
    
    // 江新的路由route 属性覆盖current 
    if(this.current.path === location && route.matched.length=== this.current.matched.length){
      return;
    }
    this.updateRoute(route)
  }
  transitionTo (location,onComplete){
    let route = this.route.match(location)
    this.current = route
    // this.cb && this.cb(route)
    onComplete && onComplete()
    
  }

  updateRoute(route){
    this.current = route
    this.cb && this.cb(route)  //路径变化 视图刷新
  }
  listen(cb){
    this.cb = cb
  }
}
