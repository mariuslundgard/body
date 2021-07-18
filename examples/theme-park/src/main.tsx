import {ThemeProvider} from '@body-ui/core'
import {defaultTheme} from '@body-ui/theme-default'
import {StrictMode} from 'react'
import {render} from 'react-dom'
import {App} from './App'

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
)

function Root() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  )
}
