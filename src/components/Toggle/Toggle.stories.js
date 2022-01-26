// Toggle.stories.js

import VbToggle from './Toggle.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Toggle',
  component: VbToggle,
};

export const Default = () => ({
  components: { VbToggle },
  data() {
    return { value: false };
  },
  template: '<div><vb-toggle v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>',
});
