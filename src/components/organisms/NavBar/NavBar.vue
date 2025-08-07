<template>
  <section
    class="flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-purple-900 py-20 rounded-b-3xl shadow-lg space-y-4"
    data-aos="fade-up"
  >
    <h1 class="text-6xl font-extrabold select-none leading-tight" data-aos="fade-down">
      <span class="text-white">Miratake</span>
      <span
        class="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent"
      >
        Foundations
      </span>
    </h1>
    <h2
      class="text-2xl font-medium text-gray-300 select-none"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      Evoluindo a sua
      <span
        class="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent font-semibold"
      >
        marca
      </span>
    </h2>

    <button
      class="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      Fale Conosco
    </button>
  </section>

  <section class="mt-20 max-w-6xl mx-auto px-6">
    <h2
      class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent"
      data-aos="fade-up"
    >
      O que fazemos
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div
        class="bg-gray-900 rounded-xl p-6 text-center border border-purple-500 shadow-lg hover:scale-105 transition-transform"
        data-aos="fade-up"
      >
        <div class="text-purple-400 text-4xl mb-4">🎨</div>
        <h3 class="text-xl font-semibold text-white mb-2">Design Criativo</h3>
        <p class="text-gray-300 text-sm">
          Criamos identidades visuais únicas para fortalecer sua marca.
        </p>
      </div>

      <div
        class="bg-gray-900 rounded-xl p-6 text-center border border-purple-500 shadow-lg hover:scale-105 transition-transform"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div class="text-purple-400 text-4xl mb-4">💻</div>
        <h3 class="text-xl font-semibold text-white mb-2">Desenvolvimento Web</h3>
        <p class="text-gray-300 text-sm">
          Sites rápidos, modernos e responsivos para qualquer dispositivo.
        </p>
      </div>

      <div
        class="bg-gray-900 rounded-xl p-6 text-center border border-purple-500 shadow-lg hover:scale-105 transition-transform"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="text-purple-400 text-4xl mb-4">📈</div>
        <h3 class="text-xl font-semibold text-white mb-2">Marketing Digital</h3>
        <p class="text-gray-300 text-sm">
          Estratégias para aumentar seu alcance e engajamento online.
        </p>
      </div>
    </div>
  </section>

  <section
    class="mt-20 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-6 bg-gray-900 rounded-2xl shadow-lg p-8"
    data-aos="fade-right"
  >
    <img
      src="/images/quem-somos.jpg"
      alt="Descrição"
      class="w-full md:w-1/3 rounded-xl shadow-lg object-cover max-h-96"
      data-aos="zoom-in"
    />
    <div class="text-gray-300 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
      <h2
        class="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent"
      >
        Quem Somos
      </h2>
      <p class="mb-4">
        Somos especialistas em transformar ideias em experiências digitais marcantes.
      </p>
      <p>
        Nosso time une criatividade e tecnologia para entregar resultados que fortalecem a presença
        digital de nossos clientes.
      </p>
    </div>
  </section>

  <section class="mt-24 max-w-6xl mx-auto px-6">
    <h2
      class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent"
      data-aos="fade-up"
    >
      Nossa Equipe
    </h2>
    <div class="flex flex-wrap justify-center gap-8">
      <div
        class="flex flex-col items-center bg-gray-900 rounded-2xl p-8 w-72 shadow-lg border border-purple-500 hover:scale-105 transition-transform"
        data-aos="fade-right"
      >
        <PVAvatar image="/images/gui.png" shape="circle" size="xlarge" />
        <span class="text-2xl font-semibold text-purple-400 mt-4">G. Miranda</span>
        <span class="text-gray-300 text-center mt-2">
          Co-fundador e desenvolvedor full-stack.
        </span>
      </div>

      <div
        class="flex flex-col items-center bg-gray-900 rounded-2xl p-8 w-72 shadow-lg border border-purple-500 hover:scale-105 transition-transform"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <PVAvatar image="/images/fer.png" shape="circle" size="xlarge" />
        <span class="text-2xl font-semibold text-purple-400 mt-4">F. Miyatake</span>
        <span class="text-gray-300 text-center mt-2"> Co-fundador desenvolvedor full-stack. </span>
      </div>
    </div>
  </section>

  <section
    class="mt-24 bg-gradient-to-r from-purple-600 to-purple-800 py-12 px-6 text-center rounded-2xl shadow-lg max-w-5xl mx-auto"
    data-aos="zoom-in"
  >
    <h2 class="text-3xl font-bold text-white mb-4">Pronto para evoluir sua marca?</h2>
    <p class="text-gray-200 mb-6">Entre em contato e vamos criar algo incrível juntos!</p>
    <button
      class="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Fale Conosco
    </button>
  </section>

  <footer class="bg-black text-white py-6">
    <div class="container mx-auto flex flex-col items-center gap-2">
      <p class="text-sm">© MiraTake 2025 — Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Typed from 'typed.js'

const typedEl = ref(null)
let typedInstance: Typed | null = null

onMounted(() => {
  typedInstance = new Typed(typedEl.value, {
    strings: ['Foundations'],
    typeSpeed: 100,
    showCursor: false,
  })
})

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy()
  }
})
</script>
