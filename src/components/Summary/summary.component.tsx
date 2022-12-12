import { SummaryCard, SummaryContainer } from './summary.styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { TSummary, useSummary } from '../../hooks/useSummary'
import Loading from '../Loading/loading.component'
import { getTransactionData } from '../../api/getTransactions'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

export default function Summary(): JSX.Element {
  const { data, isFetching, isSuccess } = useQuery(
    'transactions',
    async () => await getTransactionData()
  )
  const [summary, setSummary] = useState<TSummary>({
    income: 0,
    outcome: 0,
    total: 0
  })

  useEffect(() => {
    setSummary(useSummary(data))
  }, [data])

  return (
    <SummaryContainer>
      {isFetching ? (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      ) : (
        <>
          <SummaryCard>
            <header>
              <span>Entradas</span>
              <ArrowCircleUp size={32} color="#00b37e" />
            </header>
            {isFetching ? (
              <Loading />
            ) : (
              <strong>
                {summary !== undefined && priceFormatter.format(summary.income)}
              </strong>
            )}
          </SummaryCard>
          <SummaryCard>
            <header>
              <span>Saídas</span>
              <ArrowCircleDown size={32} color="#f75a68" />
            </header>

            <strong>
              {summary !== undefined && priceFormatter.format(summary.outcome)}
            </strong>
          </SummaryCard>
          <SummaryCard variant="green">
            <header>
              <span>Total</span>
              <CurrencyDollar size={32} color="#fff" />
            </header>

            <strong>
              {summary !== undefined && priceFormatter.format(summary.total)}
            </strong>
          </SummaryCard>
        </>
      )}
    </SummaryContainer>
  )
}
