<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="relative w-full min-h-[70vh] bg-gradient-to-br from-[#B91C1C] to-[#991B1B] text-white overflow-hidden"
  >
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div
        class="absolute inset-0"
        style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"
      />
    </div>

    <div class="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                   mb-6 md:mb-8 leading-tight font-semibold"
          >
            Cepat, Aman, Terpercaya
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-red-100
                   leading-relaxed max-w-2xl"
          >
            Solusi pengiriman paket Anda di Kalimantan Timur dengan layanan
            terbaik dan harga kompetitif.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 md:mb-16">
            <RouterLink
              to="/track"
              class="bg-white text-[#B91C1C] px-8 py-3 md:px-10 md:py-4 rounded-xl 
                     hover:bg-gray-100 transition-colors text-center 
                     text-sm sm:text-base md:text-lg font-semibold"
            >
              Lacak Kiriman
            </RouterLink>

            <RouterLink
              to="/products"
              class="bg-transparent border-2 border-white text-white px-8 py-3 md:px-10 md:py-4 
                     rounded-xl hover:bg-white hover:text-[#B91C1C] transition-colors 
                     text-center text-sm sm:text-base md:text-lg font-semibold"
            >
              Lihat Layanan
            </RouterLink>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div class="flex items-center gap-4">
              <div class="bg-white/20 p-3 md:p-4 rounded-xl text-2xl">
                📦
              </div>
              <div>
                <div class="text-xs md:text-sm opacity-90 mb-1">Pengiriman</div>
                <div class="text-lg md:text-xl">Aman</div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-white/20 p-3 md:p-4 rounded-xl text-2xl">
                ⏰
              </div>
              <div>
                <div class="text-xs md:text-sm opacity-90 mb-1">Layanan</div>
                <div class="text-lg md:text-xl">24/7</div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-white/20 p-3 md:p-4 rounded-xl text-2xl">
                🛡️
              </div>
              <div>
                <div class="text-xs md:text-sm opacity-90 mb-1">Garansi</div>
                <div class="text-lg md:text-xl">Terjamin</div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop"
            alt="Delivery Courier"
            class="rounded-3xl shadow-2xl w-full 
                   h-56 sm:h-64 md:h-72 lg:h-[480px] xl:h-[560px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>