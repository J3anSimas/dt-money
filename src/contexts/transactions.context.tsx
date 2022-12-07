import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

type TTransaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: Date
}

type TTransactionsContext = {
  transactions: TTransaction[]
}

const TransactionsContext = createContext({} as TTransactionsContext)

export default function TransactionsProvider({
  children
}: {
  children: ReactNode
}): JSX.Element {
  const [transactions, setTransactions] = useState<TTransaction[]>([])
  async function getDataFromApi(): Promise<void> {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    void getDataFromApi()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(): TTransactionsContext {
  const transactions = useContext(TransactionsContext)
  return transactions
}
