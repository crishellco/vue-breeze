// Card.stories.js

import VbCard from './Card.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: VbCard,
};

export const Default = () => ({
  components: { VbCard },
  template: `
  <div>
    <vb-card>
      <template #header>Header</template>
      Content
      <template #footer>Footer</template>
    </vb-card>
  </div>
  `,
});
