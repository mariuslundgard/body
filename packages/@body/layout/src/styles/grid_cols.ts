import {cache, CACHE_ENABLED, CSSObject, responsive, Theme} from '@body/core'

export function grid_cols(props: {$columns: number[]}, theme: Theme): CSSObject | null {
  const {$columns} = props

  if ($columns.length === 0) return null

  const key = 'grid_cols_' + JSON.stringify([theme.media, $columns])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(theme.media, $columns, (columns) => ({
      gridTemplateColumns: columns && `repeat(${columns},minmax(0,1fr));`,
    }))
  }

  return cache[key]
}
