
export default class History {
  constructor(router) {
      this.router = router
      this.current = createRoute(null, { path: '/'})
  }
  transitionTo(path, callback) {
      let route = this.router.match(path)
      this.current = route
      this.cb && this.cb(route)
      callback && callback()
  }
  listen(cb) {
      this.cb = cb
  }

}
export function createRoute(record, location) {
  // debugger
  let res = []
  while(record) {
      res.unshift(record)
      record = record.parent
  }
  return {
      ...location,
      matched: res
  }
}
