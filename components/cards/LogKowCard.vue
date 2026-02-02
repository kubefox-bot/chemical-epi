<template>
  <AppCard title="Log Kow" subtitle="Octanol-Water Partition Coefficient">
    <AppTabs :items="tabs" :active-index="0" />
    <div class="split">
      <div class="metric-stack">
        <AppMetric
          label="Experimental Log Kow"
          :value="formatNumber(logKowSelected?.value, 2)"
        />
      </div>
      <AppTable :headers="headers" :rows="rows" />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import AppCard from "../base/AppCard.vue"
import AppMetric from "../base/AppMetric.vue"
import AppTable from "../base/AppTable.vue"
import AppTabs from "../base/AppTabs.vue"
import { useChemicalContext } from "../../composables/chemicalContext"
import { useFormatters } from "../../composables/useFormatters"
import type { ExperimentalValue } from "../../composables/useFormatters"

const { chemical } = useChemicalContext()
const { formatNumber, formatReference } = useFormatters()

const tabs = ["Summary", "Model Descriptors", "Model Output", "AIM Analogs"]
const headers = ["Estimated Value", "Experimental Values", "References"]

const logKowSelected = computed(() => chemical.value?.logKow?.selectedValue || null)
const logKowEstimated = computed(() => chemical.value?.logKow?.estimatedValue || null)
const logKowExperimental = computed<ExperimentalValue | null>(() => {
  const values = chemical.value?.logKow?.experimentalValues || []
  return values.length ? values[0] : null
})

const rows = computed(() => [
  [
    formatNumber(logKowEstimated.value?.value, 2),
    formatNumber(logKowExperimental.value?.value, 2),
    formatReference(logKowExperimental.value),
  ],
])
</script>
