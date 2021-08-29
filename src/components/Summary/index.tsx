import incomingImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import Styles from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Styles.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomingImage} alt="incoming"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="outcome"/>
        </header>
        <strong>- 
          {new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="bg-green">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Styles.Container>
  )
}