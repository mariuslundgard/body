import {Button} from '@body/button'
import {Box} from '@body/layout'
import {Text} from '@body/typography'
import {nanoid} from 'nanoid'
import React, {useCallback, useState} from 'react'
import {Artboard} from './Artboard'
import {components} from './components'
import {Field} from './Field'

const createKey = () => nanoid(6)

export function App(): React.ReactElement {
  const [value, setValue] = useState<{key: string; name: string; props: Record<string, unknown>}[]>(
    []
  )
  const [path, setPath] = useState<string[]>([])
  const currentItem = value.find((i) => i.key === path[0])
  const currentComponent = components.find((c) => c.name === currentItem?.name)

  const addItem = useCallback((name: string) => {
    setValue((i) => i.concat([{key: createKey(), name, props: {}}]))
  }, [])

  const handleChange = useCallback(
    (name: string, value: unknown) => {
      setValue((v) => {
        return v.map((item) => {
          if (item.key === path[0]) {
            return {...item, props: {...item.props, [name]: value}}
          }

          return item
        })
      })
    },
    [path]
  )

  const handleSelect = useCallback((key: string) => {
    setPath([key])
  }, [])

  return (
    <Box direction="column" height="100%" layout="flex">
      <Box padding={4} scheme="dark">
        <Text>
          <strong>Theme Park</strong>
        </Text>
      </Box>

      <Box flex={1} layout="flex">
        <Box direction="column" gap={1} layout="flex" padding={3} style={{width: 250}}>
          {components.map((c) => (
            <Button key={c.name} onClick={() => addItem(c.name)} padding={2} mode="bleed">
              <Text>{c.title}</Text>
            </Button>
          ))}
        </Box>

        <Box flex={1} mode="muted" padding={4}>
          <Artboard select={handleSelect} value={value} />
        </Box>

        <Box direction="column" gap={1} layout="flex" padding={4} style={{width: 250}}>
          <Text>{currentComponent?.title}</Text>

          {currentComponent && (
            <Box direction="column" gap={5} layout="flex" marginTop={5}>
              {currentComponent.propsSchema.map((s) => (
                <Field
                  key={s.name}
                  onChange={(value) => handleChange(s.name, value)}
                  schema={s}
                  value={currentItem?.props[s.name]}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
