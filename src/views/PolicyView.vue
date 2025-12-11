<script setup>
const lastUpdated = '11 Desember 2025'
const sections = [
  {
    id: 'ketentuan',
    title: 'Ketentuan Layanan',
    paragraphs: [
      'Dengan menggunakan layanan Balikpapan Express, Anda menyetujui syarat dan ketentuan yang berlaku pada halaman ini.',
      'Ketentuan dapat berubah sewaktu-waktu. Versi terbaru menggantikan versi sebelumnya.'
    ]
  },
  {
    id: 'pengiriman',
    title: 'Kebijakan Pengiriman',
    paragraphs: [
      'Estimasi pengiriman bergantung pada rute, cuaca, kondisi jalan, dan antrian operasional.',
      'Berat yang digunakan adalah berat aktual atau volumetrik (P×L×T/6000), mana yang lebih besar.'
    ],
    list: [
      'Pickup dapat dijadwalkan melalui halaman Jemput Paket atau kontak WhatsApp.',
      'Minimum charge dapat berlaku pada area/kondisi tertentu.',
      'Pengemasan menjadi tanggung jawab pengirim kecuali menggunakan layanan packing kami.'
    ]
  },
  {
    id: 'asuransi',
    title: 'Asuransi & Klaim',
    paragraphs: [
      'Asuransi bersifat opsional dengan biaya persentase dari nilai barang yang dideklarasikan.',
      'Klaim kerusakan/kehilangan dilaporkan maksimal 3×24 jam sejak barang diterima, disertai bukti yang memadai.'
    ],
    list: [
      'Proses verifikasi dapat meminta video/foto sebelum pengiriman dan saat unboxing.',
      'Nilai ganti rugi mengikuti ketentuan asuransi dan tidak melebihi nilai deklarasi.'
    ]
  },
  {
    id: 'terlarang',
    title: 'Barang Terlarang & Pembatasan',
    paragraphs: [
      'Kami tidak menerima barang yang dilarang oleh hukum atau berisiko tinggi membahayakan proses pengiriman.'
    ],
    list: [
      'Bahan peledak/terbakar, narkotika, senjata, bahan kimia berbahaya.',
      'Hewan hidup, benda mudah rusak tanpa pengemasan memadai.',
      'Baterai, cairan, atau magnet kuat wajib mengikuti regulasi rute yang mendukung.'
    ]
  },
  {
    id: 'pengemasan',
    title: 'Standar Pengemasan',
    paragraphs: [
      'Gunakan dus kokoh, bantalan memadai, dan sealing yang kuat. Untuk barang fragile, gunakan kayu atau material pengaman tambahan.'
    ],
    list: [
      'Isi ruang kosong dengan bantalan agar tidak bergeser.',
      'Tandai “Fragile” bila perlu.',
      'Lampirkan alamat pengirim/penerima yang jelas dan kontak aktif.'
    ]
  },
  {
    id: 'pembatalan',
    title: 'Pembatalan & Pengembalian',
    paragraphs: [
      'Pembatalan sebelum pickup tidak dikenakan biaya. Setelah pickup, biaya administrasi dan/atau pengembalian dapat berlaku.'
    ],
    list: [
      'Pengembalian ke alamat asal mengikuti ongkos kirim yang berlaku.',
      'Biaya layanan tambahan yang telah dilakukan tidak dapat dikembalikan.'
    ]
  },
  {
    id: 'privasi',
    title: 'Privasi & Data',
    paragraphs: [
      'Data pelanggan digunakan untuk keperluan operasional, pelacakan, dan peningkatan layanan sesuai peraturan yang berlaku.'
    ],
    list: [
      'Kami tidak membagikan data kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.',
      'Permintaan penghapusan data dapat diajukan melalui kanal resmi kami.'
    ]
  },
  {
    id: 'sla',
    title: 'SLA, Keterlambatan, Force Majeure',
    paragraphs: [
      'Estimasi bersifat indikatif. Keterlambatan akibat force majeure (cuaca ekstrem, bencana, pembatasan jalan) tidak termasuk kompensasi.',
      'Kami berkomitmen memberikan pembaruan status secara transparan melalui pelacakan.'
    ]
  },
  {
    id: 'perubahan',
    title: 'Perubahan Kebijakan',
    paragraphs: [
      'Kebijakan ini dapat diperbarui tanpa pemberitahuan terlebih dahulu. Tanggal pembaruan terakhir tercantum di bagian atas halaman.'
    ]
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <section class="bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 py-14">
        <h1 class="text-3xl md:text-4xl font-semibold mb-2">Kebijakan & Ketentuan</h1>
        <p class="text-red-100">Terakhir diperbarui: {{ lastUpdated }}</p>
      </div>
    </section>

    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside class="lg:col-span-4 self-start">
          <div class="bg-white border border-gray-100 rounded-2xl p-4 sticky top-20">
            <div class="text-gray-900 font-semibold mb-3">Daftar Isi</div>
            <nav class="space-y-2 text-sm">
              <a v-for="s in sections" :key="s.id" :href="'#' + s.id" class="block text-gray-600 hover:text-[#B91C1C]">
                {{ s.title }}
              </a>
            </nav>
          </div>
        </aside>

        <main class="lg:col-span-8 space-y-10">
          <section
            v-for="s in sections"
            :key="s.id"
            :id="s.id"
            class="bg-white border border-gray-100 rounded-2xl p-6 scroll-mt-24"
          >
            <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{{ s.title }}</h2>
            <div class="space-y-3 text-gray-700">
              <p v-for="(p, i) in s.paragraphs" :key="i">{{ p }}</p>
              <ul v-if="s.list && s.list.length" class="list-disc pl-5 space-y-1">
                <li v-for="(li, j) in s.list" :key="j">{{ li }}</li>
              </ul>
            </div>
          </section>

          <div class="bg-white border border-gray-100 rounded-2xl p-6">
            <div class="text-gray-900 font-semibold mb-2">Butuh klarifikasi?</div>
            <p class="text-gray-600 mb-4">Hubungi tim kami untuk penjelasan lebih lanjut mengenai kebijakan.</p>
            <router-link to="/contact" class="inline-block bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-semibold">Hubungi Kami</router-link>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>