import {styled, useResponsiveValue} from '@body-ui/core'
import {forwardRef, ForwardedRef, HTMLProps} from 'react'
import {text_size, text, TextStyleProps} from './styles'

export interface TextProps {
  size?: number | number[]
}

const Root = styled('div')<TextStyleProps>(text, text_size)

Root.displayName = 'Text_root'

export const Text = forwardRef(function Text(
  props: TextProps & Omit<HTMLProps<HTMLDivElement>, 'as' | 'size'>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {children, size = 2, ...restProps} = props
  const $size = useResponsiveValue(size)

  return (
    <Root {...restProps} $size={$size} ref={ref}>
      {children}
    </Root>
  )
})
