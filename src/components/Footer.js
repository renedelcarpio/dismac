import React from 'react'

import '../styles/Footer.css'
import Logo from '../images/dismac.png'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='social-media-container'>
                <div className='logo'>
                    <img className='dismac-logo' src={ Logo } alt=""/>
                </div>
                <div className='social-media'>
                    <i className="fab fa-facebook-square social"></i>
                    <i className="fab fa-instagram-square social"></i>
                    <i className="fab fa-youtube-square social"></i>
                </div>
            </div>
            <div className='information'>
                <p>© Dismac 2021, TODOS LOS DERECHOS RESERVADOS</p>
                <h3>ATENCIÓN AL CLIENTE</h3>
                <p><i className="fas fa-phone-alt contact"></i>800 10 2000</p>
                <p><i className="fab fa-whatsapp contact"></i>75010500</p>
                <p><i className="far fa-envelope contact"></i>atencionalcliente@dismac.com.bo</p>
            </div>
        </div>
    )
}

export default Footer
