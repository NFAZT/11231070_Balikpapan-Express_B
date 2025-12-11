<script setup>
const values = [
  {
    icon: '🏆',
    title: 'Profesional',
    description:
      'Menjalankan setiap proses dengan standar profesional tertinggi',
    color: 'bg-[#B91C1C]',
  },
  {
    icon: '👥',
    title: 'Terpercaya',
    description:
      'Membangun kepercayaan melalui konsistensi dan integritas',
    color: 'bg-[#1E40AF]',
  },
  {
    icon: '🎯',
    title: 'Inovatif',
    description:
      'Terus berinovasi untuk memberikan layanan yang lebih baik',
    color: 'bg-[#B91C1C]',
  },
]
</script>

<template>
  <div class="bg-slate-50 min-h-screen">
    <section
      class="w-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] text-white py-16 md:py-20"
    >
      <div class="w-full px-4 sm:px-8 lg:px-16 text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
          Tentang Kami
        </h1>
        <p
          class="text-sm sm:text-base md:text-lg text-red-100 max-w-3xl mx-auto"
        >
          Balikpapan Express adalah perusahaan jasa ekspedisi yang telah
          dipercaya pelanggan di Kalimantan Timur.
        </p>
      </div>
    </section>

    <section class="w-full py-16 md:py-20 bg-white">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div>
            <h2 class="text-2xl md:text-3xl text-gray-900 mb-4 md:mb-6">
              Sejarah Perusahaan
            </h2>
            <p class="text-gray-600 mb-4 text-sm sm:text-base">
              Didirikan pada tahun 2015, Balikpapan Express berawal dari sebuah
              layanan pengiriman lokal di Balikpapan, Kalimantan Timur. Dengan
              komitmen kuat untuk memberikan layanan terbaik, kami terus
              berkembang dan kini melayani pengiriman ke seluruh Kalimantan Timur.
            </p>
            <p class="text-gray-600 mb-4 text-sm sm:text-base">
              Kepercayaan pelanggan adalah aset terbesar kami. Setiap paket
              yang Anda percayakan kepada kami ditangani dengan penuh
              kehati-hatian dan profesionalitas.
            </p>
            <p class="text-gray-600 text-sm sm:text-base">
              Kami terus berinovasi dengan mengadopsi teknologi terkini untuk
              memberikan pengalaman pengiriman yang lebih baik, termasuk sistem
              tracking real-time dan customer service 24/7.
            </p>
          </div>

          <div>
            <img
              src="/cuplikan-layar.png"
              alt="Warehouse Balikpapan Express"
              class="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-16 md:py-20 bg-gray-50">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div
              class="bg-[#B91C1C] w-14 h-14 md:w-16 md:h-16 rounded-full
                     flex items-center justify-center mb-4 md:mb-6 text-2xl"
            >
              👁️
            </div>
            <h3 class="text-xl md:text-2xl text-gray-900 mb-3 md:mb-4">
              Visi
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Menjadi perusahaan jasa ekspedisi terdepan di Indonesia yang
              dikenal dengan kecepatan, keamanan, dan kepercayaan dalam setiap
              pengiriman.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div
              class="bg-[#1E40AF] w-14 h-14 md:w-16 md:h-16 rounded-full
                     flex items-center justify-center mb-4 md:mb-6 text-2xl"
            >
              🎯
            </div>
            <h3 class="text-xl md:text-2xl text-gray-900 mb-3 md:mb-4">
              Misi
            </h3>
            <ul class="text-gray-600 space-y-2 text-sm sm:text-base">
              <li>• Memberikan layanan pengiriman yang cepat dan aman</li>
              <li>• Mengembangkan teknologi untuk kemudahan pelanggan</li>
              <li>• Memperluas jangkauan layanan ke seluruh Indonesia</li>
              <li>• Membangun kepercayaan melalui pelayanan terbaik</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-16 md:py-20 bg-white">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="text-center mb-10 md:mb-12">
          <h2 class="text-2xl md:text-3xl text-gray-900 mb-3 md:mb-4">
            Nilai-Nilai Kami
          </h2>
          <p
            class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
          >
            Nilai-nilai yang menjadi fondasi dalam setiap layanan kami
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div
            v-for="(item, index) in values"
            :key="index"
            class="text-center p-6 md:p-8"
          >
            <div
              :class="[
                item.color,
                'w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4'
              ]"
            >
              <span class="text-2xl md:text-3xl text-white">
                {{ item.icon }}
              </span>
            </div>
            <h3 class="text-gray-900 mb-2 md:mb-3 text-base md:text-lg">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 text-xs sm:text-sm md:text-base">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>