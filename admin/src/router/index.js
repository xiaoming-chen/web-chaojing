import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import News from '../components/news.vue'
import NewsAdd from '../components/news-add.vue'
import Login from '../components/login.vue'
import NewsView from '../components/news-view.vue'
import Banner from '../components/banner.vue'
import SignUp from '../components/signup.vue'

Vue.use(VueRouter)

export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/news',
			name: 'news',
			component: News
		},
		{
			path: '/news/add',
			name: 'newsAdd',
			component: NewsAdd
		},
		{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/news/view',
			name: 'newsView',
			component: NewsView
		},
		{
			path: '/banner',
			name: 'Banner',
			component: Banner
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: SignUp
		},
	]
});