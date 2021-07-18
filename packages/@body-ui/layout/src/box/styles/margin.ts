import {cache, CACHE_ENABLED, CSSObject, rem, responsive, Theme} from '@body-ui/core'

export interface MarginProps {
  margin?: number | number[]
  marginX?: number | number[]
  marginY?: number | number[]
  marginTop?: number | number[]
  marginRight?: number | number[]
  marginBottom?: number | number[]
  marginLeft?: number | number[]
}

export interface MarginStyleProps {
  $margin: number[]
  $marginX: number[]
  $marginY: number[]
  $marginTop: number[]
  $marginRight: number[]
  $marginBottom: number[]
  $marginLeft: number[]
}

export function margin(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$margin, $marginX, $marginY, $marginTop, $marginRight, $marginBottom, $marginLeft} = props

  const key =
    'margin_' +
    JSON.stringify({
      $margin,
      $marginX,
      $marginY,
      $marginTop,
      $marginRight,
      $marginBottom,
      $marginLeft,
    })

  if (!CACHE_ENABLED || !cache[key]) {
    const {media, space} = theme

    const styles = [
      marginStyle('margin', $margin, media, space),
      marginStyle('marginX', $marginX, media, space),
      marginStyle('marginY', $marginY, media, space),
      marginStyle('marginTop', $marginTop, media, space),
      marginStyle('marginRight', $marginRight, media, space),
      marginStyle('marginBottom', $marginBottom, media, space),
      marginStyle('marginLeft', $marginLeft, media, space),
    ].filter(Boolean) as CSSObject[]

    cache[key] =
      styles.length === 0
        ? {margin: 0}
        : styles.reduce<CSSObject>((acc, x) => {
            Object.assign(acc, x)

            return acc
          }, {})
  }

  return cache[key]
}

function marginStyle(
  key: string,
  spaceIndexes: number[],
  media: number[],
  space: number[]
): CSSObject | null {
  if (spaceIndexes.length === 0) return null

  return responsive(media, spaceIndexes, (spaceIndex) => {
    if (spaceIndex === null || spaceIndex === undefined) return {}

    const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]

    if (key === 'marginX') {
      return {marginLeft: rem(size ?? 0), marginRight: rem(size ?? 0)}
    }

    if (key === 'marginY') {
      return {marginTop: rem(size ?? 0), marginBottom: rem(size ?? 0)}
    }

    return {[key]: rem(size ?? 0)}
  })
}
