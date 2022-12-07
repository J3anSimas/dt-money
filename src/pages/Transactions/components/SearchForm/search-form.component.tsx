import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { SearchFormContainer } from './search-form.styles'

type TSearchFormProps = {
  query: string
  onChangingQuery: (value: string) => void
  onSubmitQuery: () => Promise<void>
}
export default function SearchForm({
  onChangingQuery,
  query,
  onSubmitQuery
}: TSearchFormProps): JSX.Element {
  async function handleSearchTransition(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault()
    await onSubmitQuery()
  }
  return (
    <SearchFormContainer
      onSubmit={async (e) => await handleSearchTransition(e)}
    >
      <input
        type="text"
        placeholder="Busque por transações"
        value={query}
        onChange={(e) => onChangingQuery(e.target.value)}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Busca
      </button>
    </SearchFormContainer>
  )
}
