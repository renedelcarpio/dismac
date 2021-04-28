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
                    <li className='warranty-item'><i className="fas fa-shield-alt"></i>Compra Segura</li>
                    <li className='warranty-item'><i className="fas fa-exchange-alt"></i>Cambios y Devoluciones</li>
                    <li className='warranty-item'><i className="fas fa-hand-holding-usd"></i>Garantía de Precios Bajos</li>
                    <li className='warranty-item'><i className="fas fa-box"></i>Garantía de Producto</li>
                    <li className='warranty-item'><i className="fas fa-tools"></i>Servicio Técnico</li>
                </ul>
            </div>
        </div>
    )
}

export default Warranty
