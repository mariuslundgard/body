import {defineScope} from '@sanity/ui-workshop'
import {createElement as h} from 'react'
import {COLOR_HUES, COLOR_TINTS} from '../constants'
import {hues} from '../hues'

export default defineScope('color', 'Color', [
  {
    name: 'test',
    title: 'Test',
    component: () =>
      h(
        'div',
        {},
        COLOR_HUES.map((hueKey) => {
          return h(
            'div',
            {key: hueKey},
            hueKey,
            COLOR_TINTS.map((tintKey) => {
              const tint = hues[hueKey][tintKey]

              return h(
                'div',
                {style: {backgroundColor: tint.hex}},
                `${tintKey} – ${tint.contrast.onBlack} – ${tint.contrast.onWhite}`
              )
            })
          )
        })
      ),
  },
])
