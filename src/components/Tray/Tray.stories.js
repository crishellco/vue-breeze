// Tray.stories.js

import VbTray from './Tray.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tray',
  component: VbTray,
};

export const Right = () => ({
  components: { VbTray },
  data() {
    return { open: true };
  },
  watch: {
    open(val) {
      if (!val) {
        setTimeout(() => (this.open = true), 500);
      }
    },
  },
  template: '<div><vb-tray @close="open = false" :open="open" title="Tray Title">Content here...</vb-tray></div>',
});

export const Left = () => ({
  components: { VbTray },
  data() {
    return { open: true };
  },
  watch: {
    open(val) {
      if (!val) {
        setTimeout(() => (this.open = true), 500);
      }
    },
  },
  template:
    '<div><vb-tray @close="open = false" side="left" :open="open" title="Tray Title">Content here...</vb-tray></div>',
});
