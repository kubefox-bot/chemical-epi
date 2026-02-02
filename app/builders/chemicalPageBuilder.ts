import { computed, type ComputedRef, type Ref } from "vue"
import { NA } from "../../composables/constants"
import { provideChemicalContext } from "../../composables/chemicalContext"
import { useFormatters } from "../../composables/useFormatters"
import type { ExperimentalValue } from "../../composables/useFormatters"

type BuilderInput = {
  data: Ref<{ data: unknown } | null>
  isAllowedCas: ComputedRef<boolean>
  casParam: ComputedRef<string>
}

/**
 * Конструктор + селектор данных
 * @param param0 
 * @returns 
 */
export const useChemicalPageBuilder = ({
  data,
  isAllowedCas,
  casParam,
}: BuilderInput) => {
  const chemical = computed(() => (isAllowedCas.value ? data.value?.data : null))
  const chemicalProperties = computed(() => chemical.value?.chemicalProperties ?? null)

  const { formatNumber, formatWithUnit, formatReference } = useFormatters()

  const displayCas = computed(() => casParam.value ?? chemicalProperties.value?.cas ?? "")
  const headerSubtitle = computed(() => `CAS: ${displayCas.value ?? NA}`)


  provideChemicalContext({
    chemical,
    chemicalProperties,
    displayCas,
    casParam
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

  return {
    chemical,
    chemicalProperties,
    displayCas,
    headerSubtitle,
    tableCards,
  }
}
