// Radio.stories.js

import VbRadio from './Radio.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Radio',
  component: VbRadio
}

export const NoneChecked = () => ({
  components: { VbRadio },
  data() {
    return {
      value: ''
    }
  },
  template:
    '<div><div class="space-y-4"><vb-radio label="Pizza" v-model="value" value="pizza"/><vb-radio label="Tacos" v-model="value" value="tacos"/></div><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const OneChecked = () => ({
  components: { VbRadio },
  data() {
    return {
      value: 'pizza'
    }
  },
  template:
    '<div><div class="space-y-4"><vb-radio label="Pizza" v-model="value" value="pizza"/><vb-radio label="Tacos" v-model="value" value="tacos"/></div><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithDescriptions = () => ({
  components: { VbRadio },
  data() {
    return {
      value: 'pizza'
    }
  },
  template:
    '<div><div class="space-y-4"><vb-radio label="Pizza" v-model="value" value="pizza" description="Cheese only"/><vb-radio label="Tacos" v-model="value" value="tacos" description="Carne asada"/></div><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})
