import {Theme} from '@body/core'
import {color} from './color'
import {font} from './font'
import {shadow} from './shadow'
import {variants} from './variants'

export const defaultTheme: Theme = {
  color,
  font,
  media: [300, 600, 900, 1200, 1600],
  radius: [0, 1, 3, 6, 9, 12, 15],
  shadow,
  space: [0, 4, 8, 12, 20, 32, 52, 84, 136, 220],
  variants,
}
