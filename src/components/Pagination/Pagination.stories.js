// Pagination.stories.js

import VbPagination from './Pagination.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pagination',
  component: VbPagination
}

export const Default = () => ({
  components: { VbPagination },
  data() {
    return {
      results: 150,
      value: 1
    }
  },
  template:
    '<div><vb-pagination :results="results" v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})
