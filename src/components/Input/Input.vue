<template>
  <div>
    <div class="flex justify-between mb-1" v-if="label || cornerHint">
      <label for="email" class="block text-sm font-medium text-gray-700">{{
        label
      }}</label>
      <span class="text-sm text-gray-500" id="email-optional">{{
        cornerHint
      }}</span>
    </div>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span
        v-if="prefix"
        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
      >
        http://
      </span>
      <input
        name="email"
        id="email"
        class="shadow-sm  block w-full text-sm rounded-r-md"
        :class="[
          { 'rounded-l-md': !prefix },
          invalid
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
        ]"
        placeholder="you@example.com"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <p
      class="mt-2 text-sm"
      :class="[invalid ? 'text-red-600' : 'text-gray-500']"
      v-if="hint"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  data() {
    return {}
  },

  props: {
    cornerHint: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },

  mounted() {},

  methods: {}
}
</script>
