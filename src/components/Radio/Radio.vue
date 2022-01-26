<template>
  <div class="flex items-center" @click="$emit('change', value)">
    <input
      type="radio"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      :value="value"
      :checked="checked"
    />
    <div class="ml-3 text-sm">
      <label for="small" class="font-medium text-gray-700">{{ label }}</label>
      <span class="text-gray-500" v-if="description">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    event: 'change',

    prop: 'picked'
  },

  data() {
    return {}
  },

  props: {
    description: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    picked: {
      type: String,
      default: ''
    }
  },

  mounted() {},

  methods: {},

  computed: {
    checked() {
      return this.picked === this.value
    }
  }
}
</script>
