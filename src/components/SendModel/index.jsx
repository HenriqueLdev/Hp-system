import React, { useState } from 'react'
import Modal from 'react-modal'
import{GiConfirmed} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import './styles.css'

Modal.setAppElement('#root');

const SendModel = ({ isOpen, onRequestClose, onSend }) => {
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');
  const [loading,setLoading]=useState(true)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSmsChange = (event) => {
    setSms(event.target.value);
  };

  const handleSend = () => {
    onSend(email, sms);
    onRequestClose();
    if(loading === true){
      setLoading(false)
    }
    if (loading === false){
      setLoading(true)
    }
  };

  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formalizar acordo"
    >
      { loading ? (<>
      <h2 id='send-title'>Formalização de acordo</h2>
<div className='informative'>
<p>Gerendo um boleto para quitação do seu  contrato consignado de nº12323216 no valor de 60 com vencimento para o dia 00/00/0000</p>

<span className='warning'>Caso haja uma quebra de acordo não havera possibilidade de novos acordos</span>
</div>

      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>SMS:</label>
        <input type="text" value={sms} onChange={handleSmsChange} />
      </div>
      <button  id='confirm-btn' onClick={handleSend}><GiConfirmed/></button>
      <button  id='close-btn' onClick={onRequestClose}><AiFillCloseCircle/></button></>)
      : <>
      
      <h2>Formalizando acordo</h2>
      </>
    }
    </Modal>)
  
  
}

export default SendModel
