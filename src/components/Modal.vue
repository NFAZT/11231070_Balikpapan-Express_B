<script setup>
const props = defineProps({
  isOpen: { type: Boolean, default: false },
  title: { type: String, default: '' },
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="close"
    ></div>

    <div
      class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fade-in"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-gray-900">
          {{ props.title }}
        </h3>
        <button
          type="button"
          @click="close"
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span class="w-5 h-5 text-gray-500 text-xl leading-none">
            &times;
          </span>
        </button>
      </div>

      <slot />
    </div>
  </div>
</template>