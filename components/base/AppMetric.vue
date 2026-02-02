<template>
  <div class="metric">
    <div class="metric__label">{{ label }}</div>
    <div class="metric__value">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string }>()
</script>
