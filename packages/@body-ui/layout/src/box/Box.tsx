import {styled, ThemeProvider, useResponsiveValue, useTheme, useVariant} from '@body-ui/core'
import {Property} from 'csstype'
import {forwardRef, ForwardedRef, HTMLProps} from 'react'
import {border, BorderStyleProps} from './styles/border'
import {box, boxSizing, BoxSizingStyleProps} from './styles/box'
import {box_color} from './styles/box_color'
import {Flex, flex} from './styles/flex'
import {FlexDirection, flex_dir} from './styles/flex_dir'
import {Gap, gap} from './styles/gap'
import {grid_col} from './styles/grid_col'
import {grid_cols} from './styles/grid_cols'
import {Height, height} from './styles/height'
import {LayoutProps, layout, LayoutStyleProps} from './styles/layout'
import {
  MarginProps,
  margin,
  MarginStyleProps,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
} from './styles/margin'
import {order} from './styles/order'
import {
  PaddingProps,
  padding,
  PaddingStyleProps,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
} from './styles/padding'
import {radius} from './styles/radius'
import {shadow} from './styles/shadow'

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

interface BoxStyleProps
  extends BorderStyleProps,
    BoxSizingStyleProps,
    LayoutStyleProps,
    MarginStyleProps,
    PaddingStyleProps {
  $bg?: string
  $column: number[]
  $columns: number[]
  $direction: FlexDirection[]
  $fg?: string
  $flex: Flex[]
  $gap: Gap[]
  $height: Height[]
  $mode?: string
  $order: number[]
  $palette?: string
  $radius: number[]
  $scheme?: 'light' | 'dark'
  $shadow: number[]
  $tone?: string
}

const Root = styled('div')<BoxStyleProps>(
  box,
  border,
  box_color,
  boxSizing,
  flex,
  flex_dir,
  gap,
  grid_col,
  grid_cols,
  height,
  layout,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  order,
  radius,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  shadow
)

Root.displayName = 'Box_root'

export const Box = forwardRef(function Box(
  props: BoxProps &
    Omit<HTMLProps<HTMLDivElement>, 'as' | 'color' | 'direction' | 'height' | 'hidden' | 'ref'>,
  ref: ForwardedRef<HTMLDivElement>
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
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
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
        $paddingX={useResponsiveValue(paddingX)}
        $paddingY={useResponsiveValue(paddingY)}
        $paddingTop={useResponsiveValue(paddingTop)}
        $paddingRight={useResponsiveValue(paddingRight)}
        $paddingBottom={useResponsiveValue(paddingBottom)}
        $paddingLeft={useResponsiveValue(paddingLeft)}
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
