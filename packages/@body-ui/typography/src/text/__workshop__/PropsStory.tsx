import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'

export default function PropsStory() {
  return (
    <Box direction="column" gap={3} layout="flex" padding={[4, 5, 6, 7]}>
      <Box>
        <strong>
          <Text size={[0, 1, 2, 3, 4]}>Text</Text>
        </strong>
      </Box>
      <Box mode="muted">
        <Text size={[0, 1, 2, 3, 4]}>Text</Text>
      </Box>
    </Box>
  )
}
