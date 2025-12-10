<template>
  <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
    
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="article.featured_image" 
        alt="Article" 
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      >
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
    </div>

    <!-- Contenu -->
    <div class="p-6 flex flex-col flex-grow">
      <div class="text-xs font-bold text-[#4ECDC4] uppercase tracking-wider mb-2">
        {{ new Date(article.date).toLocaleDateString() }}
      </div>
      
      <h3 class="text-xl font-bold mb-3 leading-tight group-hover:text-[#4ECDC4] transition-colors" v-html="article.title.rendered"></h3>
      
      <div class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow" v-html="article.excerpt.rendered"></div>
      
      <!-- Bouton d'action -->
      <button 
        @click="$emit('read', article)" 
        class="mt-auto w-full py-3 rounded-full border border-gray-200 text-sm font-semibold uppercase tracking-wide hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300"
      >
        Lire l'article
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
// On déclare l'événement 'read' pour que le parent puisse l'écouter
defineEmits(['read'])
</script>