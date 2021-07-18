import {cache, CACHE_ENABLED, CSSObject, responsive, Theme} from '@body-ui/core'
import type {Property} from 'csstype'

export type Flex = Property.Flex

export function flex(props: {$flex: Flex[]}, theme: Theme): CSSObject | null {
  const {$flex} = props
  const {media} = theme

  if ($flex.length === 0) return null

  const key = 'flex_' + JSON.stringify([$flex, media])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, $flex, (flex) => ({flex}))
  }

  return cache[key]
}
