import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import{GiConfirmed} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { FaHourglass } from 'react-icons/fa';
import {GoIssueClosed} from 'react-icons/go'
import './styles.css'
import { UserContext } from '../../Context/UserContext';

Modal.setAppElement('#root');

const SendModel = ({ isOpen, onRequestClose, onSend }) => {
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');
  const [loading,setLoading]=useState(true)
const {client,vencimento} =useContext(UserContext)
const [error,setError]=useState(false)
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSmsChange = (event) => {
    setSms(event.target.value);
  };

  const handleSend = () => {
    var phonePattern = /^[0-9]{10}$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(!phonePattern.test(sms) || !emailPattern.test(email)){
      setError(true)
      return
    }
   
    onSend(email, sms);
   // onRequestClose();
    if(loading === true){
      setLoading(false)
    }
    if (loading === false){
      setLoading(true)
    }
  };

  return (<>{ loading ?(
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formalizar acordo"
    >
     
      <h2 id='send-title'>Formalização de acordo</h2>
<div className='informative'>
<p>Gerendo um boleto para quitação do seu  contrato consignado de nº{client.contrato} no valor de {client.valor - client.valor / 100 * client.desconto}R$ com vencimento para o dia {vencimento.toLocaleDateString()}</p>

<span className='warning'>Caso haja uma quebra de acordo não havera possibilidade de novos acordos</span>
</div>

      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" required />
      </div>
      <div>
        <label>SMS:</label>
        <input type="text" value={sms} onChange={handleSmsChange} pattern="[0-9]{10}" required />
      </div>
      {error? <span id='error'>Preencha os campos corretamente </span>:''}
      <button  id='confirm-btn' onClick={handleSend}><GiConfirmed/></button>
      <button  id='close-btn' onClick={onRequestClose}><AiFillCloseCircle/></button>
   
    
    </Modal>)
    : (
      <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formalizar acordo">

<div className="rotating-hourglass">
      <FaHourglass fontSize={30} />
    </div>
        <h2>Enviando Acordo...</h2>
        <p>O envio do boledo do acordo tem um prazo de envio de 2 a 4 horas</p>
 <button id='load-close' onClick={()=> onRequestClose()}>

 <GoIssueClosed  fontSize={35}/>
 </button>
      </Modal>
    )}
    
    </>)
  
  
}

export default SendModel
