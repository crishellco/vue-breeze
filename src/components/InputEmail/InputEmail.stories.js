// InputEmail.stories.js

import InputEmail from './InputEmail.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'InputEmail',
  component: InputEmail
}

export const Primary = () => ({
  components: { InputEmail },
  template: '<InputEmail  />'
})
