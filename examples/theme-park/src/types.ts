import {ComponentType} from 'react'

export interface NumberPropSchema {
  type: 'number'
  name: string
  title: string
  responsive: boolean
}

export interface StringPropSchema {
  type: 'string'
  name: string
  title: string
  responsive: boolean
}

export type PropSchema = NumberPropSchema | StringPropSchema

// eslint-disable-next-line @typescript-eslint/ban-types
export interface Component<P extends {tabIndex?: number} = {tabIndex?: number}> {
  component: ComponentType<P>
  name: string
  title: string
  propsSchema: PropSchema[]
}
