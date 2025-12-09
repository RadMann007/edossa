<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden">
    
    <!-- LOADER ARTICLES -->
    <div v-if="loading" class="fixed inset-0 bg-[#111] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">ARTICLES</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Chargement des actualités...
        </div>
        <div class="loader-progress w-0 h-1 bg-[#4ECDC4] mt-4"></div>
      </div>
    </div>

    <!-- NAVBAR AVEC ROUTER -->
    <nav class="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
      <div class="nav-item opacity-0">
        <router-link to="/" class="text-2xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-all duration-300">
          EDOSSAH
        </router-link>
      </div>
      <div class="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wide nav-item opacity-0">
        <router-link to="/" class="hover:opacity-50 transition-all duration-300 relative group">
          Accueil
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </router-link>
        <router-link to="/application" class="hover:opacity-50 transition-all duration-300 relative group">
          Application
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </router-link>
        <router-link to="/contact" class="hover:opacity-50 transition-all duration-300 relative group">
          Contact
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </router-link>
        <router-link to="/articles" class="hover:opacity-50 transition-all duration-300 relative group">
          Articles
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </router-link>
        <router-link to="/demo" class="border border-current px-4 py-1 rounded-full hover:bg-black hover:text-[#F3F0E7] transition-all duration-300 transform hover:scale-105">
          Demo
        </router-link>
      </div>
    </nav>

    <!-- HERO SECTION ARTICLES -->
    <header class="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 container mx-auto">
      
      <!-- Tag articles -->
      <div class="flex items-center gap-2 mb-8 overflow-hidden">
        <div class="hero-tag translate-y-full flex items-center gap-2">
          <span class="animate-spin-slow text-2xl text-[#4ECDC4]">📰</span>
          <span class="text-sm font-mono uppercase text-gray-500 tracking-wider">Actualités</span>
        </div>
      </div>

      <!-- Titre principal -->
      <h1 class="text-5xl md:text-[7vw] leading-[1.05] font-medium tracking-tight mb-20">
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full gradient-text">Nos</span>
        </div>
        
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full text-[#FF6B6B]">actualités</span>
        </div>
      </h1>

      <!-- Description -->
      <div class="max-w-3xl opacity-0 hero-fade">
        <p class="text-lg leading-relaxed text-gray-800 typewriter">
          Découvrez les dernières nouvelles, témoignages et actualités du monde de l'accompagnement social avec ASSIA
        </p>
      </div>
    </header>

    <!-- SECTION FILTERS -->
    <section class="py-16 px-6 md:px-12 container mx-auto">
      <div class="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <!-- Filtres par catégorie -->
        <div class="flex flex-wrap gap-3">
          <button 
            @click="filterByCategory('all')" 
            :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', 
              selectedCategory === 'all' ? 'bg-[#4ECDC4] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#4ECDC4]']"
          >
            Tous les articles
          </button>
          <button 
            @click="filterByCategory('temoignage')" 
            :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', 
              selectedCategory === 'temoignage' ? 'bg-[#FF6B6B] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#FF6B6B]']"
          >
            Témoignages
          </button>
          <button 
            @click="filterByCategory('actualite')" 
            :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', 
              selectedCategory === 'actualite' ? 'bg-[#FFE66D] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#FFE66D]']"
          >
            Actualités
          </button>
          <button 
            @click="filterByCategory('formation')" 
            :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', 
              selectedCategory === 'formation' ? 'bg-[#1a1a1a] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#1a1a1a]']"
          >
            Formations
          </button>
        </div>

        <!-- Recherche -->
        <div class="relative">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher un article..."
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all w-64"
          >
          <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div class="stat-card opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg">
          <div class="text-3xl font-bold text-[#4ECDC4]">{{ articles.length }}</div>
          <div class="text-sm text-gray-600">Articles publiés</div>
        </div>
        <div class="stat-card opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg">
          <div class="text-3xl font-bold text-[#FF6B6B]">{{ testimoniesCount }}</div>
          <div class="text-sm text-gray-600">Témoignages</div>
        </div>
        <div class="stat-card opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg">
          <div class="text-3xl font-bold text-[#FFE66D]">{{ newsCount }}</div>
          <div class="text-sm text-gray-600">Actualités</div>
        </div>
        <div class="stat-card opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg">
          <div class="text-3xl font-bold text-[#1a1a1a]">{{ Math.floor(Math.random() * 50) + 100 }}</div>
          <div class="text-sm text-gray-600">Lectures ce mois</div>
        </div>
      </div>
    </section>

    <!-- Remplace la section ARTICLES complète par ceci -->

<!-- SECTION ARTICLES -->
<section class="py-16 px-6 md:px-12 container mx-auto">
  
  <!-- DEBUG: Affiche le nombre d'articles et l'état -->
  <div class="mb-8 p-4 bg-blue-100 rounded-lg" v-if="debug">
    <h4 class="font-bold text-blue-800 mb-2">🔍 Debug Info:</h4>
    <p class="text-blue-700">Total articles: {{ articles.length }}</p>
    <p class="text-blue-700">Articles filtrés: {{ filteredArticles.length }}</p>
    <p class="text-blue-700">Loading: {{ loading }}</p>
    <p class="text-blue-700">Selected category: {{ selectedCategory }}</p>
    <p class="text-blue-700">Search query: "{{ searchQuery }}"</p>
  </div>

  <!-- Grille d'articles -->
  <div v-if="!loading" class="space-y-8">
    
    <!-- Message si aucun article -->
    <div v-if="articles.length === 0" class="text-center py-20">
      <div class="text-6xl mb-4">📭</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Aucun article disponible</h3>
      <p class="text-gray-600">L'API WordPress n'a pas retourné d'articles</p>
      <button @click="fetchArticles" class="mt-4 px-6 py-2 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all">
        Réessayer
      </button>
    </div>

    <!-- Articles filtrés -->
    <div v-else-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="(article, index) in filteredArticles" 
        :key="article.id"
        class="article-card opacity-0 translate-y-10 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <!-- Image de l'article -->
        <div class="relative overflow-hidden aspect-video">
          <img 
            :src="getArticleImage(article)" 
            :alt="stripHtml(article.title?.rendered || 'Article')"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            @error="handleImageError(article)"
          >
          <div class="absolute top-4 left-4">
            <span :class="['px-3 py-1 rounded-full text-xs font-semibold text-white', getCategoryColor(article)]">
              {{ getCategoryName(article) }}
            </span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <time class="text-white text-sm">{{ formatDate(article.date) }}</time>
          </div>
        </div>

        <!-- Contenu -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2" v-html="article.title?.rendered"></h3>
          <div class="text-gray-600 text-sm mb-4 line-clamp-3" v-html="getExcerpt(article)"></div>
          
          <!-- Auteur et stats -->
          <div class="flex items-center justify-between text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xs font-bold">
                {{ getAuthorInitials(article) }}
              </div>
              <span>{{ getAuthorName(article) }}</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ Math.floor(Math.random() * 500) + 100 }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {{ Math.floor(Math.random() * 20) + 5 }}
              </span>
            </div>
          </div>

          <!-- Bouton lire plus -->
          <button 
            @click="readArticle(article)" 
            class="mt-4 w-full px-4 py-2 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] text-white rounded-full hover:shadow-lg transition-all duration-300 text-sm font-semibold"
          >
            Lire l'article
          </button>
        </div>
      </article>
    </div>

    <!-- Message si aucun article après filtrage -->
    <div v-else-if="articles.length > 0 && filteredArticles.length === 0" class="text-center py-20">
      <div class="text-6xl mb-4">🔍</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Aucun article ne correspond à vos critères</h3>
      <p class="text-gray-600">Essayez une autre recherche ou catégorie</p>
      <button @click="resetFilters" class="mt-4 px-6 py-2 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all">
        Réinitialiser les filtres
      </button>
    </div>
  </div>

  <!-- Chargement -->
  <div v-if="loading" class="text-center py-20">
    <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ECDC4]"></div>
    <p class="mt-4 text-gray-600">Chargement des articles...</p>
  </div>

  <!-- Pagination -->
  <div v-if="totalPages > 1 && !loading" class="mt-12 flex justify-center">
    <nav class="flex items-center gap-2">
      <button 
        @click="currentPage--" 
        :disabled="currentPage <= 1"
        class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#4ECDC4] transition-colors"
      >
        Précédent
      </button>
      
      <span class="px-4 py-2 bg-[#4ECDC4] text-white rounded-lg">
        {{ currentPage }} / {{ totalPages }}
      </span>
      
      <button 
        @click="currentPage++" 
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#4ECDC4] transition-colors"
      >
        Suivant
      </button>
    </nav>
  </div>
</section>

    <!-- SECTION CALL TO ACTION -->
    <section class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white rounded-3xl text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold mb-8">
          Vous souhaitez être publié ?
        </h2>
        <p class="text-xl text-gray-300 mb-12">
          Partagez votre expérience avec ASSIA et aidez la communauté à progresser
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button @click="proposeArticle" class="px-8 py-4 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
            Proposer un article
          </button>
          <button @click="contactEditor" class="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-lg font-semibold">
            Contacter la rédaction
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

// État
const articles = ref([])
const loading = ref(true)
const selectedCategory = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 9
const lenis = ref(null)
const debug = ref(true) // Mode debug activé

// Computed
const filteredArticles = computed(() => {
  console.log('🔄 Filtrage des articles...')
  console.log('📊 Total articles avant filtre:', articles.value.length)
  console.log('🔍 Recherche:', searchQuery.value)
  console.log('📂 Catégorie:', selectedCategory.value)
  
  let filtered = articles.value
  
  // Filtrer par catégorie
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article => 
      getCategorySlug(article) === selectedCategory.value
    )
    console.log('📂 Après filtre catégorie:', filtered.length)
  }
  
  // Filtrer par recherche
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => {
      const title = stripHtml(article.title?.rendered || '').toLowerCase()
      const content = stripHtml(article.content?.rendered || '').toLowerCase()
      return title.includes(query) || content.includes(query)
    })
    console.log('🔍 Après filtre recherche:', filtered.length)
  }
  
  console.log('✅ Articles filtrés finalement:', filtered.length)
  return filtered
})

const totalPages = computed(() => {
  let filtered = articles.value
  
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article => 
      getCategorySlug(article) === selectedCategory.value
    )
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
      article.title?.rendered?.toLowerCase().includes(query) ||
      article.content?.rendered?.toLowerCase().includes(query)
    )
  }
  
  return Math.ceil(filtered.length / postsPerPage)
})

const testimoniesCount = computed(() => {
  return articles.value.filter(article => getCategorySlug(article) === 'temoignage').length
})

const newsCount = computed(() => {
  return articles.value.filter(article => getCategorySlug(article) === 'actualite').length
})

// Méthodes
const fetchArticles = async () => {
  console.log('🔄 Récupération des articles...')
  loading.value = true
  
  try {
    // Test avec différents paramètres
    const response = await fetch('https://edossah.fr/wp-json/wp/v2/posts?per_page=10&_embed', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    
    console.log('📡 Status de la réponse:', response.status)
    console.log('📡 Headers:', response.headers)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    console.log('✅ Articles récupérés:', data.length)
    console.log('📄 Premier article:', data[0])
    
    articles.value = data
    console.log('💾 Articles stockés:', articles.value.length)
    
  } catch (error) {
    console.error('❌ Erreur lors de la récupération:', error)
    
    // Afficher un message d'erreur à l'utilisateur
    articles.value = []
    
    // Utiliser les articles de secours
    console.log('🔄 Utilisation des articles de secours')
    articles.value = getDefaultArticles()
    
  } finally {
    loading.value = false
    console.log('🏁 Chargement terminé')
  }
}

const getDefaultArticles = () => {
  console.log('📦 Chargement articles par défaut')
  return [
    {
      id: 1,
      title: { rendered: "Témoignage : L'association XYZ adopte ASSIA" },
      content: { rendered: "<p>Découvrez comment l'association XYZ a transformé son accompagnement social avec ASSIA. Cette mise en œuvre a permis de réduire le temps administratif de 40% tout en améliorant la qualité de l'accompagnement des usagers.</p>" },
      date: "2024-01-15T10:00:00",
      featured_image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: [1],
      _embedded: { author: [{ name: "Équipe EDOSSAH" }] }
    },
    {
      id: 2,
      title: { rendered: "Nouvelle fonctionnalité : Gestion avancée des dossiers" },
      content: { rendered: "<p>ASSIA inaugure une nouvelle fonctionnalité pour une gestion encore plus fine des dossiers usagers. Cette évolution permet aux travailleurs sociaux de personnaliser leur suivi selon les besoins spécifiques de chaque dispositif.</p>" },
      date: "2024-01-10T14:30:00",
      featured_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: [2],
      _embedded: { author: [{ name: "Équipe EDOSSAH" }] }
    },
    {
      id: 3,
      title: { rendered: "Formation : Maîtriser les modules de paiement" },
      content: { rendered: "<p>Nouvelle session de formation dédiée à la maîtrise des modules de paiement d'ASSIA. Cette formation s'adresse aux gestionnaires et administrateurs souhaitant optimiser la gestion financière de leur structure.</p>" },
      date: "2024-01-05T09:15:00",
      featured_image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: [3],
      _embedded: { author: [{ name: "Équipe EDOSSAH" }] }
    }
  ]
}

const filterByCategory = (category) => {
  console.log('🔄 Changement de catégorie:', category)
  selectedCategory.value = category
  currentPage.value = 1
}

const getCategorySlug = (article) => {
  // Simulation de catégories basées sur le contenu
  const content = stripHtml(article.content?.rendered || '').toLowerCase()
  const title = stripHtml(article.title?.rendered || '').toLowerCase()
  
  if (content.includes('témoignage') || title.includes('témoignage')) return 'temoignage'
  if (content.includes('formation') || title.includes('formation')) return 'formation'
  if (content.includes('nouvelle') || content.includes('fonctionnalité')) return 'actualite'
  return 'actualite'
}

const getCategoryName = (article) => {
  const slug = getCategorySlug(article)
  const names = {
    temoignage: 'Témoignage',
    actualite: 'Actualité',
    formation: 'Formation'
  }
  return names[slug] || 'Actualité'
}

const getCategoryColor = (article) => {
  const slug = getCategorySlug(article)
  const colors = {
    temoignage: 'bg-[#FF6B6B]',
    actualite: 'bg-[#FFE66D]',
    formation: 'bg-[#1a1a1a]'
  }
  return colors[slug] || 'bg-[#4ECDC4]'
}

const getArticleImage = (article) => {
  // Essayer plusieurs sources d'images
  return article.featured_image || 
         article._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
         getDefaultImage(article)
}

const getDefaultImage = (article) => {
  const category = getCategorySlug(article)
  const images = {
    temoignage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    actualite: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    formation: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
  return images[category] || images.actualite
}

const handleImageError = (article) => {
  console.log('🖼️ Erreur image, utilisation image par défaut')
  article.featured_image = getDefaultImage(article)
}

const stripHtml = (html) => {
  if (!html) return ''
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

const resetFilters = () => {
  console.log('🔄 Réinitialisation des filtres')
  selectedCategory.value = 'all'
  searchQuery.value = ''
  currentPage.value = 1
}

const getExcerpt = (article) => {
  try {
    const content = article.content?.rendered || article.excerpt?.rendered || ''
    const plainText = stripHtml(content)
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText
  } catch (error) {
    console.error('❌ Erreur excerpt:', error)
    return 'Aucun contenu disponible'
  }
}

const getAuthorName = (article) => {
  return article._embedded?.author?.[0]?.name || 'Équipe EDOSSAH'
}

const getAuthorInitials = (article) => {
  const name = getAuthorName(article)
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const readArticle = (article) => {
  console.log('📖 Lecture article:', article.id, article.title?.rendered)
  // Navigation vers la page détail de l'article
  router.push(`/article/${article.id}`)
}

const proposeArticle = () => {
  console.log('✍️ Proposition article')
  window.open('mailto:contact@edossah.fr?subject=Proposition d\'article', '_blank')
}

const contactEditor = () => {
  console.log('📧 Contact rédaction')
  window.open('mailto:contact@edossah.fr?subject=Contact rédaction', '_blank')
}

// Lifecycle
onMounted(async () => {
  console.log('🚀 Initialisation Articles.vue')
  
  await nextTick()
  
  // LENIS
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.value.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Animation loader
  const tl = gsap.timeline()
  
  tl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
    .to('.loader-subtitle', { opacity: 1, duration: 0.5 }, "-=0.3")
    .to('.loader-progress', { width: '100%', duration: 1.5, ease: 'power2.out' }, '-=0.5')
    .to('.loader-text', { opacity: 0, duration: 0.5, delay: 0.3 })
    .to('.loader-subtitle', { opacity: 0, duration: 0.5 }, "<")
    .to('.loader', { 
      opacity: 0, 
      duration: 0.5,
      onComplete: () => { loading.value = false }
    })
    .to('.hero-line', {
      y: "0%",
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.15
    }, "-=0.5")
    .to('.hero-tag', { y: "0%", duration: 1, ease: 'power3.out' }, "-=1")
    .to('.nav-item', { opacity: 1, y: 0, stagger: 0.1, duration: 1 }, "-=1")
    .to('.hero-fade', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.5")

  // Récupération des articles
  fetchArticles()

  // Animations au scroll
  gsap.utils.toArray('.split-line').forEach((line) => {
    gsap.to(line, {
      y: "0%",
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: line,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  gsap.utils.toArray('.stat-card, .article-card').forEach((element, index) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  ScrollTrigger.refresh()
  
  console.log('✅ Articles.vue initialisé')
})

onUnmounted(() => {
  console.log('🧹 Nettoyage Articles.vue')
  if (lenis.value) lenis.value.destroy()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

.font-sans {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.gradient-text {
  background: linear-gradient(135deg, #1a1a1a 0%, #4ECDC4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.animate-spin-veryslow {
  animation: spin 20s linear infinite;
}

.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.stat-card, .article-card {
  transition: all 0.3s ease;
}

.stat-card:hover, .article-card:hover {
  transform: translateY(-2px);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Loading animation */
.loader {
  transition: opacity 0.5s ease;
}

.loader-progress {
  transition: width 1.5s ease;
}

/* Form styles */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
}

/* Router link active state */
.router-link-active {
  color: #4ECDC4;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #4ECDC4;
}

@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .md\:text-\[7vw\] {
    font-size: 8vw;
  }
}

html {
  scroll-behavior: smooth;
}
</style>