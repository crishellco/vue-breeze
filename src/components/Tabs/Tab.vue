<template>
  <div
    class="whitespace-nowrap border-b-2 font-medium text-sm vb-tab-wrapper"
    :class="[
      active
        ? 'border-indigo-500 text-indigo-600'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.vb-tab-wrapper > * {
  @apply py-4 px-1 block cursor-pointer;
}
</style>
