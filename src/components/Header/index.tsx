import logoImage from '../../assets/logo.png';
import Styles from './styles';

export function Header() {
  return (
    <Styles.Container>
      <Styles.Content>
        <img src={logoImage} alt="Personal Finance" />
        <button type="button" title="New Transaction">
          Nova transação
        </button>
      </Styles.Content>
    </Styles.Container>
  )
}