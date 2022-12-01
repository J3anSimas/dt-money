import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App (): JSX.Element {
  return (<ThemeProvider theme={defaultTheme}>
    <h1>Hello</h1>
    <GlobalStyle />
  </ThemeProvider>)
}
