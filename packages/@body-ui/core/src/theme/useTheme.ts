import {useContext} from 'react'
import {ThemeContext, ThemeContextValue} from './ThemeContext'

export function useTheme(): ThemeContextValue {
  const contextValue = useContext(ThemeContext)

  if (!contextValue) {
    throw new Error('Theme: no theme')
  }

  return contextValue
}
