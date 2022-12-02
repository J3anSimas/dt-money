import Header from '../../components/Header/header.component'
import Summary from '../../components/Summary/summary.component'
import SearchForm from './components/SearchForm/search-form.component'
import { PriceHightlight, TransactionsContainer, TransactionsTable, TransactionsTableContainer } from './transactions.styles'

export default function Transactions (): JSX.Element {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <TransactionsTableContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento do site</td>
              <td>
                <PriceHightlight
                variant='income'
                >
                  R$ 12.400,00
                </PriceHightlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Desenvolvimento do site</td>
              <td>
                <PriceHightlight
                variant='outcome'
                >
                  R$ 12.400,00
                </PriceHightlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </TransactionsContainer>
  )
}
