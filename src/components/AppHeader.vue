<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Layanan', path: '/products' },
  { name: 'Lacak Kiriman', path: '/track' },
  { name: 'Kontak', path: '/contact' },
]

const isActive = (path) => route.path === path
const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <nav class="w-full bg-white shadow-md sticky top-0 z-50">
    <div class="w-full px-4 sm:px-8 lg:px-16">
      <div class="flex justify-between items-center h-16 sm:h-20">
        <RouterLink to="/" class="flex items-center gap-3">
          <div class="bg-[#B91C1C] p-2.5 rounded-xl flex items-center justify-center">
            <span class="text-2xl">🚚</span>
          </div>
          <span class="text-[#B91C1C] text-lg sm:text-xl font-semibold">
            Balikpapan Express
          </span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-6 lg:gap-10">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="transition-colors text-sm sm:text-base lg:text-lg"
            :class="
              isActive(link.path)
                ? 'text-[#B91C1C] font-semibold'
                : 'text-gray-700 hover:text-[#B91C1C]'
            "
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <button
          type="button"
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle navigation"
        >
          <span v-if="!isOpen" class="text-2xl text-gray-700">☰</span>
          <span v-else class="text-2xl text-gray-700">✕</span>
        </button>
      </div>

      <div
        v-if="isOpen"
        class="md:hidden py-4 border-t border-gray-200"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="closeMenu"
          class="block py-3 px-4 text-sm sm:text-base transition-colors"
          :class="
            isActive(link.path)
              ? 'text-[#B91C1C] bg-red-50 font-semibold'
              : 'text-gray-700 hover:bg-gray-50'
          "
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
