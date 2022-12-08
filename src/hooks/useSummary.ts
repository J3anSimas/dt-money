import { TTransaction } from '../pages/Transactions/transactions.page'

export type TSummary = {
  income: number
  outcome: number
  total: number
}
export function useSummary(data: TTransaction[]): TSummary {
  const summary = data.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    { income: 0, outcome: 0, total: 0 }
  )
  return summary
}
