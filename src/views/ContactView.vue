<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const isModalOpen = ref(false)

const handleSubmit = () => {
  isModalOpen.value = true
  formData.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <section
      class="w-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] text-white py-16 md:py-20"
    >
      <div class="w-full px-4 sm:px-8 lg:px-16 text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
          Hubungi Kami
        </h1>
        <p
          class="text-sm sm:text-base md:text-lg text-red-100 max-w-3xl mx-auto"
        >
          Kami siap membantu Anda dengan pertanyaan atau kebutuhan pengiriman
          Anda.
        </p>
      </div>
    </section>

    <section class="w-full py-16 md:py-20">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div class="space-y-6">
            <div class="bg-white rounded-xl shadow-lg p-6">
              <div
                class="bg-[#B91C1C] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl text-white"
              >
                📞
              </div>
              <h3 class="text-gray-900 mb-2 text-lg font-semibold">
                Telepon
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                (0842) 123-4567
              </p>
              <p class="text-gray-600 text-sm sm:text-base">
                +62 812-3456-7890
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div
                class="bg-[#1E40AF] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl text-white"
              >
                ✉️
              </div>
              <h3 class="text-gray-900 mb-2 text-lg font-semibold">
                Email
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                info@balikpapanexpress.com
              </p>
              <p class="text-gray-600 text-sm sm:text-base">
                support@balikpapanexpress.com
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div
                class="bg-[#B91C1C] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl text-white"
              >
                📍
              </div>
              <h3 class="text-gray-900 mb-2 text-lg font-semibold">
                Alamat
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                Jl. Jenderal Sudirman No. 123<br />
                Balikpapan, Kalimantan Timur<br />
                76114
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div
                class="bg-[#1E40AF] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl text-white"
              >
                ⏰
              </div>
              <h3 class="text-gray-900 mb-2 text-lg font-semibold">
                Jam Operasional
              </h3>
              <p class="text-gray-600 text-sm sm:text-base">
                Senin - Jumat: 08:00 - 17:00
              </p>
              <p class="text-gray-600 text-sm sm:text-base">
                Sabtu: 08:00 - 14:00
              </p>
              <p class="text-gray-600 text-sm sm:text-base">
                Minggu: Tutup
              </p>
            </div>
          </div>

          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 class="text-xl md:text-2xl text-gray-900 mb-6">
                Kirim Pesan
              </h2>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label
                    for="name"
                    class="block text-gray-700 mb-2 text-sm sm:text-base"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                           focus:border-[#B91C1C] focus:outline-none transition-colors
                           text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-gray-700 mb-2 text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="nama@email.com"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                           focus:border-[#B91C1C] focus:outline-none transition-colors
                           text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-gray-700 mb-2 text-sm sm:text-base"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="6"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                           focus:border-[#B91C1C] focus:outline-none transition-colors
                           resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  class="w-full bg-[#B91C1C] text-white py-3.5 md:py-4 rounded-lg
                         hover:bg-[#991B1B] transition-colors
                         flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span class="text-lg">📨</span>
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal
      :is-open="isModalOpen"
      title="Pesan Berhasil Dikirim"
      @close="isModalOpen = false"
    >
      <div class="text-center py-4">
        <div
          class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span class="text-2xl">📨</span>
        </div>
        <p class="text-gray-600 mb-6 text-sm sm:text-base">
          Terima kasih telah menghubungi kami! Tim kami akan segera merespons
          pesan Anda.
        </p>
        <button
          type="button"
          @click="isModalOpen = false"
          class="bg-[#B91C1C] text-white px-8 py-3 rounded-lg
                 hover:bg-[#991B1B] transition-colors text-sm sm:text-base"
        >
          Tutup
        </button>
      </div>
    </Modal>
  </div>
</template>