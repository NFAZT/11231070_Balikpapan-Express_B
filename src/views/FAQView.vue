<script setup>
import { ref, computed } from 'vue'

const query = ref('')

const faqs = [
  {
    category: 'Umum',
    items: [
      { q: 'Apa itu Balikpapan Express?', a: 'Perusahaan ekspedisi yang melayani pengiriman dokumen dan paket dengan jangkauan Kalimantan Timur dan sekitarnya.' },
      { q: 'Area layanan mana saja yang tersedia?', a: 'Balikpapan, Samarinda, Bontang, Tenggarong, Penajam, dan kota sekitar yang tercantum pada halaman layanan.' },
      { q: 'Jam operasional?', a: 'Senin–Sabtu 08:00–20:00 WITA, Minggu 09:00–17:00 WITA.' },
    ],
  },
  {
    category: 'Pengiriman',
    items: [
      { q: 'Berapa estimasi waktu pengiriman?', a: 'Reguler 3–5 hari kerja, Ekspres 1–2 hari kerja, Cargo 5–7 hari kerja, tergantung rute dan kondisi lapangan.' },
      { q: 'Bagaimana cara menjadwalkan penjemputan?', a: 'Gunakan halaman Jemput Paket atau hubungi WhatsApp kami. Kurir akan menjemput sesuai jadwal yang Anda pilih.' },
      { q: 'Apakah bisa kirim barang fragile?', a: 'Bisa. Mohon gunakan packing aman (bubble wrap/kayu bila perlu). Tersedia opsi asuransi.' },
    ],
  },
  {
    category: 'Biaya & Pembayaran',
    items: [
      { q: 'Bagaimana perhitungan ongkir?', a: 'Mengacu pada berat aktual atau volumetrik (P×L×T/6000), mana yang lebih besar, ditambah variabel jarak, minimum charge, dan opsi layanan.' },
      { q: 'Metode pembayaran apa saja?', a: 'Transfer bank, QRIS, dan tunai di counter atau saat pickup.' },
      { q: 'Apakah ada biaya tambahan?', a: 'Ada biaya opsional seperti packing kayu, asuransi, dan surcharge lokasi khusus sesuai ketentuan.' },
    ],
  },
  {
    category: 'Tracking & Klaim',
    items: [
      { q: 'Bagaimana cara lacak paket?', a: 'Masukkan nomor resi di halaman Lacak Kiriman untuk melihat status real-time.' },
      { q: 'Bagaimana prosedur komplain atau klaim asuransi?', a: 'Laporkan maksimal 3×24 jam sejak diterima dengan bukti foto/video. Tim kami akan memverifikasi sesuai ketentuan.' },
      { q: 'Apa yang harus dilakukan jika paket tertunda?', a: 'Cek status terakhir di pelacakan dan hubungi CS. Kami akan investigasi dan memberikan pembaruan.' },
    ],
  },
  {
    category: 'Barang Terlarang',
    items: [
      { q: 'Apa saja barang terlarang?', a: 'Benda mudah meledak/terbakar, narkotika, senjata, cairan berbahaya, hewan hidup, dan item yang dilarang hukum setempat.' },
      { q: 'Bagaimana dengan baterai dan cairan?', a: 'Diperbolehkan dengan syarat khusus dan deklarasi. Hubungi CS untuk detail pengemasan dan rute yang mendukung.' },
    ],
  },
]

const openMap = ref({})

function keyOf(catIdx, itemIdx) {
  return `${catIdx}-${itemIdx}`
}
function toggle(catIdx, itemIdx) {
  const k = keyOf(catIdx, itemIdx)
  openMap.value[k] = !openMap.value[k]
}
function isOpen(catIdx, itemIdx) {
  return !!openMap.value[keyOf(catIdx, itemIdx)]
}

const filteredFaqs = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return faqs
  return faqs
    .map(cat => ({
      category: cat.category,
      items: cat.items.filter(it => (it.q + ' ' + it.a).toLowerCase().includes(q)),
    }))
    .filter(cat => cat.items.length > 0)
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <section class="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 py-14">
        <h1 class="text-3xl md:text-4xl font-semibold mb-3">FAQ</h1>
        <p class="text-blue-100 max-w-2xl">Jawaban singkat untuk pertanyaan yang paling sering ditanyakan.</p>
      </div>
    </section>

    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-8">
        <div class="mb-6">
          <input v-model="query" type="text" placeholder="Cari pertanyaan..."
                 class="w-full rounded-xl border border-gray-200 px-4 py-3"/>
        </div>

        <div class="space-y-8">
          <div v-for="(cat, ci) in filteredFaqs" :key="cat.category">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{{ cat.category }}</h2>
            <div class="space-y-3">
              <div v-for="(item, ii) in cat.items" :key="item.q" class="bg-white border border-gray-100 rounded-xl">
                <button type="button" @click="toggle(ci, ii)"
                        class="w-full flex items-center justify-between px-4 py-4 text-left">
                  <span class="text-gray-900 font-medium">{{ item.q }}</span>
                  <span :class="['transition-transform', isOpen(ci, ii) ? 'rotate-45' : '']" class="text-2xl leading-none text-gray-500">+</span>
                </button>
                <div v-if="isOpen(ci, ii)" class="px-4 pb-4 text-gray-600 text-sm sm:text-base">
                  {{ item.a }}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-100 rounded-2xl p-6 text-center">
            <div class="text-gray-900 font-semibold mb-2">Belum menemukan jawaban?</div>
            <p class="text-gray-600 mb-4">Hubungi tim kami untuk pertanyaan khusus pengiriman Anda.</p>
            <router-link to="/contact" class="inline-block bg-[#B91C1C] hover:bg-[#991B1B] text-white px-6 py-3 rounded-xl font-semibold">Hubungi Kami</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>