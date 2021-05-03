import React from 'react'

import '../styles/Header.css'
import Logo from '../images/dismac.png'

class Header extends React.Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <div className='main__header-container'>
                <div className='image-container'>
                    <img className='dismac-logo' src={Logo} alt="Logo de Dismac"/>
                </div>
                <div className={ this.state.clicked ? 'list-main-container active' : 'list-main-container'}>
                    <ul className='list-container'>
                        <li className='list-item'>Servicios</li>
                        <li className='list-item'>Minicuotas</li>
                        <li className='list-item'>Sucursales</li>
                        <li className='list-item'>Empresa</li>
                    </ul>
                </div>
                <div className='register-container'>
                    <button className='sign-in button-content'>Iniciar sesión</button>
                    <button className='register button-content'>Regístrate</button>
                    <i className="fas fa-cart-plus"></i>
                </div>
                <div className='burger-menu' onClick={ this.handleClick }>
                    <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        )
    }
}

export default Header
