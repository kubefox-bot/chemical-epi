export type ExperimentalValue = {
  author?: string
  year?: number
  value?: number
  units?: string | null
}

import { NA } from "./constants"

export const useFormatters = () => {
  const formatNumber = (value: unknown, digits = 2) => {
    if (value === null || value === undefined || value === "") return NA
    const num = Number(value)
    if (Number.isNaN(num)) return String(value)
    return num.toFixed(digits)
  }

  const unitLabel = (unit?: string | null) => {
    if (!unit) return ""
    if (unit.toLowerCase() === "celsius") return "C"
    return unit
  }

  const formatWithUnit = (value: unknown, unit?: string | null, digits = 2) => {
    const formatted = formatNumber(value, digits)
    if (formatted === NA) return formatted
    const label = unitLabel(unit)
    return label ? `${formatted} ${label}` : formatted
  }

  const formatReference = (entry?: ExperimentalValue | null) => {
    if (!entry) return NA
    const author = entry.author || ""
    const year = entry.year ? String(entry.year) : ""
    const suffix = author && year ? ` (${year})` : year
    return `${author}${suffix}` || NA
  }

  return {
    formatNumber,
    formatWithUnit,
    formatReference,
  }
}
