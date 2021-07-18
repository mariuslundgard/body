import {ThemeProvider as BodyThemeProvider} from '@body-ui/core'
import {defaultTheme} from '@body-ui/theme-default'
import {studioTheme, ThemeColorSchemeKey, ThemeProvider as SanityThemeProvider} from '@sanity/ui'
import {WorkshopFrame} from '@sanity/ui-workshop'
import {StrictMode, useState} from 'react'
import ReactDOM from 'react-dom'
import {scopes} from '$workshop'

ReactDOM.render(<Root />, document.getElementById('root'))

function Root() {
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>('light')

  return (
    <StrictMode>
      <SanityThemeProvider scheme={scheme} theme={studioTheme}>
        <BodyThemeProvider scheme={scheme} theme={defaultTheme}>
          <WorkshopFrame frameUrl="/frame/" setScheme={setScheme} scopes={scopes} title="Body UI" />
        </BodyThemeProvider>
      </SanityThemeProvider>
    </StrictMode>
  )
}
