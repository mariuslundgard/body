import {styled} from '@body/core'
import {
  motion,
  // useMotionValue
} from 'framer-motion'
import React, {createElement} from 'react'
import {components} from './components'
import {Component} from './types'

export function Artboard({
  select,
  value,
}: {
  select: (key: string) => void
  value: {key: string; name: string; props: Record<string, unknown>}[]
}): React.ReactElement {
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

function ArtboardItem(props: {
  currentComponent: Component
  item: {key: string; name: string; props: Record<string, unknown>}
  select: (key: string) => void
}) {
  const {currentComponent, item, select} = props
  // const [dragging, setDragging] = useState(false)
  // const dragOriginY = useMotionValue(0)

  return (
    <motion.div
      drag="y"
      dragConstraints={{top: 0, bottom: 0}}
      dragElastic={1}
      // dragOriginY={dragOriginY}
      initial={false}
      // onDragEnd={() => setDragging(false)}
      // onDragStart={() => setDragging(true)}
      // whileHover={{scale: 1.01}}
      // whileTap={{scale: 1.01}}
    >
      <ElementWrapper onClick={() => select(item.key)}>
        <div>
          {createElement(currentComponent.component, {
            ...item.props,
            tabIndex: -1,
          })}
        </div>
      </ElementWrapper>
    </motion.div>
  )
}
