// Breadcrumbs.stories.js

import CrBreadcrumb from './Breadcrumb.vue'
import CrBreadcrumbs from './Breadcrumbs.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Breadcrumbs',
  component: CrBreadcrumbs
}

export const Default = () => ({
  components: { CrBreadcrumb, CrBreadcrumbs },
  data() {
    return {}
  },
  template: `
  <div >
    <cr-breadcrumbs>
      <cr-breadcrumb>
        <a href="#" >
          <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </cr-breadcrumb>
      <cr-breadcrumb>
        <a href="#">Projects</a>
      </cr-breadcrumb>
      <cr-breadcrumb>
        <a href="#">Project Nero</a>
      </cr-breadcrumb>
    </cr-breadcrumbs>
  </div>
  `
})
