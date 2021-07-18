import {cache, CACHE_ENABLED, CSSObject, responsive, Theme} from '@body-ui/core'

export type Height = '100%'

export function height(props: {$height: Height[]}, theme: Theme): CSSObject | null {
  const {$height} = props

  if ($height.length === 0) return null

  const key = 'height_' + JSON.stringify({m: theme.media, h: $height})

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(theme.media, $height, (height) => ({height}))
  }

  return cache[key]
}
