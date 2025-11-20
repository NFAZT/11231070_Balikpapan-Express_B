<script setup>
import HeroSection from '../components/HeroSection.vue'

const features = [
  {
    icon: '📦',
    title: 'Kemasan Aman',
    description: 'Paket Anda dikemas dengan standar keamanan tertinggi',
  },
  {
    icon: '🚚',
    title: 'Pengiriman Cepat',
    description: 'Layanan ekspres untuk pengiriman urgent Anda',
  },
  {
    icon: '📍',
    title: 'Jangkauan Luas',
    description: 'Tersedia di seluruh Kalimantan Timur',
  },
  {
    icon: '⏱️',
    title: 'Real-time Tracking',
    description: 'Pantau paket Anda kapan saja, dimana saja',
  },
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <HeroSection />

    <section class="py-16 sm:py-20 lg:py-24 bg-white w-full">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
            Tentang Balikpapan Express
          </h2>
          <p
            class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg"
          >
            Kami adalah perusahaan jasa ekspedisi terpercaya yang berkomitmen
            memberikan layanan pengiriman terbaik untuk kebutuhan bisnis dan
            personal Anda.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="text-center p-6 sm:p-8 rounded-xl border border-gray-100
                   hover:bg-gray-50 transition-colors"
          >
            <div
              class="bg-[#B91C1C] w-16 h-16 sm:w-20 sm:h-20 rounded-full
                     flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl"
            >
              {{ feature.icon }}
            </div>
            <h3
              class="mb-2 sm:mb-3 text-gray-900 text-base sm:text-lg font-semibold"
            >
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white w-full"
    >
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div class="text-center">
            <div
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 font-semibold"
            >
              10K+
            </div>
            <div class="text-blue-200 text-xs sm:text-sm md:text-lg">
              Paket Terkirim
            </div>
          </div>

          <div class="text-center">
            <div
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 font-semibold"
            >
              5
            </div>
            <div class="text-blue-200 text-xs sm:text-sm md:text-lg">
              Kota Terjangkau
            </div>
          </div>

          <div class="text-center">
            <div
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 font-semibold"
            >
              98%
            </div>
            <div class="text-blue-200 text-xs sm:text-sm md:text-lg">
              Kepuasan Pelanggan
            </div>
          </div>

          <div class="text-center">
            <div
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 font-semibold"
            >
              24/7
            </div>
            <div class="text-blue-200 text-xs sm:text-sm md:text-lg">
              Customer Service
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white w-full"
    >
      <div class="w-full px-4 sm:px-8 lg:px-24">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
            Siap Mengirim Paket Anda?
          </h2>
          <p
            class="text-red-100 mb-8 sm:mb-10
                   text-sm sm:text-base md:text-lg"
          >
            Dapatkan penawaran terbaik untuk pengiriman paket Anda hari ini
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <router-link
              to="/track"
              class="bg-white text-[#B91C1C] px-8 py-3 md:px-10 md:py-4 rounded-xl 
                     hover:bg-gray-100 transition-colors
                     text-sm sm:text-base md:text-lg font-semibold"
            >
              Lacak Kiriman
            </router-link>

            <router-link
              to="/contact"
              class="bg-transparent border-2 border-white text-white px-8 py-3 md:px-10 md:py-4 
                     rounded-xl hover:bg-white hover:text-[#B91C1C] transition-colors 
                     text-sm sm:text-base md:text-lg font-semibold"
            >
              Hubungi Kami
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>