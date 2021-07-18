import {cache, CACHE_ENABLED, CSSObject, responsive, Theme} from '@body/core'

export function radius(props: {$radius: number[]}, theme: Theme): CSSObject | null {
  const {$radius} = props
  const {media, radius} = theme

  if ($radius.length === 0) return null

  const key = 'radius_' + JSON.stringify({$radius})

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, $radius, (radiusIndex) => ({
      borderRadius: radius[radiusIndex],
    }))
  }

  return cache[key]
}
