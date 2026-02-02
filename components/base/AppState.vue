<template>
  <div v-if="!allowed" :class="$style.statusPanel">{{ noDataText }}</div>
  <div v-else-if="pending" :class="$style.statusPanel">{{ loadingText }}</div>
  <div v-else-if="error" :class="[$style.statusPanel, $style.statusPanelError]">
    {{ errorText }}
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    allowed: boolean
    pending: boolean
    error?: unknown
    noDataText?: string
    loadingText?: string
    errorText?: string
  }>(),
  {
    noDataText: "No Data",
    loadingText: "Loading data...",
    errorText: "Failed to load mock data.",
  }
)
</script>

<style module lang="scss">
.statusPanel {
  padding: 20px;
  border: 1px solid #d9e2ec;
  border-radius: 10px;
  background: #f8fafc;
}

.statusPanelError {
  border-color: #fecaca;
  background: #fef2f2;
  color: #991b1b;
}
</style>
