import Header from '../../components/Header/header.component'
import Summary from '../../components/Summary/summary.component'
import { useTransactions } from '../../contexts/transactions.context'
import { dateFormateter, priceFormatter } from '../../utils/formatter'
import SearchForm from './components/SearchForm/search-form.component'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableContainer
} from './transactions.styles'

export default function Transactions(): JSX.Element {
  const { transactions } = useTransactions()
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <TransactionsTableContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHightlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {dateFormateter.format(new Date(transaction.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </TransactionsContainer>
  )
}
