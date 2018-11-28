import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue';

const routes = [
	{ path: '/', components: Dashboard },
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	render: h => h(Dashboard)
}).$mount('#app')