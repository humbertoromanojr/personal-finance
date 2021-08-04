import logoImage from '../../assets/logo.png';
import Styles from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  
  return (
    <Styles.Container>
      <Styles.Content>
        <img src={logoImage} alt="Personal Finance" />
        <button 
          type="button" 
          title="New Transaction" 
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>

        
      </Styles.Content>
    </Styles.Container>
  )
}