import {ThemeColor} from './ThemeColor'
import {ThemeFont} from './ThemeFont'
import {ThemeShadow} from './ThemeShadow'
import {ThemeVariant} from './ThemeVariant'

export interface Theme {
  color: ThemeColor
  font: {
    text: ThemeFont
  }
  media: number[]
  radius: number[]
  shadow: Array<ThemeShadow | null>
  space: number[]
  variants?: Record<string, ThemeVariant>
}
