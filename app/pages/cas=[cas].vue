<template>
  <PageLayout>
    <template #header>
      <PageHeader title="Results" :subtitle="headerSubtitle" />
    </template>
    <AppState :pending="pending" :error="error">
      <div :class="$style.grid">
        <ChemicalSummaryCard />
        <div :class="$style.stack">
          <StatTableCard v-for="card in tableCards" :key="card.id" v-bind="card" />
        </div>
      </div>
    </AppState>
  </PageLayout>
</template>

<script setup lang="ts">
import { useFetch } from "nuxt/app"
import AppState from "../../components/base/AppState.vue"
import PageHeader from "../../components/base/PageHeader.vue"
import ChemicalSummaryCard from "../../components/cards/ChemicalSummaryCard.vue"
import StatTableCard from "../../components/cards/StatTableCard.vue"
import PageLayout from "../../components/layouts/PageLayout.vue"
import type { ApiResponse, ChemicalData } from "../../composables/chemicalTypes"
import { useCasGuard } from "../../composables/useCasGuard"
import { useChemicalPageBuilder } from "../builders/chemicalPageBuilder"

const { casParam } = useCasGuard()

const { data, pending, error } = await useFetch<ApiResponse<ChemicalData>>(
  "/api/chemical",
  {
  query: { cas: casParam },
  }
)

const { headerSubtitle, tableCards } = useChemicalPageBuilder({
  data,
  casParam,
})
</script>

<style module lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.stack {
  display: grid;
  gap: 20px;
}

.pagePill {
  background: #eef2f7;
  color: #3a4b5c;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
