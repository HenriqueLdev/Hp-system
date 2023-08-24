import React, { useContext, useState } from 'react';
import './styles.css';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import CalendarModal from '../../components/CalendarModal';
import SendModel from '../../components/SendModel';
import { UserContext } from '../../Context/UserContext';




const Reneg = () => {

  const {client } = useContext(UserContext);

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
       

        <div className="reneg-intro">
          <p>{client.nomeCompleto} você foi contemplado(a) com {client.desconto}% de desconto!</p>
          <p>
            Escolha uma data dentro da nossa ossada e uma forma de envio do seu boleto{' '}
          </p>
        </div>

        <div className="descon-container">
          <div className="userDescon">
            <AiFillFire fontSize={35} /> <p>{client.desconto}% de desconto</p>
          </div>

          <div className="values-reneg">

            <span id='numContrato'>n°{client.contrato}</span>
            <p>de: {client.valor}R$ por: { client.valor - client.valor / 100 * client.desconto}R$</p>
          </div>

          <div className="debito-info">
            <p>Parcelas: {client.parcelas}</p>
            <p>Atraso: {client.diasEmAtraso}</p>
            <p>Modalidade : Quitação de contrato</p>
          </div>

          <>
            <button onClick={openModal}><BsFillCalendarEventFill fontSize={25}/></button>
            <span className='actions'>Vencimento de acordo</span>
            <button onClick={openModalSmsEmail}><FaHandshake fontSize={25}/></button>
            <span className='actions'>Confirmar acordo</span>
            <div className="boleto-info">
              <p>Vencimento: {selectedDate ? selectedDate.toLocaleDateString() : ''}</p>
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
