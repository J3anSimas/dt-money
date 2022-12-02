import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './search-form.styles'

export default function SearchForm (): JSX.Element {
  return (
    <SearchFormContainer>
      <input type="text" placeholder='Busque por transações' />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Busca
      </button>
    </SearchFormContainer>
  )
}
