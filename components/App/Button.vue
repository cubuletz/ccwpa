<template>
  <button
    :type="type"
    class="w-full h-12 rounded-full"
    :class="[
      variant === 'solid' &&
        'text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-700',
      variant === 'gost' &&
        'text-blue-800 border border-neutral-300 hover:border-neutral-400 active:border-neutral-300',
    ]"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<script setup>
// PROPS
const props = defineProps({
  // Variant (solid, gost)
  variant: {
    type: String,
    default: 'solid',
  },

  // Label
  label: {
    type: String,
    default: 'BUTTON',
  },

  // Type
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<style lang="postcss" scoped></style>
