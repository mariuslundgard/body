import {cache, CACHE_ENABLED, responsive} from '@body-ui/core'
import type {CSSObject, Theme} from '@body-ui/core'

export function grid_col(props: {$column: number[]}, theme: Theme): CSSObject | null {
  const {$column} = props
  const {media} = theme

  if ($column.length === 0) {
    return null
  }

  const key = 'grid_col_' + JSON.stringify({$column})

  if (!CACHE_ENABLED || !cache[key]) {
    return responsive(media, $column, (column) => ({
      gridColumn: `span ${column} / span ${column}`,
    }))
  }

  return cache[key]
}
