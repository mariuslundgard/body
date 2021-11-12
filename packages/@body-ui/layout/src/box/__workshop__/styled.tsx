import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'

const StyledBox = styled(Box)({
  $debugName: 'styled-box',
  backgroundColor: 'red',
})

export default function StyledStory() {
  return (
    <Box padding={4}>
      <StyledBox layout="block" marginY={3} padding={5}>
        Hello
      </StyledBox>
    </Box>
  )
}
