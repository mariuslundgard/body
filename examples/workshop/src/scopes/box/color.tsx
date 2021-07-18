import {Box} from '@body/layout'
import {Text} from '@body/typography'

export default function ColorStory() {
  return (
    <Box columns={2} layout="grid">
      <Scheme scheme="light" />
      <Scheme scheme="dark" />
    </Box>
  )
}

function Scheme({scheme}: {scheme: 'light' | 'dark'}) {
  return (
    <Box border scheme={scheme} padding={4} palette="base">
      <Box marginBottom={3}>
        <Text>Scheme: {scheme}</Text>
      </Box>
      <Palette palette="base" />
      <Palette palette="brand" />
      <Palette palette="accent" />
    </Box>
  )
}

function Palette({palette}: {palette: string}) {
  return (
    <Box border padding={4} palette={palette}>
      <Box marginBottom={3}>
        <Text>Palette: {palette}</Text>
      </Box>
      <Tone tone="default" />
      <Tone tone="positive" />
      <Tone tone="caution" />
      <Tone tone="critical" />
    </Box>
  )
}

function Tone({tone}: {tone: string}) {
  return (
    <Box border padding={4} tone={tone}>
      <Box marginBottom={3}>
        <Text>Tone: {tone}</Text>
      </Box>
      <Mode mode="default" />
      <Mode mode="muted" />
      <Mode mode="solid" />
    </Box>
  )
}

function Mode({mode}: {mode: string}) {
  return (
    <Box border padding={4} mode={mode}>
      <Box marginBottom={3}>
        <Text>Mode: {mode}</Text>
      </Box>
    </Box>
  )
}
