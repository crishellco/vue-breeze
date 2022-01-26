// Input.stories.js

import CrInput from './Input.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
  component: CrInput
}

export const WithLabel = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input label="With Label" v-model="value" type="text" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithoutLabel = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input v-model="value" type="text" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const Password = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input label="Password Input" v-model="value" type="password" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const Invalid = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input label="Invalid Input" :invalid="true" v-model="value" type="text" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithHint = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input label="With Hint" v-model="value" type="text" hint="This is a hint" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithCornerHint = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input label="With Corner Hint" corner-hint="Optional" v-model="value" type="text" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithPrefix = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'google.com'
    }
  },
  template:
    '<div><cr-input label="With Prefix" prefix="https://" v-model="value" type="text" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithInvalidHint = () => ({
  components: { CrInput },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><cr-input label="With Invalid Hint" :invalid="true" v-model="value" type="text" hint="This value fails validation!" /><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})
