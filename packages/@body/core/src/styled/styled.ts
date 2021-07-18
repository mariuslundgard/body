import {createElement, forwardRef, useMemo} from 'react'
import React from 'react'
import {style, types} from 'typestyle'
import {Theme, useTheme} from '../theme'

export type CSSObject = types.NestedCSSProperties

export type StyleFactory<Props extends {} = {}> = (props: Props, theme: Theme) => CSSObject | null

const classNameCache = new WeakMap<CSSObject, string>()

export function styled(name: string) {
  return <Props>(...factories: Array<StyleFactory<Props> | CSSObject>) => {
    const Styled = forwardRef(
      (
        _props: Props & React.HTMLProps<HTMLElement> & {as: any; [key: string]: any},
        ref: React.ForwardedRef<HTMLElement>
      ) => {
        const {as = name, ...restProps} = _props

        const {theme} = useTheme()

        const props = useMemo(() => {
          const p = {...restProps, ref}

          // Delete transient props (the ones starting with `$`)
          for (const prop of Object.keys(p)) {
            if (prop[0] === '$') {
              delete (p as any)[prop]
            }
          }

          // Compile class names
          const classNames = factories.map((v) => {
            if (typeof v === 'function') {
              const styleProps = v(restProps as Props, theme)

              if (!styleProps) return ''

              // console.log(classNameCache)

              if (classNameCache.has(styleProps)) {
                return classNameCache.get(styleProps)
              }

              // console.log('compile:fn', v.name, styleProps)

              const cn = style({$debugName: v.name || 'anon', ...styleProps})

              classNameCache.set(styleProps, cn)

              return cn
            }

            if (classNameCache.has(v)) {
              return classNameCache.get(v)
            }

            // console.log('compile', v)

            const cn = style(v)

            classNameCache.set(v, cn)

            return cn
          })

          ;(p as any).className = [p.className, ...classNames].filter(Boolean).join(' ')

          return p
        }, [ref, restProps, theme])

        return createElement(as, props)
      }
    )

    Styled.displayName = 'Styled(' + name || 'undefined' + ')'

    return Styled
  }
}
