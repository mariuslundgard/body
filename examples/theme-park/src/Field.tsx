import {Box} from '@body/layout'
import {Text} from '@body/typography'
import React from 'react'
import {PropSchema} from './types'

export function Field({
  onChange,
  schema,
  value,
}: {
  onChange: (v: unknown) => void
  schema: PropSchema
  value: unknown
}): React.ReactElement {
  if (schema.type === 'number') {
    return (
      <Box direction="column" gap={2} layout="flex" variant="bleed">
        <Text size={1}>{schema.title}</Text>
        <input
          onChange={(event) =>
            onChange(
              event.currentTarget.value === '' ? undefined : Number(event.currentTarget.value)
            )
          }
          type="text"
          value={typeof value === 'number' ? String(value) : ''}
        />
      </Box>
    )
  }

  return (
    <Box direction="column" gap={2} layout="flex" variant="bleed">
      <Text size={1}>{schema.title}</Text>
      <input
        onChange={(event) =>
          onChange(event.currentTarget.value === '' ? undefined : event.currentTarget.value)
        }
        type="text"
        value={typeof value === 'string' ? value : ''}
      />
    </Box>
  )
}
