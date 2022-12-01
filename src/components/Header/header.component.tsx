import { HeaderContainer, HeaderContent, NewTransactionButton } from './header.styles'
import LogoImage from '../../assets/Logo.svg'
export default function Header (): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
