<template>
  <header class="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 container mx-auto">
    <div class="flex items-center gap-2 mb-8 overflow-hidden">
      <div class="hero-tag translate-y-full flex items-center gap-2">
        <span class="animate-spin-slow text-2xl text-[#4ECDC4]">📰</span>
        <span class="text-sm font-mono uppercase text-gray-500 tracking-wider">Actualités</span>
      </div>
    </div>
    <h1 class="text-5xl md:text-[7vw] leading-[1.05] font-medium tracking-tight mb-20">
      <div class="overflow-hidden">
        <span class="block hero-line translate-y-full gradient-text">Nos</span>
      </div>
      <div class="overflow-hidden">
        <span class="block hero-line translate-y-full text-[#FF6B6B]">actualités</span>
      </div>
    </h1>
    <div class="max-w-3xl opacity-0 hero-fade">
      <p class="text-lg leading-relaxed text-gray-800 typewriter">
        Découvrez les dernières nouvelles, témoignages et actualités du monde de l'accompagnement social avec ASSIA
      </p>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline();
  tl.to('.hero-line', {
    y: "0%",
    duration: 1.5,
    ease: 'power4.out',
    stagger: 0.15
  }, "-=0.5")
    .to('.hero-tag', { y: "0%", duration: 1, ease: 'power3.out' }, "-=1")
    .to('.hero-fade', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.5");
});
</script>
