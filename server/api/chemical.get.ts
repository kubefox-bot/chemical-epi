import axios from "axios"
import { defineEventHandler, getQuery } from "h3"
import { withCache } from "../utils/cache"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const cas = typeof query.cas === "string" ? query.cas : ""


  if (!cas) {
    return { cas, data: null, cached: false }
  }

  const config = useRuntimeConfig()

  const cacheKey = `episuite:${cas}`
  const { value: data, cached } = await withCache(cacheKey, async () => {
    const response = await axios.get(
      `${config.public.episuiteBaseUrl}/api/submit?cas=${encodeURIComponent(cas)}`,
      { timeout: 15000 }
    )
    return response.data
  })

  return {
    cas,
    data,
    cached,
  }
})
