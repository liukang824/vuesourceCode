import Home from '../views/Home'
import About from '../views/About'
import Router from '../vue-router'
import Vue from 'vue'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About,
        children: [
           {
               path: 'a',
               component: {
                    render() {
                        return <div>
                                    hello a
                                </div>
                    }
               }
           },
           {
            path: 'b',
            component: {
                render() {
                     return <p>hello b</p>
                }
            }
        }
        ]
    }
]

export default new Router({
    mode: 'hash',
    routes
})