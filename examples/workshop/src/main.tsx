import {studioTheme, ThemeProvider, ThemeColorSchemeKey, usePrefersDark} from '@sanity/ui'
import {createLocationStore, Workshop} from '@sanity/ui-workshop'
import React, {StrictMode, useMemo, useState} from 'react'
import ReactDOM from 'react-dom'
import {config} from './config'

function Root() {
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>(prefersDark ? 'dark' : 'light')
  const locationStore = useMemo(() => createLocationStore(), [])

  return (
    <ThemeProvider scheme={scheme} theme={studioTheme}>
      <Workshop
        config={config}
        locationStore={locationStore}
        scheme={scheme}
        onSchemeChange={setScheme}
      />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
)
