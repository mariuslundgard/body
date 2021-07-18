import {styled} from '@body-ui/core'
import {forwardRef, ForwardedRef, HTMLProps} from 'react'
import {Box, BoxProps} from '../box'

function container(props: {$width: number}) {
  return {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    maxWidth: `${(props.$width + 1) * 300}px`,
    width: '100%',
  }
}

const Root = styled(Box)<{$width: number}>(container)

export const Container = forwardRef(function Container(
  props: {width?: number} & Omit<BoxProps, 'margin' | 'marginX' | 'marginLeft' | 'marginRight'> &
    Omit<HTMLProps<HTMLDivElement>, 'width'>,
  ref: ForwardedRef<HTMLDivElement>
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
