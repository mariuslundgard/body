import React, {forwardRef} from 'react'
import {Box, BoxProps} from '../box'

export interface GridProps extends Omit<BoxProps, 'layout'> {}

export const Grid = forwardRef(function Grid(
  props: GridProps &
    Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'color' | 'direction' | 'hidden' | 'ref'>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {children, className, ...restProps} = props

  return (
    <Box {...restProps} layout="grid" ref={ref}>
      {children}
    </Box>
  )
})
