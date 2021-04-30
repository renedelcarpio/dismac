import React from 'react'

import '../styles/Info.css'

function Info() {
    return (
        <div className='warranty-container'>
            <div className='title-container'>
                <h1 className='warranty-title'>Más Información</h1>
            </div>
            <div className='list-container'>
                <ul className='list'>
                    <li className='warranty-item'><i className="fas fa-truck info-icon"></i>Entrega a Domicilio</li>
                    <li className='warranty-item'><i className="fas fa-store info-icon"></i>Retiro en Tienda</li>
                    <li className='warranty-item'><i className="fas fa-map-marked-alt info-icon"></i>Nuestras Tiendas</li>
                    <li className='warranty-item'><i className="fas fa-cash-register info-icon"></i>Método de Pago</li>
                </ul>
            </div>
        </div>
    )
}

export default Info
