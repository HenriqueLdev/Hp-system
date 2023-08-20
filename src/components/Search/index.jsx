import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import './styles.css';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import clientsData from '../../../mock';

const Form = () => {
  const { cpf, setCpf, client,setClient } = useContext(UserContext);

  const onCpfChange = (e) => {
    const inputValue = e.target.value;
    setCpf(inputValue);
    console.log(cpf)
  };

  const findClient = (iCpf) => {
    const normalizedCPF = iCpf.replace(/\D/g, ''); 

    const foundClient = clientsData.find(client => client.cpf.replace(/\D/g, '') === normalizedCPF);
    setClient(foundClient)
  console.log(client)
    return foundClient || null;
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
        <Link to='/renegociar'>
          <button onClick={() => setClient(findClient(cpf))}>Consultar</button>
        </Link>
        <ReCAPTCHA sitekey="Your client site key" />
      </form>
    </div>
  );
}

export default Form;
