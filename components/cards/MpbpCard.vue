<template>
  <AppCard title="MPBP" subtitle="Melting Point and Boiling Point">
    <AppTabs :items="tabs" :active-index="0" />
    <div :class="$style.split">
      <div :class="$style.metricStack">
        <AppMetric
          label="Experimental Melting Point"
          :value="formatWithUnit(meltingSelected?.value, meltingSelected?.units, 2)"
        />
        <AppMetric
          label="Estimated Boiling Point"
          :value="formatWithUnit(boilingSelected?.value, boilingSelected?.units, 2)"
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
const { formatWithUnit, formatReference } = useFormatters()

const tabs = ["Summary", "Model Descriptors", "AIM Analogs"]
const headers = ["Estimated Value", "Experimental Values", "References"]

const meltingSelected = computed(() => chemical.value?.meltingPoint?.selectedValue || null)
const meltingEstimated = computed(() => chemical.value?.meltingPoint?.estimatedValue || null)
const meltingExperimental = computed<ExperimentalValue | null>(() => {
  const values = chemical.value?.meltingPoint?.experimentalValues || []
  return values.length ? values[0] : null
})

const boilingSelected = computed(() => chemical.value?.boilingPoint?.selectedValue || null)
const boilingEstimated = computed(() => chemical.value?.boilingPoint?.estimatedValue || null)
const boilingExperimental = computed<ExperimentalValue | null>(() => {
  const values = chemical.value?.boilingPoint?.experimentalValues || []
  return values.length ? values[0] : null
})

const rows = computed(() => [
  [
    formatWithUnit(meltingEstimated.value?.value, meltingEstimated.value?.units, 2),
    formatWithUnit(
      meltingExperimental.value?.value,
      meltingExperimental.value?.units,
      2
    ),
    formatReference(meltingExperimental.value),
  ],
  [
    formatWithUnit(boilingEstimated.value?.value, boilingEstimated.value?.units, 2),
    formatWithUnit(
      boilingExperimental.value?.value,
      boilingExperimental.value?.units,
      2
    ),
    formatReference(boilingExperimental.value),
  ],
])
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
