import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import Styles from './styles';

export function Dashboard() {
  return (
    <Styles.Container>
      <Summary />
      <TransactionsTable />
    </Styles.Container>
  )
}