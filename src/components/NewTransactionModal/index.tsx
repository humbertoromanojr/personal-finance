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

        <Styles.Container>
          <h2>Cadastrar Transação</h2>

          <input placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <Styles.TransactionTypeContainer>
            <button type="button">
              <img src={incomeImage} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={outcomeImage} alt="Saida" />
              <span>Saída</span>
            </button>
          </Styles.TransactionTypeContainer>
          <input placeholder="Categoria" />
          
          <button type="submit">Cadastrar</button>
        </Styles.Container>
    </Modal>
  );
}