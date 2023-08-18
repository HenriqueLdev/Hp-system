import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'

const Form=()=>{
    const [cpf,setCpf] = useState('')
    return(
        <>
        
        <div className="form-display">

 <div className='form-banner'>
    <p>Consulte ofertas exclusivamente feitas para você no formulario abaixo</p>
 </div>
<form action="">
<label htmlFor="">Consulte com seu cpf</label>
<input type="text" placeholder="XXX-XXX-XXX-XX" value='000-000-000-00' />
<button ><Link to='/renegociar'>Consultar</Link></button>
<ReCAPTCHA    sitekey="Your client site key"/>
</form>
        </div>
        </>
    )
}

export default Form