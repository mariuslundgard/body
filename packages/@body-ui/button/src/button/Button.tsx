import {useTheme} from '@body-ui/core'
import {Box, BoxProps} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {forwardRef, ForwardedRef, HTMLProps, ReactNode} from 'react'

export interface ButtonProps extends BoxProps {
  size?: number | number[]
  text?: ReactNode
}

export const Button = forwardRef(function Button(
  props: ButtonProps & Omit<HTMLProps<HTMLButtonElement>, 'as' | 'size'>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const theme = useTheme()

  const {
    children,
    mode = theme.mode || 'solid',
    padding = 3,
    radius = 2,
    size = 2,
    text,
    tone = 'default',
    type = 'button',
    ...restProps
  } = props

  return (
    <Box
      as="button"
      {...(restProps as any)}
      mode={mode}
      padding={padding}
      palette={theme.palette}
      radius={radius}
      ref={ref as ForwardedRef<HTMLDivElement>}
      scheme={theme.scheme}
      tone={tone}
      type={type}
    >
      {text && <Text size={size}>{text}</Text>}
      {children}
    </Box>
  )
})
