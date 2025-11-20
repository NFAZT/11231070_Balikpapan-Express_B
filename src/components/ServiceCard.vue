<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  estimation: { type: String, required: true },
  price: { type: String, required: true },
  color: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
  >
    <div :class="[props.color, 'p-6 flex justify-center']">
      <div class="bg-white/20 p-4 rounded-full">
        <span class="text-3xl text-white">
          {{ props.icon }}
        </span>
      </div>
    </div>

    <div class="p-6">
      <h3 class="mb-3 text-gray-900 text-lg md:text-xl font-semibold">
        {{ props.title }}
      </h3>
      <p class="text-gray-600 mb-4 text-sm sm:text-base">
        {{ props.description }}
      </p>

      <div class="space-y-2 mb-4 text-sm sm:text-base">
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Estimasi:</span>
          <span class="text-gray-900 font-medium">
            {{ props.estimation }}
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Mulai dari:</span>
          <span class="text-[#B91C1C] font-semibold">
            {{ props.price }}
          </span>
        </div>
      </div>

      <button
        type="button"
        :class="[props.color, 'w-full text-white py-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base font-semibold']"
      >
        Pilih Layanan
      </button>
    </div>
  </div>
</template>
