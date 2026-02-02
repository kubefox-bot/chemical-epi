type CacheEntry<T> = {
  value: T
  expiresAt: number
}

const cache = new Map<string, CacheEntry<unknown>>()
const CACHE_TTL_MS = 10 * 60 * 1000 //10 Минут


export const withCache = async <T>(
  key: string,
  fetcher: () => Promise<T>
): Promise<{ value: T; cached: boolean }> => {
  const now = Date.now()
  const existing = cache.get(key)

  if (existing && existing.expiresAt > now) {
    return { value: existing.value as T, cached: true }
  }

  const value = await fetcher()
  cache.set(key, { value, expiresAt: now + CACHE_TTL_MS })

  return { value, cached: false }
}
