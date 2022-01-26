// Textarea.stories.js

import VbTextarea from './Textarea.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Textarea',
  component: VbTextarea
}

export const WithLabel = () => ({
  components: { VbTextarea },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><vb-textarea label="With Label" v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithoutLabel = () => ({
  components: { VbTextarea },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><vb-textarea v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const Invalid = () => ({
  components: { VbTextarea },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><vb-textarea label="Invalid" :invalid="true" v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithHint = () => ({
  components: { VbTextarea },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><vb-textarea label="With Hint" hint="This is a hint" v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithCornerHint = () => ({
  components: { VbTextarea },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><vb-textarea label="With Corner Hint" corner-hint="Optional" v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})

export const WithInvalidHint = () => ({
  components: { VbTextarea },
  data() {
    return {
      value: 'value'
    }
  },
  template:
    '<div><vb-textarea label="With Invalid Hint" :invalid="true" hint="This value fails validation!" v-model="value"/><p class="mt-2 text-xs text-gray-500">Value: {{ value }}</p></div>'
})
