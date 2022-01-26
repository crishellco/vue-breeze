// Badge.stories.js

import VbBadge from './Badge.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Badge',
  component: VbBadge
}

export const Default = () => ({
  components: { VbBadge },
  data() {
    return {}
  },
  template: `
  <div class="space-x-4">
    <vb-badge color="gray">Badge</vb-badge>
    <vb-badge color="red">Badge</vb-badge>
    <vb-badge color="yellow">Badge</vb-badge>
    <vb-badge color="green">Badge</vb-badge>
    <vb-badge color="blue">Badge</vb-badge>
    <vb-badge color="indigo">Badge</vb-badge>
    <vb-badge color="purple">Badge</vb-badge>
    <vb-badge color="pink">Badge</vb-badge>
  </div>
  `
})
