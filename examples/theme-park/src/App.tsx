import {Button} from '@body-ui/button'
import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {motion, useMotionValue} from 'framer-motion'
import {nanoid} from 'nanoid'
import {ComponentType, createElement, useCallback, useState} from 'react'

interface NumberPropSchema {
  type: 'number'
  name: string
  title: string
  responsive: boolean
}

interface StringPropSchema {
  type: 'string'
  name: string
  title: string
  responsive: boolean
}

type PropSchema = NumberPropSchema | StringPropSchema

interface Component<P extends {} = {}> {
  component: ComponentType<P>
  name: string
  title: string
  propsSchema: PropSchema[]
}

const createKey = () => nanoid(6)

const components: Component[] = [
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

export function App() {
  const [value, setValue] = useState<{key: string; name: string; props: Record<string, any>}[]>([])
  const [path, setPath] = useState<string[]>([])
  const currentItem = value.find((i) => i.key === path[0])
  const currentComponent = components.find((c) => c.name === currentItem?.name)

  const addItem = useCallback((name: string) => {
    setValue((i) => i.concat([{key: createKey(), name, props: {}}]))
  }, [])

  const handleChange = useCallback(
    (name: string, value: string) => {
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
            <Button key={c.name} onClick={() => addItem(c.name)} padding={2} variant="bleed">
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

const ElementWrapper = styled('div')({
  outline: '1px solid #ccc',
  padding: 8,

  $nest: {
    '&:hover': {
      outline: '1px solid blue',
    },

    '&>div': {
      pointerEvents: 'none',
    },
  },
})

function Artboard({
  select,
  value,
}: {
  select: (key: string) => void
  value: {key: string; name: string; props: Record<string, any>}[]
}) {
  return (
    <>
      {value.map((item) => {
        const currentComponent = components.find((c) => c.name === item.name)

        if (!currentComponent) {
          return null
        }

        return (
          <ArtboardItem
            currentComponent={currentComponent}
            item={item}
            key={item.key}
            select={select}
          />
        )
      })}
    </>
  )
}

function ArtboardItem(props: {
  currentComponent: Component
  item: {key: string; name: string; props: Record<string, any>}
  select: (key: string) => void
}) {
  const {currentComponent, item, select} = props
  const [dragging, setDragging] = useState(false)
  const dragOriginY = useMotionValue(0)

  return (
    <motion.div
      drag="y"
      dragConstraints={{top: 0, bottom: 0}}
      dragElastic={1}
      // dragOriginY={dragOriginY}
      initial={false}
      onDragEnd={() => setDragging(false)}
      onDragStart={() => setDragging(true)}
      // whileHover={{scale: 1.01}}
      // whileTap={{scale: 1.01}}
    >
      <ElementWrapper onClick={() => select(item.key)}>
        <div>
          {createElement(currentComponent.component, {
            ...item.props,
            tabIndex: -1,
          } as any)}
        </div>
      </ElementWrapper>
    </motion.div>
  )
}

function Field({
  onChange,
  schema,
  value,
}: {
  onChange: (v: any) => void
  schema: PropSchema
  value: any
}) {
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
        value={value || ''}
      />
    </Box>
  )
}
