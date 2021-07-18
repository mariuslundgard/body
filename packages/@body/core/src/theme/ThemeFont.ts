export interface ThemeFontSize {
  ascenderHeight: number
  descenderHeight: number
  fontSize: number
  iconSize: number
  letterSpacing: number
  lineHeight: number
}

export interface ThemeFont {
  family: string
  sizes: ThemeFontSize[]
}
