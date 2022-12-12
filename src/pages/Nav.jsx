import React from 'react'
import "./Nav.scss";
import {  Link } from "react-router-dom";
import logobest from '../../src/assets/gymshark.jpg'
import usuario from '../../src/assets/usuario.png'
import cesta from '../../src/assets/cesta.png'
import buscar from '../../src/assets/buscar.png'


const Nav = () => {
  return (
<>
<div className='nav-1'>
    <div className='nav-top'>
            <div className='nav-logo'>
                
                <Link to="/">
                    <div>
                    <img className='logo-nav-img' src={logobest}/>
                    </div>
                </Link>
            </div>

            <div className='nav-busqueda'>
                <input type="search" />
                <img className='logo-png-nav' src={buscar}/>
            </div>

        <div className='nav-cuentas'>
                <Link to="/cuenta">
                        <div className='nav-cuentas-logo'>
                        <img className='logo-png-nav' src={usuario}/>
                        <p>Cuenta</p>
                        </div>
                </Link>
                
                
                <Link to="/cesta">
                        <div className='nav-cuentas-logo'>
                        <img className='logo-png-nav' src={cesta}/> 
                        <p>Cesta</p>
                        </div>
                </Link>
         </div>
               

    </div>
   <ul className='nav-bottom-ul'>
            
            <li>
            <Link to="/nutricion">Nutricion</Link>
            </li>
            <li>
            <Link to="/ropa">Ropa</Link>
            </li>
            <li>
            <Link to="/snacks">Snacks</Link>
            </li>
            <li>
            <Link to="/vitaminas">Vitaminas</Link>
            </li>
            <li>
            <Link to="/vegan">Vegan</Link>
            </li>
            <li>
            <Link to="/pro">Pro</Link>
            </li>
            <li>
            <Link to="/gaming">Gaming</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
            <li>
            <Link to="/objetivos">Objetivos Fitness</Link>
            </li>
        </ul>

        <ul className='nav-bottom-ul2'>
        <li>
            <Link to="/enviogratis"><p>Envio gratis a los 55$</p></Link>
            </li>
            <li>
            <Link to="/ofertastelegram">
                <p>Ofertas exclusivas en Telegram</p>
                </Link>
            </li>
            <li>
            <Link to="/referido">
                <p>10$ Por cada amigo referido</p>
                </Link>
            </li> 
        </ul>
</div>
<div className='nav-descuento'>
   
        <div className='info'>
    <Link to="/sincod">
            <h2>50% de Descuento en mas de 20 productos | Sin Código</h2>
     </Link>

     <Link to="/concod">
            <h2>30% de Descuento en los mas vendidos | Código:34FFT</h2>
     </Link>
    </div>
</div>
</>
  )
}

export default Nav

