import React, {forwardRef} from 'react'
import {Box, BoxProps} from '../box'

export interface FlexProps extends Omit<BoxProps, 'layout'> {}

export const Flex = forwardRef(function Flex(
  props: FlexProps &
    Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'color' | 'direction' | 'hidden' | 'ref'>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {children, className, ...restProps} = props

  return (
    <Box {...restProps} layout="flex" ref={ref}>
      {children}
    </Box>
  )
})
