import {
  black as sanityBlack,
  ColorTints,
  hues as sanityHues,
  white as sanityWhite,
} from '@sanity/color'

export const white = sanityWhite.hex
export const black = sanityBlack.hex

export const hues = {
  gray: getTints(sanityHues.gray),
  red: getTints(sanityHues.red),
  purple: getTints(sanityHues.purple),
  blue: getTints(sanityHues.blue),
  green: getTints(sanityHues.green),
  yellow: getTints(sanityHues.yellow),
}

function getTints(tints: ColorTints) {
  return {
    50: tints[50].hex,
    100: tints[100].hex,
    200: tints[200].hex,
    300: tints[300].hex,
    400: tints[400].hex,
    500: tints[500].hex,
    600: tints[600].hex,
    700: tints[700].hex,
    800: tints[800].hex,
    900: tints[900].hex,
    950: tints[950].hex,
  }
}
