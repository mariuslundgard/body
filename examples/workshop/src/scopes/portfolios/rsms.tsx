import {Box, Container} from '@body/layout'
import {Text} from '@body/typography'
import {SquareIcon} from '@sanity/icons'

export default function InheritanceStory() {
  return (
    <Box direction="column" layout="flex" mode="muted" scheme="dark" style={{minHeight: '100%'}}>
      <Container flex={1} mode="default" palette="base" scheme="light" width={4}>
        <Box
          columns={[2, 2, 4, 6]}
          direction="column"
          fg="brand"
          gap={6}
          layout="grid"
          padding={[4, 4, 6, 8]}
          tone="base"
        >
          <Box column={[2, 2, 2, 4]} fg="brand" marginY={6} order={[-10]}>
            <Text size={4}>
              <strong>Hello, I’m Rasmus</strong>
            </Text>
          </Box>

          <Box
            column={2}
            direction="column"
            fg="base"
            gap={3}
            layout="flex"
            marginTop={[0, 0, 6]}
            marginBottom={[0, 0, 5]}
            mode="muted"
            order={[-9]}
          >
            <Box fg="critical" mode="muted">
              <Text size={3}>
                <a href="#debug" style={{textDecoration: 'none'}}>
                  <SquareIcon style={{width: 25, height: 25, margin: '-6px -4px'}} />
                </a>
              </Text>
            </Box>
            <Text size={3}>
              <a href="#debug" style={{textDecoration: 'none'}}>
                About
              </a>
            </Text>
            <Text size={3}>
              <a href="#debug" style={{textDecoration: 'none'}}>
                Projects
              </a>
            </Text>
            <Text size={3}>
              <a href="#debug" style={{textDecoration: 'none'}}>
                Work
              </a>
            </Text>
            <Text size={3}>
              <a href="#debug" style={{textDecoration: 'none'}}>
                Photography
              </a>
            </Text>
            <Text size={3}>
              <a href="#debug" style={{textDecoration: 'none'}}>
                Shop
              </a>
            </Text>
          </Box>

          <Box column={2}>
            <Text size={3}>
              <strong>Projects</strong>
            </Text>
          </Box>

          <Box column={2} order={[-1, -1, -1, 0]}>
            <Text size={3}>
              <strong>Thoughts &amp; ideas</strong>
            </Text>
          </Box>

          <Box column={[2, 2, 3, 2]} fg="default" mode="muted" order={[-2, -2, -2, 0]}>
            <Text size={3}>
              I’m a Swedish he/him living in San Francisco, California. Software is the medium
              through which I express myself.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
