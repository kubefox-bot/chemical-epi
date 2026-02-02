<template>
  <div>
    <h1 :class="$style.title">{{ title }}</h1>
    <p :class="$style.subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>()
</script>

<style module lang="scss">
.title {
  margin: 0;
  font-size: 26px;
}

.subtitle {
  margin: 6px 0 0;
  color: #52616b;
}
</style>
