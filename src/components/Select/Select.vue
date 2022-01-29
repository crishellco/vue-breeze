<template>
  <div>
    <div v-if="label || cornerHint" class="flex justify-between mb-1">
      <label for="email" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <span id="email-optional" class="text-sm text-gray-500">{{ cornerHint }}</span>
    </div>
    <div class="relative">
      <button
        type="button"
        class="bg-white relative w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm"
        :class="[
          invalid
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500',
        ]"
        @click="show = true"
      >
        <span class="block truncate">
          {{ selected.name || '&nbsp;' }}
        </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          v-if="show"
          v-click-outside="() => (show = false)"
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          tabindex="-1"
          role="listbox"
          @click="show = false"
        >
          <li
            v-for="option in options"
            id="listbox-option-0"
            :key="option.id"
            class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 group hover:bg-indigo-600 hover:text-white"
            role="option"
            @click="select(option)"
          >
            <span
              class="font-normal block truncate"
              :class="[selected.id === option.id ? 'font-semibold' : 'font-normal']"
            >
              {{ option.name }}
            </span>

            <span
              v-if="selected.id === option.id"
              class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4 group-hover:text-white"
            >
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
        </ul>
      </transition>
    </div>
    <p v-if="hint" class="mt-2 text-sm" :class="[invalid ? 'text-red-600' : 'text-gray-500']">
      {{ hint }}
    </p>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
  directives: { clickOutside: vClickOutside.directive },

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

    options: {
      type: Array,
      default() {
        return [];
      },
    },

    value: {
      type: [String, Number],
      default: '',
    },
  },

  data() {
    return { show: false };
  },

  computed: {
    selected() {
      return this.options.find(({ id }) => id === this.value) ?? {};
    },
  },

  methods: {
    select({ id }) {
      this.$emit('input', id);
    },
  },
};
</script>
