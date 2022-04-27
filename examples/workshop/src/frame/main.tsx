import {ThemeProvider as BodyThemeProvider} from '@body/core'
import {defaultTheme} from '@body/theme-default'
import {studioTheme, ThemeColorSchemeKey, ThemeProvider as SanityThemeProvider} from '@sanity/ui'
import {WorkshopFrame} from '@sanity/ui-workshop'
import React, {StrictMode, useState} from 'react'
import ReactDOM from 'react-dom'
import {config} from '../config'

ReactDOM.render(<Root />, document.getElementById('root'))

function Root() {
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>('light')

  return (
    <StrictMode>
      <SanityThemeProvider scheme={scheme} theme={studioTheme}>
        <BodyThemeProvider scheme={scheme} theme={defaultTheme}>
          <WorkshopFrame config={config} setScheme={setScheme} />
        </BodyThemeProvider>
      </SanityThemeProvider>
    </StrictMode>
  )
}
