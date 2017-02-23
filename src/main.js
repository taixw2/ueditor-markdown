import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'

import './assets/style.css'
import App from './App.vue'
import routes from './routes'
// import './UM-registUI.js'

import './ueditor-plugin/table.core'
import './ueditor-plugin/table.cmds'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes,
  scrollBehavior(to, from, savePosition) {
    return savePosition
    // return savePosition ? savePosition : {
    //   x: 0,
    //   y: 0,
    // }
  },
})

Vue.http.options.root = '/api'
Vue.http.interceptors.push((request, next) => {
  next(() => true)
})

function appStart() {
  return new Vue({
    el: '#app',
    router,
    http: {
      options: {
        emulateJSON: true,
      },
    },
    render: h => h(App),
  })
}

appStart()
