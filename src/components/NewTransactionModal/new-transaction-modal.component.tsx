import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useMutation, useQueryClient } from 'react-query'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from './new-transaction-modal.styles'
import { api } from '../../lib/axios'

const createTransactionFormValidationSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(0),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type TNewTransactionFormInputs = z.infer<
  typeof createTransactionFormValidationSchema
>

export default function NewTransactionModal(): JSX.Element {
  const queryClient = useQueryClient()
  const mutation = useMutation(
    async (transactionInput: {
      description: string
      price: number
      category: string
      type: 'income' | 'outcome'
      createdAt: Date
    }) => {
      return await api.post('/transactions', transactionInput)
    },
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries('transactions')
          .then(() => {})
          .catch((err) => console.error(err.message))
      }
    }
  )
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<TNewTransactionFormInputs>({
    resolver: zodResolver(createTransactionFormValidationSchema)
  })

  async function handleCreateTransaction(
    data: TNewTransactionFormInputs
  ): Promise<void> {
    mutation.mutate({ ...data, createdAt: new Date() })
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="text"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
