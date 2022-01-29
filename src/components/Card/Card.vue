<template>
  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
    <div class="px-4 py-5 text-lg leading-6 font-medium text-gray-900"><slot name="header" /></div>
    <div class="px-4 py-5">
      <slot />
    </div>
    <div class="px-4 py-4 bg-gray-50"><slot name="footer" /></div>
  </div>
</template>
