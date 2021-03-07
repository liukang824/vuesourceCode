export default {
    functional: true,
    name: 'RouterView',
    render(h, {data, parent}) {
        let depth = 0
        let records =  parent.$route.matched
        data.routerView = true
        while(parent) {
            if (parent.$vnode && parent.$vnode.data.routerView) {
                depth ++
            }
            parent = parent.$parent
        }
        let record = records[depth]
        if (!record) {
            return
        }
        
        return h(record.component, data)
    }
}