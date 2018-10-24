import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import CatCardsList from './components/CatCardsList.vue'
import CatCardEdit from './components/CatCardEdit.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: CatCardsList} , 
    { path: 'catCardsList', component: CatCardsList },
    { path: 'catCardEdit', component: CatCardEdit }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
