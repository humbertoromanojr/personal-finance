import { useContext } from 'react';

import incomingImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import Styles from './styles';

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions)

  return (
    <Styles.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomingImage} alt="incoming"/>
        </header>
        <strong>R$5500,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="outcome"/>
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="bg-green">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="total"/>
        </header>
        <strong>R$5000,00</strong>
      </div>
    </Styles.Container>
  )
}