<script setup>
const props = defineProps({
  statuses: {
    type: Array,
    default: () => [],
  },
})

const getIcon = (index) => {
  switch (index) {
    case 0:
      return '📦'
    case 1:
      return '🚚'
    case 2:
      return '📍'
    default:
      return '✔️'
  }
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
    <h3 class="mb-4 md:mb-6 text-gray-900 text-lg md:text-xl font-semibold">
      Status Pengiriman
    </h3>

    <div class="space-y-6">
      <div
        v-for="(item, index) in props.statuses"
        :key="index"
        class="flex gap-4 relative"
      >
        <div
          v-if="index !== props.statuses.length - 1"
          class="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200"
        ></div>

        <div
          class="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base"
          :class="
            item.completed
              ? 'bg-[#B91C1C] text-white'
              : 'bg-gray-200 text-gray-400'
          "
        >
          <span>
            {{ getIcon(index) }}
          </span>
        </div>

        <div class="flex-1 pb-2">
          <div
            class="text-sm sm:text-base"
            :class="item.completed ? 'text-gray-900' : 'text-gray-500'"
          >
            {{ item.status }}
          </div>
          <div class="text-gray-500 text-xs sm:text-sm mt-1">
            {{ item.date }}
          </div>
          <div class="text-gray-400 text-xs sm:text-sm">
            {{ item.location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>