<template>
  <AppCard :title="title">
    <ChemicalStructureImage
      :smiles="chemicalProperties?.smiles || ''"
      :name="chemicalProperties?.name || ''"
    />
    <AppKeyValueList :items="items" />
    <p v-if="casMismatch" :class="$style.warning">
      Query CAS does not match mock data: {{ casParam }}
    </p>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import AppCard from "../base/AppCard.vue"
import AppKeyValueList from "../base/AppKeyValueList.vue"
import ChemicalStructureImage from "../base/ChemicalStructureImage.vue"
import { useChemicalContext } from "../../composables/chemicalContext"
import { useFormatters } from "../../composables/useFormatters"
import { NA } from "../../composables/constants"

const { chemicalProperties, displayCas, casMismatch, casParam } = useChemicalContext()
const { formatNumber } = useFormatters()

const title = computed(() => chemicalProperties.value?.name || "Unknown Chemical")
const molecularFormulaHtml = computed(
  () => chemicalProperties.value?.molecularFormulaHtml || ""
)

const items = computed(() => {
  const formulaFallback = chemicalProperties.value?.molecularFormula || NA

  return [
    {
      label: "Systematic Name",
      value: chemicalProperties.value?.systematicName || NA,
    },
    {
      label: "CAS RN",
      value: displayCas.value || NA,
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
      value: chemicalProperties.value?.smiles || NA,
      monospace: true,
    },
  ]
})
</script>

<style module lang="scss">
.warning {
  margin-top: 12px;
  font-size: 12px;
  color: #b45309;
}
</style>
