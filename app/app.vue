<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <header class="page__header">
      <div>
        <h1 class="page__title">Results</h1>
        <p class="page__subtitle">CAS: {{ displayCas || "N/A" }}</p>
      </div>
      <span class="page__pill">Mock data</span>
    </header>

    <div v-if="pending" class="state">Loading data...</div>
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
const route = useRoute()
const casParam = computed(() => {
  const value = route.query.cas
  if (Array.isArray(value)) return value[0] || ""
  return value ? String(value) : ""
})

const { data, pending, error } = await useFetch("/api/chemical", {
  query: { cas: casParam },
})

const chemical = computed(() => data.value?.data || null)
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

<style>
.page {
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 20px 40px;
  font-family: "Segoe UI", Tahoma, sans-serif;
  color: #1f2933;
}

.page__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.page__title {
  margin: 0;
  font-size: 26px;
}

.page__subtitle {
  margin: 6px 0 0;
  color: #52616b;
}

.page__pill {
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

.card {
  border: 1px solid #d9e2ec;
  border-radius: 12px;
  padding: 18px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}

.card__header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 16px;
}

.card__title {
  margin: 0;
  font-size: 18px;
}

.card__subtitle {
  color: #52616b;
  font-size: 13px;
}

.structure {
  border: 1px dashed #cbd2d9;
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  color: #7b8794;
  margin-bottom: 16px;
}

.kv {
  display: grid;
  gap: 12px;
  margin: 0;
}

.kv__row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 10px;
}

.kv__mono {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 12px;
  word-break: break-all;
}

.tabs {
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #d9e2ec;
  padding-bottom: 8px;
  margin-bottom: 16px;
  color: #52616b;
  font-size: 13px;
}

.tabs__item--active {
  color: #1f2933;
  font-weight: 600;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 6px;
}

.split {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
}

.metric__label {
  font-size: 12px;
  color: #52616b;
  margin-bottom: 6px;
}

.metric__value {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.metric + .metric {
  margin-top: 16px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.table th,
.table td {
  text-align: left;
  padding: 6px 8px;
  border-bottom: 1px solid #e4e7eb;
}

.state {
  padding: 20px;
  border: 1px solid #d9e2ec;
  border-radius: 10px;
  background: #f8fafc;
}

.state--error {
  border-color: #fecaca;
  background: #fef2f2;
  color: #991b1b;
}

.warning {
  margin-top: 12px;
  font-size: 12px;
  color: #b45309;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .split {
    grid-template-columns: 1fr;
  }

  .kv__row {
    grid-template-columns: 1fr;
  }
}
</style>
