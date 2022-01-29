<template>
  <div class="border-b border-gray-200">
    <nav class="-mb-px flex space-x-8">
      <tabs />
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    Tabs: {
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
