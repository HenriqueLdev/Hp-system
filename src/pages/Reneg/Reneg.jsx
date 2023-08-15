import './styles.css'
import {FaUserCircle} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
const Reneg=()=>{
    return(
        <>
        <div className="reneg-container">
            <div className="reneg-header">
            <p id="UserName"> <FaUserCircle fontSize={24}/>   Paulo Sergio</p>
            <p id='UserCpf'> CPF: 000-000-000-00</p>
<p id="ContraId"> Seu contrato : 1213430282</p>
            </div>

<div className="descon-container">

    <div className='userDescon'> <AiFillFire fontSize={35}/> <p>Desconto de 60%</p> </div>

<div className="values-reneg">
<p> de: 100 por: 60</p>
</div>

<div className='debito-info'>
    <p>Parcelas: 2</p>
    <p>Atraso: 120 dias</p>
</div>

<form className='acAcordo'>
    <p>Quitação</p>
    <input type="email"  placeholder='Seu email'/>
    <button>Fechar acordo</button>
</form>
</div>
<div>


</div>

        </div>
        </>
    )
}

export default Reneg