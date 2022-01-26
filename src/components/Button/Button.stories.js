// Button.stories.js

import VbButton from './Button.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: VbButton,
};

export const Primary = () => ({
  components: { VbButton },
  data() {
    return {};
  },
  template: `
  <div class="space-x-4">
    <vb-button size="xs">Click me</vb-button>
    <vb-button size="sm">Click me</vb-button>
    <vb-button>Click me</vb-button>
    <vb-button size="lg">Click me</vb-button>
    <vb-button size="xl">Click me</vb-button>
  </div>
  `,
});

export const Secondary = () => ({
  components: { VbButton },
  data() {
    return {};
  },
  template: `
  <div class="space-x-4">
    <vb-button color="secondary" size="xs">Click me</vb-button>
    <vb-button color="secondary" size="sm">Click me</vb-button>
    <vb-button color="secondary">Click me</vb-button>
    <vb-button color="secondary" size="lg">Click me</vb-button>
    <vb-button color="secondary" size="xl">Click me</vb-button>
  </div>
  `,
});

export const White = () => ({
  components: { VbButton },
  data() {
    return {};
  },
  template: `
  <div class="space-x-4">
    <vb-button color="white" size="xs">Click me</vb-button>
    <vb-button color="white" size="sm">Click me</vb-button>
    <vb-button color="white">Click me</vb-button>
    <vb-button color="white" size="lg">Click me</vb-button>
    <vb-button color="white" size="xl">Click me</vb-button>
  </div>
  `,
});
