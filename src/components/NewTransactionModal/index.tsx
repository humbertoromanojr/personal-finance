import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImage from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import Styles from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
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

          <input placeholder="Título" />
          <input type="number" placeholder="Valor" />

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

          <input placeholder="Categoria" />
          
          <button type="submit">Cadastrar</button>
        </Styles.Container>
    </Modal>
  );
}