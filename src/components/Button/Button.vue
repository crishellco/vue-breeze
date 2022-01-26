<template>
  <button
    v-on="$listeners"
    type="button"
    class="inline-flex items-center border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[colorClasses, sizeClasses]"
  >
    <slot />
  </button>
</template>

<script>
const COLOR_CLASS_MAP = {
  primary:
    'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
  secondary:
    'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
  white:
    'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500'
}

const SIZE_CLASS_MAP = {
  base: 'px-4 py-2 text-sm rounded-md font-medium ',
  sm: 'px-3 py-2 text-sm rounded-md leading-4 font-medium ',
  xs: 'px-2.5 py-1.5 text-xs rounded font-medium',
  lg: 'px-4 py-2 text-base rounded-md font-medium',
  xl: 'px-6 py-3 text-base rounded-md font-medium'
}

export default {
  data() {
    return {}
  },

  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'white'].includes(value)
    },
    size: {
      type: String,
      default: 'base',
      validator: (value) => ['base', 'sm', 'xs', 'lg', 'xl'].includes(value)
    }
  },

  mounted() {},

  methods: {},

  computed: {
    colorClasses() {
      return COLOR_CLASS_MAP[this.color]
    },
    sizeClasses() {
      return SIZE_CLASS_MAP[this.size]
    }
  }
}
</script>
