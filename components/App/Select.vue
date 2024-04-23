<template>
  <select
    v-model="innerValue"
    :id="name"
    :name="name"
    :required="required"
    class="w-full h-12 py-3 pl-3 pr-10 border cursor-pointer rounded-xl text-neutral-800 border-neutral-400 hover:border-neutral-800 arrow"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'AppSelect',

  // PROPS
  props: {
    // Namae
    name: {
      type: String,
      required: true,
    },
    // Required
    required: {
      type: Boolean,
      default: false,
    },
    // Options
    options: {
      type: Array,
      default: ['Option 1', 'Option 2'],
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

<style lang="postcss" scoped>
/* REF: https://codepen.io/vkjgr/pen/VYMeXp */
select {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  appearance: none;
  -moz-appearance: none;
}
select.arrow {
  background-image: linear-gradient(45deg, transparent 50%, black 50%),
    linear-gradient(135deg, black 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 5px),
    calc(100% - 15px) calc(1em + 5px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;
}

/* select.arrow {
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 5px),
    calc(100% - 15px) calc(1em + 5px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.9em;
  background-repeat: no-repeat;
} */
</style>
