import React from 'react'

import '../styles/Warranty.css'

function Warranty() {
    return (
        <div className='warranty-container'>
            <div className='title-container'>
                <h1 className='warranty-title'>Nuestra Garantía</h1>
            </div>
            <div className='list-container'>
                <ul className='list'>
                    <li className='warranty-item'><i className="fas fa-shield-alt warranty-icon"></i>Compra Segura</li>
                    <li className='warranty-item'><i className="fas fa-exchange-alt warranty-icon"></i>Cambios y Devoluciones</li>
                    <li className='warranty-item'><i className="fas fa-hand-holding-usd warranty-icon"></i>Garantía de Precios Bajos</li>
                    <li className='warranty-item'><i className="fas fa-box warranty-icon"></i>Garantía de Producto</li>
                    <li className='warranty-item'><i className="fas fa-tools warranty-icon"></i>Servicio Técnico</li>
                </ul>
            </div>
        </div>
    )
}

export default Warranty
