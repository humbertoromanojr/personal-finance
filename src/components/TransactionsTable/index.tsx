
import { useEffect } from 'react';

import { api } from '../../services/api';
import Styles from './styles';

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de websites</td>
            <td className="deposit">R$6.200,00</td>
            <td>Desenvolvimento</td>
            <td>01/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$500,00</td>
            <td>Casa</td>
            <td>10/08/2021</td>
          </tr>
          <tr>
            <td>Cartão Beneficios</td>
            <td className="deposit">R$1.057,00</td>
            <td>Desenvolvimento</td>
            <td>02/08/2021</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$50,00</td>
            <td>Casa</td>
            <td>05/08/2021</td>
          </tr>
          <tr>
            <td>Inglês</td>
            <td className="withdraw">- R$217,00</td>
            <td>Estudos</td>
            <td>15/08/2021</td>
          </tr>
          <tr>
            <td>NuBank</td>
            <td className="withdraw">- R$817,00</td>
            <td>Casa</td>
            <td>22/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Styles.Container>
  )
}