<template>
  <div class="font-sans text-gray-800 antialiased overflow-x-hidden">
    
    <!-- NAVBAR -->
    <nav class="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm relative z-50">
      <div class="flex items-center gap-2">
        <div class="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">S</div>
        <!-- Logo Text placeholder -->
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8 font-medium text-gray-600">
        <a href="#" class="text-blue-600 border-b-2 border-blue-600 pb-1">Accueil</a>
        <a href="#" class="hover:text-blue-600 transition">Applications</a>
        <a href="#" class="hover:text-blue-600 transition">Actualités</a>
        <a href="#" class="hover:text-blue-600 transition">Contact</a>
      </div>

      <!-- Top Utilities -->
      <div class="hidden md:flex flex-col text-xs text-right">
        <div class="flex items-center gap-4 justify-end mb-1 text-gray-500">
          <a href="#" class="hover:underline flex items-center gap-1">accéder à l'espace <span>➔</span></a>
          <a href="#" class="hover:underline flex items-center gap-1">changer d'équipe <span>⚡</span></a>
          <button>🔍</button>
        </div>
      </div>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden text-2xl">☰</button>
    </nav>

    <!-- HERO SECTION -->
    <header class="relative h-[600px] flex items-center">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
             alt="Bureau travail social" 
             class="w-full h-full object-cover" />
        <!-- Overlay pour lisibilité -->
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-6 md:px-12 text-white mt-[-50px]">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl">
          Le numérique souhaité par <br/> les travailleurs sociaux.
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-xl text-gray-100">
          Soutenir le quotidien des équipes pour renforcer votre marque employeur.
        </p>
        <button class="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">
          Pourquoi nous choisir ?
        </button>
      </div>

      <!-- Blue Wave Bottom -->
      <div class="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg class="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-blue-600"></path>
        </svg>
         <!-- Second Wave layer for the white part below -->
         <svg class="absolute bottom-[-1px] w-full h-[60px] md:h-[120px]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </header>

    <!-- LOGOS / SOCIAL PROOF -->
    <section class="bg-gray-50 py-12 text-center">
      <p class="text-gray-700 text-lg mb-8 font-medium">
        Près de <span class="text-orange-400 font-bold">1 000 professionnels</span> travaillent avec nous au quotidien
      </p>
      
      <div class="container mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <!-- Placeholder logos using text for demo -->
        <span class="font-bold text-xl flex items-center gap-2"><span class="text-red-600 text-3xl">+</span> CROIX-ROUGE</span>
        <span class="font-bold text-xl text-blue-800">equalis</span>
        <span class="font-bold text-xl text-orange-500">arile</span>
        <span class="font-bold text-xl text-green-700">SIAO 92</span>
        <span class="font-bold text-xl text-green-600">AJHIRALP</span>
        <span class="font-bold text-xl text-purple-700">ESPERER 95</span>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        <!-- Left Text -->
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold mb-6 uppercase tracking-wide text-gray-800">Qui sommes-nous ?</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base text-justify">
            <p>
              Chez <strong>EDOSSAR</strong>, nous sommes une douzaine d'experts, unissant notre connaissance des métiers du social et la maîtrise technologique au service de nos utilisateurs.
            </p>
            <p>
              Depuis plusieurs années, nous concevons des solutions utiles et accessibles, comme ASSIA, un outil complet quotidiennement utilisé pour le suivi social, la gestion administrative et l'hébergement.
            </p>
            <p>
              Adoptés par plus de 600 professionnels depuis 1927, nous faisons tout pour sécuriser le secteur de l'ONIT grâce à des ressources fiables, la coopération et le renforcement de votre marque employeur.
            </p>
            <p>
              Notre mission résonne avec la vôtre : avancer ensemble pour accompagner la transformation du quotidien des travailleurs sociaux et des bénéficiaires.
            </p>
          </div>
        </div>

        <!-- Right Illustration (Timeline) -->
        <div class="md:w-1/2 flex justify-center">
           <!-- Placeholder for the Illustration Image -->
           <div class="relative w-full max-w-md">
             <img src="https://cdn.dribbble.com/users/1040565/screenshots/15469492/media/e1414d7973c751249b291410294e777e.png?resize=800x600&vertical=center" 
                  alt="Illustration équipe" class="rounded-lg shadow-none" />
             <!-- Note: Replace the src above with your actual illustration asset -->
           </div>
        </div>

      </div>
    </section>

    <!-- ENVIRONMENTAL COMMITMENTS -->
    <section class="relative bg-[#d1eae6] py-20 mt-12">
      <!-- Top Curve Decoration -->
      <div class="absolute top-[-40px] left-0 w-full overflow-hidden leading-[0]">
          <svg class="block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-[#d1eae6]"></path>
          </svg>
      </div>

      <!-- Floating Leaves Decoration (CSS Only shapes or Icons) -->
      <div class="absolute top-10 left-10 text-orange-400 opacity-80 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
      </div>

      <div class="container mx-auto px-6 md:px-20 text-center">
        <h2 class="text-2xl font-bold mb-8 uppercase text-gray-800">Nos Engagements Environnementaux</h2>
        
        <p class="mb-8 text-sm md:text-base max-w-3xl mx-auto text-gray-700">
          Chez EDOSSAR, nous œuvrons au quotidien pour que l'impact social de nos outils s'aligne avec des actions et une démarche responsables pour l'Environnement :
        </p>

        <ul class="text-left max-w-3xl mx-auto space-y-4 list-disc pl-5 text-sm md:text-base text-gray-800">
          <li>
            <strong>Nos prestataires</strong> sont principalement des coopératives françaises : Telecoop, Crédit Coopératif.
          </li>
          <li>
            Notre serveur web et notre suite d'outils de travail sont éthiques et propres en termes de consommation de ressources, grâce à Infomaniak.
          </li>
          <li>
            Notre serveur applicatif (cœur Assia) est hébergé en France.
          </li>
          <li>
            Nous tendons vers le 0 déchet et alimentons chaque jour la joie de vivre au travail, qui est notre priorité bien implantée dans nos territoires.
          </li>
          <li>
            Nous favorisons l'emploi en régions tant en présentiel qu'en télétravail, de sorte que la plupart des déplacements se font à vélo ou en transports en commun.
          </li>
          <li>
            Ainsi que nos apprentis, puisqu'il nous semble primordial d'offrir des terrains d'apprentissage et de formation aux futurs professionnels.
          </li>
        </ul>
      </div>

       <!-- Bottom Leaves Decoration -->
       <div class="absolute bottom-10 right-10 text-orange-400 opacity-80 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" class="rotate-180"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
      </div>
    </section>

    <!-- FOOTER / CTA -->
    <section class="bg-blue-600 text-white pt-24 pb-16 relative mt-[-2px]">
      <!-- Curved Top for Footer -->
      <div class="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
         <svg class="block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-[#d1eae6]"></path>
         </svg>
      </div>

      <div class="container mx-auto px-6 text-center z-10 relative">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">ASSIA est optimisée pour tous</h2>
        <p class="mb-8 opacity-90">Travailleur social, prévisionnel pour vis-à-vis devis.</p>
        
        <button class="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
          Découvrez la plateforme ASSIA
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
// Pas de logique JS complexe nécessaire pour cette vue statique.
// Assurez-vous simplement que Tailwind CSS est configuré dans votre projet.
</script>

<style scoped>
/* Si vous n'utilisez pas Tailwind, vous devrez écrire tout le CSS ici.
   Mais le code ci-dessus repose sur les classes utilitaires de Tailwind. */

/* Exemple d'ajout de police si nécessaire */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

.font-sans {
  font-family: 'Outfit', sans-serif;
}
</style>