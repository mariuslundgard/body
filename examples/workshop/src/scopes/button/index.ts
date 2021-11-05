import {defineScope} from '@sanity/ui-workshop'
import {lazy} from 'react'

export default defineScope('button', 'Button', [
  {
    name: 'props',
    title: 'Props',
    component: lazy(() => import('./props')),
  },
])
