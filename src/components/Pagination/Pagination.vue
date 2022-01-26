<template>
  <div class="flex-1 flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">{{ start }}</span>
        to
        <span class="font-medium">{{ end }}</span>
        of
        <span class="font-medium">{{ results }}</span>
        results
      </p>
    </div>
    <div>
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          href="#"
          @click.prevent.stop="goToPage(1)"
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          @click.prevent.stop="goToPage(value - 1)"
          class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <template v-for="(page, index) in range">
          <span
            v-if="page === '...'"
            :key="index"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-400 "
          >
            {{ page }}
          </span>
          <a
            v-else
            :key="index"
            @click.prevent.stop="goToPage(page)"
            href="#"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="[
              page === value
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            ]"
          >
            {{ page }}
          </a>
        </template>
        <a
          href="#"
          @click.prevent.stop="goToPage(value + 1)"
          class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          @click.prevent.stop="goToPage(pages)"
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    results: {
      type: Number,
      required: true
    },

    pageSize: {
      type: Number,
      default: 10
    },

    maxLinks: {
      type: Number,
      default: 10
    },

    value: {
      type: Number,
      default: 1
    }
  },

  mounted() {},

  methods: {
    goToPage(page) {
      this.$emit('input', Math.max(Math.min(page, this.pages), 1))
    }
  },

  computed: {
    pages() {
      return Math.ceil(this.results / this.pageSize)
    },

    start() {
      return 1 + (this.value - 1) * this.pageSize
    },

    end() {
      return Math.min(this.start + (this.pageSize - 1), this.results)
    },

    range() {
      if (this.pages <= this.maxLinks) return this.pages

      let range = [this.value]
      let left = this.value
      let right = this.value
      let i = this.maxLinks - range.length

      while (i) {
        left--
        right++

        if (i) {
          range.push(right)
          i--
        }

        if (i) {
          range.unshift(left)
          i--
        }
      }

      const first = range[0]
      const last = range[range.length - 1]

      if (first < 1) {
        range = range.map((num) => num + Math.abs(1 - first))
      } else if (last > this.pages) {
        range = range.map((num) => num - Math.abs(last - this.pages))
      }

      range.splice(0, 1, 1)
      range.splice(-1, 1, this.pages)

      const leftDiff = range[1] - range[0]
      const rightDiff = range[range.length - 1] - range[range.length - 2]

      if (leftDiff > 1) {
        range.splice(1, 1, '...')
      }

      if (rightDiff > 1) {
        range.splice(-2, 1, '...')
      }

      return range
    }
  }
}
</script>
