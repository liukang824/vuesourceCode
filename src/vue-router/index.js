import install from './install'
import createMatch from './create-matcher'
import Htm5History from './history/history'
import HashHistory from './history/hash'
export default class Router {
  constructor(options) {
    this.matcher = createMatch(options.routes || [])
    switch (options.mode) {
      case 'hash':
        this.history = new HashHistory(this)
        break;
      case 'history':
        this.history = new Htm5History(this)
    }
    // this.push =  
  }
  init(app) {
    const history = this.history
    const setupHashLister = () => {
      history.setupListener() //监听路径变化
    }
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashLister
    )
    history.listen((route) => {  //发布订阅方法
      app._route = route  //视图发生变化
    })
  }
    match(path) {
      return this.matcher.match(path)
    }
   push(path) {
      this.history.push(path)
  }

}



//  挂在
Router.install = install

