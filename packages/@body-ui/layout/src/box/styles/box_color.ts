import {cache, CACHE_ENABLED, CSSObject, Theme} from '@body-ui/core'

export function box_color(
  props: {
    $bg?: string
    $fg?: string
    $mode?: string
    $palette?: string
    $scheme?: 'light' | 'dark'
    $tone?: string
  },
  theme: Theme
): CSSObject {
  const {$bg, $fg, $mode, $palette, $scheme, $tone} = props
  const {color} = theme
  const key = 'box_color_' + JSON.stringify([$bg, $fg, $mode, $palette, $scheme, $tone])

  if (!CACHE_ENABLED || !cache[key]) {
    const scheme = color[$scheme || 'light']
    const palette = scheme[$palette || 'base']

    // bg
    const bgTone = palette && palette[$bg || $tone || 'default']
    const bgMode = bgTone && bgTone[$mode || 'default']

    // fg
    const fgTone = palette && palette[$fg || $tone || 'default']
    const fgMode = fgTone && fgTone[$mode || 'default']

    cache[key] = {
      ['--body-border' as any]: bgMode?.enabled.border,
      ['--body-bg' as any]: bgMode?.enabled.bg,
      ['--body-fg' as any]: fgMode?.enabled.fg,
      ['--body-shadow-outline-color' as any]: bgMode?.enabled.shadow.outline,
      ['--body-shadow-umbra-color' as any]: bgMode?.enabled.shadow.umbra,
      ['--body-shadow-penumbra-color' as any]: bgMode?.enabled.shadow.penumbra,
      ['--body-shadow-ambient-color' as any]: bgMode?.enabled.shadow.ambient,

      $nest: {
        'button&': {
          $nest: {
            '@media(hover:hover)': {
              $nest: {
                '&:hover': {
                  ['--body-bg' as any]: bgMode?.hovered.bg,
                  ['--body-fg' as any]: fgMode?.hovered.fg,
                },
              },
            },

            '&:active': {
              ['--body-bg' as any]: bgMode?.pressed.bg,
              ['--body-fg' as any]: fgMode?.pressed.fg,
            },
          },
        },
      },

      borderColor: 'var(--body-border, "#ccc")',
      backgroundColor: 'var(--body-bg, "#fff")',
      color: 'var(--body-fg, "#000")',
    }
  }

  return cache[key]
}
