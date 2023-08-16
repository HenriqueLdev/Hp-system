import React, { useState } from 'react'
import Modal from 'react-modal'
import './styles.css'

Modal.setAppElement('#root');

const SendModel = ({ isOpen, onRequestClose, onSend }) => {
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSmsChange = (event) => {
    setSms(event.target.value);
  };

  const handleSend = () => {
    onSend(email, sms);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Enviar Notificação"
    >
      <h2>Enviar Notificação</h2>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>SMS:</label>
        <input type="text" value={sms} onChange={handleSmsChange} />
      </div>
      <button onClick={handleSend}>Enviar</button>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default SendModel
