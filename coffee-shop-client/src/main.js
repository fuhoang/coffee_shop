import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue';
import MoviesList from './components/MoviesList.vue';

const routes = [
	{ path: '/movies', component: MoviesList}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	render: h => h(Dashboard)
}).$mount('#app')