import {
  Theme,
  ThemeColorMode,
  ThemeColorPalette,
  ThemeColorScheme,
  ThemeColorState,
  ThemeColorTone,
} from '@body-ui/core'
import {black, hues, white} from './body'
import {multiply, screen} from './helpers'
import {rgba} from './lib/color-fns'

const palettes: Record<string, any> = {
  base: hues.gray,
  brand: hues.blue,
  accent: hues.purple,
}

const tones: Record<string, any> = {
  default: hues.gray,
  positive: hues.green,
  caution: hues.yellow,
  critical: hues.red,
}

function createColorState(opts: {
  dark: boolean
  palette: string
  tone: string
  mode: string
  state: 'enabled' | 'disabled' | 'hovered' | 'pressed' | 'selected'
}): ThemeColorState {
  const {dark} = opts
  const mix = dark ? screen : multiply
  const mix2 = dark ? multiply : screen
  const palette = palettes[opts.palette] || palettes.base
  const tone = tones[opts.tone] || tones.default

  const paletteBg =
    opts.palette === 'base' ? (dark ? hues.gray[950] : white) : palette[dark ? 950 : 50]
  const paletteFg = opts.palette === 'base' ? (dark ? white : black) : palette[dark ? 200 : 800]

  const toneBg = opts.tone === 'default' ? (dark ? hues.gray[950] : white) : tone[dark ? 950 : 50]
  const toneFg = opts.tone === 'default' ? (dark ? white : black) : tone[dark ? 200 : 800]

  const base = {
    bg: opts.tone === 'default' ? paletteBg : mix(paletteBg, toneBg),
    fg: opts.tone === 'default' ? paletteFg : mix(paletteBg, toneFg),
    shadow: {
      outline: rgba(tone[500], 0.4),
      umbra: rgba(dark ? black : tone[500], dark ? 0.4 : 0.2),
      penumbra: rgba(dark ? black : tone[500], dark ? 0.28 : 0.14),
      ambient: rgba(dark ? black : tone[500], dark ? 0.24 : 0.12),
    },
  }

  if (opts.mode === 'solid') {
    if (opts.state === 'hovered') {
      const bg = mix(base.bg, tone[dark ? 400 : 600])

      // mode=solid, state=enabled
      return {
        bg,
        fg: mix2(bg, tone[dark ? 900 : 50]),
        border: mix(bg, tone[dark ? 900 : 100]),
        shadow: {
          ...base.shadow,
          outline: rgba(tone[500], 0.0),
        },
      }
    }

    if (opts.state === 'pressed') {
      const bg = mix(base.bg, tone[dark ? 300 : 700])

      // mode=solid, state=enabled
      return {
        bg,
        fg: mix2(bg, tone[dark ? 900 : 50]),
        border: mix(bg, tone[dark ? 900 : 100]),
        shadow: {
          ...base.shadow,
          outline: rgba(tone[500], 0.0),
        },
      }
    }

    const bg = mix(base.bg, tone[500])

    // mode=solid, state=enabled
    return {
      bg,
      fg: mix2(bg, tone[dark ? 900 : 50]),
      border: mix(bg, tone[dark ? 900 : 100]),
      shadow: {
        ...base.shadow,
        outline: rgba(tone[500], 0.0),
      },
    }
  }

  if (opts.mode === 'muted') {
    const bg = mix(base.bg, tone[dark ? 900 : 100])

    // mode=muted
    return {
      bg,
      fg: mix(bg, tone[dark ? 400 : 600]),
      border: mix(bg, palette[dark ? 700 : 200]),
      shadow: base.shadow,
    }
  }

  // mode=default
  return {
    bg: base.bg,
    fg: mix(base.bg, base.fg),
    border: mix(base.bg, palette[dark ? 800 : 200]),
    shadow: base.shadow,
  }
}

function createColorMode(opts: {
  dark: boolean
  palette: string
  tone: string
  mode: string
}): ThemeColorMode {
  return {
    enabled: createColorState({...opts, state: 'enabled'}),
    disabled: createColorState({...opts, state: 'disabled'}),
    hovered: createColorState({...opts, state: 'hovered'}),
    pressed: createColorState({...opts, state: 'pressed'}),
    selected: createColorState({...opts, state: 'selected'}),
  }
}

function createColorTone(opts: {dark: boolean; palette: string; tone: string}): ThemeColorTone {
  return {
    default: createColorMode({...opts, mode: 'default'}),
    solid: createColorMode({...opts, mode: 'solid'}),
    muted: createColorMode({...opts, mode: 'muted'}),
  }
}

function createColorPalette(opts: {dark: boolean; palette: string}): ThemeColorPalette {
  return {
    default: createColorTone({...opts, tone: 'default'}),
    positive: createColorTone({...opts, tone: 'positive'}),
    caution: createColorTone({...opts, tone: 'caution'}),
    critical: createColorTone({...opts, tone: 'critical'}),
  }
}

function createColorScheme(opts: {dark: boolean}): ThemeColorScheme {
  return {
    base: createColorPalette({...opts, palette: 'base'}),
    brand: createColorPalette({...opts, palette: 'brand'}),
    accent: createColorPalette({...opts, palette: 'accent'}),
  }
}

export const color: Theme['color'] = {
  dark: createColorScheme({dark: true}),
  light: createColorScheme({dark: false}),
}
