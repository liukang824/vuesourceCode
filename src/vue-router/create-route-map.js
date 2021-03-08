
  export default function createRouteMap(routes, oldPathMap) {
    let pathMap = oldPathMap || {}
    routes.forEach(route => {
        addRouteRecord(route, pathMap, null)
    })
    return {
        pathMap
    }
  }
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
