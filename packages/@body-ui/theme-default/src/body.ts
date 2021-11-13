import {black as bodyBlack, ColorTints, hues as bodyHues, white as bodyWhite} from '@body-ui/color'

export const white = bodyWhite.hex
export const black = bodyBlack.hex

export const hues = {
  gray: getTints(bodyHues.gray),
  red: getTints(bodyHues.red),
  purple: getTints(bodyHues.purple),
  blue: getTints(bodyHues.blue),
  green: getTints(bodyHues.green),
  yellow: getTints(bodyHues.yellow),
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
