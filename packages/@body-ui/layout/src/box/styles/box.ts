import {cachedStyle, CSSObject} from '@body-ui/core'
import {Property} from 'csstype'

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

export interface BoxSizingStyleProps {
  $sizing?: Property.BoxSizing
}

export function boxSizing(props: BoxSizingStyleProps) {
  const {$sizing} = props

  return cachedStyle('box-sizing', () => ({boxSizing: $sizing}), [$sizing])
}
