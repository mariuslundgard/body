import {ThemeVariant} from './ThemeVariant'
import {useTheme} from './useTheme'

export function useVariant(key: string | undefined): ThemeVariant | undefined {
  const {theme} = useTheme()

  if (!key) {
    return undefined
  }

  return theme?.variants && theme?.variants[key]
}
