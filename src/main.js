
import Vue from 'vue'
import App from './App'
// import VueRouter from './router'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import About from './components/About'
import Contacts from './components/Contacts'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Hello, About },
  router
}).$mount('#app')

