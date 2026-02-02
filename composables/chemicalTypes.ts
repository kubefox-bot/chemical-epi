export type ExperimentalValue = {
  author?: string
  year?: number
  order?: number
  value?: number
  units?: string | null
  valueType?: string
}

export type ChemicalValue = {
  value?: number
  units?: string | null
  valueType?: string
}

export type ChemicalProperties = {
  name?: string
  systematicName?: string | null
  cas?: string
  smiles?: string
  molecularWeight?: number
  molecularFormula?: string
  molecularFormulaHtml?: string
}

export type ChemicalSection = {
  selectedValue?: ChemicalValue | null
  estimatedValue?: ChemicalValue | null
  experimentalValues?: ExperimentalValue[]
}

export type ChemicalData = {
  chemicalProperties?: ChemicalProperties | null
  logKow?: ChemicalSection | null
  meltingPoint?: ChemicalSection | null
  boilingPoint?: ChemicalSection | null
  [key: string]: unknown
}

export type ApiResponse<T> = {
  cas?: string
  data?: T | null
  cached?: boolean
  cacheBypassed?: boolean
}
