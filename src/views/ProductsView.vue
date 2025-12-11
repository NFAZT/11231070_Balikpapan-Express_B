<script setup>
import { ref, computed } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'
import Modal from '../components/Modal.vue'

const services = [
  {
    title: 'Reguler',
    description:
      'Layanan pengiriman standar dengan harga terjangkau untuk paket non-urgent',
    estimation: '3-5 hari kerja',
    price: 'Rp 10.000 / kg',
    pricePerKg: 10000,
    maxWeight: 5,
    icon: '📦',
    color: 'bg-[#1E40AF]',
  },
  {
    title: 'Ekspres',
    description:
      'Pengiriman cepat untuk paket urgent dengan estimasi waktu 1-2 hari kerja',
    estimation: '1-2 hari kerja',
    price: 'Rp 20.000 / kg',
    pricePerKg: 20000,
    maxWeight: 5,
    icon: '⚡',
    color: 'bg-[#B91C1C]',
  },
  {
    title: 'Cargo',
    description:
      'Layanan khusus untuk pengiriman barang dengan volume dan berat besar',
    estimation: '5-7 hari kerja',
    price: 'Rp 30.000 / kg',
    pricePerKg: 30000,
    maxWeight: 100,
    icon: '🚚',
    color: 'bg-[#059669]',
  },
]

const itemTypes = [
  'Dokumen',
  'Pakaian',
  'Elektronik',
  'Makanan kering',
  'Aksesoris',
  'Lainnya',
]

const branches = [
  'Balikpapan Tengah',
  'Balikpapan Selatan',
  'Balikpapan Utara',
  'Balikpapan Barat',
  'Balikpapan Timur',
]

const cities = [
  'Balikpapan',
  'Samarinda',
  'Bontang',
  'Tenggarong',
  'Penajam',
  'Samboja',
]

const isFormOpen = ref(false)
const isSuccessOpen = ref(false)
const selectedService = ref(null)

const packageForm = ref({
  senderName: '',
  senderCity: '',
  receiverName: '',
  receiverCity: '',
  itemName: '',
  itemType: '',
  branch: '',
  weight: '',
  notes: '',
})

const openForm = (service) => {
  selectedService.value = service
  isFormOpen.value = true
}

const closeForm = () => {
  isFormOpen.value = false
}

const resetForm = () => {
  packageForm.value = {
    senderName: '',
    senderCity: '',
    receiverName: '',
    receiverCity: '',
    itemName: '',
    itemType: '',
    branch: '',
    weight: '',
    notes: '',
  }
}

const isWeightValid = computed(() => {
  if (!selectedService.value) return false
  const w = parseFloat(packageForm.value.weight)
  if (!w || w <= 0) return false
  return w <= selectedService.value.maxWeight
})

const shippingCost = computed(() => {
  if (!selectedService.value) return 0
  if (!isWeightValid.value) return 0
  const w = parseFloat(packageForm.value.weight)
  return selectedService.value.pricePerKg * w
})

const formatCurrency = (value) => {
  if (!value) return 'Rp 0'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}

const handleSubmit = () => {
  if (!isWeightValid.value) return
  isFormOpen.value = false
  isSuccessOpen.value = true
  resetForm()
}
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
            :price-per-kg="service.pricePerKg"
            :max-weight="service.maxWeight"
            :icon="service.icon"
            :color="service.color"
            @select="openForm(service)"
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

    <Modal
      :is-open="isFormOpen"
      :title="selectedService ? 'Isi detail paket - ' + selectedService.title : ''"
      @close="closeForm"
    >
      <div v-if="selectedService" class="space-y-4">
        <div
          class="bg-red-50 border border-red-100 rounded-lg p-4 text-sm text-red-800 mb-2"
        >
          <div class="font-semibold mb-1">
            {{ selectedService.title }}
          </div>
          <div>
            Estimasi: {{ selectedService.estimation }} • Tarif:
            {{ selectedService.price }} • Maks:
            {{ selectedService.maxWeight }} kg
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm text-gray-700 mb-1">
                Nama pengirim
              </label>
              <input
                v-model="packageForm.senderName"
                type="text"
                required
                class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B91C1C] focus:outline-none text-sm"
              />
            </div>
            <div>
              <label class="block text-sm text-gray-700 mb-1">
                Kota asal
              </label>
              <select
                v-model="packageForm.senderCity"
                required
                class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-[#B91C1C] focus:outline-none text-sm"
              >
                <option value="" disabled>Pilih kota asal</option>
                <option v-for="city in cities" :key="city" :value="city">
                  {{ city }}
                </option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm text-gray-700 mb-1">
                Nama penerima
              </label>
              <input
                v-model="packageForm.receiverName"
                type="text"
                required
                class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B91C1C] focus:outline-none text-sm"
              />
            </div>
            <div>
              <label class="block text-sm text-gray-700 mb-1">
                Kota tujuan
              </label>
              <select
                v-model="packageForm.receiverCity"
                required
                class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-[#B91C1C] focus:outline-none text-sm"
              >
                <option value="" disabled>Pilih kota tujuan</option>
                <option v-for="city in cities" :key="city + '-to'" :value="city">
                  {{ city }}
                </option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm text-gray-700 mb-1">
                Nama barang
              </label>
              <input
                v-model="packageForm.itemName"
                type="text"
                required
                class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B91C1C] focus:outline-none text-sm"
              />
            </div>
            <div>
              <label class="block text-sm text-gray-700 mb-1">
                Jenis barang
              </label>
              <select
                v-model="packageForm.itemType"
                required
                class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-[#B91C1C] focus:outline-none text-sm"
              >
                <option value="" disabled>Pilih jenis barang</option>
                <option v-for="type in itemTypes" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">
              Cabang Balikpapan Express
            </label>
            <select
              v-model="packageForm.branch"
              required
              class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-[#B91C1C] focus:outline-none text-sm"
            >
              <option value="" disabled>Pilih cabang</option>
              <option v-for="branch in branches" :key="branch" :value="branch">
                {{ branch }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">
              Berat paket (kg)
            </label>
            <input
              v-model="packageForm.weight"
              type="number"
              step="0.1"
              min="0"
              required
              class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B91C1C] focus:outline-none text-sm"
            />
            <div class="mt-2 text-xs sm:text-sm text-gray-600">
              Maksimal: {{ selectedService.maxWeight }} kg
            </div>
            <div
              v-if="packageForm.weight && !isWeightValid"
              class="mt-1 text-xs sm:text-sm text-red-600"
            >
              Berat melebihi batas maksimal untuk layanan ini.
            </div>
            <div
              v-if="packageForm.weight && isWeightValid"
              class="mt-2 text-xs sm:text-sm text-gray-600"
            >
              Perkiraan ongkir:
              <span class="font-semibold text-gray-900">
                {{ formatCurrency(shippingCost) }}
              </span>
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">
              Catatan tambahan (opsional)
            </label>
            <textarea
              v-model="packageForm.notes"
              rows="3"
              class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B91C1C] focus:outline-none text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            :disabled="!isWeightValid"
            class="w-full bg-[#B91C1C] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#991B1B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kirim permintaan
          </button>
        </form>
      </div>
    </Modal>

    <Modal
      :is-open="isSuccessOpen"
      title="Permintaan berhasil dikirim"
      @close="isSuccessOpen = false"
    >
      <div class="text-center py-4">
        <div
          class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
        >
          <span class="text-2xl">✅</span>
        </div>
        <p class="text-sm sm:text-base text-gray-600 mb-4">
          Terima kasih, permintaan pengiriman Anda sudah kami terima. Tim kami akan
          segera menghubungi Anda untuk konfirmasi lebih lanjut.
        </p>
        <button
          type="button"
          class="px-8 py-3 rounded-lg bg-[#B91C1C] text-white text-sm sm:text-base hover:bg-[#991B1B] transition-colors"
          @click="isSuccessOpen = false"
        >
          Tutup
        </button>
      </div>
    </Modal>
  </div>
</template>