import {styled, ThemeProvider, useResponsiveValue, useTheme, useVariant} from '@body/core'
import {Property} from 'csstype'
import React, {forwardRef} from 'react'
import {border} from '../styles/border'
import {box} from '../styles/box'
import {box_color} from '../styles/box_color'
import {Flex, flex} from '../styles/flex'
import {FlexDirection, flex_dir} from '../styles/flex_dir'
import {Gap, gap} from '../styles/gap'
import {grid_col} from '../styles/grid_col'
import {grid_cols} from '../styles/grid_cols'
import {Height, height} from '../styles/height'
import {LayoutProps, layout, LayoutStyleProps} from '../styles/layout'
import {MarginProps, margin, MarginStyleProps} from '../styles/margin'
import {order} from '../styles/order'
import {PaddingProps, padding, PaddingStyleProps} from '../styles/padding'
import {radius} from '../styles/radius'
import {shadow} from '../styles/shadow'

export interface BoxProps extends LayoutProps, MarginProps, PaddingProps {
  as?: 'div'
  bg?: string
  border?: boolean
  borderTop?: boolean
  borderRight?: boolean
  borderBottom?: boolean
  borderLeft?: boolean
  column?: number | number[]
  columns?: number | number[]
  direction?: FlexDirection | FlexDirection[]
  fg?: string
  flex?: Flex | Flex[]
  gap?: Gap | Gap[]
  height?: Height | Height[]
  mode?: string
  order?: number | number[]
  palette?: string
  radius?: number | number[]
  scheme?: 'light' | 'dark'
  shadow?: number | number[]
  sizing?: Property.BoxSizing
  tone?: string
  variant?: string
}

interface BoxStyleProps extends LayoutStyleProps, MarginStyleProps, PaddingStyleProps {
  $bg?: string
  $border?: boolean
  $borderTop?: boolean
  $borderRight?: boolean
  $borderBottom?: boolean
  $borderLeft?: boolean
  $column: number[]
  $columns: number[]
  $direction: FlexDirection[]
  $fg?: string
  $flex: Flex[]
  $gap: number[]
  $height: Height[]
  $mode?: string
  $order: number[]
  $palette?: string
  $radius: number[]
  $scheme?: 'light' | 'dark'
  $shadow: number[]
  $sizing?: Property.BoxSizing
  $tone?: string
}

const Root = styled('div')<BoxStyleProps>(
  box,
  border,
  box_color,
  flex,
  flex_dir,
  gap,
  grid_col,
  grid_cols,
  height,
  layout,
  margin,
  order,
  radius,
  padding,
  shadow
)

Root.displayName = 'Box_root'

export const Box = forwardRef(function Box(
  props: BoxProps &
    Omit<
      React.HTMLProps<HTMLDivElement>,
      'as' | 'color' | 'direction' | 'height' | 'hidden' | 'ref'
    >,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const variant = useVariant(props.variant)
  const theme = useTheme()

  const {
    bg: $bg = theme.bg,
    border: $border = variant?.border,
    borderTop: $borderTop,
    borderRight: $borderRight,
    borderBottom: $borderBottom,
    borderLeft: $borderLeft,
    children,
    column,
    columns,
    direction,
    fg: $fg = theme.fg,
    flex,
    gap,
    height,
    layout = 'block',
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    mode: $mode = variant?.mode || theme.mode,
    order,
    padding,
    palette: $palette = variant?.palette || theme.palette,
    radius,
    scheme: $scheme = theme.scheme,
    shadow,
    sizing: $sizing,
    tone: $tone = variant?.tone || theme.tone,
    variant: _variant,
    ...restProps
  } = props

  return (
    <ThemeProvider mode={$mode} palette={$palette} scheme={$scheme} tone={$tone}>
      <Root
        {...restProps}
        $bg={$bg}
        $border={$border}
        $borderTop={$borderTop}
        $borderRight={$borderRight}
        $borderBottom={$borderBottom}
        $borderLeft={$borderLeft}
        $column={useResponsiveValue(column)}
        $columns={useResponsiveValue(columns)}
        $direction={useResponsiveValue(direction)}
        $fg={$fg}
        $flex={useResponsiveValue(flex)}
        $gap={useResponsiveValue(gap)}
        $height={useResponsiveValue(height)}
        $margin={useResponsiveValue(margin)}
        $marginX={useResponsiveValue(marginX)}
        $marginY={useResponsiveValue(marginY)}
        $marginTop={useResponsiveValue(marginTop)}
        $marginRight={useResponsiveValue(marginRight)}
        $marginBottom={useResponsiveValue(marginBottom)}
        $marginLeft={useResponsiveValue(marginLeft)}
        $mode={$mode}
        $layout={useResponsiveValue(layout)}
        $order={useResponsiveValue(order)}
        $palette={$palette}
        $padding={useResponsiveValue(padding)}
        $radius={useResponsiveValue(radius)}
        $scheme={$scheme}
        $shadow={useResponsiveValue(shadow)}
        $sizing={$sizing}
        $tone={$tone}
        ref={ref}
      >
        {children}
      </Root>
    </ThemeProvider>
  )
})
