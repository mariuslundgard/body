import {Button} from '@body/button'
import {Box} from '@body/layout'
import {Text} from '@body/typography'
import {useState} from 'react'

const negate = (v: unknown) => !v

export default function TestStory() {
  const [render, setRender] = useState(false)

  return (
    <>
      <Button onClick={() => setRender(negate)} text="Render" />

      {render && <Example />}
    </>
  )
}

function Example() {
  return (
    <>
      <Box padding={0}>
        <Text>Test</Text>
      </Box>
      <Box padding={1}>
        <Text>Test</Text>
      </Box>
      <Box padding={2}>
        <Text>Test</Text>
      </Box>
      <Box padding={3}>
        <Text>Test</Text>
      </Box>
      <Box padding={4}>
        <Text>Test</Text>
      </Box>
      <Box padding={5}>
        <Text>Test</Text>
      </Box>
      <Box padding={6}>
        <Text>Test</Text>
      </Box>
      <Box padding={7}>
        <Text>Test</Text>
      </Box>
      <Box padding={8}>
        <Text>Test</Text>
      </Box>
      <Box padding={9}>
        <Text>Test</Text>
      </Box>

      <Box padding={[0, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[1, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[2, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[3, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[4, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[5, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[6, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[7, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[8, 0]}>
        <Text>Test</Text>
      </Box>
      <Box padding={[9, 0]}>
        <Text>Test</Text>
      </Box>
    </>
  )
}
