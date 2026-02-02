import type { ComputedRef, InjectionKey } from "vue"
import { inject, provide } from "vue"

export type ChemicalContext = {
  chemical: ComputedRef<any | null>
  chemicalProperties: ComputedRef<any | null>
  displayCas: ComputedRef<string>
  casParam: ComputedRef<string>
}

const chemicalContextKey: InjectionKey<ChemicalContext> = Symbol("chemicalContext")

export const provideChemicalContext = (context: ChemicalContext) => {
  provide(chemicalContextKey, context)
}

export const useChemicalContext = () => {
  const context = inject(chemicalContextKey)
  if (!context) {
    throw new Error("Chemical context is missing")
  }
  return context
}
