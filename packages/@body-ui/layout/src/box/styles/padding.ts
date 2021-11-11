import {cachedStyle, CSSObject, rem, responsive, Theme} from '@body-ui/core'

export interface PaddingProps {
  padding?: number | number[]
  paddingX?: number | number[]
  paddingY?: number | number[]
  paddingTop?: number | number[]
  paddingRight?: number | number[]
  paddingBottom?: number | number[]
  paddingLeft?: number | number[]
}

export interface PaddingStyleProps {
  $border?: boolean
  $padding: number[]
  $paddingX: number[]
  $paddingY: number[]
  $paddingTop: number[]
  $paddingRight: number[]
  $paddingBottom: number[]
  $paddingLeft: number[]
}

export function padding(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $padding} = props
  const {media, space} = theme

  if ($padding.length === 0) return null

  return cachedStyle(
    'p',
    () =>
      responsive(media, $padding, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {padding: value}
      }),
    [$border, media, $padding]
  )
}

export function paddingX(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $paddingX} = props
  const {media, space} = theme

  if ($paddingX.length === 0) return null

  return cachedStyle(
    'px',
    () =>
      responsive(media, $paddingX, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {paddingLeft: value, paddingRight: value}
      }),
    [$border, media, $paddingX]
  )
}

export function paddingY(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $paddingY} = props
  const {media, space} = theme

  if ($paddingY.length === 0) return null

  return cachedStyle(
    'py',
    () =>
      responsive(media, $paddingY, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {paddingTop: value, paddingBottom: value}
      }),
    [$border, media, $paddingY]
  )
}

export function paddingTop(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $paddingTop} = props
  const {media, space} = theme

  if ($paddingTop.length === 0) return null

  return cachedStyle(
    'pt',
    () =>
      responsive(media, $paddingTop, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {paddingTop: value}
      }),
    [$border, media, $paddingTop]
  )
}

export function paddingRight(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $paddingRight} = props
  const {media, space} = theme

  if ($paddingRight.length === 0) return null

  return cachedStyle(
    'pr',
    () =>
      responsive(media, $paddingRight, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {paddingRight: value}
      }),
    [$border, media, $paddingRight]
  )
}

export function paddingBottom(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $paddingBottom} = props
  const {media, space} = theme

  if ($paddingBottom.length === 0) return null

  return cachedStyle(
    'pb',
    () =>
      responsive(media, $paddingBottom, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {paddingBottom: value}
      }),
    [$border, media, $paddingBottom]
  )
}

export function paddingLeft(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $paddingLeft} = props
  const {media, space} = theme

  if ($paddingLeft.length === 0) return null

  return cachedStyle(
    'pl',
    () =>
      responsive(media, $paddingLeft, (spaceIndex) => {
        const size = space[spaceIndex || 0]
        const value = $border ? `calc(${rem(size)} - 1px)` : rem(size)

        return {paddingLeft: value}
      }),
    [$border, media, $paddingLeft]
  )
}
