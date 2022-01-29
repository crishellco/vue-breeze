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
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <a
          href="#"
          class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          @click.prevent.stop="goToPage(value - 1)"
        >
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <template v-for="(page, index) in range">
          <a
            :key="index"
            href="#"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="[
              page === value
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
            ]"
            @click.prevent.stop="goToPage(page)"
          >
            {{ page }}
          </a>
        </template>
        <a
          href="#"
          class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          @click.prevent.stop="goToPage(value + 1)"
        >
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
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
  props: {
    results: {
      type: Number,
      required: true,
    },

    pageSize: {
      type: Number,
      default: 10,
    },

    maxLinks: {
      type: Number,
      default: 10,
    },

    value: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    pages() {
      return Math.ceil(this.results / this.pageSize);
    },

    start() {
      return 1 + (this.value - 1) * this.pageSize;
    },

    end() {
      return Math.min(this.start + (this.pageSize - 1), this.results);
    },

    range() {
      if (this.pages <= this.maxLinks) return this.pages;

      let range = [this.value];
      let left = this.value;
      let right = this.value;
      let i = this.maxLinks - range.length;

      while (i) {
        left--;
        right++;

        if (i) {
          range.push(right);
          i--;
        }

        if (i) {
          range.unshift(left);
          i--;
        }
      }

      const first = range[0];
      const last = range[range.length - 1];

      if (first < 1) {
        range = range.map((num) => num + Math.abs(1 - first));
      } else if (last > this.pages) {
        range = range.map((num) => num - Math.abs(last - this.pages));
      }

      range.splice(0, 1, 1);
      range.splice(-1, 1, this.pages);

      return range;
    },
  },

  methods: {
    goToPage(page) {
      this.$emit('input', Math.max(Math.min(page, this.pages), 1));
    },
  },
};
</script>
