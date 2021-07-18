import {studioTheme, ThemeProvider, ThemeColorSchemeKey, usePrefersDark} from '@sanity/ui'
import {Workshop, WorkshopLocation} from '@sanity/ui-workshop'
import {StrictMode, useCallback, useMemo, useState} from 'react'
import ReactDOM from 'react-dom'
import {LocationProvider, useLocation} from './location'
import {scopes} from './scopes'

function Root() {
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>(prefersDark ? 'dark' : 'light')
  const {path, pushState, query, replaceState} = useLocation()

  const handleLocationPush = useCallback(
    (newLoc: WorkshopLocation) => pushState(newLoc),
    [pushState]
  )

  const handleLocationReplace = useCallback(
    (newLoc: WorkshopLocation) => replaceState(newLoc),
    [replaceState]
  )

  const location: WorkshopLocation = useMemo(() => ({path, query}), [path, query])

  return (
    <ThemeProvider scheme={scheme} theme={studioTheme}>
      <Workshop
        frameUrl="/frame/"
        location={location}
        onLocationPush={handleLocationPush}
        onLocationReplace={handleLocationReplace}
        scheme={scheme}
        scopes={scopes}
        setScheme={setScheme}
        title="Body"
      />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <LocationProvider>
      <Root />
    </LocationProvider>
  </StrictMode>,
  document.getElementById('root')
)
