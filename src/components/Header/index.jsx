import React from "react"
import './styles.css'
import Hpsys from './hpsys.svg'
import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <>
        <header>
<img id="logo" src={Hpsys} alt="hpsys-logo" />
            <nav><Link to='/about'><a href="#">Saber mais</a></Link></nav>
        </header>
        </>
    )
}

export default Header