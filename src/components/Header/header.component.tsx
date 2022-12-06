import * as Dialog from '@radix-ui/react-dialog'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton
} from './header.styles'
import LogoImage from '../../assets/Logo.svg'
import NewTransactionModal from '../NewTransactionModal/new-transaction-modal.component'
export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
