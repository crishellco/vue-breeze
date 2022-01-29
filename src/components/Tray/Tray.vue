<template>
  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0">
        <div class="fixed inset-y-0 max-w-full flex" :class="[side === 'right' ? 'right-0 pl-10 ' : 'left-0 pr-10 ']">
          <transition :name="`slide-${side}`">
            <div v-if="open" class="w-screen max-w-md">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto">
                <div class="px-4">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900">{{ title }}</h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="$emit('close')"
                      >
                        <span class="sr-only">Close panel</span>
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4">
                  <slot />
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    side: {
      type: String,
      default: 'right',
      validator: (value) => ['left', 'right'].includes(value),
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 200ms ease-in-out;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
  transition: all 200ms ease-in-out 0s;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 200ms ease-in-out;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
  transition: all 200ms ease-in-out 0s;
}
</style>
