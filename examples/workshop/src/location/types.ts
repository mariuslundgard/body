import {MouseEvent} from 'react'

export interface LocationState {
  path: string
  title: string
  query: {[key: string]: any}
}

export interface PartialLocationState {
  path?: string
  title?: string
  query?: {[key: string]: any}
}

export interface LocationContextValue extends LocationState {
  handleLinkClick: (evt: MouseEvent<HTMLElement>) => void
  pushState: (newState: PartialLocationState) => void
  replaceState: (newState: PartialLocationState) => void
  segments: string[]
}
