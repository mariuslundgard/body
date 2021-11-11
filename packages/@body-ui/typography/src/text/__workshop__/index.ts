import {defineScope} from '@sanity/ui-workshop'
import {lazy} from 'react'

export default defineScope('text', 'Text', [
  {
    name: 'props',
    title: 'Props',
    component: lazy(() => import('./PropsStory')),
  },
])
