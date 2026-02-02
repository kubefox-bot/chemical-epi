<template>
  <dl :class="$style.definitionList">
    <div v-for="item in items" :key="item.label" :class="$style.definitionRow">
      <dt>{{ item.label }}</dt>
      <dd v-if="item.html" v-html="item.html" />
      <dd v-else :class="{ [$style.definitionMono]: item.monospace }">
        {{ item.value }}
      </dd>
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

<style module lang="scss">
.definitionList {
  display: grid;
  gap: 12px;
  margin: 0;
}

.definitionRow {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 10px;
}

.definitionMono {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 12px;
  word-break: break-all;
}

@media (max-width: 900px) {
  .definitionRow {
    grid-template-columns: 1fr;
  }
}
</style>
