<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="w-full bg-gray-900 text-white">
    <div class="w-full px-4 sm:px-8 lg:px-16 py-16">
      <div
        class="flex flex-col gap-10
               lg:flex-row lg:justify-between lg:items-start"
      >
        <div class="lg:max-w-sm">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="bg-[#B91C1C] p-2.5 rounded-xl flex items-center justify-center"
            >
              <span class="text-xl">🚚</span>
            </div>
            <span class="text-xl font-semibold">
              Balikpapan Express
            </span>
          </div>
          <p class="text-gray-400 text-sm sm:text-base">
            Layanan pengiriman paket terpercaya dengan jangkauan ke seluruh Indonesia.
          </p>
        </div>

        <div>
          <h3 class="mb-6 text-lg font-semibold">Tautan Cepat</h3>
          <div class="flex flex-col gap-3 text-sm sm:text-base">
            <RouterLink
              to="/"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Beranda
            </RouterLink>
            <RouterLink
              to="/about"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Tentang Kami
            </RouterLink>
            <RouterLink
              to="/products"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Layanan
            </RouterLink>
            <RouterLink
              to="/track"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Lacak Kiriman
            </RouterLink>
          </div>
        </div>

        <div>
          <h3 class="mb-6 text-lg font-semibold">Hubungi Kami</h3>
          <div class="flex flex-col gap-4 text-sm sm:text-base text-gray-400">
            <div class="flex items-center gap-3">
              <span class="text-lg">📞</span>
              <span>(0542) 123-4567</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-lg">✉️</span>
              <span>info@balikpapanexpress.com</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-lg">📍</span>
              <span>Balikpapan, Kalimantan Timur</span>
            </div>
          </div>
        </div>

        <div class="lg:text-right">
          <h3 class="mb-6 text-lg font-semibold">Media Sosial</h3>
          <div class="flex gap-4 lg:justify-end">
            <a
              href="#"
              class="bg-gray-800 p-3 rounded-xl hover:bg-[#B91C1C] transition-colors flex items-center justify-center"
            >
              <span class="text-xl">📘</span>
            </a>
            <a
              href="#"
              class="bg-gray-800 p-3 rounded-xl hover:bg-[#B91C1C] transition-colors flex items-center justify-center"
            >
              <span class="text-xl">📸</span>
            </a>
            <a
              href="#"
              class="bg-gray-800 p-3 rounded-xl hover:bg-[#B91C1C] transition-colors flex items-center justify-center"
            >
              <span class="text-xl">🐦</span>
            </a>
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