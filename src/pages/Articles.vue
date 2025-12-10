<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden cursor-none">
    <div ref="cursor" class="custom-cursor"></div>
    <Loader v-if="loading && articles.length === 0" @completed="onLoaderCompleted" />

    <nav class="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
      <div class="nav-item opacity-100">
        <router-link to="/" class="text-2xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-all duration-300">
          EDOSSAH
        </router-link>
      </div>
      <div class="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wide nav-item opacity-100">
        <router-link to="/" class="hover:opacity-50 transition-all duration-300">Accueil</router-link>
        <router-link to="/articles" class="hover:opacity-50 transition-all duration-300">Articles</router-link>
      </div>
    </nav>

    <HeroSection />

    <section class="py-16 px-6 md:px-12 container mx-auto mt-20">
      <div class="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div class="flex flex-wrap gap-3">
          <button @click="filterByCategory('all')" :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', selectedCategory === 'all' ? 'bg-[#4ECDC4] text-white' : 'bg-white border hover:border-[#4ECDC4]']">Tous</button>
          <button @click="filterByCategory('temoignage')" :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', selectedCategory === 'temoignage' ? 'bg-[#FF6B6B] text-white' : 'bg-white border hover:border-[#FF6B6B]']">Témoignages</button>
          <button @click="filterByCategory('actualite')" :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', selectedCategory === 'actualite' ? 'bg-[#FFE66D] text-white' : 'bg-white border hover:border-[#FFE66D]']">Actualités</button>
        </div>
        <div class="relative">
          <input v-model="searchQuery" type="text" placeholder="Rechercher..." class="pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-[#4ECDC4] w-64">
        </div>
      </div>
    </section>
    
    <section class="pb-16 px-6 md:px-12 container mx-auto">
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ECDC4]"></div>
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
        <p class="text-gray-600">Aucun article trouvé.</p>
        <button @click="resetFilters" class="mt-4 px-6 py-2 bg-[#4ECDC4] text-white rounded-full">Réinitialiser</button>
      </div>

      <div v-if="totalPages > 1 && !loading" class="mt-12 flex justify-center gap-2">
        <button @click="currentPage--" :disabled="currentPage <= 1" class="px-4 py-2 border rounded-lg disabled:opacity-50">Précédent</button>
        <span class="px-4 py-2 bg-[#4ECDC4] text-white rounded-lg">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="currentPage++" :disabled="currentPage >= totalPages" class="px-4 py-2 border rounded-lg disabled:opacity-50">Suivant</button>
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
const selectedCategory = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 9
const lenis = ref(null)
const cursor = ref(null)

const onLoaderCompleted = () => { loading.value = false; };

const fetchArticles = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://edossah.fr/wp-json/wp/v2/posts?per_page=100&_embed');
    if (!response.ok) throw new Error('Erreur réseau');
    const data = await response.json();
    
    articles.value = data.map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      date: post.date,
      // Correction ICI : Utilisation d'une URL absolue valide pour l'image
      featured_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/800x600?text=EDOSSAH',
      author_name: post._embedded?.['author']?.[0]?.name || 'Équipe EDOSSAH'
    }));
  } catch (e) {
    console.error(e);
    articles.value = []; 
  } finally {
    loading.value = false;
  }
};

const stripHtml = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

const getCategorySlug = (article) => {
  const text = (stripHtml(article.title?.rendered) + stripHtml(article.content?.rendered)).toLowerCase();
  if (text.includes('témoignage')) return 'temoignage';
  if (text.includes('formation')) return 'formation';
  return 'actualite';
};

const filteredArticles = computed(() => {
  let filtered = articles.value;
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(a => getCategorySlug(a) === selectedCategory.value);
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    filtered = filtered.filter(a => stripHtml(a.title?.rendered || '').toLowerCase().includes(q));
  }
  return filtered;
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  return filteredArticles.value.slice(start, start + postsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / postsPerPage));

const filterByCategory = (cat) => { selectedCategory.value = cat; currentPage.value = 1; };
const resetFilters = () => { selectedCategory.value = 'all'; searchQuery.value = ''; };

const readArticle = (article) => {
  console.log("Navigation vers l'article ID:", article.id); // Pour le débogage
  router.push({ name: 'article-detail', params: { id: article.id } });
};

const onMouseMove = (e) => {
  if (cursor.value) gsap.to(cursor.value, { x: e.clientX, y: e.clientY, duration: 0.2 });
};

onMounted(async () => {
  window.addEventListener('mousemove', onMouseMove);
  lenis.value = new Lenis({ duration: 1.2, smooth: true });
  function raf(time) { lenis.value.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  
  await fetchArticles();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  lenis.value?.destroy();
});
</script>

<style scoped>
.custom-cursor {
  position: fixed; left: 0; top: 0; width: 20px; height: 20px; border-radius: 50%;
  background-color: #4ECDC4; mix-blend-mode: difference; pointer-events: none; transform: translate(-50%, -50%); z-index: 9999;
}
</style>