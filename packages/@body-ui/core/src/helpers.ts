import {CSSObject} from './styled'

export function getResponsiveValue<T>(value?: T | T[]): T[] {
  if (value === undefined) return []
  if (Array.isArray(value)) return value

  return [value]
}

export function responsive<T>(
  media: number[],
  values: T[],
  fn: (value: T, mediaIndex: number) => CSSObject | null
): CSSObject {
  const styles: CSSObject = {}

  values.forEach((value, mediaIndex) => {
    const style = fn(value, mediaIndex)

    if (!style) return

    if (mediaIndex === 0) {
      Object.assign(styles, style)
    } else {
      const $nest = styles.$nest || {}

      $nest[`@media screen and (min-width: ${media[mediaIndex - 1]}px)`] = style

      Object.assign(styles, {$nest})
    }
  })

  return styles
}

export function rem(value: number): string | undefined {
  if (value === 0) return '0'
  if (!value) return undefined

  return `${value / 16}rem`
}
