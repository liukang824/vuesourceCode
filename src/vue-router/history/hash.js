// import History from './base'

// export default class  HashHistory extends History{
//   constructor(route){
//     super(route)
//     ensureSlash()
//   }
//   getCurrentLocation(){
//     return getHash()
//   }
//   setupListener(){
//     window.addEventListener('hashchange',()=>{
//       this.transitionTo(getHash())
//     })
//   }
//   push(path) {
//     location.hash = path
// }
// }
// function getHash(){
//   return window.location.hash.slice(1)
// }
// // 确保有/
// function ensureSlash() {
//   if(window.location.hash){
//     return 
//   }
//   window.location.hash = '/'
// }
import History from './base'
export default class HashHistory extends History {
    constructor(router) {
        super(router)
        ensureSlash()
    }
    setupListener() {
        window.addEventListener('hashchange', () => {
            console.log('hashchange')
            this.transitionTo(getHash())
        })
    }
    getCurrentLocation() {
        return getHash()
    }
    push(path) {
        location.hash = path
    }
}
function ensureSlash() {
    if (location.hash) {
        return
    }
    location.hash = '/'
}
function getHash() {
    return location.hash.slice(1)
}
