import { useContext } from 'react'
import {
  TransactionsContext,
  TTransactionsContext
} from '../contexts/transactions.context'

export function useTransactions(): TTransactionsContext {
  const transactions = useContext(TransactionsContext)
  return transactions
}
