import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import './styles.css';
import { Link, useNavigate, } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import clientsData from '../../../mock';

const Form = () => {
  const { cpf, setCpf, client,setClient } = useContext(UserContext);
const [error,setError]=useState(false)
const [loading,setLoading]=useState(false)
const navigate= useNavigate()
  const onCpfChange = (e) => {
    const inputValue = e.target.value;
    setCpf(inputValue);
    console.log(cpf)
  };

const findClient= async (iCpf)=>{
  const normalizedCPF = iCpf.replace(/\D/g, ''); 
   const foundClient =  clientsData.find(client => client.cpf.replace(/\D/g, '') === normalizedCPF);
  
  if(foundClient){
     setClient(foundClient)
  }

    if(foundClient===undefined){
      setError(true)
    }
}

  const handleForm = (iCpf) => {
    

  
  findClient(iCpf)
    
    
  if(client){
    navigate('/renegociar')
  }
  };

  return (
    <div className="form-display">
      <div className='form-banner'>
        <p>Consulte ofertas exclusivamente feitas para você no formulário abaixo</p>
      </div>
      <form action="">
        <label htmlFor="">Consulte com seu CPF</label>
        <input
          type="text"
          value={cpf}
          placeholder="XXX.XXX.XXX-XX"
          onChange={(e) => onCpfChange(e)}
        />
          <button onClick={(e) =>{
            e.preventDefault()
            handleForm(cpf)}}>Consultar</button>
        {error ? <span>CPF NÃO ENCONTRADO</span> : null}
        <ReCAPTCHA sitekey="Your client site key" />
      </form>
    </div>
  );
}

export default Form;
