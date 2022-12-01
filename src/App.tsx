import { ThemeProvider } from 'styled-components'
import Transactions from './pages/Transactions/transactions.page'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App (): JSX.Element {
  return (<ThemeProvider theme={defaultTheme}>
    <Transactions />
    <GlobalStyle />
  </ThemeProvider>)
}
