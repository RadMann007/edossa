<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden">
    
    <!-- LOADER AVEC LOGO EDOSSAH -->
    <div ref="loader" class="fixed inset-0 bg-[#111] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">EDOSSAH</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Expertise et Développement d'Outils au Service des Solidarités
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

  </div>
</nav>

    <!-- HERO SECTION AVEC VRAI CONTENU -->
    <header class="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 container mx-auto">
      
      <!-- Tag réel -->
      <div class="flex items-center gap-2 mb-8 overflow-hidden">
        <div class="hero-tag translate-y-full flex items-center gap-2">
          <span class="animate-spin-slow text-2xl text-[#FF6B6B]">✹</span>
          <span class="text-sm font-mono uppercase text-gray-500 tracking-wider">Service Social Numérique</span>
        </div>
      </div>

      <!-- Titre principal avec vrai texte -->
      <h1 class="text-5xl md:text-[7vw] leading-[1.05] font-medium tracking-tight mb-20">
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full gradient-text">Le numérique pensé</span>
        </div>
        
        <div class="overflow-hidden flex flex-wrap items-center gap-2 md:gap-5">
           <span class="block hero-line translate-y-full">et souhaité par</span>
           
           <!-- Image équipe réelle -->
           <div class="hero-pill w-0 overflow-hidden h-[50px] md:h-[9vw] rounded-full relative self-center shadow-2xl mx-2 group">
             <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  class="w-[150px] md:w-[20vw] h-full object-cover scale-150 hero-pill-img group-hover:scale-125 transition-transform duration-700" 
                  alt="Équipe EDOSSAH" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>
           
           <span class="block hero-line translate-y-full">les</span>
        </div>

        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full text-[#4ECDC4]">travailleurs sociaux.</span>
        </div>
      </h1>

      <!-- CONTENU SECONDAIRE AVEC VRAIES DONNÉES -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-b border-gray-300 pb-24 border-opacity-0 hero-border">
        
        <!-- Image ASSIA -->
        <div class="md:col-span-4 relative overflow-hidden rounded-2xl opacity-0 hero-fade group">
          <div class="hover-image-container overflow-hidden">
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Interface ASSIA" 
                  class="w-full h-64 md:h-80 object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-sm font-semibold">ASSIA - Interface métier</p>
            </div>
          </div>
        </div>

        <!-- BOUTON VERS ASSIA -->
        <!-- <div class="md:col-span-4 flex justify-center md:mb-10 relative z-20">
          <div ref="magneticBtn" class="magnetic-wrap cursor-pointer opacity-0 hero-fade group">
             <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-800 flex items-center justify-center bg-[#F3F0E7] hover:bg-black hover:text-white transition-all duration-500 magnetic-content relative overflow-hidden">
                <svg class="absolute w-full h-full p-2 animate-spin-veryslow" viewBox="0 0 100 100">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text class="text-[10px] uppercase font-bold tracking-widest fill-current">
                     <textPath xlink:href="#circlePath" startOffset="0%">
                       Je découvre ASSIA • Je découvre ASSIA •
                     </textPath>
                   </text>
                </svg>
                <span class="text-2xl group-hover:animate-bounce">→</span>
                <div class="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
             </div>
          </div>
        </div> -->

        <!-- Texte description réel -->
        <div class="md:col-span-4 md:col-start-9 opacity-0 hero-fade">
           <p class="text-lg leading-relaxed text-gray-800 typewriter">
             Simplifier le quotidien des équipes & gagner du temps de pilotage de l'activité
           </p>
           <div class="mt-6 flex gap-4">
            <router-link to="/application" class="magnetic-wrap cursor-pointer opacity-0 hero-fade">
              <div class="px-6 py-2 bg-[#1a1a1a] text-[#F3F0E7] rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105">
                Je découvre ASSIA
              </div>
            </router-link>
             <!-- <button class="px-6 py-2 bg-[#1a1a1a] text-[#F3F0E7] rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105">
               Je découvre ASSIA
             </button> -->
             <button class="px-6 py-2 border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-[#F3F0E7] transition-all duration-300">
               Démo
             </button>
           </div>
        </div>
      </div>
    </header>

    <!-- SECTION QUI SOMMES-NOUS AVEC VRAIE IMAGE EDOSSAH -->
<section id="assia" class="py-32 px-6 md:px-12 container mx-auto">
  <div class="text-reveal-trigger mb-20">
    <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
      <span class="block split-line translate-y-full gradient-text-2">Pas seulement un éditeur</span>
    </h2>
    <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
       <span class="block split-line translate-y-full">de logiciel</span>
    </h2>
  </div>
  
  <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
    <div class="space-y-8">
      <h3 class="text-3xl font-bold text-[#FF6B6B]">Surtout une équipe engagée pour l'accompagnement social</h3>
      <p class="text-lg text-gray-700 leading-relaxed">
        C'est le nombre d'<strong>experts chez EDOSSAH</strong>, qui unissent leur connaissance des métiers du social à une maîtrise <strong>des technologies au service de l'humain</strong>.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        Depuis de nombreuses années, nous concevons <strong>des solutions utiles et accessibles</strong>, comme ASSIA : un outil co-créé avec les travailleurs sociaux pour simplifier leur quotidien et améliorer l'accompagnement de leurs publics, tout en répondant aux attentes des financeurs.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        Adoptée par plusieurs associations engagées contre l'exclusion, ASSIA est plébiscitée dans le secteur de l'AHI depuis 2019, grâce à une <strong>pédagogie adaptée</strong> à tous les niveaux numériques et un <strong>accompagnement de proximité</strong>.
      </p>
      <div class="flex gap-4">
        <button class="px-6 py-3 bg-[#FF6B6B] text-white rounded-full hover:bg-[#E55A5A] transition-all duration-300 transform hover:scale-105">
          En savoir plus
        </button>
        <button class="px-6 py-3 border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-[#F3F0E7] transition-all duration-300">
          Nos engagements
        </button>
      </div>
    </div>
    
    <!-- Image officielle EDOSSAH -->
    <div class="relative overflow-hidden rounded-3xl group">
      <img 
        src="https://edossah.fr/wp-content/uploads/2025/08/illus-qui-sommes-nous-v2-blanc-980x735.png" 
        alt="Illustration EDOSSAH - Qui sommes-nous" 
        class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <!-- Overlay subtle pour améliorer la lisibilité si besoin -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  </div>
</section>

    <!-- SECTION ENGAGEMENTS ENVIRONNEMENTAUX -->
    <section id="engagements" class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFE66D]/10 rounded-3xl">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text">Nos engagements</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">environnementaux</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#4ECDC4] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🌱</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Hébergement français</h3>
          <p class="text-gray-600">Notre serveur applicatif est dans un centre de données en France, chez un hébergeur français labélisé HDS</p>
        </div>
        
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#FFE66D] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🚲</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Déplacements durables</h3>
          <p class="text-gray-600">La plupart de nos déplacements se font à vélo ou en transports en commun. Nos collaborateurs en région sont en télétravail</p>
        </div>
        
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">♻️</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Zéro déchet</h3>
          <p class="text-gray-600">Nous tendons vers le 0 déchet et alimentons chaque jour le compost de La Turbine à Cergy</p>
        </div>
      </div>
    </section>

    <!-- SECTION TÉMOIGNAGES -->
    <section class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text-2">Nos partenaires</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">partagent leurs témoignages</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="testimonial-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-4xl text-[#FF6B6B] mb-4">"</div>
          <p class="text-lg text-gray-700 mb-6 italic">
            Vous faites un super travail. On a de la chance d'avoir une application aussi complète et aussi proche de nos besoins. Merci beaucoup.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
              G
            </div>
            <div>
              <p class="font-bold">Gaëlle</p>
              <p class="text-sm text-gray-500">Cheffe de service</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-4xl text-[#FF6B6B] mb-4">"</div>
          <p class="text-lg text-gray-700 mb-6 italic">
            L'application répond réellement à un besoin de nos équipes. Et l'équipe support est géniale. Très réactive et à l'écoute. Merci
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#FFE66D] rounded-full flex items-center justify-center text-white font-bold">
              V
            </div>
            <div>
              <p class="font-bold">Valérie</p>
              <p class="text-sm text-gray-500">Coordinatrice Plateforme</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-4xl text-[#FF6B6B] mb-4">"</div>
          <p class="text-lg text-gray-700 mb-6 italic">
            Je trouve cette application géniale et pourtant j'ai un niveau en informatique pas très élevé.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <div>
              <p class="font-bold">Benoît</p>
              <p class="text-sm text-gray-500">Travailleur social en CHRS</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION CONTACT -->
    <section id="contact" class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white rounded-3xl">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full text-white">Contactez-nous</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="space-y-8">
          <h3 class="text-3xl font-bold text-[#4ECDC4]">Notre équipe est là pour vous</h3>
          <p class="text-lg text-gray-300 leading-relaxed">
            Basée en Ile-de-France avec un bureau historique à Cergy, et une antenne à Nantes, nous nous déployons sur de multiples territoires.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center">
                <span class="text-xl">📍</span>
              </div>
              <div>
                <p class="font-semibold">Siège social</p>
                <p class="text-gray-400">La Turbine, 32 boulevard du port, 95000 Cergy</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#FFE66D] rounded-full flex items-center justify-center">
                <span class="text-xl">✉️</span>
              </div>
              <div>
                <p class="font-semibold">Email</p>
                <p class="text-gray-400">contact@edossah.fr</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 p-8 rounded-3xl">
          <h4 class="text-2xl font-bold mb-6">Découvrir ASSIA</h4>
          <p class="text-gray-300 mb-6">
            Prenez rendez-vous pour une démonstration personnalisée de notre application.
          </p>
          <button class="w-full px-6 py-3 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all duration-300 transform hover:scale-105">
            Demander une démo
          </button>
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
  
  // LENIS AMÉLIORÉ
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

  // TIMELINE D'INTRO AVEC VRAI CONTENU
  const tl = gsap.timeline();

  tl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
    .to('.loader-subtitle', { opacity: 1, duration: 0.5 }, "-=0.3")
    .to('.loader-progress', { width: '100%', duration: 1.5, ease: 'power2.out' }, '-=0.5')
    .to('.loader-text', { opacity: 0, duration: 0.5, delay: 0.3 })
    .to('.loader-subtitle', { opacity: 0, duration: 0.5 }, "<")
    .to(loader.value, { 
      y: '-100%', 
      duration: 1.2, 
      ease: 'power4.inOut' 
    })
    
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
      text: "Simplifier le quotidien des équipes & gagner du temps de pilotage de l'activité",
      duration: 2.5,
      ease: "none"
    }, "-=0.5");

  // BOUTON MAGNÉTIQUE AVEC LIEN VERS ASSIA
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

    btn.addEventListener('click', () => {
      window.open('https://edossah.fr/assia-application/', '_blank');
    });
  }

  // SCROLL ANIMATIONS
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

  gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        scrub: 1,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

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

.testimonial-card {
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
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