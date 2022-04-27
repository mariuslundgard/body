import {Button} from '@body/button'
import {Box} from '@body/layout'
import {Text} from '@body/typography'
import {Component} from './types'

export const components: Component[] = [
  {
    component: Box,
    name: 'box',
    title: 'Box',
    propsSchema: [
      {
        type: 'number',
        name: 'padding',
        title: 'Padding',
        responsive: true,
      },
    ],
  },

  {
    component: Button,
    name: 'button',
    title: 'Button',
    propsSchema: [
      {
        type: 'number',
        name: 'padding',
        title: 'Padding',
        responsive: true,
      },
      {
        type: 'string',
        name: 'text',
        title: 'Text',
        responsive: false,
      },
    ],
  },

  {
    component: Text,
    name: 'text',
    title: 'Text',
    propsSchema: [
      {
        type: 'number',
        name: 'size',
        title: 'Size',
        responsive: true,
      },
    ],
  },
]
