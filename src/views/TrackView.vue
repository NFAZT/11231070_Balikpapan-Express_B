<script setup>
import { ref } from 'vue'
import TrackingTimeline from '../components/TrackingTimeline.vue'

const resi = ref('')
const trackingData = ref(null)
const isLoading = ref(false)

const mockTrackingData = {
  BP123456789: {
    resi: 'BP123456789',
    origin: 'Jakarta',
    destination: 'Balikpapan',
    status: 'Dalam Pengiriman',
    timeline: [
      {
        status: 'Paket Diterima di Gudang',
        date: '17 Nov 2025, 09:00 WIB',
        location: 'Jakarta Pusat',
        completed: true,
      },
      {
        status: 'Paket Dalam Perjalanan',
        date: '17 Nov 2025, 14:30 WIB',
        location: 'Hub Transit Surabaya',
        completed: true,
      },
      {
        status: 'Paket Sedang Dikirim',
        date: '18 Nov 2025, 08:00 WIB',
        location: 'Balikpapan',
        completed: true,
      },
      {
        status: 'Paket Telah Diterima',
        date: 'Menunggu konfirmasi',
        location: 'Tujuan',
        completed: false,
      },
    ],
  },
  BP987654321: {
    resi: 'BP987654321',
    origin: 'Surabaya',
    destination: 'Makassar',
    status: 'Terkirim',
    timeline: [
      {
        status: 'Paket Diterima di Gudang',
        date: '15 Nov 2025, 10:00 WIB',
        location: 'Surabaya',
        completed: true,
      },
      {
        status: 'Paket Dalam Perjalanan',
        date: '16 Nov 2025, 06:00 WIB',
        location: 'Hub Transit',
        completed: true,
      },
      {
        status: 'Paket Sedang Dikirim',
        date: '17 Nov 2025, 09:00 WIB',
        location: 'Makassar',
        completed: true,
      },
      {
        status: 'Paket Telah Diterima',
        date: '17 Nov 2025, 15:30 WIB',
        location: 'Penerima: Ahmad',
        completed: true,
      },
    ],
  },
}

const handleTrack = () => {
  isLoading.value = true
  trackingData.value = null

  setTimeout(() => {
    const key = resi.value.trim().toUpperCase()
    const data = mockTrackingData[key]
    trackingData.value = data || null
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <section
      class="w-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] text-white py-16 md:py-20"
    >
      <div class="w-full px-4 sm:px-8 lg:px-16 text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
          Lacak Kiriman
        </h1>
        <p
          class="text-sm sm:text-base md:text-lg text-red-100 max-w-3xl mx-auto"
        >
          Masukkan nomor resi untuk melacak posisi paket Anda.
        </p>
      </div>
    </section>

    <section class="w-full py-16 md:py-20">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form @submit.prevent="handleTrack">
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input
                  v-model="resi"
                  type="text"
                  placeholder="Masukkan nomor resi (contoh: BP123456789)"
                  required
                  class="w-full px-4 py-3 md:py-4 border-2 border-gray-300 rounded-lg
                         focus:border-[#B91C1C] focus:outline-none transition-colors
                         text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                :disabled="isLoading"
                class="bg-[#B91C1C] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg
                       hover:bg-[#991B1B] transition-colors flex items-center justify-center
                       gap-2 disabled:opacity-50 text-sm sm:text-base"
              >
                <span class="text-lg">🔍</span>
                <span>{{ isLoading ? 'Mencari...' : 'Lacak' }}</span>
              </button>
            </div>
          </form>

          <div class="mt-4 text-center">
            <p class="text-gray-500 text-xs sm:text-sm">
              nomor resi
            </p>
          </div>
        </div>

        <div v-if="trackingData" class="mt-8 animate-fade-in">
          <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="bg-[#B91C1C] p-3 rounded-lg flex items-center justify-center"
              >
                <span class="text-2xl text-white">📦</span>
              </div>
              <div>
                <h3 class="text-gray-900 font-semibold text-base sm:text-lg">
                  Resi: {{ trackingData.resi }}
                </h3>
                <p class="text-gray-500 text-sm">
                  Status: {{ trackingData.status }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="text-gray-500">Asal:</span>
                <p class="text-gray-900 font-medium">
                  {{ trackingData.origin }}
                </p>
              </div>
              <div>
                <span class="text-gray-500">Tujuan:</span>
                <p class="text-gray-900 font-medium">
                  {{ trackingData.destination }}
                </p>
              </div>
            </div>
          </div>

          <TrackingTimeline :statuses="trackingData.timeline" />
        </div>

        <div
          v-if="!isLoading && trackingData === null && resi"
          class="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center"
        >
          <p class="text-red-800 text-sm sm:text-base">
            Nomor resi tidak ditemukan. Pastikan Anda memasukkan nomor resi yang
            benar.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>