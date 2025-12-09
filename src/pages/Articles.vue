<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden cursor-none">
    
    <div ref="cursor" class="custom-cursor"></div>
    <Loader v-if="loading" @completed="onLoaderCompleted" />

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

    <HeroSection />

    <section class="py-16 px-6 md:px-12 container mx-auto">
      <div class="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
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
    
    <section class="py-16 px-6 md:px-12 container mx-auto">
      <div v-if="!loading" class="space-y-8">
        <div v-if="fetchError" class="text-center py-20">
          <div class="text-6xl mb-4">😢</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Erreur de chargement</h3>
          <p class="text-gray-600">{{ fetchError }}</p>
          <button @click="fetchArticles" class="mt-4 px-6 py-2 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all">
            Réessayer
          </button>
        </div>
        <div v-else-if="articles.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4">📭</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Aucun article disponible</h3>
          <p class="text-gray-600">Il n'y a pas d'articles à afficher pour le moment.</p>
        </div>
        <div v-else-if="paginatedArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in paginatedArticles"
            :key="article.id"
            :article="article"
            @read="readArticle"
            class="article-card"
          />
        </div>
        <div v-else class="text-center py-20">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Aucun article trouvé</h3>
          <p class="text-gray-600">Essayez une autre recherche ou catégorie.</p>
          <button @click="resetFilters" class="mt-4 px-6 py-2 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all">
            Réinitialiser les filtres
          </button>
        </div>
      </div>
      <div v-if="loading && !fetchError" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ECDC4]"></div>
        <p class="mt-4 text-gray-600">Chargement des articles...</p>
      </div>
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
import { onMounted, onUnmounted, ref, computed, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

import Loader from '../components/Loader.vue'
import HeroSection from '../components/HeroSection.vue'
import ArticleCard from '../components/ArticleCard.vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

const articles = ref([])
const loading = ref(true)
const fetchError = ref(null)
const selectedCategory = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 9
const lenis = ref(null)
const cursor = ref(null)

const onLoaderCompleted = () => {
  loading.value = false;
  nextTick(() => {
    const tl = gsap.timeline();
    tl.to('.nav-item', { opacity: 1, y: 0, stagger: 0.1, duration: 1 });
  });
};

const filteredArticles = computed(() => {
  let filtered = articles.value;

  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article => getCategorySlug(article) === selectedCategory.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(article => {
      const title = stripHtml(article.title?.rendered || '').toLowerCase();
      const content = stripHtml(article.content?.rendered || '').toLowerCase();
      return title.includes(query) || content.includes(query);
    });
  }
  
  return filtered;
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return filteredArticles.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / postsPerPage);
});

const testimoniesCount = computed(() => {
  return articles.value.filter(article => getCategorySlug(article) === 'temoignage').length
});

const newsCount = computed(() => {
  return articles.value.filter(article => getCategorySlug(article) === 'actualite').length
});

const fetchArticles = async () => {
  loading.value = true;
  fetchError.value = null;
  try {
    const response = await fetch('https://edossah.fr/wp-json/wp/v2/posts?per_page=100&_embed');
    if (!response.ok) {
      throw new Error('La récupération des articles a échoué.');
    }
    articles.value = await response.json();
  } catch (error) {
    fetchError.value = error.message;
    articles.value = getDefaultArticles();
  } finally {
    loading.value = false;
  }
};

const getDefaultArticles = () => {
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
      featured_image: "https://images.unsplash.com/photo-1434030216411-0b_793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: [3],
      _embedded: { author: [{ name: "Équipe EDOSSAH" }] }
    }
  ];
};

const filterByCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1;
};

const stripHtml = (html) => {
  if (!html) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

const getCategorySlug = (article) => {
  const content = stripHtml(article.content?.rendered || '').toLowerCase();
  const title = stripHtml(article.title?.rendered || '').toLowerCase();
  
  if (content.includes('témoignage') || title.includes('témoignage')) return 'temoignage';
  if (content.includes('formation') || title.includes('formation')) return 'formation';
  if (content.includes('nouvelle') || content.includes('fonctionnalité')) return 'actualite';
  return 'actualite';
};

const resetFilters = () => {
  selectedCategory.value = 'all';
  searchQuery.value = '';
  currentPage.value = 1;
};

const readArticle = (article) => {
  router.push(`/article/${article.id}`);
};

const proposeArticle = () => {
  window.open('mailto:contact@edossah.fr?subject=Proposition d\'article', '_blank');
};

const contactEditor = () => {
  window.open('mailto:contact@edossah.fr?subject=Contact rédaction', '_blank');
};

const onMouseMove = (event) => {
  gsap.to(cursor.value, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.2,
    ease: 'power2.out'
  });
};

const animateArticleCards = () => {
  gsap.utils.toArray('.article-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });
};

watch(paginatedArticles, () => {
  nextTick(() => {
    animateArticleCards();
  });
});

onMounted(async () => {
  await nextTick();
  
  window.addEventListener('mousemove', onMouseMove);

  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.value.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  await fetchArticles();

  gsap.utils.toArray('.stat-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });
  
  animateArticleCards();

  ScrollTrigger.refresh();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  if (lenis.value) lenis.value.destroy();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
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

.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
}

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

.custom-cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #4ECDC4;
  mix-blend-mode: difference;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>