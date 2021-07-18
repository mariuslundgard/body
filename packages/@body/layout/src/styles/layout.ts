import {cache, CACHE_ENABLED, CSSObject, responsive, Theme} from '@body/core'

export type Layout = 'block' | 'flex' | 'grid' | 'hidden'

export interface LayoutProps {
  layout?: Layout | Layout[]
}

export interface LayoutStyleProps {
  $layout: Layout[]
}

export function layout(props: LayoutStyleProps, theme: Theme): CSSObject | null {
  const {$layout} = props
  const {media} = theme

  if ($layout.length === 0) return null

  const key = 'layout_' + JSON.stringify([media, $layout])

  if (!CACHE_ENABLED || !cache[key]) {
    let l: Layout | undefined

    cache[key] = responsive(media, $layout, (_layout) => {
      l = _layout

      if (l === 'hidden') {
        return {display: 'none'}
      }

      if (l === 'grid') {
        return {display: 'grid'}
      }

      if (l === 'flex') {
        return {
          display: 'flex',
        }
      }

      return {display: 'block'}
    })
  }

  return cache[key]
}
