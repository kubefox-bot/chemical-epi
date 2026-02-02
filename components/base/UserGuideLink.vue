<template>
  <a :href="href" :class="$style.link" target="_blank" rel="noreferrer">
    <span>{{ label }}</span>
    <span :class="$style.icon">i</span>
  </a>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    label?: string
  }>(),
  {
    href: "#",
    label: "User Guide",
  }
)
</script>

<style module lang="scss">
.link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #3a4b5c;
  text-decoration: none;
}

.icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2f80ed;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}
</style>
