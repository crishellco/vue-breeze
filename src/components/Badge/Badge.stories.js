// Badge.stories.js

import CrBadge from './Badge.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Badge',
  component: CrBadge
}

export const Default = () => ({
  components: { CrBadge },
  data() {
    return {}
  },
  template: `
  <div class="space-x-4">
    <cr-badge color="gray">Badge</cr-badge>
    <cr-badge color="red">Badge</cr-badge>
    <cr-badge color="yellow">Badge</cr-badge>
    <cr-badge color="green">Badge</cr-badge>
    <cr-badge color="blue">Badge</cr-badge>
    <cr-badge color="indigo">Badge</cr-badge>
    <cr-badge color="purple">Badge</cr-badge>
    <cr-badge color="pink">Badge</cr-badge>
  </div>
  `
})
