<template>
  <div :class="$style.tabList">
    <span
      v-for="(item, index) in items"
      :key="item"
      :class="[$style.tabItem, index === activeIndex && $style.tabItemActive]"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: string[]; activeIndex?: number }>()
</script>

<style module lang="scss">
.tabList {
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #d9e2ec;
  padding-bottom: 8px;
  margin-bottom: 16px;
  color: #52616b;
  font-size: 13px;
}

.tabItem {
  cursor: default;
}

.tabItemActive {
  color: #1f2933;
  font-weight: 600;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 6px;
}
</style>
