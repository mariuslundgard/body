export interface ThemeColorState {
  bg: string
  border: string
  fg: string
  shadow: {
    outline: string
    umbra: string
    penumbra: string
    ambient: string
  }
}

export interface ThemeColorMode {
  enabled: ThemeColorState
  disabled: ThemeColorState
  hovered: ThemeColorState
  pressed: ThemeColorState
  selected: ThemeColorState
}

export type ThemeColorTone = Record<
  // mode: x
  string,
  ThemeColorMode | undefined
>

export type ThemeColorPalette = Record<
  // tone: x
  string,
  ThemeColorTone | undefined
>

export type ThemeColorScheme = Record<
  // palette: x
  string,
  ThemeColorPalette | undefined
>

export interface ThemeColor {
  light: ThemeColorScheme
  dark: ThemeColorScheme
}
