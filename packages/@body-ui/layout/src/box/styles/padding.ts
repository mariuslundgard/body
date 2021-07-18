import {cache, CACHE_ENABLED, CSSObject, rem, responsive, Theme} from '@body-ui/core'

export interface PaddingProps {
  padding?: number | number[]
}

export interface PaddingStyleProps {
  $border?: boolean
  $padding: number[]
}

export function padding(props: PaddingStyleProps, theme: Theme): CSSObject | null {
  const {$border, $padding} = props

  if ($padding.length === 0) return null

  const {media, space} = theme

  const key = 'padding_' + JSON.stringify({b: props.$border, m: media, p: props.$padding})

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, $padding, (sizeIndex) => ({
      padding: $border ? `calc(${rem(space[sizeIndex || 0])} - 1px)` : rem(space[sizeIndex || 0]),
    }))
  }

  return cache[key]
}
