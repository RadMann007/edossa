<template>
  <div class="loader fixed inset-0 bg-[#111] z-[100] flex items-center justify-center">
    <div class="relative text-center">
      <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
        <span class="text-6xl md:text-8xl font-bold tracking-tighter">ARTICLES</span>
      </div>
      <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
        Chargement des actualités...
      </div>
      <div class="loader-progress w-0 h-1 bg-[#4ECDC4] mt-4"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['completed']);

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('completed');
    }
  });

  tl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
    .to('.loader-subtitle', { opacity: 1, duration: 0.5 }, "-=0.3")
    .to('.loader-progress', { width: '100%', duration: 1.5, ease: 'power2.out' }, '-=0.5')
    .to('.loader-text', { opacity: 0, duration: 0.5, delay: 0.3 })
    .to('.loader-subtitle', { opacity: 0, duration: 0.5 }, "<")
    .to('.loader', {
      opacity: 0,
      duration: 0.5,
      pointerEvents: 'none'
    });
});
</script>
