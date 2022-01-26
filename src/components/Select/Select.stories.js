// Select.stories.js

import Select from './Select.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Select',
  component: Select
}

export const Primary = () => ({
  components: { Select },
  template: '<Select  />'
})
