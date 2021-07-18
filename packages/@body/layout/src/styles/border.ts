import {cache, CACHE_ENABLED, CSSObject} from '@body/core'

export function border(props: {
  $border?: boolean
  $borderTop?: boolean
  $borderRight?: boolean
  $borderBottom?: boolean
  $borderLeft?: boolean
}): CSSObject | null {
  const {$border, $borderTop, $borderRight, $borderBottom, $borderLeft} = props

  if (!$border && !$borderTop && !$borderRight && !$borderBottom && !$borderLeft) {
    return null
  }

  const key =
    'border_' + JSON.stringify([$border, $borderTop, $borderRight, $borderBottom, $borderLeft])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = {
      border: $border ? '1px solid var(--body-border, "#ccc")' : undefined,
      borderTop: $borderTop ? '1px solid var(--body-border, "#ccc")' : undefined,
      borderRight: $borderRight ? '1px solid var(--body-border, "#ccc")' : undefined,
      borderBottom: $borderBottom ? '1px solid var(--body-border, "#ccc")' : undefined,
      borderLeft: $borderLeft ? '1px solid var(--body-border, "#ccc")' : undefined,
    }
  }

  return cache[key]
}
