// Button.stories.js

import CrButton from './Button.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: CrButton
}

export const Primary = () => ({
  components: { CrButton },
  data() {
    return {}
  },
  template: `
  <div class="space-x-4">
    <cr-button size="xs">Click me</cr-button>
    <cr-button size="sm">Click me</cr-button>
    <cr-button>Click me</cr-button>
    <cr-button size="lg">Click me</cr-button>
    <cr-button size="xl">Click me</cr-button>
  </div>
  `
})

export const Secondary = () => ({
  components: { CrButton },
  data() {
    return {}
  },
  template: `
  <div class="space-x-4">
    <cr-button color="secondary" size="xs">Click me</cr-button>
    <cr-button color="secondary" size="sm">Click me</cr-button>
    <cr-button color="secondary">Click me</cr-button>
    <cr-button color="secondary" size="lg">Click me</cr-button>
    <cr-button color="secondary" size="xl">Click me</cr-button>
  </div>
  `
})

export const White = () => ({
  components: { CrButton },
  data() {
    return {}
  },
  template: `
  <div class="space-x-4">
    <cr-button color="white" size="xs">Click me</cr-button>
    <cr-button color="white" size="sm">Click me</cr-button>
    <cr-button color="white">Click me</cr-button>
    <cr-button color="white" size="lg">Click me</cr-button>
    <cr-button color="white" size="xl">Click me</cr-button>
  </div>
  `
})
