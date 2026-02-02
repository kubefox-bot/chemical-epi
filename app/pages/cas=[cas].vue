<template>
  <div :class="$style.page">
    <header :class="$style.pageHeader">
      <PageHeader title="Results" :subtitle="headerSubtitle" />
    </header>

    <AppState :allowed="isAllowedCas" :pending="pending" :error="error">
      <div :class="$style.grid">
        <ChemicalSummaryCard />
        <div :class="$style.stack">
          <StatTableCard v-for="card in tableCards" :key="card.id" v-bind="card" />
        </div>
      </div>
    </AppState>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useFetch } from "nuxt/app"
import AppState from "../../components/base/AppState.vue"
import PageHeader from "../../components/base/PageHeader.vue"
import ChemicalSummaryCard from "../../components/cards/ChemicalSummaryCard.vue"
import StatTableCard from "../../components/cards/StatTableCard.vue"
import { provideChemicalContext } from "../../composables/chemicalContext"
import { useCasGuard } from "../../composables/useCasGuard"
import { NA } from "../../composables/constants"
import { useFormatters } from "../../composables/useFormatters"
import type { ExperimentalValue } from "../../composables/useFormatters"

const { casParam, isAllowedCas } = useCasGuard("002921-88-2")

const { data, pending, error } = await useFetch("/api/chemical", {
  query: { cas: casParam },
})

const chemical = computed(() => (isAllowedCas.value ? data.value?.data : null))
const chemicalProperties = computed(() => chemical.value?.chemicalProperties ?? null)
const { formatNumber, formatWithUnit, formatReference } = useFormatters()

const displayCas = computed(() => casParam.value ?? chemicalProperties.value?.cas ?? "")
const headerSubtitle = computed(() => `CAS: ${displayCas.value ?? NA}`)
const casMismatch = computed(() => {
  const dataCas = chemicalProperties.value?.cas
  return Boolean(casParam.value && dataCas && casParam.value !== dataCas)
})

const logKowSelected = computed(() => chemical.value?.logKow?.selectedValue ?? null)
const logKowEstimated = computed(() => chemical.value?.logKow?.estimatedValue ?? null)
const logKowExperimental = computed<ExperimentalValue | null>(() => {
  const values = chemical.value?.logKow?.experimentalValues ?? []
  const first = values[0]
  return first ? (first as ExperimentalValue) : null
})

const meltingSelected = computed(() => chemical.value?.meltingPoint?.selectedValue ?? null)
const meltingEstimated = computed(() => chemical.value?.meltingPoint?.estimatedValue ?? null)
const meltingExperimental = computed<ExperimentalValue | null>(() => {
  const values = chemical.value?.meltingPoint?.experimentalValues ?? []
  const first = values[0]
  return first ? (first as ExperimentalValue) : null
})

const boilingSelected = computed(() => chemical.value?.boilingPoint?.selectedValue ?? null)
const boilingEstimated = computed(() => chemical.value?.boilingPoint?.estimatedValue ?? null)
const boilingExperimental = computed<ExperimentalValue | null>(() => {
  const values = chemical.value?.boilingPoint?.experimentalValues ?? []
  const first = values[0]
  return first ? (first as ExperimentalValue) : null
})

const tableCards = computed(() => [
  {
    id: "log-kow",
    title: "Log Kow",
    subtitle: "Octanol-Water Partition Coefficient",
    tabs: ["Summary", "Model Descriptors", "Model Output", "AIM Analogs"],
    metrics: [
      {
        label: "Experimental Log Kow",
        value: formatNumber(logKowSelected.value?.value, 2),
      },
    ],
    headers: ["", "Estimated", "Experimental", "References"],
    rows: [
      [
        "Log Kow",
        formatNumber(logKowEstimated.value?.value, 2),
        formatNumber(logKowExperimental.value?.value, 2),
        formatReference(logKowExperimental.value),
      ],
    ],
  },
  {
    id: "mpbp",
    title: "MPBP",
    subtitle: "Melting Point / Boiling Point",
    tabs: ["Summary", "Model Descriptors", "AIM Analogs"],
    metrics: [
      {
        label: "Experimental Melting Point",
        value: formatWithUnit(
          meltingSelected.value?.value,
          meltingSelected.value?.units,
          2
        ),
      },
      {
        label: "Estimated Boiling Point",
        value: formatWithUnit(
          boilingSelected.value?.value,
          boilingSelected.value?.units,
          2
        ),
      },
    ],
    headers: ["", "Estimated", "Experimental", "References"],
    rows: [
      [
        "Melting Point (°C)",
        formatWithUnit(meltingEstimated.value?.value, meltingEstimated.value?.units, 2),
        formatWithUnit(
          meltingExperimental.value?.value,
          meltingExperimental.value?.units,
          2
        ),
        formatReference(meltingExperimental.value),
      ],
      [
        "Boiling Point (°C)",
        formatWithUnit(boilingEstimated.value?.value, boilingEstimated.value?.units, 2),
        formatWithUnit(
          boilingExperimental.value?.value,
          boilingExperimental.value?.units,
          2
        ),
        formatReference(boilingExperimental.value),
      ],
    ],
  },
])



provideChemicalContext({
  chemical,
  chemicalProperties,
  displayCas,
  casParam,
  casMismatch,
})
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


.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.stack {
  display: grid;
  gap: 20px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
