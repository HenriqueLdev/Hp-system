import React, { useState } from 'react';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css'

Modal.setAppElement('#root');

const CalendarModal = ({ isOpen, onRequestClose, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelect = () => {
    onDateSelect(selectedDate);
    onRequestClose();
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 10);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Vencimento de boleto"
    >
      <h2>Selecione uma data:</h2>
      <Calendar  onChange={handleDateChange} value={selectedDate} minDate={minDate} maxDate={maxDate} />
      <p>Data selecionada: {selectedDate.toLocaleDateString()}</p>
      <button  className='dateb'onClick={handleSelect}>Selecionar</button>
      <button className='dateb' onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default CalendarModal;
