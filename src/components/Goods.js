import React from 'react'

import '../styles/Goods.css'
import Refri from '../images/heladera.png'
import Stove from '../images/cocina.png'
import Campana from '../images/campana.png'
import Wash from '../images/lavadora.png'
import Freezer from '../images/freezer.png'

function Goods() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Línea blanca</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='refrigerator' src={ Refri } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='stove' src={ Stove } alt="Cocina"/>
                </div>
                <div className='goods-image'>
                    <img className='campana' src={ Campana } alt="Campana"/>
                </div>
                <div className='goods-image'>
                    <img className='wash' src={ Wash } alt="Lavadora"/>
                </div>
                <div className='goods-image'>
                    <img className='freezer' src={ Freezer } alt="Freezer"/>
                </div>
            </div>
        </div>
    )
}

export default Goods
