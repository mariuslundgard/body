import {Box, Container} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {useSelect} from '@sanity/ui-workshop'

const BODY_MODE_OPIONS = {
  '–': '',
  Default: 'default',
  Muted: 'muted',
  Solid: 'solid',
}

const BODY_RADIUS_OPTIONS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
}

const BODY_SPACE_OPTIONS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
}

const BODY_TONE_OPTIONS = {
  '-': '',
  Positive: 'positive',
  Caution: 'caution',
  Critical: 'critical',
}

const BODY_VARIANT_OPTIONS = {
  '–': '',
  Bleed: 'bleed',
  Ghost: 'ghost',
  Primary: 'primary',
}

export default function PropsStory() {
  const mode = useSelect('Mode', BODY_MODE_OPIONS, undefined) || undefined
  const radius = useSelect('Radius', BODY_RADIUS_OPTIONS, undefined) || undefined
  const tone = useSelect('Tone', BODY_TONE_OPTIONS, undefined) || undefined
  const bg = useSelect('Background', BODY_TONE_OPTIONS, undefined) || undefined
  const fg = useSelect('Foreground', BODY_TONE_OPTIONS, undefined) || undefined
  const padding = useSelect('Padding', BODY_SPACE_OPTIONS, undefined) || undefined
  const shadow = useSelect('Shadow', BODY_RADIUS_OPTIONS, undefined) || undefined
  const variant = useSelect('Variant', BODY_VARIANT_OPTIONS, undefined) || undefined

  return (
    <Box height="100%">
      <Container padding={[4, 5, 6]}>
        <Box padding={4} palette="base">
          <Box
            bg={bg}
            fg={fg}
            mode={mode}
            padding={padding}
            radius={radius}
            shadow={shadow}
            tone={tone}
            variant={variant}
          >
            <Text>Box</Text>
          </Box>
        </Box>
        <Box padding={4} palette="brand">
          <Box
            bg={bg}
            fg={fg}
            mode={mode}
            padding={padding}
            radius={radius}
            shadow={shadow}
            tone={tone}
            variant={variant}
          >
            <Text>Box</Text>
          </Box>
        </Box>
        <Box padding={4} palette="accent">
          <Box
            bg={bg}
            fg={fg}
            mode={mode}
            padding={padding}
            radius={radius}
            shadow={shadow}
            tone={tone}
            variant={variant}
          >
            <Text>Box</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
