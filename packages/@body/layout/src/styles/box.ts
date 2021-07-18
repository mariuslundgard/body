import type {CSSObject} from '@body/core'

export const box: CSSObject = {
  $debugName: 'box',

  minHeight: 0,
  minWidth: 0,

  $nest: {
    'button&': {
      appearance: 'none',
      border: 0,
      ['-webkit-font-smoothing' as any]: 'inherit',
    },
  },
}
