import {CSSObject} from '.'

/**
 * @internal
 */
export const CACHE_ENABLED = true

/**
 * @internal
 */
export const cache: any = {}

/**
 * @internal
 */
export function cachedStyle(name: string, fn: () => any, deps: unknown[]): CSSObject {
  const key = JSON.stringify([name, ...deps])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = fn()
  }

  cache[key].$debugName = name

  return cache[key]
}
