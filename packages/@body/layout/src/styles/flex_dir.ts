import {cache, CACHE_ENABLED, responsive, Theme} from '@body/core'
import type {CSSObject} from '@body/core'
import type {Property} from 'csstype'

export type FlexDirection = Property.FlexDirection

export function flex_dir(props: {$direction: FlexDirection[]}, theme: Theme): CSSObject | null {
  const {$direction} = props
  const {media} = theme

  if ($direction.length === 0) return null

  const key = 'flex_dir_' + JSON.stringify([$direction, media])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, $direction, (direction) => ({
      flexDirection: direction,
    }))
  }

  return cache[key]
}
