import './styles.css'
import{ RiSmartphoneFill} from 'react-icons/ri'
import{ MdEmail} from 'react-icons/md'
import {ImLinkedin} from 'react-icons/im'
const Footer =()=>{
    return(
        <>
        <footer>

<h4>Dúvidas?</h4>
<div className='contacts'>
<a href="#">
   <RiSmartphoneFill/>  <p>(41) 99851-8198</p>
</a>
<a href="#">
    <MdEmail/> <p>lealhenrique58@gmail.com</p>
</a>
<a href="#">
    <ImLinkedin /> <p>Henrique Pontes</p>
</a>

</div>
        </footer>
        </>
    )
}

export default Footer