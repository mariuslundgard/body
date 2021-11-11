import {cachedStyle, CSSObject, rem, responsive, Theme} from '@body-ui/core'

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
  const {$margin} = props
  const {media, space} = theme

  if ($margin.length === 0) return null

  return cachedStyle(
    'm',
    () =>
      responsive(media, $margin, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {margin: value}
      }),
    [media, $margin]
  )
}

export function marginX(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$marginX} = props
  const {media, space} = theme

  if ($marginX.length === 0) return null

  return cachedStyle(
    'mx',
    () =>
      responsive(media, $marginX, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {marginLeft: value, marginRight: value}
      }),
    [media, $marginX]
  )
}

export function marginY(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$marginY} = props
  const {media, space} = theme

  if ($marginY.length === 0) return null

  return cachedStyle(
    'my',
    () =>
      responsive(media, $marginY, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {marginTop: value, marginBottom: value}
      }),
    [media, $marginY]
  )
}

export function marginTop(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$marginTop} = props
  const {media, space} = theme

  if ($marginTop.length === 0) return null

  return cachedStyle(
    'mt',
    () =>
      responsive(media, $marginTop, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {marginTop: value}
      }),
    [media, $marginTop]
  )
}

export function marginRight(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$marginRight} = props
  const {media, space} = theme

  if ($marginRight.length === 0) return null

  return cachedStyle(
    'mr',
    () =>
      responsive(media, $marginRight, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {marginRight: value}
      }),
    [media, $marginRight]
  )
}

export function marginBottom(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$marginBottom} = props
  const {media, space} = theme

  if ($marginBottom.length === 0) return null

  return cachedStyle(
    'mb',
    () =>
      responsive(media, $marginBottom, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {marginBottom: value}
      }),
    [media, $marginBottom]
  )
}

export function marginLeft(props: MarginStyleProps, theme: Theme): CSSObject | null {
  const {$marginLeft} = props
  const {media, space} = theme

  if ($marginLeft.length === 0) return null

  return cachedStyle(
    'ml',
    () =>
      responsive(media, $marginLeft, (spaceIndex) => {
        const size = spaceIndex < 0 ? 0 - space[0 - spaceIndex] : space[spaceIndex]
        const value = rem(size)

        return {marginLeft: value}
      }),
    [media, $marginLeft]
  )
}
