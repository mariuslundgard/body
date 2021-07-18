import {ReactNode, useContext, useMemo} from 'react'
import {Theme} from './Theme'
import {ThemeContext, ThemeContextValue} from './ThemeContext'

export interface ThemeProviderProps {
  children?: ReactNode
  mode?: string
  palette?: string
  scheme?: 'light' | 'dark'
  theme?: Theme
  tone?: string
}

export function ThemeProvider(props: ThemeProviderProps) {
  const parentTheme = useContext(ThemeContext)
  const {
    children,
    mode = parentTheme?.mode,
    palette = parentTheme?.palette,
    scheme = 'light',
    theme = parentTheme?.theme,
    tone = parentTheme?.tone,
  } = props

  const contextValue: ThemeContextValue = useMemo(
    () => ({
      mode,
      palette,
      scheme,
      tone,
      theme: theme!,
    }),
    [mode, palette, scheme, theme, tone]
  )

  // const styledTheme = useMemo(() => ({body: theme!}), [theme])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
