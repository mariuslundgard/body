import {getResponsiveValue} from './helpers'

const cache: any = {}

export function useResponsiveValue<T>(value?: T | T[] | undefined): T[] {
  const key = JSON.stringify(value) || '_'

  if (!cache[key]) {
    cache[key] = getResponsiveValue(value)
  }

  return cache[key]
}
