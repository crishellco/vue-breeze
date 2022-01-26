// Select.stories.js

import VbSelect from './Select.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Select',
  component: VbSelect
}

const options = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' }
]

export const WithLabel = () => ({
  components: { VbSelect },
  data() {
    return {
      options,
      value: 1
    }
  },
  template:
    '<div><vb-select label="With Label" v-model="value" :options="options"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithoutLabel = () => ({
  components: { VbSelect },
  data() {
    return {
      options,
      value: 1
    }
  },
  template:
    '<div><vb-select v-model="value" :options="options"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const Invalid = () => ({
  components: { VbSelect },
  data() {
    return {
      options,
      value: 1
    }
  },
  template:
    '<div><vb-select label="Invalid" :invalid="true" v-model="value" :options="options"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithHint = () => ({
  components: { VbSelect },
  data() {
    return {
      options,
      value: 1
    }
  },
  template:
    '<div><vb-select label="With Hint" hint="This is a hint" v-model="value" :options="options"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithCornerHint = () => ({
  components: { VbSelect },
  data() {
    return {
      options,
      value: 1
    }
  },
  template:
    '<div><vb-select label="With Corner Hint" corner-hint="Optional" v-model="value" :options="options"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithInvalidHint = () => ({
  components: { VbSelect },
  data() {
    return {
      options,
      value: 1
    }
  },
  template:
    '<div><vb-select label="With Invalid Hint" hint="This value fails validation!" :invalid="true" v-model="value" :options="options"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})
