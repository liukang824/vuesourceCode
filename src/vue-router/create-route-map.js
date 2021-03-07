export default  function createRouteMap(routes,oldPathList,oldPathMap){
    // 数据格式化
    let pathList = oldPathList || []
    let pathMap = oldPathMap || Object.create(null)
    routes.forEach(route =>{
      addRouteRecord(route,pathList)
    });
return {
  pathList,
  pathMap
}
}
// function addRouteRecord(route,pathMap,pathList,parent) {
//   let path = parent ? `${parent.path}/${route.path}` : route.path
//   let record = {
//     path,
//     component:route.component,
//     parent
//   }
//   // 检测历史中是否有路由地址没有则添加
//   if(!pathList[path]){
//     pathList.push(path)
//     pathList[path] = record
//   }
//   if(route.children){
//     route.children.forEach(child=>{
//       addRouteRecord(child,pathList,pathMap,route)
//     })
//   }
// }
function addRouteRecord(route, pathMap, parent) {
  let path = parent ? parent.path + '/' + route.path : route.path
  let record = {
      path,
      component: route.component,
      parent
  }
  if (!pathMap[path]) {
      pathMap[path] = record
  }
  if (route.children) {
      route.children.forEach(childRoute => {
          addRouteRecord(childRoute, pathMap, route)
      })
  }
}
