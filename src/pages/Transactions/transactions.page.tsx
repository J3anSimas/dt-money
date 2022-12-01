import Header from '../../components/Header/header.component'
import Summary from '../../components/Summary/summary.component'
import { TransactionsContainer } from './transactions.styles'

export default function Transactions (): JSX.Element {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
    </TransactionsContainer>
  )
}
