// Textarea.stories.js

import Textarea from './Textarea.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Textarea',
  component: Textarea
}

export const Primary = () => ({
  components: { Textarea },
  template: '<Textarea  />'
})
