import {cache, CACHE_ENABLED, CSSObject, rem, responsive, Theme} from '@body-ui/core'
import {Property} from 'csstype'

export type Gap = Property.Gap | number

// @todo: `gapX`
// @todo: `gapY`
export function gap(props: {$gap: Gap[]}, theme: Theme): CSSObject | null {
  const {$gap} = props
  const {media, space} = theme

  if ($gap.length === 0) return null

  const key = 'gap_' + JSON.stringify([$gap, media, space])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, $gap, (gap) => ({
      gap: typeof gap === 'number' ? rem(space[gap]) : gap,
    }))
  }

  return cache[key]
}
