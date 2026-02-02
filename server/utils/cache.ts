type CacheEntry<T> = {
  value: T
  expiresAt: number
}

const cache = new Map<string, CacheEntry<unknown>>()


export const withCache = async <T>(
  key: string,
  fetcher: () => Promise<T>,
): Promise<{ value: T; cached: boolean }> => {
  const now = Date.now()
  const existing = cache.get(key)

const config = useRuntimeConfig()

  if (existing && existing.expiresAt > now) {
    return { value: existing.value as T, cached: true }
  }

  const value = await fetcher()
  cache.set(key, { value, expiresAt: now + Number(config.cacheTtl)})

  return { value, cached: false }
}
