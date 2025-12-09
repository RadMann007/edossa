import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
// // Import des composants
import Home from './pages/Home.vue'
import Application from './pages/Application.vue'
import Contact from './pages/Contact.vue'
import Articles from './pages/Articles.vue'

// Configuration du router
const routes = [
  { path: '/', component: Home },
  { path: '/application', component: Application },
  { path: '/contact', component: Contact },
  { path: '/articles', component: Articles },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Création de l'app
const app = createApp(App)
app.use(router)
app.mount('#app')