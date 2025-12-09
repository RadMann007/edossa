<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-[#111] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">ASSIA</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Le SI sur mesure de l'accompagnement social
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
        <router-link to="/demo" class="border border-current px-4 py-1 rounded-full hover:bg-black hover:text-[#F3F0E7] transition-all duration-300 transform hover:scale-105">
          Demo
        </router-link>
      </div>
    </nav>

    <!-- HERO SECTION ASSIA -->
    <header class="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 container mx-auto">
      
      <!-- Tag spécial ASSIA -->
      <div class="flex items-center gap-2 mb-8 overflow-hidden">
        <div class="hero-tag translate-y-full flex items-center gap-2">
          <span class="animate-spin-slow text-2xl text-[#4ECDC4]">◆</span>
          <span class="text-sm font-mono uppercase text-gray-500 tracking-wider">Application Métier</span>
        </div>
      </div>

      <!-- Titre principal avec vrai texte du site -->
      <h1 class="text-5xl md:text-[7vw] leading-[1.05] font-medium tracking-tight mb-20">
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full gradient-text">L'expertise de l'AHI</span>
        </div>
        
        <div class="overflow-hidden flex flex-wrap items-center gap-2 md:gap-5">
           <span class="block hero-line translate-y-full">et l'excellence</span>
           
           <!-- Image technologie -->
           <div class="hero-pill w-0 overflow-hidden h-[50px] md:h-[9vw] rounded-full relative self-center shadow-2xl mx-2 group">
             <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  class="w-[150px] md:w-[20vw] h-full object-cover scale-150 hero-pill-img group-hover:scale-125 transition-transform duration-700" 
                  alt="Technologie ASSIA" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>
           
           <span class="block hero-line translate-y-full">technologique</span>
        </div>

        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full text-[#FF6B6B]">ont co-développé ASSIA</span>
        </div>
      </h1>

      <!-- CONTENU SECONDAIRE -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-b border-gray-300 pb-24 border-opacity-0 hero-border">
        
        <!-- Interface ASSIA -->
        <div class="md:col-span-4 relative overflow-hidden rounded-2xl opacity-0 hero-fade group">
          <div class="hover-image-container overflow-hidden">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboard ASSIA" 
                  class="w-full h-64 md:h-80 object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-sm font-semibold">Interface ASSIA</p>
            </div>
          </div>
        </div>

        <!-- Bouton découverte avec navigation -->
        <div class="md:col-span-4 flex justify-center md:mb-10 relative z-20">
          <div ref="magneticBtn" class="magnetic-wrap cursor-pointer opacity-0 hero-fade group" @click="goToApplication">
             <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-800 flex items-center justify-center bg-[#F3F0E7] hover:bg-black hover:text-white transition-all duration-500 magnetic-content relative overflow-hidden">
                <svg class="absolute w-full h-full p-2 animate-spin-veryslow" viewBox="0 0 100 100">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text class="text-[10px] uppercase font-bold tracking-widest fill-current">
                     <textPath xlink:href="#circlePath" startOffset="0%">
                       Découvrir ASSIA • Découvrir ASSIA •
                     </textPath>
                   </text>
                </svg>
                <span class="text-2xl group-hover:animate-bounce">✦</span>
                <div class="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
             </div>
          </div>
        </div>

        <!-- Texte description -->
        <div class="md:col-span-4 md:col-start-9 opacity-0 hero-fade">
           <p class="text-lg leading-relaxed text-gray-800 typewriter">
             Pas seulement un DUI exigé par le financeur, mais surtout un logiciel du quotidien souhaité par les directions et travailleurs sociaux
           </p>
           <div class="mt-6 flex gap-4">
             <button @click="goToApplication" class="px-6 py-2 bg-[#1a1a1a] text-[#F3F0E7] rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105">
               Je découvre ASSIA
             </button>
             <button @click="scrollToDemo" class="px-6 py-2 border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-[#F3F0E7] transition-all duration-300">
               Démo
             </button>
           </div>
        </div>
      </div>
    </header>

    <!-- SECTION POURQUOI ASSIA -->
    <section id="fonctionnalites" class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text">ASSIA, pour quoi ?</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#4ECDC4] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🤝</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Collaborer entre professionnels</h3>
          <p class="text-gray-600">Un dossier unique dédié à l'accompagnement qui réunit toutes les données utiles</p>
        </div>
        
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#FFE66D] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Faciliter le quotidien</h3>
          <p class="text-gray-600">Avec des automatismes performants, ASSIA donne envie aux TS de revenir et rester</p>
        </div>
        
        <div class="feature-card opacity-0 translate-y-10">
          <div class="w-16 h-16 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">📊</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Suivre et piloter l'activité</h3>
          <p class="text-gray-600">Des tableaux de suivi adaptés avec indicateurs et graphiques directement disponibles</p>
        </div>
      </div>
    </section>

    <!-- SECTION MODULES -->
    <section id="modules" class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFE66D]/10 rounded-3xl">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text-2">Nos modules</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">spécialisés</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Module Paiement -->
        <div class="module-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="w-20 h-20 bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-3xl">💰</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Module Paiement</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Calcul des participations financières et redevances</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Edition des avis d'échéances et justificatifs</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Gestion des dépôts de garantie</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Suivi du compte de la personne accompagnée</span>
            </li>
          </ul>
        </div>

        <!-- Module Hébergement -->
        <div class="module-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-3xl">🏠</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Module Hébergement</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Gestion des places et taux d'occupation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Gestion des états des lieux</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Attestations d'hébergement</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Visibilité sur l'ensemble des bâtiments</span>
            </li>
          </ul>
        </div>

        <!-- Module Santé -->
        <div class="module-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="w-20 h-20 bg-gradient-to-br from-[#FFE66D] to-[#4ECDC4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span class="text-3xl">🏥</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Module Santé</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Bilan de santé disponible</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Dédié aux équipes médicales</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Interopérabilité avec le SI-SIAO</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4ECDC4] mt-1">•</span>
              <span>Compatible INS, MSSanté, DMP</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION SERVICES -->
    <section id="services" class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text">Nous sommes engagés</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">pour soutenir votre impact</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Assistance -->
        <div class="service-card bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#4ECDC4] transition-all duration-300">
          <div class="w-16 h-16 bg-[#4ECDC4] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Assistance</h3>
          <p class="text-gray-600 mb-4">Nous sommes disponibles pour répondre et conseiller votre association dans l'usage des outils</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• Paramétrages des services</li>
            <li>• Adaptation des formulaires</li>
            <li>• Conseils méthodologiques</li>
          </ul>
        </div>

        <!-- Accompagnement -->
        <div class="service-card bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#FFE66D] transition-all duration-300">
          <div class="w-16 h-16 bg-[#FFE66D] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🤝</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Accompagnement</h3>
          <p class="text-gray-600 mb-4">Nous vous accompagnons pour faire d'ASSIA un succès au sein de votre association</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• Recueil des besoins</li>
            <li>• Optimisation des usages</li>
            <li>• Aide aux indicateurs</li>
          </ul>
        </div>

        <!-- Formation -->
        <div class="service-card bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#FF6B6B] transition-all duration-300">
          <div class="w-16 h-16 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">📚</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Formation</h3>
          <p class="text-gray-600 mb-4">Nous formons vos équipes pour accompagner le changement et soutenir l'évolution des pratiques</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• Découverte de l'application</li>
            <li>• Exploiter le potentiel</li>
            <li>• Suivi et pilotage</li>
          </ul>
        </div>

        <!-- Sécurité -->
        <div class="service-card bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#4ECDC4] transition-all duration-300">
          <div class="w-16 h-16 bg-[#4ECDC4] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Sécurité</h3>
          <p class="text-gray-600 mb-4">Nous assurons la protection des données enregistrées sur ASSIA</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• Hébergeur certifié HDS</li>
            <li>• Sauvegarde quotidienne 3 mois</li>
            <li>• Limitation des accès</li>
          </ul>
        </div>

        <!-- Adaptabilité -->
        <div class="service-card bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#FFE66D] transition-all duration-300">
          <div class="w-16 h-16 bg-[#FFE66D] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">⚙️</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Adaptabilité</h3>
          <p class="text-gray-600 mb-4">Nous paramétrons ASSIA selon vos enjeux pour exploiter son plein potentiel</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• Différents types d'organisation</li>
            <li>• Modes de collaboration</li>
            <li>• Dispositifs et secteurs</li>
          </ul>
        </div>

        <!-- Évolutivité -->
        <div class="service-card bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#FF6B6B] transition-all duration-300">
          <div class="w-16 h-16 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mb-6">
            <span class="text-2xl">📈</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Évolutivité</h3>
          <p class="text-gray-600 mb-4">Nous montons régulièrement de version pour qu'ASSIA soit toujours plus satisfaisante</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• Prise en compte des retours</li>
            <li>• Évolution continue</li>
            <li>• 0€ de plus</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION VIDÉOS TÉMOIGNAGES ET DÉMOS -->
    <section id="videos-demo" class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-br from-[#F3F0E7] to-[#4ECDC4]/5">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text">Vidéos &</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">Démonstrations</span>
        </h2>
      </div>

      <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Vidéo principale - Démonstration ASSIA -->
        <div class="video-main opacity-0 translate-y-10">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div class="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center">
              <!-- Icône play -->
              <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 class="text-white text-xl font-bold mb-2">Démonstration ASSIA - Interface complète</h3>
              <p class="text-gray-300 text-sm">Découvrez toutes les fonctionnalités de l'application en 5 minutes</p>
            </div>
          </div>
        </div>

        <!-- Vidéos témoignages -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Témoignages vidéo de nos utilisateurs</h3>
          
          <!-- Témoignage 1 -->
          <div class="video-testimonial opacity-0 translate-y-10 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex gap-4">
              <div class="w-24 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer group">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">Elsa ROGT - Croix Rouge Française</h4>
                <p class="text-sm text-gray-600 mb-2">"Assia c'est un gain de temps, c'est une application intuitive et pratique"</p>
                <span class="text-xs text-[#4ECDC4] font-semibold">Cheffe de service - Yvelines</span>
              </div>
            </div>
          </div>

          <!-- Témoignage 2 -->
          <div class="video-testimonial opacity-0 translate-y-10 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex gap-4">
              <div class="w-24 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#FF6B6B] rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer group">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">Typhaine PECHE</h4>
                <p class="text-sm text-gray-600 mb-2">"Indispensable" - Assia en un mot</p>
                <span class="text-xs text-[#4ECDC4] font-semibold">Coordinatrice PASH du 95</span>
              </div>
            </div>
          </div>

          <!-- Témoignage 3 -->
          <div class="video-testimonial opacity-0 translate-y-10 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex gap-4">
              <div class="w-24 h-16 bg-gradient-to-br from-[#FFE66D] to-[#4ECDC4] rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer group">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">Margot COURAUDON</h4>
                <p class="text-sm text-gray-600 mb-2">"Ça reprend tout en une seule application, et on peut mieux accompagner la famille"</p>
                <span class="text-xs text-[#4ECDC4] font-semibold">Coordinatrice PASH du Val d'Oise</span>
              </div>
            </div>
          </div>

          <!-- Tutoriels -->
          <div class="mt-8 p-6 bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFE66D]/10 rounded-2xl">
            <h4 class="font-bold text-gray-800 mb-3">📹 Tutoriels mensuels</h4>
            <p class="text-sm text-gray-600 mb-3">
              Edossah produit mensuellement des vidéos tutos courtes et thématiques 
              qui visent à aider les professionnels à s'approprier les fonctionnalités de l'application.
            </p>
            <button class="text-[#4ECDC4] font-semibold text-sm hover:underline">
              Voir toutes les vidéos →
            </button>
          </div>
        </div>
      </div>

      <!-- Bouton d'action -->
      <div class="mt-16 text-center opacity-0 translate-y-10">
        <button @click="openVideoDemo" class="px-8 py-4 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
          <span class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Voir toutes les vidéos de démonstration
          </span>
        </button>
      </div>
    </section>

    <!-- SECTION SPÉCIFIQUE VIDEOS TUTORIELS -->
    <section id="tutoriels-formation" class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text-2">Tutoriels</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">et formation</span>
        </h2>
      </div>

      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Tutoriel 1 -->
        <div class="tutorial-card opacity-0 translate-y-10 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="aspect-video bg-gradient-to-br from-[#4ECDC4] to-[#FFE66D] relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              5:32
            </div>
          </div>
          <div class="p-4">
            <h4 class="font-bold text-gray-800 mb-2">Prise en main d'ASSIA</h4>
            <p class="text-sm text-gray-600">Découverte de l'interface et navigation de base</p>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-xs text-gray-500">Niveau débutant</span>
              <span class="text-[#4ECDC4] text-xs font-semibold">Gratuit</span>
            </div>
          </div>
        </div>

        <!-- Tutoriel 2 -->
        <div class="tutorial-card opacity-0 translate-y-10 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="aspect-video bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              8:15
            </div>
          </div>
          <div class="p-4">
            <h4 class="font-bold text-gray-800 mb-2">Gestion des dossiers usagers</h4>
            <p class="text-sm text-gray-600">Création et gestion complète des DUI</p>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-xs text-gray-500">Niveau intermédiaire</span>
              <span class="text-[#4ECDC4] text-xs font-semibold">Gratuit</span>
            </div>
          </div>
        </div>

        <!-- Tutoriel 3 -->
        <div class="tutorial-card opacity-0 translate-y-10 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="aspect-video bg-gradient-to-br from-[#FFE66D] to-[#4ECDC4] relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              12:45
            </div>
          </div>
          <div class="p-4">
            <h4 class="font-bold text-gray-800 mb-2">Modules paiement et hébergement</h4>
            <p class="text-sm text-gray-600">Utilisation avancée des modules spécialisés</p>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-xs text-gray-500">Niveau avancé</span>
              <span class="text-[#4ECDC4] text-xs font-semibold">Gratuit</span>
            </div>
          </div>
        </div>

        <!-- Tutoriel 4 -->
        <div class="tutorial-card opacity-0 translate-y-10 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#4ECDC4] relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              6:20
            </div>
          </div>
          <div class="p-4">
            <h4 class="font-bold text-gray-800 mb-2">Indicateurs et pilotage</h4>
            <p class="text-sm text-gray-600">Créer des tableaux de bord personnalisés</p>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-xs text-gray-500">Niveau expert</span>
              <span class="text-[#4ECDC4] text-xs font-semibold">Gratuit</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Formation -->
      <div class="mt-16 text-center opacity-0 translate-y-10">
        <p class="text-gray-600 mb-6">Vous souhaitez une formation personnalisée ?</p>
        <button @click="openFormation" class="px-8 py-4 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
          Programmes de formation sur mesure
        </button>
      </div>
    </section>

    <!-- SECTION TÉMOIGNAGES VIDÉO -->
    <section id="temoignages" class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white rounded-3xl">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full text-white">Nos partenaires</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full text-white">partagent leurs témoignages</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="testimonial-card bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
          <div class="text-4xl text-[#4ECDC4] mb-4">🎤</div>
          <h4 class="text-xl font-bold mb-4">Si vous deviez convaincre un collègue ?</h4>
          <p class="text-lg text-gray-300 italic mb-4">
            "Assia c'est un gain de temps, c'est une application intuitive et pratique"
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
            <div>
              <p class="font-bold">Elsa ROGT</p>
              <p class="text-sm text-gray-400">Cheffe de service - Croix Rouge Française</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
          <div class="text-4xl text-[#FFE66D] mb-4">🎯</div>
          <h4 class="text-xl font-bold mb-4">Assia en un mot ?</h4>
          <p class="text-4xl text-[#FFE66D] font-bold mb-4">"Indispensable"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#FFE66D] rounded-full flex items-center justify-center text-white font-bold">
              T
            </div>
            <div>
              <p class="font-bold">Typhaine PECHE</p>
              <p class="text-sm text-gray-400">Coordinatrice PASH du 95</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
          <div class="text-4xl text-[#FF6B6B] mb-4">💡</div>
          <h4 class="text-xl font-bold mb-4">Mieux accompagner les bénéficiaires ?</h4>
          <p class="text-lg text-gray-300 italic mb-4">
            "Ça reprend tout en une seule application, et on peut mieux accompagner la famille"
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <p class="font-bold">Margot COURAUDON</p>
              <p class="text-sm text-gray-400">Coordinatrice PASH du Val d'Oise</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION CALL TO ACTION -->
    <section id="demo" class="py-32 px-6 md:px-12 container mx-auto text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold mb-8 gradient-text">
          Prêt à transformer votre accompagnement social ?
        </h2>
        <p class="text-xl text-gray-600 mb-12">
          Découvrez comment ASSIA peut simplifier votre quotidien et améliorer l'accompagnement de vos bénéficiaires
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button @click="openDemo" class="px-8 py-4 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
            Demander une démonstration
          </button>
          <button @click="openDocumentation" class="px-8 py-4 border-2 border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-[#F3F0E7] transition-all duration-300 text-lg font-semibold">
            Télécharger la documentation
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

const loader = ref(null)
const magneticBtn = ref(null)
const router = useRouter()
let lenis

// Navigation functions
const goToApplication = () => {
  setTimeout(() => {
    router.push('/application')
  }, 200)
}

const scrollToDemo = () => {
  const demoSection = document.getElementById('demo')
  if (demoSection && lenis) {
    lenis.scrollTo(demoSection, { offset: -100 })
  }
}

const openVideoDemo = () => {
  window.open('https://edossah.fr/assia-application/#Interviews', '_blank')
}

const openFormation = () => {
  window.open('https://edossah.fr/contact/', '_blank')
}

const openDemo = () => {
  window.open('https://edossah.fr/contact/', '_blank')
}

const openDocumentation = () => {
  window.open('https://edossah.fr/assia-application/', '_blank')
}

onMounted(async () => {
  await nextTick()
  
  // LENIS AMÉLIORÉ
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // TIMELINE D'INTRO AVEC CONTENU ASSIA
  const tl = gsap.timeline()

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
      text: "Pas seulement un DUI exigé par le financeur, mais surtout un logiciel du quotidien souhaité par les directions et travailleurs sociaux",
      duration: 3,
      ease: "none"
    }, "-=0.5")

  // BOUTON MAGNÉTIQUE
  const btn = magneticBtn.value
  if (btn) {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 })
      gsap.to(btn.querySelector('.magnetic-content'), { x: x * 0.5, y: y * 0.5, duration: 0.3 })
    })

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
      gsap.to(btn.querySelector('.magnetic-content'), { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
    })
  }

  // SCROLL ANIMATIONS
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
    })
  })

  // Animations pour les vidéos
  gsap.utils.toArray('.video-main, .video-testimonial, .tutorial-card').forEach((element, index) => {
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

  // Animation CTA vidéos
  gsap.to('#videos-demo .text-center:last-child', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#videos-demo',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  })

  // Animation CTA formation
  gsap.to('#tutoriels-formation .text-center:last-child', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#tutoriels-formation',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  })

  ScrollTrigger.refresh()
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
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

.module-card, .service-card {
  transition: all 0.3s ease;
}

.module-card:hover, .service-card:hover {
  transform: translateY(-5px);
}

.testimonial-card {
  backdrop-filter: blur(10px);
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
}

.video-testimonial:hover {
  transform: translateY(-2px);
}

.tutorial-card:hover {
  transform: translateY(-5px) scale(1.02);
}

.tutorial-card .aspect-video {
  position: relative;
  overflow: hidden;
}

.tutorial-card .aspect-video::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.tutorial-card:hover .aspect-video::before {
  transform: translateX(100%);
}

/* Play button animation */
.group:hover .aspect-video > div {
  transform: scale(1.1);
  background: rgba(255,255,255,0.3);
}

/* Video section gradient background */
#videos-demo {
  background: linear-gradient(135deg, #F3F0E7 0%, #4ECDC4 100%);
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