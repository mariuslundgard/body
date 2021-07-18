import {Button} from '@body-ui/button'
import {Box, Container, Flex, Grid} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {useState} from 'react'

export default function BoxStory() {
  const [render, setRender] = useState(false)

  return (
    <Flex
      direction="column"
      // gap={3}
      // scheme="dark"
      palette="brand"
    >
      <Box padding={4}>
        <Button onClick={() => setRender((prev) => !prev)} text="Render" />
      </Box>

      {render && (
        <>
          {/* Navbar */}
          <Box
            padding={[3, 4]}
            // scheme="dark"
            palette="base"
          >
            <Text>Body</Text>
          </Box>

          <Container
            marginY={4}
            padding={4}
            palette="brand"
            radius={2}
            scheme="light"
            shadow={3}
            tone="brand"
            width={0}
          >
            <Text size={3}>Title</Text>

            <Box fg="brand" marginTop={2} mode="muted">
              <Text size={1}>Subitle</Text>
            </Box>

            <Box border marginTop={4}>
              <Text>Box</Text>
            </Box>

            <Box border marginTop={4} padding={3}>
              <Text>Box with `padding=3`</Text>
            </Box>

            <Box layout="flex" marginTop={4}>
              <Button mode="solid" padding={3} radius={2} text="Button" tone="critical" />
            </Box>
          </Container>

          <Grid borderTop columns={3} gap={3} padding={[3, 4]}>
            <Box fg="positive" flex={1} mode="muted" padding={3} radius={2} shadow={3}>
              <Text size={4}>#1</Text>
            </Box>

            <Box flex={1} tone="caution" mode="solid" padding={3} radius={2} shadow={3}>
              <Text size={4}>#2</Text>
            </Box>

            <Box flex={2} tone="critical" mode="solid" padding={3} radius={2} shadow={3}>
              <Text size={4}>#3</Text>
            </Box>
          </Grid>

          <Box borderTop flex={1} layout={['hidden', 'flex', 'hidden', 'flex']}>
            <Box flex={1} padding={[3, 4]}>
              <Box>
                <Text>Base</Text>
              </Box>
              <Box padding={[2, 3]} palette="brand">
                <Text>Brand #1</Text>
              </Box>
              <Box padding={[2, 4]} palette="brand">
                <Text>Brand #2</Text>
              </Box>
              <Box bg="brand" borderTop padding={3}>
                <Text>Brand BG</Text>
              </Box>
              <Box fg="brand" padding={3}>
                <Text>Brand FG</Text>
              </Box>
              <Box padding={3} palette="positive">
                <Text>Positive</Text>
              </Box>
              <Box padding={3} palette="caution">
                <Text>Caution</Text>
              </Box>
              <Box padding={3} palette="critical">
                <Text>Critical</Text>
              </Box>
            </Box>

            <Box borderLeft flex={1} padding={[3, 4]}>
              <Text>Column 2</Text>
              <Box marginTop={[1, 2, 3, 4, 5, 6, 7]}>
                <Text>Test</Text>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Flex>
  )
}
