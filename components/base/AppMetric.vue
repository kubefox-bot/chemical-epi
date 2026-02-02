<template>
  <div :class="$style.stat">
    <div :class="$style.statLabel">{{ label }}</div>
    <div :class="$style.statValue">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string }>()
</script>

<style module lang="scss">
.stat {
  display: block;
}

.statLabel {
  font-size: 12px;
  color: #52616b;
  margin-bottom: 6px;
}

.statValue {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.stat + .stat {
  margin-top: 16px;
}
</style>
