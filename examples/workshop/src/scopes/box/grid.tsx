// import {useTheme} from '@body/core'
import {Box} from '@body/layout'
import {Text} from '@body/typography'
import React from 'react'

export default function GridStory(): React.ReactElement {
  // console.log('theme', useTheme())

  return (
    <Box
      columns={[3, 4, 5]}
      gap={[3, 4, 5]}
      layout={['grid', 'grid', 'grid']}
      padding={[3, 4, 5]}
      palette="base"
    >
      <Box border column={[2, 3, 4]} padding={3} radius={2}>
        <Text>1</Text>
      </Box>
      <Box border padding={3} radius={2} palette="brand">
        <Text>2</Text>
      </Box>
      <Box border padding={3} radius={2} palette="accent">
        <Text>3</Text>
      </Box>
      <Box border column={[2, 3, 4]} padding={3} radius={2}>
        <Text>4</Text>
      </Box>
    </Box>
  )
}
