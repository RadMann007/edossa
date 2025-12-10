import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
// // Import des composants
import Home from './pages/Home.vue'
import Application from './pages/Application.vue'
import Contact from './pages/Contact.vue'
import Articles from './pages/Articles.vue'
import ArticleDetail from './pages/ArticleDetail.vue'

// Configuration du router
const routes = [
  { path: '/', component: Home, name:'home' },
  { path: '/application', component: Application, name: 'application' },
  { path: '/contact', component: Contact },
  { path: '/articles', component: Articles },
  { path: '/article/:id', component: ArticleDetail, name: 'article-detail' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Création de l'app
const app = createApp(App)
app.use(router)
app.mount('#app')