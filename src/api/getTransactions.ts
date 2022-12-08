import { api } from '../lib/axios'
import { TTransaction } from '../pages/Transactions/transactions.page'

export async function getTransactionData(
  query?: string
): Promise<TTransaction[]> {
  const response = await api.get('/transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      q: query
    }
  })
  return response.data
}
