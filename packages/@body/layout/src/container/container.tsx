import React, {forwardRef} from 'react'
import styled from 'styled-components'
import {Box, BoxProps} from '../box'

const Root = styled(Box)<{$width: number}>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({$width}) => `${($width + 1) * 300}px`};
  width: 100%;
`

export const Container = forwardRef(function Container(
  props: {width?: number} & Omit<BoxProps, 'margin' | 'marginX' | 'marginLeft' | 'marginRight'> &
    Omit<React.HTMLProps<HTMLDivElement>, 'width'>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {children, className, width = 1, ...restProps} = props

  return (
    <Root
      {...restProps}
      className={['body-container', className].filter(Boolean).join(' ')}
      ref={ref}
      $width={width}
    >
      {children}
    </Root>
  )
})
