import createRouteMap from "./create-route-map"
import {createRoute} from './history/base'
export default  function createMatcher(routes){
  // 初始化配置 
  let {pathList,pathMap} = createRouteMap(routes)
  function  addRoutes(routes) {
    createRouteMap(routes,pathList,pathMap) 
  }
  // 根据对应的路由寻找对应的地址匹配
  function match(route){
    let record = pathMap[route]
    route={
      path:route
    }
    return createRoute(record,route)
  }
  return {
    addRoutes,
    match
  }

}