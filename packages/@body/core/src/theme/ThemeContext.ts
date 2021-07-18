import {createContext} from 'react'
import {Theme} from './Theme'

export interface ThemeContextValue {
  bg?: string
  fg?: string
  mode?: string
  palette?: string
  scheme: 'light' | 'dark'
  theme: Theme
  tone?: string
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
