import React, { useState } from 'react';
import './styles.css';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import CalendarModal from '../../components/CalendarModal';
import SendModel from '../../components/SendModel';

const Reneg = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    closeModal();
  };

  const [modalSmsEmailIsOpen, setModalSmsEmailIsOpen] = useState(false);

  const openModalSmsEmail = () => {
    setModalSmsEmailIsOpen(true);
  };

  const closeModalSmsEmail = () => {
    setModalSmsEmailIsOpen(false);
  };
  const handleSendNotification = (email, sms) => {
    console.log('Email:', email);
    console.log('SMS:', sms);
  };
  return (
    <>
      <div className="reneg-container">
        <div className="reneg-header">
          <p id="UserName">
            <FaUserCircle fontSize={24} /> Paulo Sergio
          </p>
          <p id="UserCpf">CPF: 000-000-000-00</p>
          <p id="ContraId">Seu contrato : 1213430282</p>
        </div>

        <div className="reneg-intro">
          <p>Paulo você foi contemplado com 60% de desconto!</p>
          <p>
            Escolha uma data dentro da nossa ossada e uma forma de envio do seu boleto{' '}
          </p>
        </div>

        <div className="descon-container">
          <div className="userDescon">
            <AiFillFire fontSize={35} /> <p>60% de desconto</p>
          </div>

          <div className="values-reneg">
            <p>de: 100 por: 60</p>
          </div>

          <div className="debito-info">
            <p>Parcelas: 2</p>
            <p>Atraso: 120 dias</p>
            <p>Modalidade : Quitação de contrato</p>
          </div>

          <>
            <button onClick={openModal}>Vencimento do boleto</button>
            <button onClick={openModalSmsEmail}>Gerar acordo</button>

            <div className="boleto-info">
              <p>Vencimento: {selectedDate ? selectedDate.toLocaleDateString() : ''}</p>
              <p>Valor: 100</p>
            </div>
          </>
<SendModel isOpen={modalSmsEmailIsOpen} onRequestClose={closeModalSmsEmail} onSend={handleSendNotification}/>
          <CalendarModal isOpen={modalIsOpen} onRequestClose={closeModal} onDateSelect={handleDateSelect} />
        </div>
      </div>
    </>
  );
};

export default Reneg;
