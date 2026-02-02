import { computed } from "vue"
import { useRoute } from "vue-router"

export const useCasGuard = (allowedCas: string) => {
  const route = useRoute()

  const casParam = computed(() => {
    const value = route?.params?.cas
    if (Array.isArray(value)) return value[0] || ""
    return value ? String(value) : ""
  })

  const isAllowedCas = computed(() => casParam.value === allowedCas)

  return {
    casParam,
    isAllowedCas,
    allowedCas,
  }
}
