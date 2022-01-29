<template>
  <div>
    <div v-if="label || cornerHint" class="flex justify-between mb-1">
      <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <span class="text-sm text-gray-500">{{ cornerHint }}</span>
    </div>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span
        v-if="prefix"
        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
      >
        http://
      </span>
      <input
        class="shadow-sm block w-full text-sm rounded-r-md"
        :class="[
          { 'rounded-l-md': !prefix },
          invalid
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500',
        ]"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <p v-if="hint" class="mt-2 text-sm" :class="[invalid ? 'text-red-600' : 'text-gray-500']">
      {{ hint }}
    </p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    cornerHint: {
      type: String,
      default: '',
    },

    hint: {
      type: String,
      default: '',
    },

    prefix: {
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
