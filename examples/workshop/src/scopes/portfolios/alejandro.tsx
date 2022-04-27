import {Box} from '@body/layout'
import {Text} from '@body/typography'
import React from 'react'

export default function InheritanceStory(): React.ReactElement {
  return (
    <Box direction="column" layout="flex" gap={[4, 5, 6, 7, 8]} style={{fontWeight: 600}}>
      <Box
        columns={[1, 1, 1, 6]}
        gap={2}
        layout="grid"
        padding={2}
        style={{position: 'sticky', top: 0, zIndex: 20, boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)'}}
        palette="base"
      >
        <Box column={[1, 1, 1, 2]}>
          <Text size={1}>Alejandro V. Rojas</Text>
        </Box>
        <Text size={1}>a@alejandro.no</Text>
        <Text size={1}>Graphic design</Text>
        <Text size={1}>Fullstack development</Text>
        <Text size={1}>Oslo, Norway</Text>
      </Box>

      <Project />
      <Project />
      <Project />
      <Project />
    </Box>
  )
}

function Project() {
  return (
    <Box direction="column" layout="flex" gap={2} padding={2}>
      <Box
        columns={[1, 1, 1, 6]}
        gap={2}
        layout="grid"
        margin={-2}
        padding={2}
        style={{position: 'sticky', top: 25, zIndex: 10}}
        palette="base"
      >
        <Text size={1}>2021-04</Text>
        <Box column={[1, 1, 1, 2]}>
          <Text size={1}>A project</Text>
        </Box>
        <Box column={[1, 1, 1, 3]}>
          <Text size={1}>Graphic design</Text>
        </Box>
      </Box>
      <Box columns={[1, 1, 1, 2]} gap={2} layout="grid">
        <Box mode="muted">
          <div style={{paddingBottom: 'calc(2 / 3  * 100%)'}} />
        </Box>
        <Box mode="muted">
          <div style={{paddingBottom: 'calc(2 / 3  * 100%)'}} />
        </Box>
        <Box mode="muted">
          <div style={{paddingBottom: 'calc(2 / 3  * 100%)'}} />
        </Box>
        <Box mode="muted">
          <div style={{paddingBottom: 'calc(2 / 3  * 100%)'}} />
        </Box>
      </Box>
    </Box>
  )
}
