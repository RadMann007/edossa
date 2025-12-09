<template>
  <div class="bg-[#F3F0E7] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden">
    
    <!-- LOADER CONTACT -->
    <div ref="loader" class="fixed inset-0 bg-[#111] z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">CONTACT</span>
        </div>
        <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Une question ? Nous sommes là pour vous répondre
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

    <!-- HERO SECTION CONTACT -->
    <header class="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 container mx-auto">
      
      <!-- Tag contact -->
      <div class="flex items-center gap-2 mb-8 overflow-hidden">
        <div class="hero-tag translate-y-full flex items-center gap-2">
          <span class="animate-spin-slow text-2xl text-[#4ECDC4]">✉</span>
          <span class="text-sm font-mono uppercase text-gray-500 tracking-wider">Contactez-nous</span>
        </div>
      </div>

      <!-- Titre principal -->
      <h1 class="text-5xl md:text-[7vw] leading-[1.05] font-medium tracking-tight mb-20">
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full gradient-text">Une question ?</span>
        </div>
        
        <div class="overflow-hidden">
          <span class="block hero-line translate-y-full text-[#FF6B6B]">Nous sommes là pour vous répondre</span>
        </div>
      </h1>

      <!-- CONTENU SECONDAIRE -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-b border-gray-300 pb-24 border-opacity-0 hero-border">
        
        <!-- Image contact -->
        <div class="md:col-span-4 relative overflow-hidden rounded-2xl opacity-0 hero-fade group">
          <div class="hover-image-container overflow-hidden">
             <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Équipe EDOSSAH" 
                  class="w-full h-64 md:h-80 object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-sm font-semibold">L'équipe EDOSSAH</p>
            </div>
          </div>
        </div>

        <!-- Bouton contact -->
        <div class="md:col-span-4 flex justify-center md:mb-10 relative z-20">
          <div ref="magneticBtn" class="magnetic-wrap cursor-pointer opacity-0 hero-fade group" @click="scrollToForm">
             <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-800 flex items-center justify-center bg-[#F3F0E7] hover:bg-black hover:text-white transition-all duration-500 magnetic-content relative overflow-hidden">
                <svg class="absolute w-full h-full p-2 animate-spin-veryslow" viewBox="0 0 100 100">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text class="text-[10px] uppercase font-bold tracking-widest fill-current">
                     <textPath xlink:href="#circlePath" startOffset="0%">
                       Contactez-nous • Contactez-nous •
                     </textPath>
                   </text>
                </svg>
                <span class="text-2xl group-hover:animate-bounce">📧</span>
                <div class="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
             </div>
          </div>
        </div>

        <!-- Texte description -->
        <div class="md:col-span-4 md:col-start-9 opacity-0 hero-fade">
           <p class="text-lg leading-relaxed text-gray-800 typewriter">
             Notre équipe d'accompagnement répond à toutes vos demandes dans un bref délai. Si nécessaire, nous vous appelons pour une assistance en direct.
           </p>
           <div class="mt-6 flex gap-4">
             <button @click="scrollToForm" class="px-6 py-2 bg-[#1a1a1a] text-[#F3F0E7] rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105">
               Nous contacter
             </button>
             <button @click="openDirectCall" class="px-6 py-2 border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-[#F3F0E7] transition-all duration-300">
               Assistance directe
             </button>
           </div>
        </div>
      </div>
    </header>

    <!-- SECTION FAQ -->
    <section id="faq" class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text">Questions</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">fréquentes</span>
        </h2>
      </div>
      
      <div class="mt-20 max-w-4xl mx-auto space-y-6">
        <!-- FAQ 1 -->
        <div class="faq-item opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
            <span class="text-[#4ECDC4]">❓</span>
            Que faire en cas de problème ou de question ?
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Nous nous engageons à fournir un logiciel de haute qualité. Cependant, comme sur toute application, des bugs peuvent survenir très ponctuellement, et nous les résolvons immédiatement. Pour toutes vos remontées, nous avons une équipe d'accompagnement qui répond à toutes vos demandes sur une adresse e-mail dédiée, dans un bref délai. Si nécessaire, nous vous appelons pour une assistance en direct.
          </p>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-item opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
            <span class="text-[#FFE66D]">🔒</span>
            Quel est le niveau de sécurité des données ?
          </h3>
          <p class="text-gray-600 leading-relaxed">
            La fiabilité et la sécurité de vos données sont nos priorités. ASSIA est hébergée sur des serveurs sécurisés dans un Hébergement de Données de Santé (HDS). L'application fait l'objet de mises à jour régulières pour garantir une performance optimale et une protection maximale de vos informations.
          </p>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-item opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
            <span class="text-[#FF6B6B]">⚙️</span>
            Comment faire si ASSIA ne répond pas à tous nos besoins ?
          </h3>
          <p class="text-gray-600 leading-relaxed">
            On échange sur vos besoins et on déploie des évolutions de l'application tous les mois, pour faciliter au maximum le quotidien des professionnels. Notre équipe travaille constamment à l'amélioration et à la mise à jour du logiciel pour assurer une expérience utilisateur fluide.
          </p>
        </div>

        <!-- FAQ 4 -->
        <div class="faq-item opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
            <span class="text-[#4ECDC4]">🎯</span>
            Comment puis-je obtenir une démonstration d'ASSIA ?
          </h3>
          <p class="text-gray-600 leading-relaxed">
            C'est simple ! Remplissez le formulaire de contact ci-dessous et nous vous contacterons rapidement pour organiser une démonstration personnalisée, adaptée à vos besoins.
          </p>
        </div>

        <!-- FAQ 5 -->
        <div class="faq-item opacity-0 translate-y-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
            <span class="text-[#FFE66D]">💰</span>
            Quels sont les tarifs d'ASSIA ?
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Comme vous le savez, ASSIA est conçue avec des associations de l'AHI, et nous avons aussi construit ensemble notre grille tarifaire, pour que celle-ci soit accessible à chaque asso, selon ses ressources, qui sont liées à sa taille. C'est pourquoi ASSIA est facturée selon le nombre d'utilisateurs. Nos prix sont toujours indiqués en TTC, pour éviter les 20% additionnels.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION COORDONNÉES -->
    <section class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFE66D]/10 rounded-3xl">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text-2">Nos</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">coordonnées</span>
        </h2>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- Coordonnées -->
        <div class="space-y-8">
          <div class="contact-info opacity-0 translate-y-10">
            <div class="w-16 h-16 bg-[#4ECDC4] rounded-2xl flex items-center justify-center mb-4">
              <span class="text-2xl">📍</span>
            </div>
            <h3 class="text-2xl font-bold mb-2">Adresse</h3>
            <p class="text-gray-600">La Turbine, 32 boulevard du port</p>
            <p class="text-gray-600">95000 Cergy</p>
          </div>

          <div class="contact-info opacity-0 translate-y-10">
            <div class="w-16 h-16 bg-[#FFE66D] rounded-2xl flex items-center justify-center mb-4">
              <span class="text-2xl">✉️</span>
            </div>
            <h3 class="text-2xl font-bold mb-2">Email</h3>
            <p class="text-gray-600">contact@edossah.fr</p>
            <p class="text-sm text-gray-500">Réponse sous 24h ouvrées</p>
          </div>

          <div class="contact-info opacity-0 translate-y-10">
            <div class="w-16 h-16 bg-[#FF6B6B] rounded-2xl flex items-center justify-center mb-4">
              <span class="text-2xl">🕐</span>
            </div>
            <h3 class="text-2xl font-bold mb-2">Horaires</h3>
            <p class="text-gray-600">Lundi - Vendredi : 9h - 18h</p>
            <p class="text-gray-600">Samedi : 9h - 12h</p>
          </div>
        </div>

        <!-- Carte -->
        <div class="contact-map opacity-0 translate-y-10">
          <div class="bg-white rounded-3xl p-6 shadow-lg">
            <div class="aspect-video bg-gradient-to-br from-[#4ECDC4] to-[#FFE66D] rounded-2xl flex items-center justify-center mb-4">
              <div class="text-center">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span class="text-2xl">📍</span>
                </div>
                <p class="text-white font-bold">Cergy</p>
                <p class="text-white text-sm">La Turbine</p>
              </div>
            </div>
            <button @click="openMaps" class="w-full px-4 py-2 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-colors">
              Ouvrir dans Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION FORMULAIRE DE CONTACT -->
    <section id="formulaire" class="py-32 px-6 md:px-12 container mx-auto">
      <div class="text-reveal-trigger mb-20">
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
          <span class="block split-line translate-y-full gradient-text">Formulaire</span>
        </h2>
        <h2 class="text-4xl md:text-7xl font-medium leading-tight overflow-hidden">
           <span class="block split-line translate-y-full">de contact</span>
        </h2>
      </div>
      
      <div class="mt-20 max-w-4xl mx-auto">
        <form @submit.prevent="submitForm" class="form-container opacity-0 translate-y-10 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Nom -->
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Nom complet <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
                placeholder="Votre nom"
              >
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
                placeholder="votre@email.fr"
              >
            </div>
          </div>

          <!-- Organisation -->
          <div class="mb-6">
            <label for="organization" class="block text-sm font-semibold text-gray-700 mb-2">
              Organisation
            </label>
            <input 
              type="text" 
              id="organization" 
              v-model="form.organization"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
              placeholder="Nom de votre association ou structure"
            >
          </div>

          <!-- Sujet -->
          <div class="mb-6">
            <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
              Sujet <span class="text-red-500">*</span>
            </label>
            <select 
              id="subject" 
              v-model="form.subject" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="demo">Demande de démonstration</option>
              <option value="support">Support technique</option>
              <option value="information">Demande d'information</option>
              <option value="partnership">Partenariat</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <!-- Message -->
          <div class="mb-6">
            <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all resize-none"
              placeholder="Décrivez votre demande ou votre question..."
            ></textarea>
          </div>

          <!-- Bouton submit -->
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full px-8 py-4 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Envoyer le message</span>
            <span v-else>Envoi en cours...</span>
          </button>

          <!-- Message de confirmation -->
          <div v-if="submitMessage" :class="['mt-4 p-4 rounded-xl text-center', submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
            {{ submitMessage.text }}
          </div>
        </form>
      </div>
    </section>

    <!-- SECTION CALL TO ACTION FINALE -->
    <section class="py-32 px-6 md:px-12 container mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white rounded-3xl text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold mb-8">
          Prêt à nous rejoindre ?
        </h2>
        <p class="text-xl text-gray-300 mb-12">
          Rejoignez les nombreuses associations qui utilisent déjà ASSIA pour améliorer leur accompagnement social
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button @click="scrollToForm" class="px-8 py-4 bg-[#4ECDC4] text-white rounded-full hover:bg-[#3BB5B0] transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
            Nous contacter
          </button>
          <button @click="openDemoDirect" class="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-lg font-semibold">
            Demander une démo
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
const lenis = ref(null)

// État du formulaire
const form = ref({
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref(null)

// Fonctions de navigation
const scrollToForm = () => {
  const formSection = document.getElementById('formulaire')
  if (formSection && lenis.value) {
    lenis.value.scrollTo(formSection, { offset: -100 })
  }
}

const openDirectCall = () => {
  window.location.href = 'tel:+33123456789'
}

const openMaps = () => {
  window.open('https://maps.google.com/?q=32+Boulevard+du+Port,+95000+Cergy', '_blank')
}

const openDemoDirect = () => {
  window.open('https://edossah.fr/contact/', '_blank')
}

// Soumission du formulaire
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi (remplace par ton API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Message de succès
    submitMessage.value = {
      type: 'success',
      text: 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
    }
    
    // Réinitialisation du formulaire
    form.value = {
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    }
    
  } catch (error) {
    submitMessage.value = {
      type: 'error',
      text: 'Une erreur est survenue. Veuillez réessayer.'
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(async () => {
  await nextTick()
  
  // LENIS
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.value.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // TIMELINE D'INTRO
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
    
    .to('.hero-tag', { y: "0%", duration: 1, ease: 'power3.out' }, "-=1")
    .to('.nav-item', { opacity: 1, y: 0, stagger: 0.1, duration: 1 }, "-=1")
    .to('.hero-fade', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.5")
    .to('.hero-border', { borderColor: '#d1d5db', opacity: 1, duration: 1 }, "<")
    .to('.typewriter', { 
      text: "Notre équipe d'accompagnement répond à toutes vos demandes dans un bref délai. Si nécessaire, nous vous appelons pour une assistance en direct.",
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

  // Animations des sections
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

  gsap.utils.toArray('.faq-item, .contact-info, .contact-map, .form-container').forEach((element, index) => {
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

  ScrollTrigger.refresh()
})

onUnmounted(() => {
  if (lenis.value) lenis.value.destroy()
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

.faq-item, .contact-info, .contact-map, .form-container {
  transition: all 0.3s ease;
}

.faq-item:hover, .contact-info:hover, .contact-map:hover {
  transform: translateY(-2px);
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
}

/* Form styles */
.form-container input:focus,
.form-container select:focus,
.form-container textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
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