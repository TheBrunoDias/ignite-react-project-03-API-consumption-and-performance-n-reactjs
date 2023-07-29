import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo-dt-money.svg'
import { NewTransactionalModal } from '../NewTransactionalModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionalModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
