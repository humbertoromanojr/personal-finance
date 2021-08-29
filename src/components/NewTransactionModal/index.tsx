import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import closeImage from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { api } from '../../services/api';
import Styles from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setType('deposit');
    setAmount(0);
    setTitle('');
    setCategory('');

    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >

        <button type="button" onClick={onRequestClose} className="react-modal-button-close">
          <img src={closeImage} alt="Fechar modal" />
        </button>

        <Styles.Container onSubmit={handleCreateTransaction}>
          <h2>Cadastrar Transação</h2>

          <input 
            placeholder="Título"
            value={title} 
            onChange={event => setTitle(event.target.value)}
          />
          <input 
            type="number" 
            placeholder="Valor"
            value={amount} 
            onChange={event => setAmount(Number(event.target.value))}
          />

          <Styles.TransactionTypeContainer>
            <Styles.RadioBox 
              type="button"
              isActive={type === 'deposit'}
              activeColor="green"
              onClick={() => { setType('deposit') }}
            > 
              <img src={incomeImage} alt="Entrada" />
              <span>Entrada</span>
            </Styles.RadioBox>

            <Styles.RadioBox 
              type="button"
              isActive={type === 'withdraw'}
              activeColor="red"
              onClick={() => { setType('withdraw') }}
            > 
              <img src={outcomeImage} alt="Saida" />
              <span>Saída</span>
            </Styles.RadioBox>
          </Styles.TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
            value={category} 
            onChange={event => setCategory(event.target.value)}
          />
          
          <button type="submit">Cadastrar</button>
        </Styles.Container>
    </Modal>
  );
}