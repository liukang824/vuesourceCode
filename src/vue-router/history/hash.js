
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
