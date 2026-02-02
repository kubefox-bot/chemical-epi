<template>
  <div :class="$style.page">
    <header v-if="$slots.header" :class="$style.pageHeader">
      <slot name="header" />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
// Layout container only.
</script>

<style module lang="scss">
.page {
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 20px 40px;
  font-family: "Segoe UI", Tahoma, sans-serif;
  color: #1f2933;
}

.pageHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
