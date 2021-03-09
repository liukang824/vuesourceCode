# study-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
###src/vue-router
  ```
   index.js //创建router 类  初始化 
   插件 install.js  
    编写插件使用install方法 
    Vue.mixin 混入
    Object.defineProperty  检测路由 
    Vue.util.defineReactive vue 核心方法使其视图变化
    create-route-map.js  子路由功能 
    create-matcher.js  匹配路由
    history/ 监测路由实现hash模式 
    component/实现router-link 和 router-view  功能 
  ```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
