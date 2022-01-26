<template>
  <div>
    <div v-if="label || cornerHint" class="flex justify-between mb-1">
      <label for="email" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <span id="email-optional" class="text-sm text-gray-500">{{ cornerHint }}</span>
    </div>
    <div>
      <textarea
        rows="4"
        class="shadow-sm block w-full sm:text-sm rounded-md"
        :class="[
          invalid
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500',
        ]"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
    <p v-if="hint" class="mt-2 text-sm" :class="[invalid ? 'text-red-600' : 'text-gray-500']">
      {{ hint }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cornerHint: {
      type: String,
      default: '',
    },

    hint: {
      type: String,
      default: '',
    },

    invalid: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },
  },
};
</script>
