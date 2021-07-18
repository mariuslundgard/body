import {defineScope} from '@sanity/ui-workshop'
import {lazy} from 'react'

export default defineScope('portfolios', 'Portfolios', [
  {
    name: 'rsms',
    title: 'Rasmus',
    component: lazy(() => import('./rsms')),
  },
  {
    name: 'alejandro',
    title: 'Alejandro',
    component: lazy(() => import('./alejandro')),
  },
])
