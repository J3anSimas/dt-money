import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { SearchFormContainer } from './search-form.styles'

export default function SearchForm(): JSX.Element {
  const [filter, setFilter] = useState('')

  function handleSearchTransition(): void {}
  return (
    <SearchFormContainer onSubmit={handleSearchTransition}>
      <input
        type="text"
        placeholder="Busque por transações"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Busca
      </button>
    </SearchFormContainer>
  )
}
