<template>
  <div :class="$style.page">
    <header :class="$style.pageHeader">
      <PageHeader title="Results" :subtitle="headerSubtitle" />
      <span :class="$style.pagePill">Mock data</span>
    </header>

    <AppState :allowed="isAllowedCas" :pending="pending" :error="error">
      <div :class="$style.grid">
        <ChemicalSummaryCard />
        <div :class="$style.stack">
          <LogKowCard />
          <MpbpCard />
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
import LogKowCard from "../../components/cards/LogKowCard.vue"
import MpbpCard from "../../components/cards/MpbpCard.vue"
import { provideChemicalContext } from "../../composables/chemicalContext"
import { useCasGuard } from "../../composables/useCasGuard"
import { NA } from "../../composables/constants"

const { casParam, isAllowedCas } = useCasGuard("002921-88-2")

const { data, pending, error } = await useFetch("/api/chemical", {
  query: { cas: casParam },
})

const chemical = computed(() => (isAllowedCas.value ? data.value?.data : null))
const chemicalProperties = computed(() => chemical.value?.chemicalProperties ?? null)

const displayCas = computed(() => casParam.value ?? chemicalProperties.value?.cas ?? "")
const headerSubtitle = computed(() => `CAS: ${displayCas.value ?? NA}`)
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

.pagePill {
  background: #eef2f7;
  color: #3a4b5c;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
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
