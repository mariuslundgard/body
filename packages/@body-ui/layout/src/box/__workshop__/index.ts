import {defineScope} from '@sanity/ui-workshop'
import {lazy} from 'react'

export default defineScope('layout/box', 'Box', [
  {
    name: 'props',
    title: 'Props',
    component: lazy(() => import('./props')),
  },
  {
    name: 'example',
    title: 'Example',
    component: lazy(() => import('./example')),
  },
  {
    name: 'grid',
    title: 'Grid',
    component: lazy(() => import('./grid')),
  },
  {
    name: 'color',
    title: 'Color',
    component: lazy(() => import('./color')),
  },
  {
    name: 'test',
    title: 'Test',
    component: lazy(() => import('./test')),
  },
  {
    name: 'styled',
    title: 'Styled',
    component: lazy(() => import('./styled')),
  },
])
