import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import $ from 'jquery'
import '@/utils/filter'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
    // Vue.use($)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')