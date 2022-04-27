import {useTheme} from '@body/core'
import {Box, BoxProps} from '@body/layout'
import {Text} from '@body/typography'
import React, {forwardRef} from 'react'

export interface ButtonProps extends BoxProps {
  size?: number | number[]
  text?: React.ReactNode
}

export const Button = forwardRef(function Button(
  props: ButtonProps & Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'size'>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const theme = useTheme()

  const {
    children,
    mode = theme.mode || 'solid',
    padding = 3,
    radius = 2,
    size = 2,
    text,
    type = 'button',
    ...restProps
  } = props

  return (
    <Box
      as="button"
      {...restProps}
      mode={mode}
      padding={padding}
      palette={theme.palette}
      radius={radius}
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      scheme={theme.scheme}
      type={type}
    >
      {text && <Text size={size}>{text}</Text>}
      {children}
    </Box>
  )
})
