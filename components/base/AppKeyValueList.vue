<template>
  <dl class="kv">
    <div v-for="item in items" :key="item.label" class="kv__row">
      <dt>{{ item.label }}</dt>
      <dd v-if="item.html" v-html="item.html" />
      <dd v-else :class="{ 'kv__mono': item.monospace }">{{ item.value }}</dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
type Item = {
  label: string
  value?: string
  html?: string
  monospace?: boolean
}

defineProps<{ items: Item[] }>()
</script>
