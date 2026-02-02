<template>
  <AppCard :title="title">
    <div class="structure">Structure image not implemented</div>
    <AppKeyValueList :items="items" />
    <p v-if="casMismatch" class="warning">
      Query CAS does not match mock data: {{ casParam }}
    </p>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import AppCard from "../base/AppCard.vue"
import AppKeyValueList from "../base/AppKeyValueList.vue"
import { useChemicalContext } from "../../composables/chemicalContext"
import { useFormatters } from "../../composables/useFormatters"

const { chemicalProperties, displayCas, casMismatch, casParam } = useChemicalContext()
const { formatNumber } = useFormatters()

const title = computed(() => chemicalProperties.value?.name || "Unknown Chemical")
const molecularFormulaHtml = computed(
  () => chemicalProperties.value?.molecularFormulaHtml || ""
)

const items = computed(() => {
  const formulaFallback = chemicalProperties.value?.molecularFormula || "N/A"

  return [
    {
      label: "Systematic Name",
      value: chemicalProperties.value?.systematicName || "N/A",
    },
    {
      label: "CAS RN",
      value: displayCas.value || "N/A",
    },
    molecularFormulaHtml.value
      ? {
          label: "Molecular Formula",
          html: molecularFormulaHtml.value,
        }
      : {
          label: "Molecular Formula",
          value: formulaFallback,
        },
    {
      label: "Molecular Mass",
      value: formatNumber(chemicalProperties.value?.molecularWeight, 3),
    },
    {
      label: "SMILES",
      value: chemicalProperties.value?.smiles || "N/A",
      monospace: true,
    },
  ]
})
</script>
