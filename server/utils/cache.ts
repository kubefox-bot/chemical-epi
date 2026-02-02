type CacheEntry<T> = {
  value: T
  expiresAt: number
}

const cache = new Map<string, CacheEntry<unknown>>()
const DEFAULT_TTL_MS = 10 * 60 * 1000

export const withCache = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlMs = DEFAULT_TTL_MS
): Promise<{ value: T; cached: boolean }> => {
  const now = Date.now()
  const existing = cache.get(key)

  if (existing && existing.expiresAt > now) {
    return { value: existing.value as T, cached: true }
  }

  const value = await fetcher()
  cache.set(key, { value, expiresAt: now + ttlMs })

  return { value, cached: false }
}
