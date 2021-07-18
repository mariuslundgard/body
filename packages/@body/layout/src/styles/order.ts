import {cache, CACHE_ENABLED, CSSObject, responsive, Theme} from '@body/core'

export function order(props: {$order: number[]}, theme: Theme): CSSObject | null {
  const {$order} = props

  if ($order.length === 0) return null

  const key = 'order_' + JSON.stringify([theme.media, $order])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(theme.media, $order, (order) => ({order}))
  }

  return cache[key]
}
