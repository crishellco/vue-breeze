<template>
  <nav class="flex">
    <ol role="list" class="bg-white rounded-md shadow px-6 flex space-x-4">
      <breadcrumbs />
    </ol>
  </nav>
</template>

<script>
export default {
  components: {
    Breadcrumbs: {
      functional: true,
      render(h, { parent }) {
        const nodes = (parent.$slots.default || []).filter(({ tag }) => !!tag);

        return nodes.map((node, index) => {
          node.componentOptions.propsData.first = index === 0;

          return node;
        });
      },
    },
  },
};
</script>
