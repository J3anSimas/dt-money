import Header from '../../components/Header/header.component'
import Loading from '../../components/Loading/loading.component'
import Summary from '../../components/Summary/summary.component'
import { useTransactions } from '../../hooks/useTransactions'
import { dateFormateter, priceFormatter } from '../../utils/formatter'
import { useQuery } from 'react-query'
import SearchForm from './components/SearchForm/search-form.component'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableContainer
} from './transactions.styles'
import { useState } from 'react'
import { getTransactionData } from '../../api/getTransactions'

export type TTransaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: Date
}
export default function Transactions(): JSX.Element {
  const [query, setQuery] = useState('')
  const { data, isFetching, refetch } = useQuery<TTransaction[]>(
    'transactions',
    async () => {
      return await getTransactionData(query)
    }
  )

  function onChangingQuery(value: string): void {
    setQuery(value)
  }
  async function onSubmitQuery(): Promise<void> {
    await refetch()
    setQuery('')
  }
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <TransactionsTableContainer>
        <SearchForm
          onChangingQuery={onChangingQuery}
          query={query}
          onSubmitQuery={onSubmitQuery}
        />
        <TransactionsTable>
          {isFetching ? (
            <Loading size={48} />
          ) : (
            <tbody>
              {data?.map((transaction) => (
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
          )}
        </TransactionsTable>
      </TransactionsTableContainer>
    </TransactionsContainer>
  )
}
