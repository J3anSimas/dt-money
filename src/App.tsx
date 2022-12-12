import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from 'styled-components'
import Transactions from './pages/Transactions/transactions.page'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

const queryClient = new QueryClient()
export function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Transactions />
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
