import {Button} from '@body-ui/button'
import {Box} from '@body-ui/layout'
import {useBoolean, useSelect} from '@sanity/ui-workshop'

const BODY_FONT_SIZE_OPTIONS = {
  '–': 0,
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
}

const BODY_MODE_OPIONS: Record<string, '' | 'default' | 'solid' | 'muted'> = {
  '–': '',
  Default: 'default',
  Muted: 'muted',
  Solid: 'solid',
}

const BODY_RADIUS_OPTIONS = {
  '–': 0,
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
}

const BODY_SPACE_OPTIONS = {
  '–': 0,
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
  Default: 'default',
  Positive: 'positive',
  Caution: 'caution',
  Critical: 'critical',
}

export default function PropsStory() {
  const border = useBoolean('Border', false)
  const mode = useSelect('Mode', BODY_MODE_OPIONS, undefined) || undefined
  const radius = useSelect('Radius', BODY_RADIUS_OPTIONS, undefined) || undefined
  const size = useSelect('Size', BODY_FONT_SIZE_OPTIONS, undefined) || undefined
  const tone = useSelect('Tone', BODY_TONE_OPTIONS, undefined) || undefined
  const padding = useSelect('Padding', BODY_SPACE_OPTIONS, undefined) || undefined

  return (
    <Box padding={4} palette="base" tone="default">
      <Button
        border={border}
        mode={mode}
        padding={padding}
        radius={radius}
        size={size}
        text="Button"
        tone={tone}
      />
    </Box>
  )
}
