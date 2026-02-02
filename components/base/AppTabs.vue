<template>
  <div class="tabs">
    <span
      v-for="(item, index) in items"
      :key="item"
      class="tabs__item"
      :class="{ 'tabs__item--active': index === activeIndex }"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: string[]; activeIndex?: number }>()
</script>
