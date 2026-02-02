<template>
  <div class="page">
    <header class="page__header">
      <div>
        <h1 class="page__title">Results</h1>
        <p class="page__subtitle">CAS: {{ displayCas || "N/A" }}</p>
      </div>
      <span class="page__pill">Mock data</span>
    </header>

    <div v-if="!isAllowedCas" class="state">No Data</div>
    <div v-else-if="pending" class="state">Loading data...</div>
    <div v-else-if="error" class="state state--error">
      Failed to load mock data.
    </div>
    <div v-else class="grid">
      <ChemicalSummaryCard />
      <div class="stack">
        <LogKowCard />
        <MpbpCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useFetch } from "nuxt/app"
import ChemicalSummaryCard from "../../components/cards/ChemicalSummaryCard.vue"
import LogKowCard from "../../components/cards/LogKowCard.vue"
import MpbpCard from "../../components/cards/MpbpCard.vue"
import { provideChemicalContext } from "../../composables/chemicalContext"

const route = useRoute()
const casParam = computed(() => {
  const value = route?.params?.cas
  if (Array.isArray(value)) return value[0] || ""
  return value ? String(value) : ""
})

const ALLOWED_CAS = "002921-88-2"
const isAllowedCas = computed(() => casParam.value === ALLOWED_CAS)

const { data, pending, error } = await useFetch("/api/chemical", {
  query: { cas: casParam },
  immediate: isAllowedCas,
})

const chemical = computed(() => (isAllowedCas.value ? data.value?.data : null))
const chemicalProperties = computed(() => chemical.value?.chemicalProperties || null)

const displayCas = computed(() => casParam.value || chemicalProperties.value?.cas || "")
const casMismatch = computed(() => {
  const dataCas = chemicalProperties.value?.cas
  return Boolean(casParam.value && dataCas && casParam.value !== dataCas)
})

provideChemicalContext({
  chemical,
  chemicalProperties,
  displayCas,
  casParam,
  casMismatch,
})
</script>
