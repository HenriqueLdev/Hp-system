import './styles.css'
import Header from '../../components/Header/index'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
const About =()=>{

    return(
        <>
        
        <Header/>
        <div className="information">
<h3>Saiba um pouco sobre nós</h3>

<div className="info-card">

    <p className="info-title">
        O que é a hp system
    </p>
    <p className="info-desc">
Somos uma fintech parceira ddo banco DV com foco no cliente , nos da hp system junto com o banco DV criamos uma oportunidade
única para nossos clientes que não poderam pagar seus empréstimos por conto de imprevistos  ou problemas financeiros estarem
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

    <ul>
        <li> Parcelas entre 15 e 190 dias em atraso</li>
        <li>Já ter feito o pagamento de alguma parcela anteriormente</li>
        <li>Nunca ter pagado com desconto antes</li>
        <li>Valor mínimo devido de 400 reais</li>
    </ul>
</div>

<div className="info-card">
    <p className="info-title">
        Como posso ver os descontos disponíveis?
    </p>

    <p> Consulte ofertas exclusivas feitas especialmente para você no <Link to='/renegociar'>hpSystem</Link></p>
</div>
        </div>
        <Footer/>
        </>
   
  
   )
}

export default About