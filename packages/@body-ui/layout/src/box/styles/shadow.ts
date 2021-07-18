import {cache, CACHE_ENABLED, rem, responsive} from '@body-ui/core'
import type {CSSObject, Theme, ThemeBoxShadow, ThemeShadow} from '@body-ui/core'

export function shadow(props: {$shadow: number[]}, theme: Theme): CSSObject | null {
  const {media, shadow} = theme
  const key = 'shadow_' + JSON.stringify({m: media, s: props.$shadow})

  if (props.$shadow.length === 0) return null

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, props.$shadow, (shadowIndex) => shadowStyle(shadow[shadowIndex]))
  }

  return cache[key]
}

function toBoxShadow(shadow: ThemeBoxShadow, color: string) {
  return `${shadow.map(rem).join(' ')} ${color}`
}

function shadowStyle(shadow: ThemeShadow | null): CSSObject | null {
  if (!shadow) return null

  const outline = `0 0 0 ${rem(1)} var(--body-shadow-outline-color)`
  const umbra = toBoxShadow(shadow.umbra, 'var(--body-shadow-umbra-color)')
  const penumbra = toBoxShadow(shadow.penumbra, 'var(--body-shadow-penumbra-color)')
  const ambient = toBoxShadow(shadow.ambient, 'var(--body-shadow-ambient-color)')

  return {boxShadow: `${outline}, ${umbra}, ${penumbra}, ${ambient}`}
}
