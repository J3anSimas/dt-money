import { SummaryCard, SummaryContainer } from './summary.styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'
import Loading from '../Loading/loading.component'
import { useTransactions } from '../../hooks/useTransactions'

export default function Summary(): JSX.Element {
  const { isLoading } = useTransactions()
  const summary = useSummary()

  return (
    <SummaryContainer>
      {isLoading ? (
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
            {isLoading ? (
              <Loading />
            ) : (
              <strong>{priceFormatter.format(summary.income)}</strong>
            )}
          </SummaryCard>
          <SummaryCard>
            <header>
              <span>Saídas</span>
              <ArrowCircleDown size={32} color="#f75a68" />
            </header>

            <strong>{priceFormatter.format(summary.outcome)}</strong>
          </SummaryCard>
          <SummaryCard variant="green">
            <header>
              <span>Total</span>
              <CurrencyDollar size={32} color="#fff" />
            </header>

            <strong>{priceFormatter.format(summary.total)}</strong>
          </SummaryCard>
        </>
      )}
    </SummaryContainer>
  )
}
