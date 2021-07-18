import {Theme} from '@body/core'

export const variants: Theme['variants'] = {
  bleed: {
    fg: 'muted',
  },

  ghost: {
    border: true,
    fg: 'muted',
  },

  primary: {
    mode: 'solid',
    palette: 'brand',
    tone: 'default',
  },
}
