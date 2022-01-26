// Checkbox.stories.js

import CrCheckbox from './Checkbox.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Checkbox',
  component: CrCheckbox,
};

export const NoneChecked = () => ({
  components: { CrCheckbox },
  data() {
    return {
      pizza: false,
      tacos: false,
    };
  },
  template:
    '<div><div class="space-y-4"><cr-checkbox label="Pizza" v-model="pizza" /><cr-checkbox label="Tacos" v-model="tacos"/></div><p class="mt-2 text-xs text-gray-500">Value: {{ $data }}</p></div>',
});

export const OneChecked = () => ({
  components: { CrCheckbox },
  data() {
    return {
      pizza: true,
      tacos: false,
    };
  },
  template:
    '<div><div class="space-y-4"><cr-checkbox label="Pizza" v-model="pizza" /><cr-checkbox label="Tacos" v-model="tacos"/></div><p class="mt-2 text-xs text-gray-500">Value: {{ $data }}</p></div>',
});

export const WithDescriptions = () => ({
  components: { CrCheckbox },
  data() {
    return {
      pizza: true,
      tacos: false,
    };
  },
  template:
    '<div><div class="space-y-4"><cr-checkbox label="Pizza" v-model="pizza" description="Cheese only"/><cr-checkbox label="Tacos" v-model="tacos" description="Carne asada"/></div><p class="mt-2 text-xs text-gray-500">Value: {{ $data }}</p></div>',
});
