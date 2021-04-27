import React from 'react'

import '../styles/Header.css'
import Logo from '../images/dismac.png'

function Header() {
    return (
        <div className='main__header-container'>
            <div className='image-container'>
                <img className='dismac-logo' src={Logo} alt="Logo de Dismac"/>
            </div>
            <div className='list-main-container'>
                <ul className='list-container'>
                    <li className='list-item'>Servicios</li>
                    <li className='list-item'>Minicuotas</li>
                    <li className='list-item'>Sucursales</li>
                    <li className='list-item'>Empresa</li>
                </ul>
            </div>
            <div className='register-container'>
                <button className='sign-in'>Iniciar sesión</button>
                <button className='register'>Regístrate</button>
                <i className="fas fa-cart-plus"></i>
            </div>

        </div>
    )
}

export default Header
