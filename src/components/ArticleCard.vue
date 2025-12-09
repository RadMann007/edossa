<template>
  <article
    class="article-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="relative overflow-hidden aspect-video">
      <img
        :src="getArticleImage(article)"
        :alt="stripHtml(article.title?.rendered || 'Article')"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        @error="handleImageError"
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
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2" v-html="article.title?.rendered"></h3>
      <div class="text-gray-600 text-sm mb-4 line-clamp-3" v-html="getExcerpt(article)"></div>
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
      <button
        @click="$emit('read', article)"
        class="mt-4 w-full px-4 py-2 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] text-white rounded-full hover:shadow-lg transition-all duration-300 text-sm font-semibold"
      >
        Lire l'article
      </button>
    </div>
  </article>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

defineEmits(['read']);

const getArticleImage = (article) => {
  return article.featured_image ||
         article._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
         getDefaultImage(article);
};

const getDefaultImage = (article) => {
  const category = getCategorySlug(article);
  const images = {
    temoignage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    actualite: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    formation: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  };
  return images[category] || images.actualite;
};

const handleImageError = (event) => {
  event.target.src = getDefaultImage(props.article);
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

const getCategoryName = (article) => {
  const slug = getCategorySlug(article);
  const names = {
    temoignage: 'Témoignage',
    actualite: 'Actualité',
    formation: 'Formation'
  };
  return names[slug] || 'Actualité';
};

const getCategoryColor = (article) => {
  const slug = getCategorySlug(article);
  const colors = {
    temoignage: 'bg-[#FF6B6B]',
    actualite: 'bg-[#FFE66D]',
    formation: 'bg-[#1a1a1a]'
  };
  return colors[slug] || 'bg-[#4ECDC4]';
};

const getExcerpt = (article) => {
  try {
    const content = article.content?.rendered || article.excerpt?.rendered || '';
    const plainText = stripHtml(content);
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  } catch (error) {
    return 'Aucun contenu disponible';
  }
};

const getAuthorName = (article) => {
  return article._embedded?.author?.[0]?.name || 'Équipe EDOSSAH';
};

const getAuthorInitials = (article) => {
  const name = getAuthorName(article);
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

let hoverTimeline;

const onMouseEnter = (event) => {
  const card = event.currentTarget;
  hoverTimeline = gsap.timeline();
  hoverTimeline.to(card, {
    y: -10,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    duration: 0.3,
    ease: 'power2.out'
  });
};

const onMouseLeave = (event) => {
  const card = event.currentTarget;
  hoverTimeline.reverse();
};
</script>
