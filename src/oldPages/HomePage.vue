<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden">
    
    <!-- LOADER AMÉLIORÉ -->
    <div ref="loader" class="fixed inset-0 bg-[#111] z-[100] flex items-center justify-center">
      <div class="relative">
        <div class="loader-text opacity-0 text-[#F3F0E7]">
          <span class="text-4xl md:text-6xl font-bold tracking-tighter">EDOSSAR.</span>
        </div>
        <div class="loader-progress w-0 h-1 bg-[#F3F0E7] mt-4"></div>
      </div>
    </div>

    <!-- NAVBAR AMÉLIORÉE -->
    <nav class="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
      <div class="nav-item opacity-0">
        <span class="text-2xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-all duration-300">Edossar.</span>
      </div>
      <div class="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wide nav-item opacity-0">
        <a href="#applications" class="hover:opacity-50 transition-all duration-300 relative group">
          Applications
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#actualites" class="hover:opacity-50 transition-all duration-300 relative group">
          Actualités
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </a>
        <button class="border border-current px-4 py-1 rounded-full hover:bg-black hover:text-[#F3F0E7] transition-all duration-300 transform hover:scale-105">
          Contact
        </button>
      </div>
    </nav>

    <!-- HERO SECTION AMÉLIORÉE -->
    <header class="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 container mx-auto">
      
      <!-- Tag amélioré -->
      <div class="flex items-center gap-2 mb-8 overflow-hidden">
        <div class="hero-tag translate-y-full flex items-center gap-2">
          <span class="animate-spin-slow text-2xl text-[#FF6B6B]">✹</span>
          <span class="text-sm font-mono uppercase text-gray-500 tracking-wider">Service Social Numérique</span>
        </div>
      </div>

      <!-- Titre principal avec effets 2025 -->
      <h1 class="text-5xl md:text-[7vw] leading-[1.05] font-medium tracking-tight mb-20">
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full gradient-text">Le numérique</span>
        </div>
        
        <div class="overflow-hidden flex flex-wrap items-center gap-2 md:gap-5">
           <span class="block hero-line translate-y-full">souhaité par</span>
           
           <!-- Image pilule améliorée -->
           <div class="hero-pill w-0 overflow-hidden h-[50px] md:h-[9vw] rounded-full relative self-center shadow-2xl mx-2 group">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  class="w-[150px] md:w-[20vw] h-full object-cover scale-150 hero-pill-img group-hover:scale-125 transition-transform duration-700" 
                  alt="Équipe sociale" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>
           
           <span class="block hero-line translate-y-full">les</span>
        </div>

        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full text-[#4ECDC4]">travailleurs sociaux.</span>
        </div>
      </h1>

      <!-- Contenu secondaire amélioré -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-b border-gray-300 pb-24 border-opacity-0 hero-border">
        
        <!-- Image avec effet au survol -->
        <div class="md:col-span-4 relative overflow-hidden rounded-2xl opacity-0 hero-fade group">
          <div class="hover-image-container overflow-hidden">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboard ASSIA" 
                  class="w-full h-64 md:h-80 object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-sm font-semibold">ASSIA Dashboard</p>
            </div>
          </div>
        </div>

        <!-- Bouton magnétique amélioré -->
        <div class="md:col-span-4 flex justify-center md:mb-10 relative z-20">
          <div ref="magneticBtn" class="magnetic-wrap cursor-pointer opacity-0 hero-fade group">
             <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-800 flex items-center justify-center bg-[#F3F0E7] hover:bg-black hover:text-white transition-all duration-500 magnetic-content relative overflow-hidden">
                <svg class="absolute w-full h-full p-2 animate-spin-veryslow" viewBox="0 0 100 100">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text class="text-[10px] uppercase font-bold tracking-widest fill-current">
                     <textPath xlink:href="#circlePath" startOffset="0%">
                       Scroll to explore • Scroll to explore •
                     </textPath>
                   </text>
                </svg>
                <span class="text-2xl group-hover:animate-bounce">↓</span>
                <div class="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
             </div>
          </div>
        </div>

        <!-- Texte avec effet de frappe -->
        <div class="md:col-span-4 md:col-start-9 opacity-0 hero-fade">
           <p class="text-lg leading-relaxed text-gray-800 typewriter">
             Edossar est une agence créant ASSIA, l'outil de référence pour l'interaction humaine et technologique.
           </p>
           <div class="mt-6 flex gap-4">
             <button class="px-6 py-2 bg-[#1a1a1a] text-[#F3F0E7] rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105">
               En savoir plus
             </button>
             <button class="px-6 py-2 border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-[#F3F0E7] transition-all duration-300">
               Démonstration
             </button>
           </div>
        </div>
      </div>
    </header>

    <!-- SECTION SUIVANTE AMÉLIORÉE -->
    <section id="applications" class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text-2">Nous construisons</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">le futur du social.</span>
        </h2>
      </div>
      
      <!-- Parallaxe amélioré -->
      <div class="mt-20 h-[600px] w-full overflow-hidden rounded-3xl relative parallax-section group">
         <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              class="w-full h-[120%] object-cover absolute top-[-10%] parallax-img group-hover:scale-105 transition-transform duration-1000" 
              alt="Avenir du social" />
         <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
         <div class="absolute bottom-10 left-10 text-white">
           <h3 class="text-3xl font-bold mb-2">ASSIA 2025</h3>
           <p class="text-lg opacity-90">La nouvelle génération d'outils sociaux</p>
         </div>
      </div>

      <!-- Nouvelle section fonctionnalités -->
      <div class="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🤝</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Collaboration</h3>
          <p class="text-gray-600">Travaillez ensemble en temps réel avec vos collègues</p>
        </div>
        
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#4ECDC4] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">📊</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Analytics</h3>
          <p class="text-gray-600">Des indicateurs pertinents pour vos actions</p>
        </div>
        
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#FFE66D] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Sécurité</h3>
          <p class="text-gray-600">Vos données sont protégées et conformes RGPD</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const loader = ref(null);
const magneticBtn = ref(null);
let lenis;

onMounted(async () => {
  await nextTick();
  
  // 1. LENIS AMÉLIORÉ
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 2. TIMELINE D'INTRO AMÉLIORÉE
  const tl = gsap.timeline();

  // Loader avec barre de progression
  tl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
    .to('.loader-progress', { width: '100%', duration: 1, ease: 'power2.out' }, '-=0.3')
    .to('.loader-text', { opacity: 0, duration: 0.5, delay: 0.3 })
    .to(loader.value, { 
      y: '-100%', 
      duration: 1.2, 
      ease: 'power4.inOut' 
    })
    
    // Animations du hero
    .to('.hero-line', {
      y: "0%",
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.15
    }, "-=0.8")
    
    .to('.hero-pill', {
      width: 'auto',
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    }, "-=1.2")
    
    .to('.hero-pill-img', {
      scale: 1,
      duration: 1.5,
      ease: 'power2.out'
    }, "<")
    
    .to('.hero-tag', { y: "0%", duration: 1, ease: 'power3.out' }, "-=1")
    .to('.nav-item', { opacity: 1, y: 0, stagger: 0.1, duration: 1 }, "-=1")
    .to('.hero-fade', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.5")
    .to('.hero-border', { borderColor: '#d1d5db', opacity: 1, duration: 1 }, "<")
    .to('.typewriter', { 
      text: "Edossar est une agence créant ASSIA, l'outil de référence pour l'interaction humaine et technologique.",
      duration: 2,
      ease: "none"
    }, "-=0.5");

  // 3. BOUTON MAGNÉTIQUE AMÉLIORÉ
  const btn = magneticBtn.value;
  if (btn) {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
      gsap.to(btn.querySelector('.magnetic-content'), { x: x * 0.5, y: y * 0.5, duration: 0.3 });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
      gsap.to(btn.querySelector('.magnetic-content'), { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
    });

    // Scroll au clic
    btn.addEventListener('click', () => {
      lenis.scrollTo('#applications', { offset: -100 });
    });
  }

  // 4. SCROLL ANIMATIONS AMÉLIORÉES
  // Texte avec reveal
  gsap.utils.toArray('.split-line').forEach((line, index) => {
    gsap.to(line, {
      y: "0%",
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: line,
        scrub: 1,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Parallaxe améliorée
  gsap.to('.parallax-img', {
    y: '15%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Cartes fonctionnalités
  gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Effet de rotation continue pour les icônes
  gsap.utils.toArray('.feature-card > div:first-child').forEach((icon) => {
    gsap.to(icon, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1
    });
  });

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
});

onUnmounted(() => {
  if (lenis) lenis.destroy();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

.font-sans {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #1a1a1a 0%, #4ECDC4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-2 {
  background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animations améliorées */
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

/* Animations au survol */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-8px);
  }
  70% {
    transform: translateY(-4px);
  }
  90% {
    transform: translateY(-2px);
  }
}

/* Responsive amélioré */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .md\:text-\[7vw\] {
    font-size: 8vw;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Curseur personnalisé */
.cursor-pointer {
  cursor: pointer;
}

/* Effet de brillance */
.feature-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .bg-\[\#F3F0E7\] {
    background-color: #1a1a1a;
  }
  
  .text-\[\#1a1a1a\] {
    color: #F3F0E7;
  }
}
</style>