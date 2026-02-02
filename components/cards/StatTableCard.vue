<template>
  <AppCard :title="title" :subtitle="subtitle">
    <template #headerRight>
      <UserGuideLink />
    </template>
    <AppTabs :items="tabs" :active-index="activeTab" />
    <div :class="$style.split">
      <div :class="$style.metricStack">
        <AppMetric
          v-for="metric in metrics"
          :key="metric.label"
          :label="metric.label"
          :value="metric.value"
        />
      </div>
      <AppTable :headers="headers" :rows="rows" />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from "../base/AppCard.vue"
import AppMetric from "../base/AppMetric.vue"
import AppTable from "../base/AppTable.vue"
import AppTabs from "../base/AppTabs.vue"
import UserGuideLink from "../base/UserGuideLink.vue"

type Metric = {
  label: string
  value: string
}

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    tabs?: string[]
    activeTab?: number
    metrics?: Metric[]
    headers: string[]
    rows: string[][]
  }>(),
  {
    subtitle: "",
    tabs: () => [],
    activeTab: 0,
    metrics: () => [],
  }
)
</script>

<style module lang="scss">
.split {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
}

.metricStack {
  display: flex;
  flex-direction: column;
}

@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
  }
}
</style>
