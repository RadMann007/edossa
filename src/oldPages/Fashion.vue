<template>
  <div class="bg-[#1a1a1a] min-h-screen font-sans text-white overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
    
    <!-- NAVIGATION (Minimaliste & Technique) -->
    <nav class="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
      <div class="text-sm font-bold tracking-widest uppercase">
        [ EDOSSAR / ASSIA ]
      </div>
      <div class="hidden md:flex gap-8 text-xs font-mono tracking-widest">
        <a href="#" class="hover:text-[#ccff00] transition">[ ACCUEIL ]</a>
        <a href="#" class="hover:text-[#ccff00] transition">[ APPLICATIONS ]</a>
        <a href="#" class="hover:text-[#ccff00] transition">[ ACTUALITÉS ]</a>
      </div>
      <div class="text-2xl animate-spin-slow">
        <!-- Abstract Star Icon -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <header class="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      
      <!-- Background Image (Sombre & Grayscale pour le style) -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
             alt="Background" 
             class="w-full h-full object-cover grayscale brightness-[0.4] contrast-125" />
      </div>

      <!-- Content Overlay -->
      <div class="relative z-10 w-full h-full container mx-auto px-4 md:px-12 flex flex-col justify-center">
        
        <!-- Top Small Text -->
        <div class="absolute top-24 left-6 md:left-12 text-xs md:text-sm font-mono opacity-80 max-w-xs">
          <p class="mb-2 text-[#ccff00] font-bold">[ PROJET SS26 ]</p>
          <p>Soutenir le quotidien des équipes pour renforcer votre marque employeur.</p>
          <p class="mt-2 text-xs opacity-60">Precision-Made in France.</p>
        </div>

        <!-- MASSIVE TITLE -->
        <div class="relative w-full flex justify-center items-center">
          <h1 class="text-[18vw] leading-none font-black tracking-tighter text-[#ccff00] mix-blend-screen z-10">
            EDOSSAR
          </h1>
          
          <!-- Floating Overlay Image (The "Fashion" touch) -->
          <div class="absolute right-[10%] top-[20%] md:right-[20%] md:top-[10%] z-20 w-40 md:w-64 aspect-[3/4] overflow-hidden border border-white/20 shadow-2xl rotate-3">
             <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
             alt="Portrait Social Worker" 
             class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out grayscale hover:grayscale-0" />
          </div>

          <!-- Decorative Geometric Icon inside Text -->
          <div class="absolute z-30 text-white mix-blend-difference animate-pulse">
             <svg width="60" height="60" viewBox="0 0 100 100" class="md:w-24 md:h-24">
                <rect x="20" y="20" width="60" height="60" stroke="white" stroke-width="2" fill="none" transform="rotate(45 50 50)"/>
                <rect x="20" y="20" width="60" height="60" stroke="white" stroke-width="2" fill="none"/>
             </svg>
          </div>
        </div>

        <!-- Bottom Right Tech Text -->
        <div class="absolute bottom-10 right-6 md:right-12 text-right">
          <p class="text-xs font-mono mb-1">[ SCROLL TO EXPLORE ]</p>
          <p class="text-4xl font-bold text-[#ccff00]">FR</p>
        </div>
      </div>
    </header>

    <!-- ABOUT / MANIFESTO SECTION -->
    <section class="relative bg-[#111] py-32 overflow-hidden">
      
      <!-- Background Giant Watermark -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none">
        <span class="text-[25vw] font-black text-[#1a1a1a] leading-none block">SOCIAL</span>
      </div>

      <div class="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <!-- Rotating Star Icon -->
        <div class="mb-12">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white" class="animate-spin-slow">
             <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
          </svg>
        </div>

        <h2 class="text-xl md:text-3xl md:leading-relaxed font-bold max-w-4xl uppercase tracking-wide">
          FONDE EN FRANCE EN 2015, <br/>
          <span class="text-[#ccff00]">[ EDOSSAR ]</span> EST BATI SUR UN ENGAGEMENT
          INEBRANLABLE ENVERS <span class="bg-white text-black px-2 italic">L'IMPACT SOCIAL.</span>
          NOUS UNISSONS CONNAISSANCE METIER ET TECHNOLOGIE.
        </h2>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left border-t border-gray-800 pt-12">
          
          <!-- Column 1 -->
          <div class="space-y-6">
            <h3 class="text-[#ccff00] font-mono text-sm">[ QUI SOMMES-NOUS ? ]</h3>
            <p class="text-gray-400 text-sm leading-7">
              Une douzaine d'experts au service des secteurs de l'ONIT. Depuis plusieurs années, nous concevons des solutions utiles et accessibles comme <strong class="text-white">ASSIA</strong>.
            </p>
          </div>

          <!-- Column 2 -->
          <div class="space-y-6">
            <h3 class="text-[#ccff00] font-mono text-sm">[ NOS ENGAGEMENTS ]</h3>
            <p class="text-gray-400 text-sm leading-7">
              Hébergement en France, prestataires coopératifs (Telecoop, Crédit Coopératif). Nous visons le 
              <span class="border-b border-[#ccff00] text-white pb-0.5">0 déchet numérique</span> et favorisons le télétravail pour réduire notre empreinte.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- LOGO GRID (Revisité style Brutalist) -->
    <section class="bg-[#ccff00] text-black py-12 border-t border-black">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-between items-center gap-8 font-bold text-lg md:text-2xl tracking-tighter opacity-80">
          <span>CROIX-ROUGE</span>
          <span>EQUALIS</span>
          <span>ARILE</span>
          <span>SIAO 92</span>
          <span>AJHIRALP</span>
          <span>ESPERER 95</span>
        </div>
        <div class="mt-4 border-t-2 border-black pt-2 text-right text-xs font-mono">
          [ 1000+ PROFESSIONNELS ]
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Aucune logique complexe requise, tout est dans le style CSS/Tailwind
</script>

<style scoped>
/* Ajout d'une police plus "tech/fashion" si possible, sinon sans-serif par défaut */
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:wght@400;700&display=swap');

.font-sans {
  font-family: 'Archivo', sans-serif;
}
.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

/* Animation personnalisée pour l'étoile */
.animate-spin-slow {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>