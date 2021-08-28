
import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import Styles from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  category: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pr-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pr-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
    </Styles.Container>
  )
}