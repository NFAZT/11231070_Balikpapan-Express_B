<template>
  <footer class="w-full bg-gray-900 text-white">
    <div class="w-full px-4 sm:px-8 lg:px-8 py-8">
      <div
        class="flex flex-col gap-10
               lg:flex-row lg:justify-between lg:items-start"
      >
        <div class="lg:max-w-sm">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-[#B91C1C] p-2.5 rounded-xl flex items-center justify-center">
              <span class="text-xl">🚚</span>
            </div>
            <span class="text-xl font-semibold">
              Balikpapan Express
            </span>
          </div>
          <p class="text-gray-400 text-sm sm:text-base">
            Layanan pengiriman paket terpercaya dengan jangkauan ke seluruh Kalimantan Timur.
          </p>
        </div>

        <div>
          <h3 class="mb-6 text-lg font-semibold">Tautan Cepat</h3>
          <div class="flex flex-col gap-3 text-sm sm:text-base">
            <RouterLink to="/" class="text-gray-400 hover:text-white transition-colors">
              Beranda
            </RouterLink>
            <RouterLink to="/about" class="text-gray-400 hover:text-white transition-colors">
              Tentang Kami
            </RouterLink>
            <RouterLink to="/products" class="text-gray-400 hover:text-white transition-colors">
              Layanan
            </RouterLink>
            <RouterLink to="/track" class="text-gray-400 hover:text-white transition-colors">
              Lacak Kiriman
            </RouterLink>
          </div>
        </div>

        <div>
          <h3 class="mb-6 text-lg font-semibold">Hubungi Kami</h3>
          <div class="flex flex-col gap-4 text-sm sm:text-base text-gray-400">
            <div class="flex items-center gap-3">
              <span class="text-lg">📞</span>
              <span>(0542) 733-499</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-lg">✉️</span>
              <span>balikpapan.express@gmail.com</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-lg">📍</span>
              <span>
                Jl. Pangeran Antasari RT 65 NO 45 Kel. Karang Rejo,
                Balikpapan Tengah, Balikpapan 76124
              </span>
            </div>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-center">
        <p class="text-gray-400 text-xs sm:text-sm">
          © 2025 Balikpapan Express. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>