<template>
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
    class="w-full h-12 p-3 border rounded-xl text-neutral-800 border-neutral-400 hover:border-neutral-800"
  />
</template>

<script>
export default {
  name: 'AppButton',

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

<style lang="postcss" scoped></style>
