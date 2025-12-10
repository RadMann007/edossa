<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] cursor-none relative">
    
    <!-- Curseur -->
    <div ref="cursor" class="custom-cursor"></div>

    <!-- Navigation (Retour) -->
    <nav class="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-[#F3F0E7]/80 backdrop-blur-md">
      <router-link to="/articles" class="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:opacity-60 transition-all">
        <span class="text-xl">←</span> Retour aux articles
      </router-link>
      
      <router-link to="/" class="text-xl font-bold tracking-tight">EDOSSAH</router-link>
    </nav>

    <!-- Chargement -->
    <div v-if="loading" class="h-screen flex flex-col justify-center items-center">
      <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-[#4ECDC4] mb-4"></div>
      <p class="text-gray-500 animate-pulse">Chargement de l'article...</p>
    </div>

    <!-- Contenu de l'article -->
    <article v-else-if="article" class="pt-32 pb-20">
      
      <!-- En-tête Article -->
      <header class="container mx-auto px-6 md:px-12 mb-12 text-center max-w-4xl">
        <div class="flex justify-center gap-4 mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
          <span v-if="article.date">{{ formatDate(article.date) }}</span>
          <span class="w-px h-4 bg-gray-300"></span>
          <span>{{ authorName }}</span>
        </div>
        
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight" v-html="article.title.rendered"></h1>
        
        <div v-if="featuredImage" class="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img :src="featuredImage" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt="Image principale">
        </div>
      </header>

      <!-- Corps du texte (WordPress Content) -->
      <div class="container mx-auto px-6 md:px-12 max-w-3xl">
        <!-- v-html est essentiel pour afficher le HTML renvoyé par WordPress -->
        <div class="wordpress-content text-lg leading-relaxed text-gray-800" v-html="article.content.rendered"></div>
      </div>

      <!-- Pied de page article -->
      <div class="container mx-auto px-6 md:px-12 max-w-3xl mt-16 pt-8 border-t border-gray-300">
        <h3 class="font-bold text-xl mb-4">Partager cet article</h3>
        <div class="flex gap-4">
          <button class="px-6 py-2 bg-[#1a1a1a] text-white rounded-full hover:bg-[#4ECDC4] transition-colors">Facebook</button>
          <button class="px-6 py-2 bg-[#1a1a1a] text-white rounded-full hover:bg-[#4ECDC4] transition-colors">LinkedIn</button>
        </div>
      </div>

    </article>

    <!-- Erreur -->
    <div v-else class="h-screen flex flex-col justify-center items-center text-center">
      <h2 class="text-4xl mb-4">😕</h2>
      <h3 class="text-2xl font-bold mb-2">Article introuvable</h3>
      <router-link to="/articles" class="text-[#4ECDC4] underline">Retourner à la liste</router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

const route = useRoute()
const article = ref(null)
const loading = ref(true)
const featuredImage = ref(null)
const authorName = ref('Équipe EDOSSAH')
const cursor = ref(null)
const lenis = ref(null)

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
};

const fetchSingleArticle = async () => {
  loading.value = true;
  // On récupère l'ID depuis l'URL (route.params.id)
  const id = route.params.id;
  
  try {
    const response = await fetch(`https://edossah.fr/wp-json/wp/v2/posts/${id}?_embed`);
    
    if (!response.ok) throw new Error('Article non trouvé');
    
    const data = await response.json();
    article.value = data;

    // Extraction image et auteur
    if (data._embedded && data._embedded['wp:featuredmedia'] && data._embedded['wp:featuredmedia'][0]) {
      featuredImage.value = data._embedded['wp:featuredmedia'][0].source_url;
    } else {
      featuredImage.value = 'https://via.placeholder.com/1200x600?text=EDOSSAH';
    }

    if (data._embedded && data._embedded['author']) {
      authorName.value = data._embedded['author'][0].name;
    }

  } catch (error) {
    console.error(error);
    article.value = null;
  } finally {
    loading.value = false;
  }
};

const onMouseMove = (e) => {
  if(cursor.value) gsap.to(cursor.value, { x: e.clientX, y: e.clientY, duration: 0.2 });
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  
  // Smooth Scroll
  lenis.value = new Lenis({ duration: 1.2, smooth: true });
  function raf(time) { lenis.value.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  fetchSingleArticle();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  lenis.value?.destroy();
});
</script>

<style>
/* CSS global pour le contenu WordPress injecté via v-html */
.wordpress-content p {
  margin-bottom: 1.5rem;
}
.wordpress-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
.wordpress-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.wordpress-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}
.wordpress-content li {
  margin-bottom: 0.5rem;
}
.wordpress-content blockquote {
  border-left: 4px solid #4ECDC4;
  padding-left: 1.5rem;
  font-style: italic;
  margin: 2rem 0;
  color: #555;
}
.wordpress-content img {
  border-radius: 1rem;
  margin: 2rem 0;
  max-width: 100%;
  height: auto;
}
.wordpress-content a {
  color: #4ECDC4;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.custom-cursor {
  position: fixed; left: 0; top: 0; width: 20px; height: 20px; border-radius: 50%;
  background-color: #4ECDC4; mix-blend-mode: difference; pointer-events: none; transform: translate(-50%, -50%); z-index: 9999;
}
</style>