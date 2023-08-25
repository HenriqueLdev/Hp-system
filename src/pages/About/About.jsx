import './styles.css'
import Header from '../../components/Header/index'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
const About =()=>{

    return(
        <>
        
        <Header/>
        <div className="information">
 
 <div className='about-title'>
    <p>Sobre nós</p>
 </div>

<div className="info-card">

    <p className="info-title">
        O que é a hp system
    </p>
    <p className="info-desc">
Somos uma fintech parceira do banco DV com foco no cliente.Nós da hp system junto com o banco DV criamos uma oportunidade
<br />
única para nossos clientes que não poderam pagar seus empréstimos por conta de imprevistos  ou problemas financeiros estarem
<br />
mantendo um bom relacionamento com o banco DV e mantendo seu nome limpo se livrando de ligações e mensagens de cobrança e dando
descontos especiais e personalizados para cada cliente
    </p>
</div>
<div className="info-card">

    <p className="info-title">
        Como funcionam nossos descontos
    </p>
    <p className="info-desc">

de acordo com alguns requisitos você poderá realizar a quitação do seu contrato com desconto

    </p>

    
        <div className='rules'> 1° Parcelas entre 15 e 190 dias em atraso</div>
        <div className='rules'> 2º Já ter feito o pagamento de alguma parcela anteriormente</div>
        <div className='rules'> 3º Nunca ter pagado com desconto antes</div>
        <div className='rules'> 4º Valor mínimo devido de 400 reais</div>
    
</div>

<div className="info-card">
    <p className="info-title">
        Como posso ver os descontos disponíveis?
    </p>

    <p> Consulte ofertas exclusivas feitas especialmente para você no <Link to='/renegociar'><span id='hpconsul'>hpSystem</span></Link></p>
</div>
        </div>
        <Footer/>
        </>
   
  
   )
}

export default About