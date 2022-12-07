import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

type TTransaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: Date
}

export type TTransactionsContext = {
  transactions: TTransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  isLoading: boolean
}

export const TransactionsContext = createContext({} as TTransactionsContext)

export default function TransactionsProvider({
  children
}: {
  children: ReactNode
}): JSX.Element {
  const [transactions, setTransactions] = useState<TTransaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  async function fetchTransactions(query?: string): Promise<void> {
    setIsLoading(true)
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setTransactions(response.data)
    setIsLoading(false)
  }
  useEffect(() => {
    void fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, isLoading }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
