import { computed, type ComputedRef, type Ref } from "vue"
import { provideChemicalContext } from "../../composables/chemicalContext"
import { FORMAT_DECIMALS_DEFAULT, NA } from "../../composables/constants"
import type { ApiResponse, ChemicalData } from "../../composables/chemicalTypes"
import { useFormatters } from "../../composables/useFormatters"
import type { ExperimentalValue } from "../../composables/useFormatters"

type BuilderInput = {
  data: Ref<ApiResponse<ChemicalData> | null | undefined>
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
  const chemical = computed<ChemicalData | null>(() =>
    isAllowedCas.value ? data.value?.data ?? null : null
  )
  const chemicalProperties = computed(
    () => chemical.value?.chemicalProperties ?? null
  )

  const { formatNumber, formatWithUnit, formatReference } = useFormatters()

  const displayCas = computed(() => casParam.value ?? chemicalProperties.value?.cas ?? "")
  const headerSubtitle = computed(() => `CAS: ${displayCas.value ?? NA}`)

  const buildSection = (key: keyof ChemicalData) => {
    const section = computed(() => {
      const value = chemical.value?.[key]
      return value ?? null
    })

    const selected = computed(() => (section.value as any)?.selectedValue ?? null)
    const estimated = computed(() => (section.value as any)?.estimatedValue ?? null)
    const experimental = computed<ExperimentalValue | null>(() => {
      const values = (section.value as any)?.experimentalValues ?? []
      const [first] = values;
      return first ? (first as ExperimentalValue) : null
    })

    return { selected, estimated, experimental }
  }

  const logKowSection = buildSection("logKow")
  const meltingSection = buildSection("meltingPoint")
  const boilingSection = buildSection("boilingPoint")

  provideChemicalContext({
    chemical,
    chemicalProperties,
    displayCas,
    casParam
  })

  const logKowSelected = logKowSection.selected
  const logKowEstimated = logKowSection.estimated
  const logKowExperimental = logKowSection.experimental

  const meltingSelected = meltingSection.selected
  const meltingEstimated = meltingSection.estimated
  const meltingExperimental = meltingSection.experimental

  const boilingSelected = boilingSection.selected
  const boilingEstimated = boilingSection.estimated
  const boilingExperimental = boilingSection.experimental

  const tableCards = computed(() => [
    {
      id: "log-kow",
      title: "Log Kow",
      subtitle: "Octanol-Water Partition Coefficient",
      tabs: ["Summary", "Model Descriptors", "Model Output", "AIM Analogs"],
      metrics: [
        {
          label: "Experimental Log Kow",
          value: formatNumber(
            logKowSelected.value?.value,
            FORMAT_DECIMALS_DEFAULT
          ),
        },
      ],
      headers: ["", "Estimated", "Experimental", "References"],
      rows: [
        [
          "Log Kow",
          formatNumber(logKowEstimated.value?.value, FORMAT_DECIMALS_DEFAULT),
          formatNumber(
            logKowExperimental.value?.value,
            FORMAT_DECIMALS_DEFAULT
          ),
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
            FORMAT_DECIMALS_DEFAULT
          ),
        },
        {
          label: "Estimated Boiling Point",
          value: formatWithUnit(
            boilingSelected.value?.value,
            boilingSelected.value?.units,
            FORMAT_DECIMALS_DEFAULT
          ),
        },
      ],
      headers: ["", "Estimated", "Experimental", "References"],
      rows: [
        [
          "Melting Point (°C)",
          formatWithUnit(
            meltingEstimated.value?.value,
            meltingEstimated.value?.units,
            FORMAT_DECIMALS_DEFAULT
          ),
          formatWithUnit(
            meltingExperimental.value?.value,
            meltingExperimental.value?.units,
            FORMAT_DECIMALS_DEFAULT
          ),
          formatReference(meltingExperimental.value),
        ],
        [
          "Boiling Point (°C)",
          formatWithUnit(
            boilingEstimated.value?.value,
            boilingEstimated.value?.units,
            FORMAT_DECIMALS_DEFAULT
          ),
          formatWithUnit(
            boilingExperimental.value?.value,
            boilingExperimental.value?.units,
            FORMAT_DECIMALS_DEFAULT
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
