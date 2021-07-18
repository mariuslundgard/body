import {forwardRef, ForwardedRef, HTMLProps} from 'react'
import {Box, BoxProps} from '../box'

export interface GridProps extends Omit<BoxProps, 'layout'> {}

export const Grid = forwardRef(function Grid(
  props: GridProps &
    Omit<HTMLProps<HTMLDivElement>, 'as' | 'color' | 'direction' | 'hidden' | 'ref'>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {children, className, ...restProps} = props

  return (
    <Box {...restProps} layout="grid" ref={ref}>
      {children}
    </Box>
  )
})
