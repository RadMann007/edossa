<template>
  <!-- Main Wrapper with dark theme -->
  <div ref="mainContainer" class="bg-[#121212] min-h-screen font-sans text-white overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
    
    <!-- NAVIGATION DISCRÈTE -->
    <nav class="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference opacity-0 nav-anim">
      <span class="text-[10px] md:text-xs font-mono uppercase tracking-widest">[ A NEW CHAPTER ]</span>
      <span class="text-[10px] md:text-xs font-mono uppercase tracking-widest">NOT TO SPEAK BUT TO ACT</span>
    </nav>

    <!-- HEADER / HERO SECTION -->
    <section class="relative pt-20 md:pt-32 pb-10 px-4 md:px-10">
      
      <!-- MASSIVE TITLE "EDOSSAR" -->
      <!-- On utilise flex-wrap pour gérer le mobile, mais le design vise le desktop -->
      <div class="relative z-10">
        <h1 class="title-container text-[18vw] leading-[0.85] font-black tracking-tighter text-[#E0FF00] uppercase flex flex-wrap justify-center overflow-hidden">
          <!-- Chaque lettre est dans un span pour l'animation GSAP -->
          <div class="char-wrapper overflow-hidden"><span class="char inline-block">E</span></div>
          <div class="char-wrapper overflow-hidden"><span class="char inline-block">D</span></div>
          <div class="char-wrapper overflow-hidden"><span class="char inline-block">O</span></div>
          <div class="char-wrapper overflow-hidden"><span class="char inline-block">S</span></div>
          <div class="char-wrapper overflow-hidden relative">
            <span class="char inline-block">S</span>
            
            <!-- OVERLAY IMAGE (La petite image sur le texte) -->
            <!-- Positionnée en absolu par rapport à la lettre S ou au conteneur -->
            <div ref="overlayImg" class="absolute top-[20%] left-[-20%] w-[12vw] h-[8vw] z-20 hidden md:block opacity-0 scale-50">
               <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" 
                    class="w-full h-full object-cover border border-white/20" alt="Detail" />
               <span class="absolute -bottom-6 left-0 text-[10px] font-mono text-white">[ SS26 ]</span>
            </div>
          </div>
          <div class="char-wrapper overflow-hidden"><span class="char inline-block">A</span></div>
          <div class="char-wrapper overflow-hidden"><span class="char inline-block">R</span></div>
        </h1>
      </div>

      <!-- MAIN HERO IMAGE -->
      <div class="relative w-full mt-8 md:mt-4 overflow-hidden h-[50vh] md:h-[70vh] group hero-img-container opacity-0 translate-y-20">
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" 
             alt="Team meeting" 
             class="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[2s] ease-out group-hover:scale-105" />
        
        <!-- Stickers / Tags on image -->
        <div class="absolute top-10 right-10 bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20 rotate-12">
            <span class="font-mono text-xs text-white">JONAS</span>
        </div>
        <div class="absolute bottom-10 left-10 text-white mix-blend-difference">
             <p class="font-mono text-xs">[ BUILT FOR MODERN LIFE ]</p>
        </div>
      </div>
    </section>

    <!-- TYPOGRAPHY / CONTENT SECTION -->
    <section class="py-24 px-4 md:px-10 min-h-screen flex flex-col justify-center">
      
      <!-- Lignes de texte animées au scroll -->
      <div class="max-w-7xl mx-auto w-full">
        
        <!-- LINE 1 -->
        <div class="text-reveal-trigger mb-2 md:mb-6">
          <h2 class="text-3xl md:text-6xl font-bold uppercase tracking-tight flex flex-wrap items-baseline gap-4 overflow-hidden">
            <span class="text-[#E0FF00] split-text translate-y-full">INTRODUCING THE</span>
            <span class="text-white split-text translate-y-full">ASSIA V3</span>
            <span class="text-[10px] font-mono align-top -mt-2 opacity-60">FOR</span>
          </h2>
        </div>

        <!-- LINE 2 -->
        <div class="text-reveal-trigger mb-2 md:mb-6">
          <h2 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter flex flex-wrap items-baseline gap-6 overflow-hidden">
            <span class="text-white split-text translate-y-full">DESIGNED</span>
            <span class="text-white split-text translate-y-full italic font-serif font-light lowercase">stillness</span>
            <span class="text-[10px] font-mono opacity-60 self-start mt-4">BUILT FOR</span>
            <span class="text-white split-text translate-y-full">MOTION</span>
          </h2>
        </div>

        <!-- LINE 3 -->
        <div class="text-reveal-trigger mb-12">
          <h2 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-right overflow-hidden">
            <span class="text-[#E0FF00] inline-block split-text translate-y-full">KINETIC FORM</span>
          </h2>
        </div>

        <!-- BOTTOM DETAILS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12 mt-20 opacity-0 fade-in-trigger">
          <div>
            <span class="font-mono text-xs text-[#E0FF00] mb-4 block">[ REFINED MATERIAL ]</span>
            <h3 class="text-4xl md:text-5xl font-bold uppercase leading-none">
              REFINED <br/> <span class="text-gray-500">DATA.</span>
            </h3>
          </div>
          
          <div class="flex flex-col justify-between">
            <div class="flex justify-between font-mono text-xs text-gray-400 mb-8">
               <span>[ BUILT FOR SOCIAL ]</span>
               <span>[ FRANCE ]</span>
            </div>
            <p class="text-sm md:text-base leading-relaxed text-gray-300 max-w-md">
              Cette collection est une continuation de notre étude sur la contrainte. 
              Nous explorons la possibilité de mouvement au sein de la structure administrative.
              Assia n'est pas qu'un outil, c'est une invitation à s'engager à travers la fluidité.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- FOOTER SPACER -->
    <div class="h-40 flex items-center justify-center">
        <div class="w-2 h-2 bg-[#E0FF00] rounded-full animate-bounce"></div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrement du plugin
gsap.registerPlugin(ScrollTrigger);

const overlayImg = ref(null);

onMounted(() => {
  const tl = gsap.timeline();

  // 1. ANIMATION D'OUVERTURE (Header)
  // Révélation des lettres du titre (stagger)
  tl.to('.char', {
    y: 0,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.05
  })
  // Révélation de la petite image overlay
  .to(overlayImg.value, {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }, "-=0.5")
  // Révélation de la Nav
  .to('.nav-anim', {
    opacity: 1,
    duration: 1
  }, "<")
  // Révélation de la grande image Hero
  .to('.hero-img-container', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, "-=0.8");

  // 2. EFFET PARALLAXE SUR L'IMAGE OVERLAY
  gsap.to(overlayImg.value, {
    y: -50, // Monte légèrement plus vite que le scroll
    scrollTrigger: {
      trigger: '.title-container',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // 3. ANIMATION DES TEXTES AU SCROLL (Section 2)
  // On sélectionne tous les conteneurs de texte
  const textTriggers = document.querySelectorAll('.text-reveal-trigger');
  
  textTriggers.forEach((trigger) => {
    // Dans chaque trigger, on cherche les éléments .split-text
    const chars = trigger.querySelectorAll('.split-text');
    
    gsap.to(chars, {
      y: 0, // Remonte à sa position d'origine
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: trigger,
        start: 'top 85%', // Commence quand le haut de l'élément est à 85% de l'écran
        toggleActions: 'play none none reverse' // Rejoue à l'envers si on remonte
      }
    });
  });

  // 4. ANIMATION DU BAS DE PAGE (Fade In)
  gsap.to('.fade-in-trigger', {
    opacity: 1,
    y: -20,
    duration: 1,
    scrollTrigger: {
      trigger: '.fade-in-trigger',
      start: 'top 90%',
    }
  });
});
</script>

<style scoped>
/* Import des polices */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600&family=Playfair+Display:ital@1&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}

/* Police massive pour le titre EDOSSAR */
.title-container {
  font-family: 'Anton', sans-serif; /* Ou 'Impact', 'Oswald' */
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Utilitaire pour masquer le texte avant l'animation */
.char {
  transform: translateY(100%); /* Poussé vers le bas initialement */
}
</style>