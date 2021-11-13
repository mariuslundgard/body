import {ColorHueConfig, ColorHueKey} from './types'

/**
 * @internal
 */
export interface ColorConfig {
  black: string
  white: string
  hues: Record<ColorHueKey, ColorHueConfig>
}

/**
 * @internal
 */
export const white = '#ffffff'

/**
 * @internal
 */
export const black = '#000000'

/**
 * @internal
 */
export const config: ColorConfig = {
  black,
  white,
  hues: {
    gray: {
      title: 'Gray',
      stops: {
        0: white,
        1000: black,
      },
    },
    red: {
      title: 'Red',
      stops: {
        0: white,
        400: '#F53226',
        1000: black,
      },
    },
    orange: {
      title: 'Orange',
      stops: {
        0: white,
        300: '#FF7A1A',
        1000: black,
      },
    },
    yellow: {
      title: 'Yellow',
      stops: {
        0: white,
        300: '#FFD600',
        1000: black,
      },
    },
    green: {
      title: 'Green',
      stops: {
        0: white,
        300: '#3CE164',
        1000: black,
      },
    },
    cyan: {
      title: 'Cyan',
      stops: {
        0: white,
        300: '#26CBF3',
        1000: black,
      },
    },
    blue: {
      title: 'Blue',
      stops: {
        0: white,
        500: '#2A59FF',
        1000: black,
      },
    },
    purple: {
      title: 'Purple',
      stops: {
        0: white,
        600: '#660DF5',
        1000: black,
      },
    },
    magenta: {
      title: 'Magenta',
      stops: {
        0: white,
        400: '#EB03D4',
        1000: black,
      },
    },
  },
}
