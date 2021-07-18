import {multiply as multiplyRgb, screen as screenRgb} from 'color-blend'
import {parseColor, rgbToHex} from './lib/color-fns'

export function multiply(a: unknown, b: unknown) {
  return rgbToHex(multiplyRgb({...parseColor(a), a: 1}, {...parseColor(b), a: 1}))
}

export function screen(a: unknown, b: unknown) {
  return rgbToHex(screenRgb({...parseColor(a), a: 1}, {...parseColor(b), a: 1}))
}
