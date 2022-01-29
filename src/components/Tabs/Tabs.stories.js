// Tabs.stories.js

import VbTab from './Tab.vue';
import VbTabs from './Tabs.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tabs',
  component: VbTabs,
};

export const Default = () => ({
  components: { VbTab, VbTabs },
  data() {
    return { active: 'Account' };
  },
  template: `
  <div >
    <vb-tabs>
      <vb-tab :active="active === 'Account'">
        <a href="#" @click.prevent="active='Account'">Account</a>
      </vb-tab>
      <vb-tab :active="active === 'Company'">
        <a href="#" @click.prevent="active='Company'">Company</a>
      </vb-tab>
      <vb-tab :active="active === 'Team'">
        <a href="#" @click.prevent="active='Team'">Team</a>
      </vb-tab>
    </vb-tabs>
  </div>
  `,
});
