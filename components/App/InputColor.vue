<template>
  <div class="flex items-center">
    <input
      v-model="innerValue"
      :id="name"
      :name="name"
      :type="type"
      :step="type === 'number' ? step : null"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      class="w-full h-12 p-3 border rounded-l-xl text-neutral-800 border-neutral-400 hover:border-neutral-800"
    />

    <div
      class="flex items-center justify-center w-20 h-12 border-r border-y rounded-r-xl border-neutral-400"
    >
      <div
        class="w-full mx-1 rounded-r-lg h-9"
        :style="{ backgroundColor: `rgba(${sampleColor}, ${sampleAlpha})` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInputColor',

  // PROPS
  props: {
    // Type
    type: {
      type: String,
      default: 'text',
    },
    // Step
    step: {
      type: String,
      default: '1',
    },
    // Namae
    name: {
      type: String,
      required: true,
    },
    // Placeholder
    placeholder: {
      type: String,
      default: '',
    },
    // Required
    required: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    // Default value
    defaultValue: {
      type: [String, Number],
      default: null,
    },
    // Model value
    modelValue: {
      type: [String, Number],
      default: null,
    },
    // Sample color
    sampleColor: {
      type: String,
      default: null,
    },
    // SampleAlpha
    sampleAlpha: {
      type: Number,
      default: null,
    },
  },

  // EMITS
  emits: ['update:modelValue'],

  data: () => ({
    // v-model
    innerValue: null,
  }),

  // WATCH
  watch: {
    // Set modelValue to innerValue when changed
    modelValue(val) {
      this.innerValue = val
    },
    // Emit event and pass input innerValue (for v-model in parrent component)
    innerValue(value) {
      this.$emit('update:modelValue', value)
    },

    // Set changed 'value' to 'innerValue'
    defaultValue(val) {
      if (val !== this.innerValue) {
        this.innerValue = val
      }
    },
  },

  // MOUNTED
  mounted() {
    // Set default 'value' to 'innerValue'
    if (this.defaultValue) {
      this.innerValue = this.defaultValue
    }
  },
}
</script>

<script setup></script>

<style lang="postcss" scoped></style>
