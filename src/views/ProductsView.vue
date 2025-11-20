<script setup>
import ServiceCard from '../components/ServiceCard.vue'

const services = [
  {
    title: 'Reguler',
    description:
      'Layanan pengiriman standar dengan harga terjangkau untuk paket non-urgent',
    estimation: '3-5 hari kerja',
    price: 'Rp 10.000',
    icon: '📦',
    color: 'bg-[#1E40AF]',
  },
  {
    title: 'Ekspres',
    description:
      'Pengiriman cepat untuk paket urgent dengan estimasi waktu 1-2 hari kerja',
    estimation: '1-2 hari kerja',
    price: 'Rp 25.000',
    icon: '⚡',
    color: 'bg-[#B91C1C]',
  },
  {
    title: 'Cargo',
    description:
      'Layanan khusus untuk pengiriman barang dengan volume dan berat besar',
    estimation: '5-7 hari kerja',
    price: 'Rp 50.000',
    icon: '🚚',
    color: 'bg-[#059669]',
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
          Layanan Kami
        </h1>
        <p
          class="text-sm sm:text-base md:text-lg text-red-100 max-w-3xl mx-auto"
        >
          Pilih layanan pengiriman yang sesuai dengan kebutuhan Anda.
        </p>
      </div>
    </section>

    <section class="w-full py-16 md:py-20 bg-gray-50">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :estimation="service.estimation"
            :price="service.price"
            :icon="service.icon"
            :color="service.color"
          />
        </div>
      </div>
    </section>

    <section class="w-full py-16 md:py-20 bg-white">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="text-center mb-10 md:mb-12">
          <h2 class="text-2xl md:text-3xl text-gray-900 mb-3 md:mb-4">
            Keunggulan Layanan
          </h2>
          <p
            class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
          >
            Setiap layanan kami dilengkapi dengan fitur-fitur unggulan.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div class="flex gap-4 p-6 bg-gray-50 rounded-xl">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center text-white text-xl"
              >
                ✓
              </div>
            </div>
            <div>
              <h3 class="text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                Asuransi Paket
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                Setiap paket dilindungi asuransi untuk keamanan maksimal.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 bg-gray-50 rounded-xl">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center text-white text-xl"
              >
                ✓
              </div>
            </div>
            <div>
              <h3 class="text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                Real-time Tracking
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                Pantau posisi paket Anda secara real-time melalui aplikasi.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 bg-gray-50 rounded-xl">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center text-white text-xl"
              >
                ✓
              </div>
            </div>
            <div>
              <h3 class="text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                Pickup Service
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                Layanan penjemputan paket langsung dari lokasi Anda.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 bg-gray-50 rounded-xl">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center text-white text-xl"
              >
                ✓
              </div>
            </div>
            <div>
              <h3 class="text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                Customer Support 24/7
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                Tim customer service siap membantu Anda kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>